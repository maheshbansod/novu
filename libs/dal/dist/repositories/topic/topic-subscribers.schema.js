"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicSubscribers = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const topicSubscribersSchema = new mongoose_2.Schema({
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
        required: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
        index: true,
        required: true,
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
        index: true,
        required: true,
    },
    _topicId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Topic',
        index: true,
        required: true,
    },
    topicKey: {
        type: mongoose_2.Schema.Types.String,
        index: true,
        required: true,
    },
    externalSubscriberId: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
exports.TopicSubscribers = mongoose_1.default.models.TopicSubscribers ||
    mongoose_1.default.model('TopicSubscribers', topicSubscribersSchema);
