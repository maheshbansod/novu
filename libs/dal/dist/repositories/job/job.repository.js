"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobRepository = void 0;
const shared_1 = require("@novu/shared");
const base_repository_1 = require("../base-repository");
const job_entity_1 = require("./job.entity");
const job_schema_1 = require("./job.schema");
const shared_2 = require("../../shared");
const date_fns_1 = require("date-fns");
class JobRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(job_schema_1.Job, job_entity_1.JobEntity);
    }
    storeJobs(jobs) {
        return __awaiter(this, void 0, void 0, function* () {
            const stored = [];
            for (let index = 0; index < jobs.length; index++) {
                if (index > 0) {
                    jobs[index]._parentId = stored[index - 1]._id;
                }
                const created = new this.MongooseModel(Object.assign(Object.assign({}, jobs[index]), { createdAt: Date.now() }));
                stored.push(this.mapEntity(created));
            }
            yield this.insertMany(stored, true);
            return stored;
        });
    }
    updateStatus(environmentId, jobId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MongooseModel.updateOne({
                _environmentId: environmentId,
                _id: jobId,
            }, {
                $set: {
                    status,
                },
            });
        });
    }
    setError(organizationId, jobId, error) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this._model.updateOne({
                _organizationId: this.convertStringToObjectId(organizationId),
                _id: this.convertStringToObjectId(jobId),
            }, {
                $set: {
                    error,
                },
            });
            if (result.modifiedCount === 0) {
                throw new shared_2.DalException(`There was a problem when trying to set an error for the job ${jobId} in the organization ${organizationId}`);
            }
        });
    }
    findJobsToDigest(from, templateId, environmentId, subscriberId, digestKey, digestValue) {
        return __awaiter(this, void 0, void 0, function* () {
            const digests = yield this.find({
                updatedAt: {
                    $gte: from,
                },
                _templateId: templateId,
                $or: [
                    { status: job_entity_1.JobStatusEnum.COMPLETED, type: shared_1.StepTypeEnum.DIGEST },
                    { status: job_entity_1.JobStatusEnum.DELAYED, type: shared_1.StepTypeEnum.DELAY },
                ],
                _environmentId: environmentId,
                _subscriberId: subscriberId,
            });
            const transactionIds = digests.map((job) => job.transactionId);
            const result = yield this.find(Object.assign(Object.assign({ updatedAt: {
                    $gte: from,
                }, _templateId: templateId, status: job_entity_1.JobStatusEnum.COMPLETED, type: shared_1.StepTypeEnum.TRIGGER, _environmentId: environmentId, _subscriberId: subscriberId }, (digestKey && { [`payload.${digestKey}`]: digestValue })), { transactionId: {
                    $nin: transactionIds,
                } }));
            const transactionIdsTriggers = result.map((job) => job.transactionId);
            yield this.update({
                updatedAt: {
                    $gte: from,
                },
                _templateId: templateId,
                status: job_entity_1.JobStatusEnum.PENDING,
                type: shared_1.StepTypeEnum.DIGEST,
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                transactionId: {
                    $in: transactionIdsTriggers,
                },
            }, {
                $set: {
                    status: job_entity_1.JobStatusEnum.COMPLETED,
                },
            });
            return result;
        });
    }
    findOnePopulate({ query, select = '', selectTemplate = '', selectNotification = '', selectSubscriber = '', selectEnvironment = '', }) {
        return __awaiter(this, void 0, void 0, function* () {
            const job = this.MongooseModel.findOne(query, select)
                .populate('template', selectTemplate)
                .populate('notification', selectNotification)
                .populate('subscriber', selectSubscriber)
                .populate('environment', selectEnvironment)
                .lean()
                .exec();
            return job;
        });
    }
    shouldDelayDigestJobOrMerge(job, digestKey, digestValue, digestMeta) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const isBackoff = ((_a = job.digest) === null || _a === void 0 ? void 0 : _a.type) === shared_1.DigestTypeEnum.BACKOFF ||
                ((_b = job.digest) === null || _b === void 0 ? void 0 : _b.backoff) ||
                ((digestMeta === null || digestMeta === void 0 ? void 0 : digestMeta.backoff) && (digestMeta === null || digestMeta === void 0 ? void 0 : digestMeta.backoff));
            if (isBackoff) {
                const trigger = yield this.getTrigger(job, digestMeta, digestKey, digestValue);
                if (!trigger) {
                    return {
                        digestResult: shared_1.DigestCreationResultEnum.SKIPPED,
                    };
                }
                const lockedPriorityJob = (0, date_fns_1.isBefore)(new Date(job.createdAt), new Date(trigger.createdAt));
                if (lockedPriorityJob) {
                    return {
                        digestResult: shared_1.DigestCreationResultEnum.SKIPPED,
                    };
                }
            }
            const delayedDigestJob = yield this._model.findOne(Object.assign({ status: job_entity_1.JobStatusEnum.DELAYED, type: shared_1.StepTypeEnum.DIGEST, _templateId: job._templateId, _environmentId: this.convertStringToObjectId(job._environmentId), _subscriberId: this.convertStringToObjectId(job._subscriberId) }, (digestKey && { [`payload.${digestKey}`]: digestValue })), '_id _notificationId');
            if (!delayedDigestJob) {
                yield this._model.updateOne({
                    _environmentId: job._environmentId,
                    _templateId: job._templateId,
                    _subscriberId: job._subscriberId,
                    _id: job._id,
                }, {
                    $set: {
                        status: job_entity_1.JobStatusEnum.DELAYED,
                    },
                });
                return {
                    activeDigestId: job._id,
                    digestResult: shared_1.DigestCreationResultEnum.CREATED,
                };
            }
            return {
                activeDigestId: delayedDigestJob._id,
                activeNotificationId: (_c = delayedDigestJob._notificationId) === null || _c === void 0 ? void 0 : _c.toString(),
                digestResult: shared_1.DigestCreationResultEnum.MERGED,
            };
        });
    }
    getBackoffDate(metadata) {
        return (0, date_fns_1.sub)(new Date(), {
            [metadata === null || metadata === void 0 ? void 0 : metadata.backoffUnit]: metadata === null || metadata === void 0 ? void 0 : metadata.backoffAmount,
        });
    }
    getTrigger(job, metadata, digestKey, digestValue) {
        const query = Object.assign({ updatedAt: {
                $gte: this.getBackoffDate(metadata),
            }, _notificationId: {
                $ne: job._notificationId,
            }, _templateId: job._templateId, status: job_entity_1.JobStatusEnum.COMPLETED, type: shared_1.StepTypeEnum.TRIGGER, _environmentId: job._environmentId, _subscriberId: job._subscriberId }, (digestKey && { [`payload.${digestKey}`]: digestValue }));
        return this.findOne(query);
    }
    updateAllChildJobStatus(job, status, activeDigestId) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedJobs = [];
            let childJob = yield this.MongooseModel.findOneAndUpdate({
                _environmentId: job._environmentId,
                _parentId: job._id,
            }, {
                $set: {
                    status,
                    _mergedDigestId: activeDigestId,
                },
            });
            if (childJob) {
                updatedJobs.push(childJob);
            }
            while (childJob) {
                childJob = yield this.MongooseModel.findOneAndUpdate({
                    _environmentId: job._environmentId,
                    _parentId: childJob._id,
                }, {
                    $set: {
                        status,
                        _mergedDigestId: activeDigestId,
                    },
                });
                if (childJob) {
                    updatedJobs.push(childJob);
                }
            }
            return updatedJobs;
        });
    }
}
exports.JobRepository = JobRepository;
