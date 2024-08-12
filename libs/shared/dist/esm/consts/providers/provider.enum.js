export var CredentialsKeyEnum;
(function (CredentialsKeyEnum) {
    CredentialsKeyEnum["ApiKey"] = "apiKey";
    CredentialsKeyEnum["User"] = "user";
    CredentialsKeyEnum["SecretKey"] = "secretKey";
    CredentialsKeyEnum["Domain"] = "domain";
    CredentialsKeyEnum["Password"] = "password";
    CredentialsKeyEnum["Host"] = "host";
    CredentialsKeyEnum["Port"] = "port";
    CredentialsKeyEnum["Secure"] = "secure";
    CredentialsKeyEnum["Region"] = "region";
    CredentialsKeyEnum["AccountSid"] = "accountSid";
    CredentialsKeyEnum["MessageProfileId"] = "messageProfileId";
    CredentialsKeyEnum["Token"] = "token";
    CredentialsKeyEnum["From"] = "from";
    CredentialsKeyEnum["SenderName"] = "senderName";
    CredentialsKeyEnum["ContentType"] = "contentType";
    CredentialsKeyEnum["ApplicationId"] = "applicationId";
    CredentialsKeyEnum["ClientId"] = "clientId";
    CredentialsKeyEnum["ProjectName"] = "projectName";
    CredentialsKeyEnum["ServiceAccount"] = "serviceAccount";
    CredentialsKeyEnum["BaseUrl"] = "baseUrl";
    CredentialsKeyEnum["WebhookUrl"] = "webhookUrl";
    CredentialsKeyEnum["RequireTls"] = "requireTls";
    CredentialsKeyEnum["IgnoreTls"] = "ignoreTls";
    CredentialsKeyEnum["TlsOptions"] = "tlsOptions";
    CredentialsKeyEnum["RedirectUrl"] = "redirectUrl";
    CredentialsKeyEnum["Hmac"] = "hmac";
    CredentialsKeyEnum["IpPoolName"] = "ipPoolName";
    CredentialsKeyEnum["ApiKeyRequestHeader"] = "apiKeyRequestHeader";
    CredentialsKeyEnum["SecretKeyRequestHeader"] = "secretKeyRequestHeader";
    CredentialsKeyEnum["IdPath"] = "idPath";
    CredentialsKeyEnum["DatePath"] = "datePath";
    CredentialsKeyEnum["AuthenticateByToken"] = "authenticateByToken";
    CredentialsKeyEnum["AuthenticationTokenKey"] = "authenticationTokenKey";
    CredentialsKeyEnum["AccessKey"] = "accessKey";
    CredentialsKeyEnum["InstanceId"] = "instanceId";
    CredentialsKeyEnum["ApiToken"] = "apiToken";
    CredentialsKeyEnum["ApiURL"] = "apiURL";
    CredentialsKeyEnum["AppID"] = "appID";
    CredentialsKeyEnum["alertUid"] = "alertUid";
    CredentialsKeyEnum["title"] = "title";
    CredentialsKeyEnum["imageUrl"] = "imageUrl";
    CredentialsKeyEnum["state"] = "state";
    CredentialsKeyEnum["externalLink"] = "externalLink";
    CredentialsKeyEnum["channelId"] = "channelId";
    CredentialsKeyEnum["phoneNumberIdentification"] = "phoneNumberIdentification";
})(CredentialsKeyEnum || (CredentialsKeyEnum = {}));
export var EmailProviderIdEnum;
(function (EmailProviderIdEnum) {
    EmailProviderIdEnum["EmailJS"] = "emailjs";
    EmailProviderIdEnum["Mailgun"] = "mailgun";
    EmailProviderIdEnum["Mailjet"] = "mailjet";
    EmailProviderIdEnum["Mandrill"] = "mandrill";
    EmailProviderIdEnum["CustomSMTP"] = "nodemailer";
    EmailProviderIdEnum["Postmark"] = "postmark";
    EmailProviderIdEnum["SendGrid"] = "sendgrid";
    EmailProviderIdEnum["Sendinblue"] = "sendinblue";
    EmailProviderIdEnum["SES"] = "ses";
    EmailProviderIdEnum["NetCore"] = "netcore";
    EmailProviderIdEnum["Infobip"] = "infobip-email";
    EmailProviderIdEnum["Resend"] = "resend";
    EmailProviderIdEnum["Plunk"] = "plunk";
    EmailProviderIdEnum["MailerSend"] = "mailersend";
    EmailProviderIdEnum["Mailtrap"] = "mailtrap";
    EmailProviderIdEnum["Clickatell"] = "clickatell";
    EmailProviderIdEnum["Outlook365"] = "outlook365";
    EmailProviderIdEnum["Novu"] = "novu-email";
    EmailProviderIdEnum["SparkPost"] = "sparkpost";
    EmailProviderIdEnum["EmailWebhook"] = "email-webhook";
    EmailProviderIdEnum["Braze"] = "braze";
})(EmailProviderIdEnum || (EmailProviderIdEnum = {}));
export var SmsProviderIdEnum;
(function (SmsProviderIdEnum) {
    SmsProviderIdEnum["Nexmo"] = "nexmo";
    SmsProviderIdEnum["Plivo"] = "plivo";
    SmsProviderIdEnum["Sms77"] = "sms77";
    SmsProviderIdEnum["SmsCentral"] = "sms-central";
    SmsProviderIdEnum["SNS"] = "sns";
    SmsProviderIdEnum["Telnyx"] = "telnyx";
    SmsProviderIdEnum["Twilio"] = "twilio";
    SmsProviderIdEnum["Gupshup"] = "gupshup";
    SmsProviderIdEnum["Firetext"] = "firetext";
    SmsProviderIdEnum["Infobip"] = "infobip-sms";
    SmsProviderIdEnum["BurstSms"] = "burst-sms";
    SmsProviderIdEnum["BulkSms"] = "bulk-sms";
    SmsProviderIdEnum["ISendSms"] = "isend-sms";
    SmsProviderIdEnum["Clickatell"] = "clickatell";
    SmsProviderIdEnum["FortySixElks"] = "forty-six-elks";
    SmsProviderIdEnum["Kannel"] = "kannel";
    SmsProviderIdEnum["Maqsam"] = "maqsam";
    SmsProviderIdEnum["Termii"] = "termii";
    SmsProviderIdEnum["AfricasTalking"] = "africas-talking";
    SmsProviderIdEnum["Novu"] = "novu-sms";
    SmsProviderIdEnum["Sendchamp"] = "sendchamp";
    SmsProviderIdEnum["GenericSms"] = "generic-sms";
    SmsProviderIdEnum["Clicksend"] = "clicksend";
    SmsProviderIdEnum["Bandwidth"] = "bandwidth";
    SmsProviderIdEnum["MessageBird"] = "messagebird";
    SmsProviderIdEnum["Simpletexting"] = "simpletexting";
    SmsProviderIdEnum["AzureSms"] = "azure-sms";
    SmsProviderIdEnum["RingCentral"] = "ring-central";
    SmsProviderIdEnum["BrevoSms"] = "brevo-sms";
    SmsProviderIdEnum["EazySms"] = "eazy-sms";
    SmsProviderIdEnum["Mobishastra"] = "mobishastra";
})(SmsProviderIdEnum || (SmsProviderIdEnum = {}));
export var ChatProviderIdEnum;
(function (ChatProviderIdEnum) {
    ChatProviderIdEnum["Slack"] = "slack";
    ChatProviderIdEnum["Discord"] = "discord";
    ChatProviderIdEnum["MsTeams"] = "msteams";
    ChatProviderIdEnum["Mattermost"] = "mattermost";
    ChatProviderIdEnum["Ryver"] = "ryver";
    ChatProviderIdEnum["Zulip"] = "zulip";
    ChatProviderIdEnum["GrafanaOnCall"] = "grafana-on-call";
    ChatProviderIdEnum["GetStream"] = "getstream";
    ChatProviderIdEnum["RocketChat"] = "rocket-chat";
    ChatProviderIdEnum["WhatsAppBusiness"] = "whatsapp-business";
})(ChatProviderIdEnum || (ChatProviderIdEnum = {}));
export var PushProviderIdEnum;
(function (PushProviderIdEnum) {
    PushProviderIdEnum["FCM"] = "fcm";
    PushProviderIdEnum["APNS"] = "apns";
    PushProviderIdEnum["EXPO"] = "expo";
    PushProviderIdEnum["OneSignal"] = "one-signal";
    PushProviderIdEnum["Pushpad"] = "pushpad";
    PushProviderIdEnum["PushWebhook"] = "push-webhook";
    PushProviderIdEnum["PusherBeams"] = "pusher-beams";
})(PushProviderIdEnum || (PushProviderIdEnum = {}));
export var InAppProviderIdEnum;
(function (InAppProviderIdEnum) {
    InAppProviderIdEnum["Novu"] = "novu";
})(InAppProviderIdEnum || (InAppProviderIdEnum = {}));
