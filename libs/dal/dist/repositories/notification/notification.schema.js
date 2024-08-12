"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const shared_1 = require("../../shared");
const notificationSchema = new mongoose_2.Schema({
    _templateId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    transactionId: {
        type: mongoose_2.Schema.Types.String,
    },
    channels: [
        {
            type: mongoose_2.Schema.Types.String,
        },
    ],
    _digestedNotificationId: {
        type: mongoose_2.Schema.Types.String,
    },
    to: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    payload: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    expireAt: mongoose_2.Schema.Types.Date,
    controls: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    tags: {
        type: [mongoose_2.Schema.Types.String],
    },
}, schema_default_options_1.schemaOptions);
notificationSchema.index({ expireAt: 1 }, (0, shared_1.getTTLOptions)());
notificationSchema.virtual('environment', {
    ref: 'Environment',
    localField: '_environmentId',
    foreignField: '_id',
    justOne: true,
});
notificationSchema.virtual('organization', {
    ref: 'Organization',
    localField: '_organizationId',
    foreignField: '_id',
    justOne: true,
});
notificationSchema.virtual('template', {
    ref: 'NotificationTemplate',
    localField: '_templateId',
    foreignField: '_id',
    justOne: true,
});
notificationSchema.virtual('subscriber', {
    ref: 'Subscriber',
    localField: '_subscriberId',
    foreignField: '_id',
    justOne: true,
});
notificationSchema.virtual('jobs', {
    ref: 'Job',
    localField: '_id',
    foreignField: '_notificationId',
});
notificationSchema.index({
    _subscriberId: 1,
    _environmentId: 1,
});
notificationSchema.index({
    transactionId: 1,
    _environmentId: 1,
    createdAt: -1,
});
notificationSchema.index({
    _environmentId: 1,
    createdAt: -1,
});
exports.Notification = mongoose_1.default.models.Notification ||
    mongoose_1.default.model('Notification', notificationSchema);
