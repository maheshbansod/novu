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
exports.MessageTemplateRepository = void 0;
const shared_1 = require("../../shared");
const base_repository_1 = require("../base-repository");
const message_template_entity_1 = require("./message-template.entity");
const message_template_schema_1 = require("./message-template.schema");
class MessageTemplateRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(message_template_schema_1.MessageTemplate, message_template_entity_1.MessageTemplateEntity);
        this.messageTemplate = message_template_schema_1.MessageTemplate;
    }
    getMessageTemplatesByFeed(environmentId, feedId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId: environmentId,
                _feedId: feedId,
            });
        });
    }
    getMessageTemplatesByLayout(_environmentId, _layoutId, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId,
                _layoutId,
            }, {}, pagination);
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const messageTemplate = yield this.findOne({
                _id: query._id,
                _environmentId: query._environmentId,
            });
            if (!messageTemplate) {
                throw new shared_1.DalException(`Could not find a message template with id ${query._id}`);
            }
            return yield this.messageTemplate.delete({
                _id: messageTemplate._id,
                _environmentId: messageTemplate._environmentId,
            });
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.messageTemplate.findDeleted(query);
            return this.mapEntity(res);
        });
    }
}
exports.MessageTemplateRepository = MessageTemplateRepository;
