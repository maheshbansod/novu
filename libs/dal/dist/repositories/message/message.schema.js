"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const shared_1 = require("@novu/shared");
const schema_default_options_1 = require("../schema-default.options");
const shared_2 = require("../../shared");
const messageSchema = new mongoose_2.Schema({
    _templateId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _messageTemplateId: {
        type: mongoose_2.Schema.Types.ObjectId,
    },
    _notificationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Notification',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    _jobId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Job',
    },
    templateIdentifier: mongoose_2.Schema.Types.String,
    email: mongoose_2.Schema.Types.String,
    subject: mongoose_2.Schema.Types.String,
    cta: {
        type: {
            type: mongoose_2.Schema.Types.String,
        },
        data: mongoose_2.Schema.Types.Mixed,
        action: {
            status: mongoose_2.Schema.Types.String,
            buttons: [
                {
                    type: {
                        type: mongoose_2.Schema.Types.String,
                    },
                    content: mongoose_2.Schema.Types.String,
                    resultContent: mongoose_2.Schema.Types.String,
                    url: mongoose_2.Schema.Types.String,
                },
            ],
            result: {
                payload: mongoose_2.Schema.Types.Mixed,
                type: {
                    type: mongoose_2.Schema.Types.String,
                },
            },
        },
    },
    _feedId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Feed',
    },
    channel: mongoose_2.Schema.Types.String,
    content: mongoose_2.Schema.Types.Mixed,
    phone: mongoose_2.Schema.Types.String,
    directWebhookUrl: mongoose_2.Schema.Types.String,
    providerId: mongoose_2.Schema.Types.String,
    deviceTokens: [mongoose_2.Schema.Types.Array],
    title: mongoose_2.Schema.Types.String,
    seen: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    read: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    archived: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    lastSeenDate: mongoose_2.Schema.Types.Date,
    lastReadDate: mongoose_2.Schema.Types.Date,
    archivedAt: mongoose_2.Schema.Types.Date,
    status: {
        type: mongoose_2.Schema.Types.String,
        default: 'sent',
    },
    errorId: mongoose_2.Schema.Types.String,
    errorText: mongoose_2.Schema.Types.String,
    providerResponse: mongoose_2.Schema.Types.Mixed,
    transactionId: {
        type: mongoose_2.Schema.Types.String,
    },
    identifier: mongoose_2.Schema.Types.String,
    payload: mongoose_2.Schema.Types.Mixed,
    overrides: mongoose_2.Schema.Types.Mixed,
    actor: {
        type: {
            type: mongoose_2.Schema.Types.String,
            enum: shared_1.ActorTypeEnum,
        },
        data: mongoose_2.Schema.Types.Mixed,
    },
    _actorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    expireAt: mongoose_2.Schema.Types.Date,
    tags: [mongoose_2.Schema.Types.String],
    avatar: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
messageSchema.index({ expireAt: 1 }, (0, shared_2.getTTLOptions)());
messageSchema.virtual('subscriber', {
    ref: 'Subscriber',
    localField: '_subscriberId',
    foreignField: '_id',
    justOne: true,
});
messageSchema.virtual('template', {
    ref: 'NotificationTemplate',
    localField: '_templateId',
    foreignField: '_id',
    justOne: true,
});
messageSchema.virtual('actorSubscriber', {
    ref: 'Subscriber',
    localField: '_actorId',
    foreignField: '_id',
    justOne: true,
});
messageSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
messageSchema.index({
    identifier: 1,
    _environmentId: 1,
});
messageSchema.index({
    _subscriberId: 1,
    _environmentId: 1,
    channel: 1,
    seen: 1,
    read: 1,
    createdAt: -1,
});
messageSchema.index({
    _messageTemplateId: 1,
    _environmentId: 1,
});
messageSchema.index({
    transactionId: 1,
    _subscriberId: 1,
    _environmentId: 1,
    providerId: 1,
});
messageSchema.index({
    _environmentId: 1,
    providerId: 1,
    createdAt: 1,
});
exports.Message = mongoose_1.default.models.Message ||
    mongoose_1.default.model('Message', messageSchema);
