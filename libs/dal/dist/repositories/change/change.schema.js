"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Change = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const changeSchema = new mongoose_2.Schema({
    enabled: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    type: {
        type: mongoose_2.Schema.Types.String,
    },
    change: mongoose_2.Schema.Types.Mixed,
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _entityId: { type: mongoose_2.Schema.Types.ObjectId, index: true },
    _creatorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Change',
    },
}, Object.assign({}, schema_default_options_1.schemaOptions));
changeSchema.virtual('user', {
    ref: 'User',
    localField: '_creatorId',
    foreignField: '_id',
    justOne: true,
});
exports.Change = mongoose_1.default.models.Change || mongoose_1.default.model('Change', changeSchema);
