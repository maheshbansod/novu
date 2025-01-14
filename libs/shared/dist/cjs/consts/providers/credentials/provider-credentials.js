"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendchampConfig = exports.novuInAppConfig = exports.africasTalkingConfig = exports.emailWebhookConfig = exports.smsCentralConfig = exports.maqsamConfig = exports.kannelConfig = exports.fortySixElksConfig = exports.brazeEmailConfig = exports.infobipEmailConfig = exports.infobipSMSConfig = exports.outlook365Config = exports.firetextConfig = exports.gupshupConfig = exports.apnsConfig = exports.pushpadConfig = exports.oneSignalConfig = exports.pushWebhookConfig = exports.expoConfig = exports.fcmConfig = exports.getstreamConfig = exports.grafanaOnCallConfig = exports.slackConfig = exports.messagebirdConfig = exports.twilioConfig = exports.telnyxConfig = exports.snsConfig = exports.clickatellConfig = exports.iSendSmsConfig = exports.bulkSmsConfig = exports.burstSmsConfig = exports.termiiConfig = exports.sms77Config = exports.plivoConfig = exports.mailerSendConfig = exports.sesConfig = exports.sendinblueConfig = exports.netCoreConfig = exports.sparkpostConfig = exports.plunkConfig = exports.mailtrapConfig = exports.resendConfig = exports.sendgridConfig = exports.postmarkConfig = exports.nodemailerConfig = exports.mandrillConfig = exports.nexmoConfig = exports.mailjetConfig = exports.mailgunConfig = exports.mailJsConfig = void 0;
exports.mobishastraConfig = exports.whatsAppBusinessConfig = exports.eazySmsConfig = exports.brevoSmsConfig = exports.ringCentralConfig = exports.rocketChatConfig = exports.azureSmsConfig = exports.pusherBeamsConfig = exports.genericSmsConfig = exports.bandwidthConfig = exports.simpleTextingConfig = exports.clickSendConfig = void 0;
const provider_enum_1 = require("../provider.enum");
const mailConfigBase = [
    {
        key: provider_enum_1.CredentialsKeyEnum.From,
        displayName: 'From email address',
        description: 'Use the same email address you used to authenticate your delivery provider',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SenderName,
        displayName: 'Sender name',
        type: 'string',
        required: true,
    },
];
const smsConfigBase = [
    {
        key: provider_enum_1.CredentialsKeyEnum.From,
        displayName: 'From',
        type: 'string',
        required: true,
    },
];
const pushConfigBase = [];
exports.mailJsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.mailgunConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'User name',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Domain,
        displayName: 'Domain',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.mailjetConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'API Secret',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.nexmoConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'API secret',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.mandrillConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.nodemailerConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'User',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Host,
        displayName: 'Host',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Port,
        displayName: 'Port',
        type: 'number',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Secure,
        displayName: 'Secure',
        type: 'boolean',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.RequireTls,
        displayName: 'Require TLS',
        type: 'switch',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.IgnoreTls,
        displayName: 'Ignore TLS',
        type: 'switch',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.TlsOptions,
        displayName: 'TLS options',
        type: 'object',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Domain,
        displayName: 'DKIM: Domain name',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'DKIM: Private key',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.AccountSid,
        displayName: 'DKIM: Key selector',
        type: 'string',
        required: false,
    },
    ...mailConfigBase,
];
exports.postmarkConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.sendgridConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.IpPoolName,
        displayName: 'IP Pool Name',
        type: 'string',
        required: false,
    },
    ...mailConfigBase,
];
exports.resendConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.mailtrapConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.plunkConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.sparkpostConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Region,
        displayName: 'Region',
        description: 'Use EU if your account is registered to SparkPost EU',
        type: 'dropdown',
        required: false,
        value: null,
        dropdown: [
            { name: 'Default', value: null },
            { name: 'EU', value: 'eu' },
        ],
    },
    ...mailConfigBase,
];
exports.netCoreConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.sendinblueConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.sesConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Access key ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret access key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Region,
        displayName: 'Region',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.mailerSendConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.plivoConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.AccountSid,
        displayName: 'Account SID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Token,
        displayName: 'Auth token',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.sms77Config = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.termiiConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.burstSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'API Secret',
        type: 'string',
        required: true,
    },
];
exports.bulkSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiToken,
        displayName: 'API Token',
        type: 'string',
        required: true,
    },
];
exports.iSendSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiToken,
        displayName: 'API Token',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.From,
        displayName: 'Default Sender ID',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ContentType,
        displayName: 'Content Type',
        type: 'dropdown',
        required: false,
        value: null,
        dropdown: [
            { name: 'Default', value: null },
            { name: 'Unicode', value: 'unicode' },
            { name: 'Plain', value: 'plain' },
        ],
    },
];
exports.clickatellConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
];
exports.snsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Access key ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret access key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Region,
        displayName: 'AWS region',
        type: 'string',
        required: true,
    },
];
exports.telnyxConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.MessageProfileId,
        displayName: 'Message profile ID',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.twilioConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.AccountSid,
        displayName: 'Account SID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Token,
        displayName: 'Auth token',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.messagebirdConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.AccessKey,
        displayName: 'Access key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.slackConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApplicationId,
        displayName: 'Application Id',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ClientId,
        displayName: 'Client ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Client Secret',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.RedirectUrl,
        displayName: 'Redirect URL',
        description: 'Redirect after Slack OAuth flow finished (default behaviour will close the tab)',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Hmac,
        displayName: 'HMAC',
        type: 'switch',
        required: false,
    },
];
exports.grafanaOnCallConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.alertUid,
        displayName: 'Alert UID',
        type: 'string',
        description: 'a unique alert ID for grouping, maps to alert_uid of grafana webhook body content',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.title,
        displayName: 'Title.',
        type: 'string',
        description: 'title for the alert',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.imageUrl,
        displayName: 'Image URL',
        type: 'string',
        description: 'a URL for an image attached to alert, maps to image_url of grafana webhook body content',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.state,
        displayName: 'Alert State',
        type: 'string',
        description: 'either "ok" or "alerting". Helpful for auto-resolving',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.externalLink,
        displayName: 'External Link',
        type: 'string',
        description: 'link back to your monitoring system, maps to "link_to_upstream_details" of grafana webhook body content',
        required: false,
    },
];
exports.getstreamConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
];
exports.fcmConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ServiceAccount,
        displayName: 'Service Account (entire JSON file)',
        type: 'text',
        required: true,
    },
    ...pushConfigBase,
];
exports.expoConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Access Token',
        type: 'text',
        required: true,
    },
    ...pushConfigBase,
];
exports.pushWebhookConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.WebhookUrl,
        displayName: 'Webhook URL',
        type: 'string',
        description: 'the webhook URL to call to trigger push notifications',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret Hmac Key',
        type: 'string',
        description: 'the secret used to sign webhooks calls',
        required: true,
    },
    ...pushConfigBase,
];
exports.oneSignalConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApplicationId,
        displayName: 'Application ID',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'text',
        required: true,
    },
    ...pushConfigBase,
];
exports.pushpadConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Auth Token',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApplicationId,
        displayName: 'Project ID',
        type: 'text',
        required: true,
    },
    ...pushConfigBase,
];
exports.apnsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Private Key',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Key ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ProjectName,
        displayName: 'Team ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApplicationId,
        displayName: 'Bundle ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Secure,
        displayName: 'Production',
        type: 'switch',
        required: false,
    },
    ...pushConfigBase,
];
exports.gupshupConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'User id',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: true,
    },
];
exports.firetextConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.outlook365Config = [
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.infobipSMSConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.infobipEmailConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.brazeEmailConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiURL,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.AppID,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    ...mailConfigBase,
];
exports.fortySixElksConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.kannelConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.Host,
        displayName: 'Host',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Port,
        displayName: 'Port',
        type: 'number',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        type: 'string',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: false,
    },
    ...smsConfigBase,
];
exports.maqsamConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'Access Key ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Access Secret',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.smsCentralConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: false,
    },
    ...smsConfigBase,
];
exports.emailWebhookConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.WebhookUrl,
        displayName: 'Webhook URL',
        type: 'string',
        description: 'the webhook URL to call instead of sending the email',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret Hmac Key',
        type: 'string',
        description: 'the secret used to sign webhooks calls',
        required: true,
    },
    ...mailConfigBase,
];
exports.africasTalkingConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.novuInAppConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.Hmac,
        displayName: 'Security HMAC encryption',
        type: 'switch',
        required: false,
        tooltip: {
            text: 'When active it verifies if a request is performed by a specific user',
            when: false,
        },
    },
];
exports.sendchampConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.clickSendConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        description: 'Your Clicksend API username',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'text',
        required: true,
    },
    ...smsConfigBase,
];
exports.simpleTextingConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'text',
        required: true,
    },
    ...smsConfigBase,
];
exports.bandwidthConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        description: 'Your Bandwidth account username',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'password',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.AccountSid,
        displayName: 'Account ID',
        type: 'text',
        required: true,
    },
    ...smsConfigBase,
];
exports.genericSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKeyRequestHeader,
        displayName: 'API Key Request Header',
        type: 'string',
        description: 'The name of the header attribute to use for the API key ex. (X-API-KEY, apiKey, ...)',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        description: 'The value of the header attribute to use for the API key.',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKeyRequestHeader,
        displayName: 'Secret Key Request Header',
        type: 'string',
        description: 'The name of the header attribute to use for the secret key ex. (X-SECRET-KEY, secretKey, ...)',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret Key',
        type: 'string',
        description: 'The value of the header attribute to use for the secret key',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.IdPath,
        displayName: 'Id Path',
        type: 'string',
        value: 'data.id',
        description: 'The path to the id field in the response data ex. (id, message.id, ...)',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.DatePath,
        displayName: 'Date Path',
        type: 'string',
        value: 'data.date',
        description: 'The path to the date field in the response data ex. (date, message.date, ...)',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.AuthenticateByToken,
        displayName: 'Authenticate by token',
        type: 'switch',
        description: 'If enabled, the API key and secret key will be sent as a token in the Authorization header',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Domain,
        displayName: 'Auth URL',
        type: 'string',
        description: 'The URL to use for authentication in case the Authenticate by token option is enabled',
        required: false,
        tooltip: {
            text: 'The URL to use for authentication in case the Authenticate by token option is enabled',
            when: true,
        },
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.AuthenticationTokenKey,
        displayName: 'Authentication Token Key',
        type: 'string',
        description: 'The name of the header attribute to use for the authentication token ex. (X-AUTH-TOKEN, auth-token, ...)',
        required: false,
    },
    ...smsConfigBase,
];
exports.pusherBeamsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.InstanceId,
        displayName: 'Instance ID',
        description: 'The unique identifier for your Beams instance',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Secret Key',
        description: 'The secret key your server will use to access your Beams instance',
        type: 'string',
        required: true,
    },
    ...pushConfigBase,
];
exports.azureSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.AccessKey,
        displayName: 'Connection string',
        description: 'Your Azure account connection string',
        type: 'text',
        required: true,
    },
    ...smsConfigBase,
];
exports.rocketChatConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.Token,
        displayName: 'Personal Access Token (x-auth-token)',
        description: 'Personal Access Token of your user',
        type: 'text',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'User id (x-user-id)',
        description: 'Your User id',
        type: 'text',
        required: true,
    },
];
exports.ringCentralConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ClientId,
        displayName: 'Client ID',
        description: 'Your RingCentral app client ID',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.SecretKey,
        displayName: 'Client secret',
        description: 'Your RingCentral app client secret',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Secure,
        displayName: 'Is sandbox',
        type: 'switch',
        required: false,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Token,
        displayName: 'JWT token',
        description: 'Your RingCentral user JWT token',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.brevoSmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    ...smsConfigBase,
];
exports.eazySmsConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiKey,
        displayName: 'API Key',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.channelId,
        displayName: 'SMS Channel Id',
        type: 'string',
        required: true,
        description: 'Your SMS Channel Id',
    },
];
exports.whatsAppBusinessConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.ApiToken,
        displayName: 'Access API token',
        description: 'Your WhatsApp Business access API token',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.phoneNumberIdentification,
        displayName: 'Phone Number Identification',
        description: 'Your WhatsApp Business phone number identification',
        type: 'string',
        required: true,
    },
];
exports.mobishastraConfig = [
    {
        key: provider_enum_1.CredentialsKeyEnum.BaseUrl,
        displayName: 'Base URL',
        type: 'string',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.User,
        displayName: 'Username',
        type: 'string',
        description: 'Username provided by Mobishatra',
        required: true,
    },
    {
        key: provider_enum_1.CredentialsKeyEnum.Password,
        displayName: 'Password',
        type: 'string',
        description: ' provided by Mobishastra',
        required: true,
    },
    ...smsConfigBase,
];
