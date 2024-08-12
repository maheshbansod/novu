"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const mongoose_1 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const layoutSchema = new mongoose_2.Schema({
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _creatorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Layout',
    },
    name: mongoose_2.Schema.Types.String,
    identifier: mongoose_2.Schema.Types.String,
    description: mongoose_2.Schema.Types.String,
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
    content: mongoose_2.Schema.Types.String,
    contentType: mongoose_2.Schema.Types.String,
    isDefault: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    channel: {
        type: mongoose_2.Schema.Types.String,
    },
}, schema_default_options_1.schemaOptions);
layoutSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.Layout = mongoose_1.default.models.Layout || mongoose_1.default.model('Layout', layoutSchema);
