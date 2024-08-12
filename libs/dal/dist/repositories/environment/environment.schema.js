"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@novu/shared");
const schema_default_options_1 = require("../schema-default.options");
const environmentSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
    identifier: {
        type: mongoose_2.Schema.Types.String,
        unique: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    apiKeys: [
        {
            key: {
                type: mongoose_2.Schema.Types.String,
                unique: true,
            },
            hash: mongoose_2.Schema.Types.String,
            _userId: {
                type: mongoose_2.Schema.Types.ObjectId,
                ref: 'User',
            },
        },
    ],
    apiRateLimits: {
        [shared_1.ApiRateLimitCategoryEnum.TRIGGER]: mongoose_2.Schema.Types.Number,
        [shared_1.ApiRateLimitCategoryEnum.CONFIGURATION]: mongoose_2.Schema.Types.Number,
        [shared_1.ApiRateLimitCategoryEnum.GLOBAL]: mongoose_2.Schema.Types.Number,
    },
    widget: {
        notificationCenterEncryption: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
    },
    dns: {
        mxRecordConfigured: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        inboundParseDomain: {
            type: mongoose_2.Schema.Types.String,
        },
    },
    echo: {
        url: mongoose_2.Schema.Types.String,
    },
    bridge: {
        url: mongoose_2.Schema.Types.String,
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
}, schema_default_options_1.schemaOptions);
environmentSchema.index({
    _organizationId: 1,
});
exports.Environment = mongoose_1.default.models.Environment ||
    mongoose_1.default.model('Environment', environmentSchema);
