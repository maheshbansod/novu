import { EncryptedSecret, IApiRateLimitMaximum } from '@novu/shared';
import { BaseRepository } from '../base-repository';
import { IApiKey, EnvironmentEntity, EnvironmentDBModel } from './environment.entity';
export declare class EnvironmentRepository extends BaseRepository<EnvironmentDBModel, EnvironmentEntity, object> {
    constructor();
    findEnvironmentByIdentifier(identifier: string): Promise<EnvironmentEntity | null>;
    updateApiKeyUserId(organizationId: string, oldUserId: string, newUserId: string): Promise<{
        matched: number;
        modified: number;
    }>;
    findOrganizationEnvironments(organizationId: string): Promise<EnvironmentEntity[]>;
    findByIdAndOrganization(environmentId: string, organizationId: string): Promise<EnvironmentEntity | null>;
    addApiKey(environmentId: string, key: EncryptedSecret, userId: string): Promise<{
        matched: number;
        modified: number;
    }>;
    findByApiKey({ key, hash }: {
        key: string;
        hash: string;
    }): Promise<EnvironmentEntity | null>;
    getApiKeys(environmentId: string): Promise<IApiKey[]>;
    updateApiKey(environmentId: string, key: EncryptedSecret, userId: string, hash?: string): Promise<IApiKey[]>;
    updateApiRateLimits(environmentId: string, apiRateLimits: Partial<IApiRateLimitMaximum>): Promise<{
        matched: number;
        modified: number;
    }>;
}
//# sourceMappingURL=environment.repository.d.ts.map