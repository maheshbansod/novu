"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Integration = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const integrationSchema = new mongoose_2.Schema({
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
        index: true,
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    providerId: mongoose_2.Schema.Types.String,
    channel: mongoose_2.Schema.Types.String,
    credentials: {
        apiKey: mongoose_2.Schema.Types.String,
        user: mongoose_2.Schema.Types.String,
        secretKey: mongoose_2.Schema.Types.String,
        domain: mongoose_2.Schema.Types.String,
        password: mongoose_2.Schema.Types.String,
        host: mongoose_2.Schema.Types.String,
        port: mongoose_2.Schema.Types.String,
        secure: mongoose_2.Schema.Types.Boolean,
        region: mongoose_2.Schema.Types.String,
        accountSid: mongoose_2.Schema.Types.String,
        messageProfileId: mongoose_2.Schema.Types.String,
        token: mongoose_2.Schema.Types.String,
        from: mongoose_2.Schema.Types.String,
        senderName: mongoose_2.Schema.Types.String,
        applicationId: mongoose_2.Schema.Types.String,
        clientId: mongoose_2.Schema.Types.String,
        projectName: mongoose_2.Schema.Types.String,
        serviceAccount: mongoose_2.Schema.Types.String,
        baseUrl: mongoose_2.Schema.Types.String,
        webhookUrl: mongoose_2.Schema.Types.String,
        requireTls: mongoose_2.Schema.Types.Boolean,
        ignoreTls: mongoose_2.Schema.Types.Boolean,
        tlsOptions: mongoose_2.Schema.Types.Mixed,
        redirectUrl: mongoose_2.Schema.Types.String,
        hmac: mongoose_2.Schema.Types.Boolean,
        ipPoolName: mongoose_2.Schema.Types.String,
        apiKeyRequestHeader: mongoose_2.Schema.Types.String,
        secretKeyRequestHeader: mongoose_2.Schema.Types.String,
        idPath: mongoose_2.Schema.Types.String,
        datePath: mongoose_2.Schema.Types.String,
        authenticateByToken: mongoose_2.Schema.Types.Boolean,
        authenticationTokenKey: mongoose_2.Schema.Types.String,
        instanceId: mongoose_2.Schema.Types.String,
        alertUid: mongoose_2.Schema.Types.String,
        title: mongoose_2.Schema.Types.String,
        imageUrl: mongoose_2.Schema.Types.String,
        state: mongoose_2.Schema.Types.String,
        externalLink: mongoose_2.Schema.Types.String,
        apiToken: mongoose_2.Schema.Types.String,
        channelId: mongoose_2.Schema.Types.String,
        phoneNumberIdentification: mongoose_2.Schema.Types.String,
        accessKey: mongoose_2.Schema.Types.String,
    },
    active: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    name: mongoose_2.Schema.Types.String,
    identifier: mongoose_2.Schema.Types.String,
    priority: {
        type: mongoose_2.Schema.Types.Number,
        default: 0,
    },
    primary: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    conditions: [
        {
            isNegated: mongoose_2.Schema.Types.Boolean,
            type: {
                type: mongoose_2.Schema.Types.String,
            },
            value: mongoose_2.Schema.Types.String,
            children: [
                {
                    field: mongoose_2.Schema.Types.String,
                    value: mongoose_2.Schema.Types.Mixed,
                    operator: mongoose_2.Schema.Types.String,
                    on: mongoose_2.Schema.Types.String,
                },
            ],
        },
    ],
}, schema_default_options_1.schemaOptions);
integrationSchema.index({
    _organizationId: 1,
    active: 1,
});
integrationSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.Integration = mongoose_1.default.models.Integration ||
    mongoose_1.default.model('Integration', integrationSchema);
