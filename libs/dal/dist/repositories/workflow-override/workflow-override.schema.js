"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowOverride = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const workflowOverrideSchema = new mongoose_2.Schema({
    active: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _workflowId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    _tenantId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Tenant',
    },
    preferenceSettings: {
        email: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        sms: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        in_app: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        chat: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        push: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
    },
}, schema_default_options_1.schemaOptions);
workflowOverrideSchema.virtual('workflow', {
    ref: 'NotificationTemplate',
    localField: '_workflowId',
    foreignField: '_id',
    justOne: true,
});
workflowOverrideSchema.virtual('tenant', {
    ref: 'Tenant',
    localField: '_tenantId',
    foreignField: '_id',
    justOne: true,
});
workflowOverrideSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
workflowOverrideSchema.index({
    _tenantId: 1,
    _workflowId: 1,
    _environmentId: 1,
}, { unique: true });
exports.WorkflowOverride = mongoose_1.default.models.WorkflowOverride ||
    mongoose_1.default.model('WorkflowOverride', workflowOverrideSchema);
