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
exports.SubscriberPreferenceRepository = void 0;
const base_repository_1 = require("../base-repository");
const subscriber_preference_entity_1 = require("./subscriber-preference.entity");
const subscriber_preference_schema_1 = require("./subscriber-preference.schema");
class SubscriberPreferenceRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(subscriber_preference_schema_1.SubscriberPreference, subscriber_preference_entity_1.SubscriberPreferenceEntity);
    }
    findSubscriberPreferences(environmentId, subscriberId, templatesIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId: environmentId,
                _subscriberId: subscriberId,
                _templateId: {
                    $in: templatesIds,
                },
            });
        });
    }
}
exports.SubscriberPreferenceRepository = SubscriberPreferenceRepository;
