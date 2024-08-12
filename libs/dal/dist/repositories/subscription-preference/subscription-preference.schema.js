"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPreference = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const SubscriptionPreferenceSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
exports.SubscriptionPreference = mongoose_1.default.models.SubscriptionPreference ||
    mongoose_1.default.model('SubscriptionPreference', SubscriptionPreferenceSchema);
