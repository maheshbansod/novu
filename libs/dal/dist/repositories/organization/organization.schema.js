"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const shared_1 = require("@novu/shared");
const schema_default_options_1 = require("../schema-default.options");
const organization_entity_1 = require("./organization.entity");
const organizationSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
    logo: mongoose_2.Schema.Types.String,
    apiServiceLevel: {
        type: mongoose_2.Schema.Types.String,
        enum: shared_1.ApiServiceLevelEnum,
    },
    branding: {
        fontColor: mongoose_2.Schema.Types.String,
        contentBackground: mongoose_2.Schema.Types.String,
        fontFamily: mongoose_2.Schema.Types.String,
        logo: mongoose_2.Schema.Types.String,
        color: mongoose_2.Schema.Types.String,
        direction: mongoose_2.Schema.Types.String,
    },
    partnerConfigurations: {
        type: [
            {
                accessToken: mongoose_2.Schema.Types.String,
                configurationId: mongoose_2.Schema.Types.String,
                teamId: mongoose_2.Schema.Types.String,
                projectIds: [mongoose_2.Schema.Types.String],
                partnerType: {
                    type: mongoose_2.Schema.Types.String,
                    enum: organization_entity_1.PartnerTypeEnum,
                },
            },
        ],
        select: false,
    },
    defaultLocale: mongoose_2.Schema.Types.String,
    domain: mongoose_2.Schema.Types.String,
    language: [mongoose_2.Schema.Types.String],
    productUseCases: {
        delay: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
        translation: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
        digest: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
        multi_channel: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
        in_app: {
            type: mongoose_2.Schema.Types.Boolean,
            default: false,
        },
    },
    externalId: mongoose_2.Schema.Types.String,
}, schema_default_options_1.schemaOptions);
exports.Organization = mongoose_1.default.models.Organization ||
    mongoose_1.default.model('Organization', organizationSchema);
