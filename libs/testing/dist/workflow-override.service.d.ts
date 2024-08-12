import { WorkflowOverrideEntity } from '@novu/dal';
import { ICreateWorkflowOverrideRequestDto } from '@novu/shared';
export declare class WorkflowOverrideService {
    private config;
    constructor(config: {
        organizationId: string;
        environmentId: string;
    });
    private notificationTemplateRepository;
    private notificationGroupRepository;
    private tenantRepository;
    private workflowOverrideRepository;
    createWorkflowOverride(override?: Partial<ICreateWorkflowOverrideRequestDto>): Promise<{
        tenant: import("@novu/dal").TenantEntity;
        workflowOverride: WorkflowOverrideEntity;
    }>;
    private createWorkflow;
}
//# sourceMappingURL=workflow-override.service.d.ts.map