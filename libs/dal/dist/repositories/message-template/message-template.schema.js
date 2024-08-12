"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageTemplate = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@novu/shared");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const messageTemplateSchema = new mongoose_2.Schema({
    type: {
        type: mongoose_2.Schema.Types.String,
    },
    active: {
        type: mongoose_2.Schema.Types.Boolean,
        default: true,
    },
    name: mongoose_2.Schema.Types.String,
    stepId: mongoose_2.Schema.Types.String,
    subject: mongoose_2.Schema.Types.String,
    variables: [
        {
            name: mongoose_2.Schema.Types.String,
            type: {
                type: mongoose_2.Schema.Types.String,
            },
            required: {
                type: mongoose_2.Schema.Types.Boolean,
                default: false,
            },
            defaultValue: mongoose_2.Schema.Types.Mixed,
        },
    ],
    content: mongoose_2.Schema.Types.Mixed,
    contentType: mongoose_2.Schema.Types.String,
    title: mongoose_2.Schema.Types.String,
    cta: {
        type: {
            type: mongoose_2.Schema.Types.String,
        },
        data: mongoose_2.Schema.Types.Mixed,
        action: mongoose_2.Schema.Types.Mixed,
    },
    preheader: mongoose_2.Schema.Types.String,
    senderName: mongoose_2.Schema.Types.String,
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _creatorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
    },
    _feedId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Feed',
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    _layoutId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Layout',
        default: null,
    },
    actor: {
        type: {
            type: mongoose_2.Schema.Types.String,
            enum: shared_1.ActorTypeEnum,
        },
        data: mongoose_2.Schema.Types.Mixed,
    },
    inputs: { schema: mongoose_2.Schema.Types.Mixed },
    controls: { schema: mongoose_2.Schema.Types.Mixed },
    output: { schema: mongoose_2.Schema.Types.Mixed },
    code: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
messageTemplateSchema.index({
    _organizationId: 1,
    'triggers.identifier': 1,
});
messageTemplateSchema.index({
    _parentId: 1,
});
messageTemplateSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.MessageTemplate = mongoose_1.default.models.MessageTemplate ||
    mongoose_1.default.model('MessageTemplate', messageTemplateSchema);
