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
exports.FeedRepository = void 0;
const base_repository_1 = require("../base-repository");
const feed_entity_1 = require("./feed.entity");
const feed_schema_1 = require("./feed.schema");
const shared_1 = require("../../shared");
const message_template_1 = require("../message-template");
class FeedRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(feed_schema_1.Feed, feed_entity_1.FeedEntity);
        this.messageTemplateRepository = new message_template_1.MessageTemplateRepository();
        this.feed = feed_schema_1.Feed;
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const feed = yield this.findOne({ _id: query._id, _environmentId: query._environmentId });
            if (!feed || !(feed === null || feed === void 0 ? void 0 : feed._id))
                throw new shared_1.DalException(`Could not find feed with id ${query._id}`);
            const relatedMessages = yield this.messageTemplateRepository.getMessageTemplatesByFeed(feed._environmentId, feed._id);
            if (relatedMessages.length)
                throw new shared_1.DalException(`Can not delete feed that has existing message`);
            return yield this.feed.delete({ _id: feed._id, _environmentId: feed._environmentId });
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.feed.findDeleted(query);
            return this.mapEntity(res);
        });
    }
}
exports.FeedRepository = FeedRepository;
