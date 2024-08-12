"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const logSchema = new mongoose_2.Schema({
    transactionId: {
        type: mongoose_2.Schema.Types.String,
        index: true,
    },
    text: mongoose_2.Schema.Types.String,
    code: mongoose_2.Schema.Types.String,
    raw: mongoose_2.Schema.Types.Mixed,
    status: mongoose_2.Schema.Types.String,
    createdAt: {
        type: mongoose_2.Schema.Types.Date,
        default: Date.now,
        index: true,
    },
    _messageId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Message',
        index: true,
    },
    _notificationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Notification',
        index: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
        index: true,
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
        index: true,
    },
}, schema_default_options_1.schemaOptions);
logSchema.index({ _environmentId: 1, createdAt: -1 });
exports.Log = mongoose_1.default.models.Log || mongoose_1.default.model('Log', logSchema);
