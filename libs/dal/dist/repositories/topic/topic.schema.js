"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topic = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const topicSchema = new mongoose_2.Schema({
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
    key: {
        type: mongoose_2.Schema.Types.String,
        required: true,
    },
    name: {
        type: mongoose_2.Schema.Types.String,
        required: true,
    },
}, schema_default_options_1.schemaOptions);
exports.Topic = mongoose_1.default.models.Topic || mongoose_1.default.model('Topic', topicSchema);
