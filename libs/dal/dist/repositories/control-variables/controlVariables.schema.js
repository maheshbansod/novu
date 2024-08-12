"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlVariables = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const mongooseDelete = require('mongoose-delete');
const controlVariablesSchema = new mongoose_2.Schema({
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
        index: true,
    },
    _stepId: {
        index: true,
        type: mongoose_2.Schema.Types.ObjectId,
    },
    workflowId: mongoose_2.Schema.Types.String,
    stepId: mongoose_2.Schema.Types.String,
    level: mongoose_2.Schema.Types.String,
    priority: mongoose_2.Schema.Types.Number,
    inputs: mongoose_2.Schema.Types.Mixed,
    controls: mongoose_2.Schema.Types.Mixed,
}, schema_default_options_1.schemaOptions);
controlVariablesSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.ControlVariables = mongoose_1.default.models.ControlVariables ||
    mongoose_1.default.model('controls', controlVariablesSchema) ||
    mongoose_1.default.model('inputs', controlVariablesSchema);
