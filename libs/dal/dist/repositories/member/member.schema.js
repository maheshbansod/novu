"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Member = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const memberSchema = new mongoose_2.Schema({
    invite: {
        email: mongoose_2.Schema.Types.String,
        token: {
            type: mongoose_2.Schema.Types.String,
            index: true,
        },
        invitationDate: mongoose_2.Schema.Types.Date,
        answerDate: mongoose_2.Schema.Types.Date,
        _inviterId: {
            type: mongoose_2.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    memberStatus: mongoose_2.Schema.Types.String,
    _userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
        index: true,
    },
    roles: [mongoose_2.Schema.Types.String],
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
        index: true,
    },
}, schema_default_options_1.schemaOptions);
exports.Member = mongoose_1.default.models.Member || mongoose_1.default.model('Member', memberSchema);
