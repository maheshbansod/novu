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
exports.TopicRepository = void 0;
const topic_entity_1 = require("./topic.entity");
const topic_schema_1 = require("./topic.schema");
const base_repository_1 = require("../base-repository");
const TOPIC_SUBSCRIBERS_COLLECTION = 'topicsubscribers';
const topicWithSubscribersProjection = {
    $project: {
        _id: 1,
        _environmentId: 1,
        _organizationId: 1,
        key: 1,
        name: 1,
        subscribers: '$topicSubscribers.externalSubscriberId',
    },
};
const lookup = {
    $lookup: {
        from: TOPIC_SUBSCRIBERS_COLLECTION,
        localField: '_id',
        foreignField: '_topicId',
        as: 'topicSubscribers',
    },
};
class TopicRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(topic_schema_1.Topic, topic_entity_1.TopicEntity);
    }
    createTopic(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { key, name, _environmentId, _organizationId } = entity;
            return yield this.create({
                _environmentId,
                key,
                name,
                _organizationId,
            });
        });
    }
    deleteTopic(key, environmentId, organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delete({
                key,
                _organizationId: organizationId,
                _environmentId: environmentId,
            });
        });
    }
    filterTopics(query, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedQuery = Object.assign({}, query);
            if (query._id) {
                parsedQuery._id = this.convertStringToObjectId(query._id);
            }
            parsedQuery._environmentId = this.convertStringToObjectId(query._environmentId);
            parsedQuery._organizationId = this.convertStringToObjectId(query._organizationId);
            const data = yield this.aggregate([
                {
                    $match: parsedQuery,
                },
                lookup,
                topicWithSubscribersProjection,
                {
                    $skip: pagination.skip,
                },
                {
                    $limit: pagination.limit,
                },
            ]);
            return data;
        });
    }
    findTopic(topicKey, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.aggregate([
                {
                    $match: { _environmentId: this.convertStringToObjectId(environmentId), key: topicKey },
                },
                lookup,
                topicWithSubscribersProjection,
                { $limit: 1 },
            ]);
            if (!result) {
                return null;
            }
            return result;
        });
    }
    findTopicByKey(key, organizationId, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({
                key,
                _organizationId: organizationId,
                _environmentId: environmentId,
            });
        });
    }
    renameTopic(_id, _environmentId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.update({
                _id,
                _environmentId,
            }, {
                name,
            });
            const [updatedTopic] = yield this.aggregate([
                {
                    $match: {
                        _id: this.convertStringToObjectId(_id),
                        _environmentId: this.convertStringToObjectId(_environmentId),
                    },
                },
                lookup,
                topicWithSubscribersProjection,
                {
                    $limit: 1,
                },
            ]);
            return updatedTopic;
        });
    }
}
exports.TopicRepository = TopicRepository;
