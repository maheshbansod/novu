"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriberPreference = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const subscriber_preference_entity_1 = require("./subscriber-preference.entity");
const subscriberPreferenceSchema = new mongoose_2.Schema({
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    _templateId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    enabled: {
        type: mongoose_2.Schema.Types.Boolean,
        default: true,
    },
    channels: {
        email: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        sms: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        in_app: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        chat: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        push: {
            type: mongoose_2.Schema.Types.Boolean,
        },
    },
    level: {
        type: mongoose_2.Schema.Types.String,
        enum: subscriber_preference_entity_1.PreferenceLevelEnum,
    },
}, schema_default_options_1.schemaOptions);
subscriberPreferenceSchema.index({
    _subscriberId: 1,
    _templateId: 1,
});
subscriberPreferenceSchema.index({
    _subscriberId: 1,
    level: 1,
});
exports.SubscriberPreference = mongoose_1.default.models.SubscriberPreference ||
    mongoose_1.default.model('SubscriberPreference', subscriberPreferenceSchema);
