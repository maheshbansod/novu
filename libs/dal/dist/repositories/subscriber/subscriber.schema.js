"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscriber = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const subscriberSchema = new mongoose_2.Schema({
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    firstName: mongoose_2.Schema.Types.String,
    lastName: mongoose_2.Schema.Types.String,
    phone: mongoose_2.Schema.Types.String,
    subscriberId: mongoose_2.Schema.Types.String,
    email: mongoose_2.Schema.Types.String,
    avatar: mongoose_2.Schema.Types.String,
    locale: mongoose_2.Schema.Types.String,
    channels: [mongoose_2.Schema.Types.Mixed],
    isOnline: {
        type: mongoose_2.Schema.Types.Boolean,
        required: false,
    },
    lastOnlineAt: mongoose_2.Schema.Types.Date,
    data: mongoose_2.Schema.Types.Mixed,
}, schema_default_options_1.schemaOptions);
subscriberSchema.index({
    _environmentId: 1,
    email: 1,
});
index({
    subscriberId: 1,
    _environmentId: 1,
}, { unique: true });
subscriberSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.Subscriber = mongoose_1.default.models.Subscriber ||
    mongoose_1.default.model('Subscriber', subscriberSchema);
function index(fields, options) {
    subscriberSchema.index(fields, options);
}
