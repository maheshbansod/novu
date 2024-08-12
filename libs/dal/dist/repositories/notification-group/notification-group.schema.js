"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGroup = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const NotificationGroupSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
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
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationGroup',
    },
}, schema_default_options_1.schemaOptions);
exports.NotificationGroup = mongoose_1.default.models.NotificationGroup ||
    mongoose_1.default.model('NotificationGroup', NotificationGroupSchema);
