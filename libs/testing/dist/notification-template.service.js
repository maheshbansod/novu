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
exports.NotificationTemplateService = void 0;
const faker_1 = require("@faker-js/faker");
const shared_1 = require("@novu/shared");
const dal_1 = require("@novu/dal");
const uuid_1 = require("uuid");
class NotificationTemplateService {
    constructor(userId, organizationId, environmentId) {
        this.userId = userId;
        this.organizationId = organizationId;
        this.environmentId = environmentId;
        this.notificationTemplateRepository = new dal_1.NotificationTemplateRepository();
        this.notificationGroupRepository = new dal_1.NotificationGroupRepository();
        this.messageTemplateRepository = new dal_1.MessageTemplateRepository();
        this.feedRepository = new dal_1.FeedRepository();
        this.layoutRepository = new dal_1.LayoutRepository();
    }
    createTemplate(override = {}) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            const groups = yield this.notificationGroupRepository.find({
                _environmentId: this.environmentId,
            });
            const feeds = yield this.feedRepository.find({
                _environmentId: this.environmentId,
            });
            const layouts = yield this.layoutRepository.find({
                _environmentId: this.environmentId,
            });
            const steps = (_a = override === null || override === void 0 ? void 0 : override.steps) !== null && _a !== void 0 ? _a : [
                {
                    type: shared_1.StepTypeEnum.IN_APP,
                    content: 'Test content for <b>{{firstName}}</b>',
                    cta: {
                        type: shared_1.ChannelCTATypeEnum.REDIRECT,
                        data: {
                            url: '/cypress/test-shell/example/test?test-param=true',
                        },
                    },
                    variables: [
                        {
                            defaultValue: '',
                            name: 'firstName',
                            required: false,
                            type: shared_1.TemplateVariableTypeEnum.STRING,
                        },
                    ],
                },
                {
                    type: shared_1.StepTypeEnum.EMAIL,
                    subject: 'Password reset',
                    content: [
                        {
                            type: shared_1.EmailBlockTypeEnum.TEXT,
                            content: 'This are the text contents of the template for {{firstName}}',
                        },
                        {
                            type: shared_1.EmailBlockTypeEnum.BUTTON,
                            content: 'SIGN UP',
                            url: 'https://url-of-app.com/{{urlVariable}}',
                        },
                    ],
                    variables: [
                        {
                            defaultValue: '',
                            name: 'firstName',
                            required: false,
                            type: shared_1.TemplateVariableTypeEnum.STRING,
                        },
                    ],
                },
            ];
            const templateSteps = [];
            for (const message of steps) {
                const savedMessageTemplate = yield this.messageTemplateRepository.create({
                    type: message.type,
                    cta: message.cta,
                    variables: message.variables,
                    content: message.content,
                    subject: message.subject,
                    title: message.title,
                    name: message.name,
                    preheader: message.preheader,
                    actor: message.actor,
                    _feedId: override.noFeedId ? undefined : feeds[0]._id,
                    _layoutId: override.noLayoutId ? undefined : layouts[0]._id,
                    _creatorId: this.userId,
                    _organizationId: this.organizationId,
                    _environmentId: this.environmentId,
                });
                const variantSteps = [];
                if ((_b = message.variants) === null || _b === void 0 ? void 0 : _b.length) {
                    for (const variant of message.variants) {
                        const savedVariant = yield this.messageTemplateRepository.create({
                            type: variant.type,
                            cta: variant.cta,
                            variables: variant.variables,
                            content: variant.content,
                            subject: variant.subject,
                            title: variant.title,
                            name: variant.name,
                            preheader: variant.preheader,
                            _feedId: override.noFeedId ? undefined : feeds[0]._id,
                            _layoutId: override.noLayoutId ? undefined : layouts[0]._id,
                            _creatorId: this.userId,
                            _organizationId: this.organizationId,
                            _environmentId: this.environmentId,
                        });
                        if (savedVariant === null || savedVariant === void 0 ? void 0 : savedVariant._id) {
                            variantSteps.push({
                                filters: variant.filters,
                                _templateId: savedVariant._id,
                                active: variant.active,
                                metadata: variant.metadata,
                                replyCallback: variant.replyCallback,
                                uuid: variant.uuid,
                            });
                        }
                    }
                }
                if (savedMessageTemplate === null || savedMessageTemplate === void 0 ? void 0 : savedMessageTemplate._id) {
                    templateSteps.push({
                        variants: variantSteps,
                        filters: message.filters,
                        _templateId: savedMessageTemplate._id,
                        active: message.active,
                        metadata: message.metadata,
                        replyCallback: message.replyCallback,
                        uuid: (_c = message.uuid) !== null && _c !== void 0 ? _c : (0, uuid_1.v4)(),
                        name: message.name,
                    });
                }
            }
            const data = Object.assign(Object.assign({ _notificationGroupId: override.noGroupId ? undefined : groups[0]._id, _environmentId: this.environmentId, name: faker_1.faker.name.jobTitle(), _organizationId: this.organizationId, _creatorId: this.userId, active: true, preferenceSettings: (_d = override.preferenceSettingsOverride) !== null && _d !== void 0 ? _d : undefined, draft: false, tags: (_e = override.tags) !== null && _e !== void 0 ? _e : ['test-tag'], description: faker_1.faker.commerce.productDescription().slice(0, 90), triggers: (_f = override.triggers) !== null && _f !== void 0 ? _f : [
                    {
                        identifier: `test-event-${faker_1.faker.datatype.uuid()}`,
                        type: 'event',
                        variables: [{ name: 'firstName' }, { name: 'lastName' }, { name: 'urlVariable' }],
                    },
                ] }, override), { steps: templateSteps });
            const notificationTemplate = yield this.notificationTemplateRepository.create(data);
            return yield this.notificationTemplateRepository.findById(notificationTemplate._id, notificationTemplate._environmentId);
        });
    }
    getBlueprintTemplates(organizationId, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const blueprintTemplates = yield this.notificationTemplateRepository.findBlueprintTemplates(organizationId, environmentId);
            return blueprintTemplates;
        });
    }
}
exports.NotificationTemplateService = NotificationTemplateService;
//# sourceMappingURL=notification-template.service.js.map