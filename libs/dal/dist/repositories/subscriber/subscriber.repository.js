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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberRepository = void 0;
const subscriber_entity_1 = require("./subscriber.entity");
const subscriber_schema_1 = require("./subscriber.schema");
const base_repository_1 = require("../base-repository");
const shared_1 = require("../../shared");
class SubscriberRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(subscriber_schema_1.Subscriber, subscriber_entity_1.SubscriberEntity);
        this.subscriber = subscriber_schema_1.Subscriber;
    }
    findBySubscriberId(environmentId, subscriberId, secondaryRead = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({
                _environmentId: environmentId,
                subscriberId,
            }, undefined, { readPreference: secondaryRead ? 'secondaryPreferred' : 'primary' });
        });
    }
    bulkCreateSubscribers(subscribers, environmentId, organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const bulkWriteOps = subscribers.map((subscriber) => {
                const { subscriberId } = subscriber, rest = __rest(subscriber, ["subscriberId"]);
                return {
                    updateOne: {
                        filter: { subscriberId, _environmentId: environmentId, _organizationId: organizationId },
                        update: { $set: Object.assign(Object.assign({}, rest), { deleted: false }) },
                        upsert: true,
                    },
                };
            });
            let bulkResponse;
            try {
                bulkResponse = yield this.bulkWrite(bulkWriteOps);
            }
            catch (e) {
                if (!e.writeErrors) {
                    throw new shared_1.DalException(e.message);
                }
                bulkResponse = e.result;
            }
            const created = bulkResponse.getUpsertedIds();
            const writeErrors = bulkResponse.getWriteErrors();
            const indexes = [];
            const insertedSubscribers = created.map((inserted) => {
                var _a;
                indexes.push(inserted.index);
                return mapToSubscriberObject((_a = subscribers[inserted.index]) === null || _a === void 0 ? void 0 : _a.subscriberId);
            });
            let failed = [];
            if (writeErrors.length > 0) {
                failed = writeErrors.map((error) => {
                    var _a;
                    indexes.push(error.err.index);
                    return {
                        message: error.err.errmsg,
                        subscriberId: (_a = error.err.op) === null || _a === void 0 ? void 0 : _a.subscriberId,
                    };
                });
            }
            const updatedSubscribers = subscribers
                .filter((subId, index) => !indexes.includes(index))
                .map((subscriber) => {
                return mapToSubscriberObject(subscriber.subscriberId);
            });
            return {
                updated: updatedSubscribers,
                created: insertedSubscribers,
                failed,
            };
        });
    }
    searchByExternalSubscriberIds(externalSubscribersEntity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _environmentId, _organizationId, externalSubscriberIds } = externalSubscribersEntity;
            return this.find({
                _environmentId,
                _organizationId,
                subscriberId: {
                    $in: externalSubscriberIds,
                },
            });
        });
    }
    searchSubscribers(environmentId, subscriberIds = [], emails = [], search) {
        return __awaiter(this, void 0, void 0, function* () {
            const filters = [];
            if (emails === null || emails === void 0 ? void 0 : emails.length) {
                filters.push({
                    email: {
                        $in: emails,
                    },
                });
            }
            if (subscriberIds === null || subscriberIds === void 0 ? void 0 : subscriberIds.length) {
                filters.push({
                    subscriberId: {
                        $in: subscriberIds,
                    },
                });
            }
            if (search) {
                filters.push({
                    email: {
                        $regex: regExpEscape(search),
                        $options: 'i',
                    },
                }, {
                    subscriberId: { $eq: search },
                });
            }
            return yield this.find({
                _environmentId: environmentId,
                $or: filters,
            }, '_id');
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: query._environmentId,
                subscriberId: query.subscriberId,
            };
            const foundSubscriber = yield this.findOne(requestQuery);
            if (!foundSubscriber) {
                throw new shared_1.DalException(`Could not find subscriber ${query.subscriberId} to delete`);
            }
            return yield this.subscriber.delete(requestQuery);
        });
    }
    deleteMany(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: query._environmentId,
                subscriberId: query.subscriberId,
            };
            if (query._id) {
                requestQuery._id = query._id;
            }
            return yield this.subscriber.delete(requestQuery);
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: query._environmentId,
                subscriberId: query.subscriberId,
            };
            const res = yield this.subscriber.findDeleted(requestQuery);
            return this.mapEntity(res);
        });
    }
}
exports.SubscriberRepository = SubscriberRepository;
function mapToSubscriberObject(subscriberId) {
    return { subscriberId };
}
function regExpEscape(literalString) {
    return literalString.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, '\\$&');
}
