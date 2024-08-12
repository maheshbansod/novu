"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationService = void 0;
const shortid_1 = __importDefault(require("shortid"));
const slugify_1 = __importDefault(require("slugify"));
const dal_1 = require("@novu/dal");
const shared_1 = require("@novu/shared");
class IntegrationService {
    constructor() {
        this.integrationRepository = new dal_1.IntegrationRepository();
        this.environmentRepository = new dal_1.EnvironmentRepository();
    }
    createIntegration({ organizationId, environmentId, channel, providerId: providerIdArg, name: nameArg, active = true, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let providerId = providerIdArg;
            if (!providerId) {
                switch (channel) {
                    case shared_1.ChannelTypeEnum.EMAIL:
                        providerId = shared_1.EmailProviderIdEnum.SendGrid;
                        break;
                    case shared_1.ChannelTypeEnum.SMS:
                        providerId = shared_1.SmsProviderIdEnum.Twilio;
                        break;
                    case shared_1.ChannelTypeEnum.CHAT:
                        providerId = shared_1.ChatProviderIdEnum.Slack;
                        break;
                    case shared_1.ChannelTypeEnum.PUSH:
                        providerId = shared_1.PushProviderIdEnum.FCM;
                        break;
                    case shared_1.ChannelTypeEnum.IN_APP:
                        providerId = shared_1.InAppProviderIdEnum.Novu;
                        break;
                    default:
                        throw new Error('Invalid channel type');
                }
            }
            const name = nameArg !== null && nameArg !== void 0 ? nameArg : providerId;
            const payload = {
                _organizationId: organizationId,
                _environmentId: environmentId,
                name,
                providerId,
                channel,
                credentials: {},
                active,
                identifier: `${(0, slugify_1.default)(name, { lower: true, strict: true })}-${shortid_1.default.generate()}`,
            };
            return yield this.integrationRepository.create(payload);
        });
    }
    deleteAllForOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const environments = yield this.environmentRepository.find({ _organizationId: organizationId });
            for (const environment of environments) {
                yield this.integrationRepository.deleteMany({
                    _organizationId: organizationId,
                    _environmentId: environment._id,
                });
            }
        });
    }
    createChannelIntegrations(environmentId, organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const novuMailPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: shared_1.EmailProviderIdEnum.Novu,
                channel: shared_1.ChannelTypeEnum.EMAIL,
                credentials: {},
                active: false,
                identifier: 'novu-email',
            };
            yield this.integrationRepository.create(novuMailPayload);
            const novuSmsPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: shared_1.SmsProviderIdEnum.Novu,
                channel: shared_1.ChannelTypeEnum.SMS,
                credentials: {},
                active: false,
                identifier: 'novu-sms',
            };
            yield this.integrationRepository.create(novuSmsPayload);
            const mailPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: 'sendgrid',
                channel: shared_1.ChannelTypeEnum.EMAIL,
                credentials: { apiKey: 'SG.123', secretKey: 'abc' },
                active: true,
                primary: true,
                priority: 1,
                identifier: 'sendgrid',
            };
            yield this.integrationRepository.create(mailPayload);
            const smsPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: 'twilio',
                channel: shared_1.ChannelTypeEnum.SMS,
                credentials: { accountSid: 'AC123', token: '123', from: 'me' },
                active: true,
                primary: true,
                priority: 1,
                identifier: 'twilio',
            };
            yield this.integrationRepository.create(smsPayload);
            const chatSlackPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: 'slack',
                channel: shared_1.ChannelTypeEnum.CHAT,
                credentials: { applicationId: 'secret_123' },
                active: true,
                identifier: 'slack',
            };
            yield this.integrationRepository.create(chatSlackPayload);
            const chatDiscordPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: 'discord',
                channel: shared_1.ChannelTypeEnum.CHAT,
                credentials: { applicationId: 'secret_123' },
                active: true,
                identifier: 'discord',
            };
            yield this.integrationRepository.create(chatDiscordPayload);
            const pushFcmPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: 'fcm',
                channel: shared_1.ChannelTypeEnum.PUSH,
                credentials: { applicationId: 'secret_123', deviceTokens: ['test'] },
                active: true,
                identifier: 'fcm',
            };
            yield this.integrationRepository.create(pushFcmPayload);
            const inAppPayload = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                providerId: shared_1.InAppProviderIdEnum.Novu,
                channel: shared_1.ChannelTypeEnum.IN_APP,
                credentials: {
                    hmac: false,
                },
                active: true,
                identifier: 'novu-in-app',
            };
            yield this.integrationRepository.create(inAppPayload);
        });
    }
}
exports.IntegrationService = IntegrationService;
//# sourceMappingURL=integration.service.js.map