"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.smsProviders = void 0;
const credentials_1 = require("../credentials");
const provider_enum_1 = require("../provider.enum");
const types_1 = require("../../../types");
const ui_1 = require("../../../ui");
exports.smsProviders = [
    {
        id: provider_enum_1.SmsProviderIdEnum.Novu,
        displayName: 'Novu SMS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: [],
        docReference: `https://docs.novu.co/integrations/providers/default-providers${ui_1.UTM_CAMPAIGN_QUERY_PARAM}#novu-sms-provider`,
        logoFileName: { light: 'novu.png', dark: 'novu.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Nexmo,
        displayName: 'Nexmo',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.nexmoConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/nexmo${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'nexmo.png', dark: 'nexmo.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Plivo,
        displayName: 'Plivo',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.plivoConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/plivo${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'plivo.png', dark: 'plivo.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Sms77,
        displayName: 'sms77',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.sms77Config,
        docReference: `https://docs.novu.co/integrations/providers/sms/sms77${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'sms77.svg', dark: 'sms77.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.SNS,
        displayName: 'SNS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.snsConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/aws-sns${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'sns.svg', dark: 'sns.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Telnyx,
        displayName: 'Telnyx',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.telnyxConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/telnyx${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'telnyx.png', dark: 'telnyx.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.MessageBird,
        displayName: 'MessageBird',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.messagebirdConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/messagebird${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'messagebird.png', dark: 'messagebird.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Twilio,
        displayName: 'Twilio',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.twilioConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/twilio${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'twilio.png', dark: 'twilio.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Gupshup,
        displayName: 'Gupshup',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.gupshupConfig,
        docReference: 'https://docs.gupshup.io/docs/send-single-message',
        logoFileName: { light: 'gupshup.png', dark: 'gupshup.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Firetext,
        displayName: 'Firetext',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.firetextConfig,
        docReference: 'https://www.firetext.co.uk/docs',
        logoFileName: { light: 'firetext.svg', dark: 'firetext.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Infobip,
        displayName: 'Infobip',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.infobipSMSConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/infobip${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'infobip.png', dark: 'infobip.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.BurstSms,
        displayName: 'BurstSMS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.burstSmsConfig,
        docReference: 'https://developer.transmitsms.com/',
        logoFileName: { light: 'burst-sms.svg', dark: 'burst-sms.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.BulkSms,
        displayName: 'BulkSMS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.bulkSmsConfig,
        docReference: 'https://www.bulksms.com/developer/json/v1/',
        logoFileName: { light: 'bulk-sms.png', dark: 'bulk-sms.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.ISendSms,
        displayName: 'iSend SMS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.iSendSmsConfig,
        docReference: 'https://send.com.ly/developers/docs',
        logoFileName: { light: 'isend-sms.svg', dark: 'isend-sms.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Clickatell,
        displayName: 'clickatell',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.clickatellConfig,
        betaVersion: true,
        docReference: `https://docs.novu.co/integrations/providers/sms/clickatell${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'clickatell.png', dark: 'clickatell.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.FortySixElks,
        displayName: '46elks',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.fortySixElksConfig,
        docReference: 'https://46elks.com/docs/send-sms',
        logoFileName: { light: '46elks.png', dark: '46elks.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Kannel,
        displayName: 'Kannel SMS',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.kannelConfig,
        betaVersion: true,
        docReference: 'https://www.kannel.org/doc.shtml',
        logoFileName: { light: 'kannel.png', dark: 'kannel.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Maqsam,
        displayName: 'Maqsam',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.maqsamConfig,
        docReference: 'https://portal.maqsam.com/docs/v2/sms',
        logoFileName: { light: 'maqsam.png', dark: 'maqsam.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.SmsCentral,
        displayName: 'SMS Central',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.smsCentralConfig,
        docReference: 'https://www.smscentral.com.au/sms-api/',
        logoFileName: { light: 'sms-central.png', dark: 'sms-central.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Termii,
        displayName: 'Termii',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.termiiConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/termii${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'termii.png', dark: 'termii.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.AfricasTalking,
        displayName: `Africa's Talking`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.africasTalkingConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/africas-talking${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'africas-talking.svg', dark: 'africas-talking.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Sendchamp,
        displayName: `Sendchamp`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.sendchampConfig,
        docReference: `https://docs.novu.co/integrations/providers/sms/sendchamp${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'sendchamp.svg', dark: 'sendchamp.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.GenericSms,
        displayName: `Generic SMS`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.genericSmsConfig,
        docReference: `https://docs.novu.co/channels/sms/generic-sms${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'generic-sms.svg', dark: 'generic-sms.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Clicksend,
        displayName: `Clicksend`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.clickSendConfig,
        docReference: 'https://developers.clicksend.com/docs/rest/v3/?javascript--nodejs#send-sms',
        logoFileName: { light: 'clicksend.png', dark: 'clicksend.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Simpletexting,
        displayName: `SimpleTexting`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.simpleTextingConfig,
        docReference: `https://docs.novu.co/channels/sms/simpletexting${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'simpletexting.png', dark: 'simpletexting.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Bandwidth,
        displayName: `Bandwidth`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.bandwidthConfig,
        betaVersion: true,
        docReference: `https://dev.bandwidth.com/docs/messaging/createMessage${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'bandwidth.png', dark: 'bandwidth.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.AzureSms,
        displayName: `Azure Sms`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.azureSmsConfig,
        docReference: `https://docs.novu.co/channels/sms/azure${ui_1.UTM_CAMPAIGN_QUERY_PARAM}`,
        logoFileName: { light: 'azure-sms.png', dark: 'azure-sms.png' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.RingCentral,
        displayName: `RingCentral`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.ringCentralConfig,
        docReference: 'https://developers.ringcentral.com/guide/messaging',
        logoFileName: { light: 'ring-central.svg', dark: 'ring-central.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.BrevoSms,
        displayName: `Brevo`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.brevoSmsConfig,
        docReference: 'https://developers.brevo.com/reference/sendtransacsms',
        logoFileName: { light: 'brevo.svg', dark: 'brevo.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.EazySms,
        displayName: `Eazy`,
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.eazySmsConfig,
        docReference: 'https://developers.eazy.im/#678805af-be7b-4487-93a4-c1007b7920f5',
        logoFileName: { light: 'eazy-sms.svg', dark: 'eazy-sms.svg' },
    },
    {
        id: provider_enum_1.SmsProviderIdEnum.Mobishastra,
        displayName: 'Mobishastra',
        channel: types_1.ChannelTypeEnum.SMS,
        credentials: credentials_1.mobishastraConfig,
        docReference: 'https://telkosh.com/mobishastra/',
        logoFileName: { light: 'mobishastra.png', dark: 'mobishastra.png' },
    },
];