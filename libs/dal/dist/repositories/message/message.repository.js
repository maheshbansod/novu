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
exports.MessageRepository = void 0;
const mongoose_1 = require("mongoose");
const shared_1 = require("@novu/shared");
const base_repository_1 = require("../base-repository");
const message_entity_1 = require("./message.entity");
const message_schema_1 = require("./message.schema");
const feed_1 = require("../feed");
const shared_2 = require("../../shared");
const getEntries = (obj, prefix = '') => Object.entries(obj).flatMap(([key, value]) => Object(value) === value ? getEntries(value, `${prefix}${key}.`) : [[`${prefix}${key}`, value]]);
const getFlatObject = (obj) => {
    return Object.fromEntries(getEntries(obj));
};
class MessageRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(message_schema_1.Message, message_entity_1.MessageEntity);
        this.feedRepository = new feed_1.FeedRepository();
        this.message = message_schema_1.Message;
    }
    getFilterQueryForMessage(environmentId, subscriberId, channel, query = {}) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let requestQuery = {
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                channel,
            };
            if (query.feedId === null) {
                requestQuery._feedId = { $eq: null };
            }
            if (query.feedId) {
                const feeds = yield this.feedRepository.find({
                    _environmentId: environmentId,
                    identifier: {
                        $in: query.feedId,
                    },
                }, '_id');
                requestQuery._feedId = {
                    $in: feeds.map((feed) => feed._id),
                };
            }
            if (query.seen != null) {
                requestQuery.seen = query.seen;
            }
            else {
                requestQuery.seen = { $in: [true, false] };
            }
            if (query.read != null) {
                requestQuery.read = query.read;
            }
            else {
                requestQuery.read = { $in: [true, false] };
            }
            if (query.tags && ((_a = query.tags) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                requestQuery.tags = { $in: query.tags };
            }
            if (typeof query.archived === 'boolean') {
                if (!query.archived) {
                    requestQuery.$or = [{ archived: { $exists: false } }, { archived: false }];
                }
                else {
                    requestQuery.archived = true;
                }
            }
            else {
                requestQuery.$or = [{ archived: { $exists: false } }, { archived: { $in: [true, false] } }];
            }
            if (query.payload) {
                requestQuery = Object.assign(Object.assign({}, requestQuery), getFlatObject({ payload: query.payload }));
            }
            return requestQuery;
        });
    }
    findBySubscriberChannel(environmentId, subscriberId, channel, query = {}, options = { limit: 10 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = yield this.getFilterQueryForMessage(environmentId, subscriberId, channel, query);
            const messages = yield this.MongooseModel.find(requestQuery, '', {
                limit: options.limit,
                skip: options.skip,
                sort: '-createdAt',
            })
                .read('secondaryPreferred')
                .populate('template', '_id tags')
                .populate('subscriber', '_id firstName lastName avatar subscriberId')
                .populate('actorSubscriber', '_id firstName lastName avatar subscriberId');
            return this.mapEntities(messages);
        });
    }
    paginate({ environmentId, channel, subscriberId, tags, read, archived, }, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                channel,
            };
            if (tags && (tags === null || tags === void 0 ? void 0 : tags.length) > 0) {
                query.tags = { $in: tags };
            }
            if (typeof read === 'boolean') {
                query.read = read;
            }
            else {
                query.read = { $in: [true, false] };
            }
            if (typeof archived === 'boolean') {
                if (!archived) {
                    query.$or = [{ archived: { $exists: false } }, { archived: false }];
                }
                else {
                    query.archived = true;
                }
            }
            else {
                query.$or = [{ archived: { $exists: false } }, { archived: { $in: [true, false] } }];
            }
            return yield this.cursorPagination({
                query,
                limit: options.limit,
                offset: options.offset,
                after: options.after,
                sort: { createdAt: -1, _id: -1 },
                paginateField: 'createdAt',
                enhanceQuery: (queryBuilder) => queryBuilder
                    .read('secondaryPreferred')
                    .populate('subscriber', '_id firstName lastName avatar subscriberId')
                    .populate('actorSubscriber', '_id firstName lastName avatar subscriberId'),
            });
        });
    }
    getCount(environmentId, subscriberId, channel, query = {}, options = { limit: 100, skip: 0 }) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = yield this.getFilterQueryForMessage(environmentId, subscriberId, channel, {
                feedId: query.feedId,
                seen: query.seen,
                tags: query.tags,
                read: query.read,
                archived: query.archived,
                payload: query.payload,
            });
            return this.MongooseModel.countDocuments(requestQuery, options).read('secondaryPreferred');
        });
    }
    getReadSeenUpdateQuery(subscriberId, environmentId, markAs) {
        const updateQuery = {
            _subscriberId: subscriberId,
            _environmentId: environmentId,
        };
        switch (markAs) {
            case shared_1.MessagesStatusEnum.READ:
                return Object.assign(Object.assign({}, updateQuery), { read: false });
            case shared_1.MessagesStatusEnum.UNREAD:
                return Object.assign(Object.assign({}, updateQuery), { read: true });
            case shared_1.MessagesStatusEnum.SEEN:
                return Object.assign(Object.assign({}, updateQuery), { seen: false });
            case shared_1.MessagesStatusEnum.UNSEEN:
                return Object.assign(Object.assign({}, updateQuery), { seen: true });
            default:
                return updateQuery;
        }
    }
    getReadSeenUpdatePayload(markAs) {
        const now = new Date();
        switch (markAs) {
            case shared_1.MessagesStatusEnum.READ:
                return {
                    read: true,
                    lastReadDate: now,
                    seen: true,
                    lastSeenDate: now,
                };
            case shared_1.MessagesStatusEnum.UNREAD:
                return {
                    read: false,
                    lastReadDate: now,
                    seen: true,
                    lastSeenDate: now,
                };
            case shared_1.MessagesStatusEnum.SEEN:
                return {
                    seen: true,
                    lastSeenDate: now,
                };
            case shared_1.MessagesStatusEnum.UNSEEN:
                return {
                    seen: false,
                    lastSeenDate: now,
                };
            default:
                return {};
        }
    }
    markAllMessagesAs({ subscriberId, environmentId, markAs, channel, feedIdentifiers, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let feedQuery;
            if (feedIdentifiers) {
                const feeds = yield this.feedRepository.find({
                    _environmentId: environmentId,
                    identifier: {
                        $in: feedIdentifiers,
                    },
                }, '_id');
                feedQuery = {
                    $in: feeds.map((feed) => feed._id),
                };
            }
            const updateQuery = this.getReadSeenUpdateQuery(subscriberId, environmentId, markAs);
            if (feedQuery != null) {
                updateQuery._feedId = feedQuery;
            }
            if (channel != null) {
                updateQuery.channel = channel;
            }
            const updatePayload = this.getReadSeenUpdatePayload(markAs);
            return yield this.update(updateQuery, {
                $set: updatePayload,
            });
        });
    }
    updateFeedByMessageTemplateId(environmentId, messageId, feedId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({ _environmentId: environmentId, _messageTemplateId: messageId }, {
                $set: {
                    _feedId: feedId,
                },
            });
        });
    }
    updateMessageStatus(environmentId, id, status, providerPayload = {}, errorId, errorText) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update({
                _environmentId: environmentId,
                _id: id,
            }, {
                $set: {
                    status,
                    errorId,
                    errorText,
                    providerPayload,
                },
            });
        });
    }
    changeMessagesStatus({ environmentId, subscriberId, messageIds, markAs, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatePayload = this.getReadSeenUpdatePayload(markAs);
            yield this.update({
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                _id: {
                    $in: messageIds.map((id) => {
                        return new mongoose_1.Types.ObjectId(id);
                    }),
                },
            }, {
                $set: updatePayload,
            });
        });
    }
    changeStatus(environmentId, subscriberId, messageIds, mark) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {};
            if (mark.seen != null) {
                requestQuery.seen = mark.seen;
                requestQuery.lastSeenDate = new Date();
            }
            if (mark.read != null) {
                requestQuery.read = mark.read;
                requestQuery.lastReadDate = new Date();
            }
            yield this.update({
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                _id: {
                    $in: messageIds.map((id) => {
                        return new mongoose_1.Types.ObjectId(id);
                    }),
                },
            }, {
                $set: requestQuery,
            });
        });
    }
    updateMessagesStatusByIds({ environmentId, subscriberId, ids, seen, read, archived, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = {
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                _id: {
                    $in: ids.map((id) => {
                        return new mongoose_1.Types.ObjectId(id);
                    }),
                },
            };
            yield this.updateMessagesStatus({
                query,
                seen,
                read,
                archived,
            });
        });
    }
    updateMessagesFromToStatus({ environmentId, subscriberId, from, to, }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const isFromSeen = from.seen !== undefined;
            const isFromRead = from.read !== undefined;
            const isFromArchived = from.archived !== undefined;
            const query = Object.assign({ _environmentId: environmentId, _subscriberId: subscriberId }, (from.tags && ((_a = from.tags) === null || _a === void 0 ? void 0 : _a.length) > 0 && { tags: { $in: from.tags } }));
            if (isFromArchived) {
                if (!from.archived) {
                    query.$or = [{ archived: { $exists: false } }, { archived: false }];
                }
                else {
                    query.archived = true;
                }
            }
            else if (isFromRead) {
                query.read = from.read;
            }
            else if (isFromSeen) {
                query.seen = from.seen;
            }
            yield this.updateMessagesStatus(Object.assign({ query }, to));
        });
    }
    updateMessagesStatus({ query, seen, read, archived, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUpdatingSeen = seen !== undefined;
            const isUpdatingRead = read !== undefined;
            const isUpdatingArchived = archived !== undefined;
            let updatePayload = {};
            if (isUpdatingArchived) {
                updatePayload = {
                    seen: true,
                    lastSeenDate: new Date(),
                    read: true,
                    lastReadDate: new Date(),
                    archived,
                    archivedAt: archived ? new Date() : null,
                };
            }
            else if (isUpdatingRead) {
                updatePayload = {
                    seen: true,
                    lastSeenDate: new Date(),
                    read,
                    lastReadDate: read ? new Date() : null,
                    archived: !read ? false : undefined,
                    archivedAt: !read ? null : undefined,
                };
            }
            else if (isUpdatingSeen) {
                updatePayload = {
                    seen,
                    lastSeenDate: seen ? new Date() : null,
                    read: !seen ? false : undefined,
                    lastReadDate: !seen ? null : undefined,
                    archived: !seen ? false : undefined,
                    archivedAt: !seen ? null : undefined,
                };
            }
            yield this.update(query, {
                $set: updatePayload,
            });
        });
    }
    updateActionStatus({ environmentId, subscriberId, id, actionType, actionStatus, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.findOne({
                _id: id,
                _environmentId: environmentId,
                _subscriberId: subscriberId,
            });
            if (!message) {
                throw new shared_2.DalException(`Could not find a message with id ${id}`);
            }
            const isUpdatingPrimaryCta = actionType === shared_1.ButtonTypeEnum.PRIMARY;
            const isUpdatingSecondaryCta = actionType === shared_1.ButtonTypeEnum.SECONDARY;
            const updatePayload = !message.read
                ? {
                    seen: true,
                    lastSeenDate: new Date(),
                    read: true,
                    lastReadDate: new Date(),
                }
                : {};
            if (isUpdatingPrimaryCta) {
                updatePayload['cta.action.result.type'] = shared_1.ButtonTypeEnum.PRIMARY;
                updatePayload['cta.action.status'] = actionStatus;
            }
            if (isUpdatingSecondaryCta) {
                updatePayload['cta.action.result.type'] = shared_1.ButtonTypeEnum.SECONDARY;
                updatePayload['cta.action.status'] = actionStatus;
            }
            yield this.update({
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                _id: id,
            }, {
                $set: updatePayload,
            });
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = yield this.findOne({
                _id: query._id,
                _environmentId: query._environmentId,
            });
            if (!message) {
                throw new shared_2.DalException(`Could not find a message with id ${query._id}`);
            }
            return yield this.message.delete({ _id: message._id, _environmentId: message._environmentId });
        });
    }
    deleteMany(query) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.message.delete(Object.assign(Object.assign({}, query), { deleted: false }));
            }
            catch (e) {
                throw new shared_2.DalException(e);
            }
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.message.findDeleted(query);
            return this.mapEntity(res);
        });
    }
    findMessageById(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.MongooseModel.findOne({ _id: query._id, _environmentId: query._environmentId })
                .populate('subscriber')
                .populate({
                path: 'actorSubscriber',
                match: {
                    'actor.type': shared_1.ActorTypeEnum.USER,
                    _actorId: { $exists: true },
                },
                select: '_id firstName lastName avatar subscriberId',
            });
            return this.mapEntity(res);
        });
    }
    findMessagesByTransactionId(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.MongooseModel.find({
                transactionId: {
                    $in: query.transactionId,
                },
                _environmentId: query._environmentId,
            })
                .populate('subscriber')
                .populate({
                path: 'actorSubscriber',
                match: {
                    'actor.type': shared_1.ActorTypeEnum.USER,
                    _actorId: { $exists: true },
                },
                select: '_id firstName lastName avatar subscriberId',
            });
            return this.mapEntities(res);
        });
    }
    getMessages(query, select = '', options) {
        return __awaiter(this, void 0, void 0, function* () {
            const filterQuery = Object.assign({}, query);
            if (query.transactionId) {
                filterQuery.transactionId = { $in: query.transactionId };
            }
            const data = yield this.MongooseModel.find(query, select, {
                limit: options === null || options === void 0 ? void 0 : options.limit,
                skip: options === null || options === void 0 ? void 0 : options.skip,
            })
                .read('secondaryPreferred')
                .populate('subscriber', '_id firstName lastName avatar subscriberId')
                .populate('actorSubscriber', '_id firstName lastName avatar subscriberId');
            return this.mapEntities(data);
        });
    }
}
exports.MessageRepository = MessageRepository;
