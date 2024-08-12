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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribersService = void 0;
const faker_1 = require("@faker-js/faker");
const dal_1 = require("@novu/dal");
const shared_1 = require("@novu/shared");
class SubscribersService {
    constructor(_organizationId, _environmentId) {
        this._organizationId = _organizationId;
        this._environmentId = _environmentId;
        this.subscriberRepository = new dal_1.SubscriberRepository();
        this.integrationRepository = new dal_1.IntegrationRepository();
    }
    createSubscriber(fields = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const integrations = yield this.integrationRepository.find({
                _environmentId: this._environmentId,
                _organizationId: this._organizationId,
            });
            const slackIntegration = integrations.find((integration) => integration.providerId === shared_1.ChatProviderIdEnum.Slack);
            const fcmIntegration = integrations.find((integration) => integration.providerId === shared_1.PushProviderIdEnum.FCM);
            const channels = [];
            if (slackIntegration) {
                channels.push({
                    _integrationId: slackIntegration._id,
                    providerId: shared_1.ChatProviderIdEnum.Slack,
                    credentials: { webhookUrl: 'webhookUrl' },
                });
            }
            if (fcmIntegration) {
                channels.push({
                    _integrationId: fcmIntegration._id,
                    providerId: shared_1.PushProviderIdEnum.FCM,
                    credentials: { deviceTokens: ['identifier'] },
                });
            }
            return yield this.subscriberRepository.create(Object.assign({ lastName: faker_1.faker.name.lastName(), firstName: faker_1.faker.name.firstName(), email: faker_1.faker.internet.email(), phone: faker_1.faker.phone.phoneNumber(), _environmentId: this._environmentId, _organizationId: this._organizationId, subscriberId: dal_1.SubscriberRepository.createObjectId(), channels }, fields));
        });
    }
}
exports.SubscribersService = SubscribersService;
//# sourceMappingURL=subscribers.service.js.map