"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feed = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const feedSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
    identifier: {
        type: mongoose_2.Schema.Types.String,
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
}, schema_default_options_1.schemaOptions);
feedSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.Feed = mongoose_1.default.models.Feed || mongoose_1.default.model('Feed', feedSchema);
