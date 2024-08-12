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
exports.NotificationRepository = void 0;
const mongoose_1 = require("mongoose");
const shared_1 = require("@novu/shared");
const date_fns_1 = require("date-fns");
const base_repository_1 = require("../base-repository");
const notification_entity_1 = require("./notification.entity");
const notification_schema_1 = require("./notification.schema");
class NotificationRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(notification_schema_1.Notification, notification_entity_1.NotificationEntity);
    }
    findBySubscriberId(environmentId, subscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId: environmentId,
                _subscriberId: subscriberId,
            });
        });
    }
    getFeed(environmentId, query = {}, skip = 0, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: environmentId,
            };
            if (query.transactionId) {
                requestQuery.transactionId = query.transactionId;
            }
            if (query === null || query === void 0 ? void 0 : query.templates) {
                requestQuery._templateId = {
                    $in: query.templates,
                };
            }
            if (query.subscriberIds && query.subscriberIds.length > 0) {
                requestQuery._subscriberId = {
                    $in: query.subscriberIds,
                };
            }
            if (query === null || query === void 0 ? void 0 : query.channels) {
                requestQuery.channels = {
                    $in: query.channels,
                };
            }
            const response = yield this.populateFeed(this.MongooseModel.find(requestQuery), environmentId)
                .read('secondaryPreferred')
                .skip(skip)
                .limit(limit)
                .sort('-createdAt');
            return {
                data: this.mapEntities(response),
            };
        });
    }
    getFeedItem(notificationId, _environmentId, _organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _id: notificationId,
                _environmentId,
                _organizationId,
            };
            return this.mapEntity(yield this.populateFeed(this.MongooseModel.findOne(requestQuery), _environmentId));
        });
    }
    populateFeed(query, environmentId) {
        return query
            .populate({
            options: {
                readPreference: 'secondaryPreferred',
            },
            path: 'subscriber',
            select: 'firstName _id lastName email phone subscriberId',
        })
            .populate({
            options: {
                readPreference: 'secondaryPreferred',
            },
            path: 'template',
            select: '_id name triggers',
        })
            .populate({
            options: {
                readPreference: 'secondaryPreferred',
                sort: { createdAt: 1 },
            },
            path: 'jobs',
            match: {
                _environmentId: new mongoose_1.Types.ObjectId(environmentId),
                type: {
                    $nin: [shared_1.StepTypeEnum.TRIGGER],
                },
            },
            select: 'createdAt digest payload overrides to tenant actorId providerId step status type updatedAt',
            populate: [
                {
                    path: 'executionDetails',
                    select: 'createdAt detail isRetry isTest providerId raw source status updatedAt webhookStatus',
                    options: {
                        sort: { createdAt: 1 },
                    },
                },
                {
                    path: 'step',
                    select: '_parentId _templateId active filters template',
                },
            ],
        });
    }
    getActivityGraphStats(date, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.aggregate([
                {
                    $match: {
                        createdAt: { $gte: date },
                        _environmentId: new mongoose_1.Types.ObjectId(environmentId),
                    },
                },
                { $unwind: '$channels' },
                {
                    $group: {
                        _id: {
                            $dateToString: { format: '%Y-%m-%d', date: '$createdAt' },
                        },
                        count: {
                            $sum: 1,
                        },
                        templates: { $addToSet: '$_templateId' },
                        channels: { $addToSet: '$channels' },
                    },
                },
                { $sort: { createdAt: -1 } },
            ], {
                readPreference: 'secondaryPreferred',
            });
        });
    }
    getStats(environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const now = Date.now();
            const monthBefore = (0, date_fns_1.subMonths)(now, 1);
            const weekBefore = (0, date_fns_1.subWeeks)(now, 1);
            const result = yield this.aggregate([
                {
                    $match: {
                        _environmentId: this.convertStringToObjectId(environmentId),
                        createdAt: {
                            $gte: monthBefore,
                        },
                    },
                },
                {
                    $group: {
                        _id: null,
                        weekly: { $sum: { $cond: [{ $gte: ['$createdAt', weekBefore] }, 1, 0] } },
                        monthly: { $sum: 1 },
                    },
                },
            ], {
                readPreference: 'secondaryPreferred',
            });
            const stats = result[0] || {};
            return {
                weekly: stats.weekly || 0,
                monthly: stats.monthly || 0,
            };
        });
    }
}
exports.NotificationRepository = NotificationRepository;
