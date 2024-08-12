"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPreferenceRepository = void 0;
const base_repository_1 = require("../base-repository");
const subscription_preference_entity_1 = require("./subscription-preference.entity");
const subscription_preference_schema_1 = require("./subscription-preference.schema");
class SubscriptionPreferenceRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(subscription_preference_schema_1.SubscriptionPreference, subscription_preference_entity_1.SubscriptionPreferenceEntity);
    }
}
exports.SubscriptionPreferenceRepository = SubscriptionPreferenceRepository;
