"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const userSchema = new mongoose_2.Schema({
    firstName: mongoose_2.Schema.Types.String,
    lastName: mongoose_2.Schema.Types.String,
    email: mongoose_2.Schema.Types.String,
    profilePicture: mongoose_2.Schema.Types.String,
    resetToken: mongoose_2.Schema.Types.String,
    resetTokenDate: mongoose_2.Schema.Types.Date,
    resetTokenCount: {
        reqInMinute: mongoose_2.Schema.Types.Number,
        reqInDay: mongoose_2.Schema.Types.Number,
    },
    showOnBoarding: mongoose_2.Schema.Types.Boolean,
    showOnBoardingTour: {
        type: mongoose_2.Schema.Types.Number,
        default: 0,
    },
    tokens: [
        {
            providerId: mongoose_2.Schema.Types.String,
            provider: mongoose_2.Schema.Types.String,
            accessToken: mongoose_2.Schema.Types.String,
            refreshToken: mongoose_2.Schema.Types.String,
            valid: mongoose_2.Schema.Types.Boolean,
            lastUsed: mongoose_2.Schema.Types.Date,
            username: mongoose_2.Schema.Types.String,
        },
    ],
    password: mongoose_2.Schema.Types.String,
    failedLogin: {
        times: mongoose_2.Schema.Types.Number,
        lastFailedAttempt: mongoose_2.Schema.Types.Date,
    },
    servicesHashes: {
        intercom: mongoose_2.Schema.Types.String,
    },
    jobTitle: mongoose_2.Schema.Types.String,
    externalId: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
exports.User = mongoose_1.default.models.User || mongoose_1.default.model('User', userSchema);
