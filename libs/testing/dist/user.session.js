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
exports.UserSession = void 0;
require("cross-fetch/polyfill");
const faker_1 = require("@faker-js/faker");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const supertest_1 = __importDefault(require("supertest"));
const superagent_defaults_1 = __importDefault(require("superagent-defaults"));
const shared_1 = require("@novu/shared");
const dal_1 = require("@novu/dal");
const notification_template_service_1 = require("./notification-template.service");
const test_server_service_1 = require("./test-server.service");
const organization_service_1 = require("./organization.service");
const environment_service_1 = require("./environment.service");
const integration_service_1 = require("./integration.service");
const user_service_1 = require("./user.service");
const jobs_service_1 = require("./jobs.service");
const ee_user_service_1 = require("./ee/ee.user.service");
const ee_organization_service_1 = require("./ee/ee.organization.service");
const constants_1 = require("./constants");
const EMAIL_BLOCK = [
    {
        type: shared_1.EmailBlockTypeEnum.TEXT,
        content: 'Email Content',
    },
];
class UserSession {
    constructor(serverUrl = `http://127.0.0.1:${process.env.PORT}`) {
        this.serverUrl = serverUrl;
        this.notificationGroupRepository = new dal_1.NotificationGroupRepository();
        this.feedRepository = new dal_1.FeedRepository();
        this.layoutRepository = new dal_1.LayoutRepository();
        this.changeRepository = new dal_1.ChangeRepository();
        this.environmentService = new environment_service_1.EnvironmentService();
        this.integrationService = new integration_service_1.IntegrationService();
        this.subscriberProfile = null;
        this.notificationGroups = [];
        this.testServer = test_server_service_1.testServer;
        this.jobsService = new jobs_service_1.JobsService();
    }
    initialize(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, shared_1.isClerkEnabled)()) {
                yield this.initializeEE(options);
            }
            else {
                yield this.initializeCommunity(options);
            }
        });
    }
    initializeCommunity(options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const card = {
                firstName: faker_1.faker.name.firstName(),
                lastName: faker_1.faker.name.lastName(),
            };
            const userService = new user_service_1.UserService();
            const userEntity = {
                lastName: card.lastName,
                firstName: card.firstName,
                email: `${card.firstName}_${card.lastName}_${faker_1.faker.datatype.uuid()}@gmail.com`.toLowerCase(),
                profilePicture: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 60) + 1}.jpg`,
                tokens: [],
                password: constants_1.TEST_USER_PASSWORD,
                showOnBoarding: true,
                showOnBoardingTour: options.showOnBoardingTour ? 0 : 2,
            };
            this.user = yield userService.createUser(userEntity);
            if (!options.noOrganization) {
                yield this.addOrganizationCommunity();
            }
            if (!options.noOrganization && !(options === null || options === void 0 ? void 0 : options.noEnvironment)) {
                yield this.createEnvironmentsAndFeeds();
            }
            yield this.fetchJwtCommunity();
            if (!options.noOrganization) {
                if (!(options === null || options === void 0 ? void 0 : options.noEnvironment)) {
                    yield this.updateOrganizationDetails();
                }
            }
            if (!options.noOrganization && !options.noEnvironment) {
                const { token, profile } = yield this.initializeWidgetSession();
                this.subscriberToken = token;
                this.subscriberProfile = profile;
            }
        });
    }
    initializeEE(options = { ee: { userId: 'clerk_user_1', orgId: 'clerk_org_1' } }) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new ee_user_service_1.EEUserService();
            const userId = ((_a = options.ee) === null || _a === void 0 ? void 0 : _a.userId) || 'clerk_user_1';
            const orgId = ((_b = options.ee) === null || _b === void 0 ? void 0 : _b.orgId) || 'clerk_org_1';
            const user = yield userService.getUser(userId);
            if (!user._id) {
                this.user = yield userService.createUser(userId);
            }
            else {
                this.user = user;
            }
            if (!options.noOrganization) {
                yield this.addOrganizationEE(orgId);
            }
            yield this.fetchJwtEE();
            if (!options.noOrganization && !(options === null || options === void 0 ? void 0 : options.noEnvironment)) {
                yield this.createEnvironmentsAndFeeds();
            }
            yield this.fetchJwtEE();
            if (!options.noOrganization) {
                if (!(options === null || options === void 0 ? void 0 : options.noEnvironment)) {
                    yield this.updateOrganizationDetails();
                }
            }
            if (!options.noOrganization && !options.noEnvironment) {
                const { token, profile } = yield this.initializeWidgetSession();
                this.subscriberToken = token;
                this.subscriberProfile = profile;
            }
        });
    }
    initializeWidgetSession() {
        return __awaiter(this, void 0, void 0, function* () {
            this.subscriberId = dal_1.SubscriberRepository.createObjectId();
            const { body } = yield this.testAgent
                .post('/v1/widgets/session/initialize')
                .send({
                applicationIdentifier: this.environment.identifier,
                subscriberId: this.subscriberId,
                firstName: 'Widget User',
                lastName: 'Test',
                email: 'test@example.com',
            })
                .expect(201);
            const { token, profile } = body.data;
            return { token, profile };
        });
    }
    shouldUseTestServer() {
        return this.testServer && !this.serverUrl;
    }
    get requestEndpoint() {
        var _a;
        return this.shouldUseTestServer() ? (_a = this.testServer) === null || _a === void 0 ? void 0 : _a.getHttpServer() : this.serverUrl;
    }
    fetchJWT() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, shared_1.isClerkEnabled)()) {
                yield this.fetchJwtEE();
            }
            else {
                yield this.fetchJwtCommunity();
            }
        });
    }
    addOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, shared_1.isClerkEnabled)()) {
                return yield this.addOrganizationEE('clerk_org_1');
            }
            else {
                return yield this.addOrganizationCommunity();
            }
        });
    }
    fetchJwtCommunity() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(this.requestEndpoint).get(`/v1/auth/test/token/${this.user._id}?organizationId=${this.organization ? this.organization._id : ''}`);
            this.token = `Bearer ${response.body.data}`;
            this.testAgent = (0, superagent_defaults_1.default)((0, supertest_1.default)(this.requestEndpoint))
                .set('Authorization', this.token)
                .set('Novu-Environment-Id', this.environment ? this.environment._id : '');
        });
    }
    fetchJwtEE() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.updateEETokenClaims({
                externalId: this.user ? this.user._id : '',
                externalOrgId: this.organization ? this.organization._id : '',
            });
        });
    }
    updateEETokenClaims(claims) {
        return __awaiter(this, void 0, void 0, function* () {
            const decoded = yield this.decodeClerkJWT(process.env.CLERK_LONG_LIVED_TOKEN);
            const newToken = Object.assign(Object.assign({}, decoded), claims);
            const encoded = jsonwebtoken_1.default.sign(newToken, process.env.CLERK_PRIVATE_KEY, {
                algorithm: 'RS256',
            });
            this.token = `Bearer ${encoded}`;
            this.testAgent = (0, superagent_defaults_1.default)((0, supertest_1.default)(this.requestEndpoint))
                .set('Authorization', this.token)
                .set('Novu-Environment-Id', this.environment ? this.environment._id : '');
        });
    }
    decodeClerkJWT(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicKey = process.env.CLERK_PEM_PUBLIC_KEY;
            return jsonwebtoken_1.default.verify(token, publicKey);
        });
    }
    createEnvironmentsAndFeeds() {
        return __awaiter(this, void 0, void 0, function* () {
            const development = yield this.createEnvironment('Development');
            this.environment = development;
            const production = yield this.createEnvironment('Production', development._id);
            this.apiKey = this.environment.apiKeys[0].key;
            yield this.createIntegrations([development, production]);
            yield this.createFeed();
            yield this.createFeed('New');
        });
    }
    createEnvironment(name = 'Test environment', parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = yield this.environmentService.createEnvironment(this.organization._id, this.user._id, name, parentId);
            let parentGroup;
            if (parentId) {
                parentGroup = yield this.notificationGroupRepository.findOne({
                    _environmentId: parentId,
                    _organizationId: this.organization._id,
                });
            }
            yield this.notificationGroupRepository.create({
                name: 'General',
                _environmentId: environment._id,
                _organizationId: this.organization._id,
                _parentId: parentGroup === null || parentGroup === void 0 ? void 0 : parentGroup._id,
            });
            yield this.layoutRepository.create({
                name: 'Default',
                identifier: 'default-layout',
                _environmentId: environment._id,
                _organizationId: this.organization._id,
                isDefault: true,
            });
            return environment;
        });
    }
    updateOrganizationDetails() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.testAgent
                .put('/v1/organizations/branding')
                .send({
                color: '#2a9d8f',
                logo: 'https://dashboard.novu.co/static/images/logo-light.png',
                fontColor: '#214e49',
                contentBackground: '#c2cbd2',
                fontFamily: 'Montserrat',
            })
                .expect(200);
            const groupsResponse = yield this.testAgent.get('/v1/notification-groups');
            this.notificationGroups = groupsResponse.body.data;
        });
    }
    createTemplate(template) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new notification_template_service_1.NotificationTemplateService(this.user._id, this.organization._id, this.environment._id);
            return yield service.createTemplate(template);
        });
    }
    createIntegrations(environments) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const environment of environments) {
                yield this.integrationService.createChannelIntegrations(environment._id, this.organization._id);
            }
        });
    }
    createChannelTemplate(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            const service = new notification_template_service_1.NotificationTemplateService(this.user._id, this.organization._id, this.environment._id);
            return yield service.createTemplate({
                steps: [
                    {
                        type: channel,
                        content: channel === shared_1.StepTypeEnum.EMAIL ? EMAIL_BLOCK : 'Test notification content',
                    },
                ],
            });
        });
    }
    addOrganizationCommunity() {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationService = new organization_service_1.OrganizationService();
            this.organization = yield organizationService.createOrganization();
            yield organizationService.addMember(this.organization._id, this.user._id);
            return this.organization;
        });
    }
    addOrganizationEE(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationService = new ee_organization_service_1.EEOrganizationService();
            try {
                this.organization = yield organizationService.createOrganization(orgId);
            }
            catch (e) {
                this.organization = (yield organizationService.getOrganization(orgId));
            }
            return this.organization;
        });
    }
    switchToProdEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            const prodEnvironment = yield this.environmentService.getProductionEnvironment(this.organization._id);
            if (prodEnvironment) {
                yield this.switchEnvironment(prodEnvironment._id);
            }
        });
    }
    switchToDevEnvironment() {
        return __awaiter(this, void 0, void 0, function* () {
            const devEnvironment = yield this.environmentService.getDevelopmentEnvironment(this.organization._id);
            if (devEnvironment) {
                yield this.switchEnvironment(devEnvironment._id);
            }
        });
    }
    switchEnvironment(environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = yield this.environmentService.getEnvironment(environmentId);
            if (environment) {
                this.environment = environment;
                yield this.testAgent.post(`/v1/auth/environments/${environmentId}/switch`);
                if ((0, shared_1.isClerkEnabled)()) {
                    yield this.fetchJwtEE();
                }
                else {
                    yield this.fetchJwtCommunity();
                }
            }
        });
    }
    createFeed(name) {
        return __awaiter(this, void 0, void 0, function* () {
            name = name ? name : 'Activities';
            const feed = yield this.feedRepository.create({
                name,
                identifier: name,
                _environmentId: this.environment._id,
                _organizationId: this.organization._id,
            });
            return feed;
        });
    }
    triggerEvent(triggerName, to, payload = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.testAgent.post('/v1/events/trigger').send({
                name: triggerName,
                to: to,
                payload,
            });
            return;
        });
    }
    awaitRunningJobs(templateId, delay, unfinishedJobs = 0, organizationId = this.organization._id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jobsService.awaitRunningJobs({
                templateId,
                organizationId,
                delay,
                unfinishedJobs,
            });
        });
    }
    queueGet(jobTopicName, getter) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.jobsService.queueGet(jobTopicName, getter);
        });
    }
    applyChanges(where = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const changes = yield this.changeRepository.find(Object.assign({ _environmentId: this.environment._id, _organizationId: this.organization._id, _parentId: { $exists: false, $eq: null } }, where), '', {
                sort: { createdAt: 1 },
            });
            for (const change of changes) {
                yield this.testAgent.post(`/v1/changes/${change._id}/apply`);
            }
        });
    }
    updateOrganizationServiceLevel(serviceLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationService = (0, shared_1.isClerkEnabled)() ? new ee_organization_service_1.EEOrganizationService() : new organization_service_1.OrganizationService();
            yield organizationService.updateServiceLevel(this.organization._id, serviceLevel);
        });
    }
    updateEnvironmentApiRateLimits(apiRateLimits) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.environmentService.updateApiRateLimits(this.environment._id, apiRateLimits);
        });
    }
}
exports.UserSession = UserSession;
//# sourceMappingURL=user.session.js.map