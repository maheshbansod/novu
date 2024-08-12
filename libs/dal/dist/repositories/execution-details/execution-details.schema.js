"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionDetails = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@novu/shared");
const schema_default_options_1 = require("../schema-default.options");
const shared_2 = require("../../shared");
const executionDetailsSchema = new mongoose_2.Schema({
    _jobId: {
        type: mongoose_2.Schema.Types.String,
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _notificationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Notification',
    },
    _notificationTemplateId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    _messageId: {
        type: mongoose_2.Schema.Types.String,
    },
    providerId: {
        type: mongoose_2.Schema.Types.String,
    },
    transactionId: {
        type: mongoose_2.Schema.Types.String,
    },
    channel: {
        type: mongoose_2.Schema.Types.String,
    },
    detail: {
        type: mongoose_2.Schema.Types.String,
    },
    source: {
        type: mongoose_2.Schema.Types.String,
        default: shared_1.ExecutionDetailsSourceEnum.CREDENTIALS,
    },
    status: {
        type: mongoose_2.Schema.Types.String,
        default: shared_1.ExecutionDetailsStatusEnum.PENDING,
    },
    isTest: {
        type: mongoose_2.Schema.Types.Boolean,
    },
    isRetry: {
        type: mongoose_2.Schema.Types.Boolean,
    },
    raw: {
        type: mongoose_2.Schema.Types.String,
    },
    webhookStatus: {
        type: mongoose_2.Schema.Types.String,
    },
    expireAt: mongoose_2.Schema.Types.Date,
}, schema_default_options_1.schemaOptions);
executionDetailsSchema.index({
    _jobId: 1,
});
executionDetailsSchema.index({
    _notificationId: 1,
});
executionDetailsSchema.index({
    _environmentId: 1,
});
executionDetailsSchema.index({ expireAt: 1 }, (0, shared_2.getTTLOptions)());
exports.ExecutionDetails = mongoose_1.default.models.ExecutionDetails ||
    mongoose_1.default.model('ExecutionDetails', executionDetailsSchema);
