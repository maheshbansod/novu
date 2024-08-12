"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tenant = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const tenantSchema = new mongoose_2.Schema({
    identifier: mongoose_2.Schema.Types.String,
    name: mongoose_2.Schema.Types.String,
    data: mongoose_2.Schema.Types.Mixed,
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
}, schema_default_options_1.schemaOptions);
tenantSchema.index({
    _environmentId: 1,
    createdAt: -1,
});
tenantSchema.index({
    _environmentId: 1,
    identifier: 1,
}, { unique: true });
exports.Tenant = mongoose_1.default.models.Tenant || mongoose_1.default.model('Tenant', tenantSchema);
