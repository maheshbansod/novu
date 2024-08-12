import { EnvironmentEntity } from '@novu/dal';
import { IApiRateLimitMaximum } from '@novu/shared';
export declare class EnvironmentService {
    private environmentRepository;
    createEnvironment(organizationId: string, userId: string, name?: string, parentId?: string): Promise<EnvironmentEntity>;
    createDevelopmentEnvironment(organizationId: string, userId: string): Promise<EnvironmentEntity>;
    createProductionEnvironment(organizationId: string, userId: string, parentId: string): Promise<EnvironmentEntity>;
    enableEnvironmentHmac(environment: EnvironmentEntity): Promise<{
        matched: number;
        modified: number;
    }>;
    getEnvironment(environmentId: string): Promise<EnvironmentEntity | undefined>;
    getEnvironmentByNameAndOrganization(organizationId: string, name: string): Promise<EnvironmentEntity | undefined>;
    getEnvironments(organizationId: string): Promise<EnvironmentEntity[]>;
    getDevelopmentEnvironment(organizationId: string): Promise<EnvironmentEntity | undefined>;
    getProductionEnvironment(organizationId: string): Promise<EnvironmentEntity | undefined>;
    updateApiRateLimits(environmentId: string, apiRateLimits: Partial<IApiRateLimitMaximum>): Promise<{
        matched: number;
        modified: number;
    }>;
}
//# sourceMappingURL=environment.service.d.ts.map