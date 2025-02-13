"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inAppProviders = void 0;
const credentials_1 = require("../credentials");
const provider_enum_1 = require("../provider.enum");
const types_1 = require("../../../types");
const ui_1 = require("../../../ui");
exports.inAppProviders = [
    {
        id: provider_enum_1.InAppProviderIdEnum.Novu,
        displayName: 'Novu In-App',
        channel: types_1.ChannelTypeEnum.IN_APP,
        credentials: credentials_1.novuInAppConfig,
        docReference: `https://docs.novu.co/notification-center/introduction${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'novu.png', dark: 'novu.png' },
    },
];
