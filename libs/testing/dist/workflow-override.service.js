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
exports.WorkflowOverrideService = void 0;
const dal_1 = require("@novu/dal");
const faker_1 = require("@faker-js/faker");
class WorkflowOverrideService {
    constructor(config) {
        this.config = config;
        this.notificationTemplateRepository = new dal_1.NotificationTemplateRepository();
        this.notificationGroupRepository = new dal_1.NotificationGroupRepository();
        this.tenantRepository = new dal_1.TenantRepository();
        this.workflowOverrideRepository = new dal_1.WorkflowOverrideRepository();
    }
    createWorkflowOverride(override = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organizationId, environmentId } = this.config;
            const tenant = yield this.tenantRepository.create({
                _organizationId: organizationId,
                _environmentId: environmentId,
                identifier: faker_1.faker.datatype.uuid(),
                name: 'name_123',
                data: { test1: 'test value1', test2: 'test value2' },
            });
            const groups = yield this.notificationGroupRepository.find({
                _environmentId: environmentId,
            });
            const workflowId = override.workflowId || (yield this.createWorkflow(groups))._id;
            const payload = {
                _organizationId: organizationId,
                _environmentId: environmentId,
                _workflowId: workflowId,
                _tenantId: tenant._id,
            };
            if (override.active != null) {
                payload.active = override.active;
            }
            if (override.preferenceSettings != null) {
                payload.preferenceSettings = override.preferenceSettings;
            }
            const workflowOverride = yield this.workflowOverrideRepository.create(payload);
            return { tenant, workflowOverride };
        });
    }
    createWorkflow(groups) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organizationId, environmentId } = this.config;
            return yield this.notificationTemplateRepository.create({
                _organizationId: organizationId,
                _environmentId: environmentId,
                name: 'test api template',
                description: 'This is a test description',
                tags: ['test-tag-api'],
                notificationGroupId: groups[0]._id,
                steps: [],
                triggers: [{ identifier: 'test-trigger-api' }],
            });
        });
    }
}
exports.WorkflowOverrideService = WorkflowOverrideService;
//# sourceMappingURL=workflow-override.service.js.map