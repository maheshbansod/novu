import { FilterQuery } from 'mongoose';
import { IntegrationEntity, IntegrationDBModel } from './integration.entity';
import { BaseRepository } from '../base-repository';
import type { EnforceEnvOrOrgIds, IDeleteResult } from '../../types';
export type IntegrationQuery = FilterQuery<IntegrationDBModel> & EnforceEnvOrOrgIds;
export declare class IntegrationRepository extends BaseRepository<IntegrationDBModel, IntegrationEntity, EnforceEnvOrOrgIds> {
    private integration;
    constructor();
    find(query: IntegrationQuery, select?: string, options?: {
        limit?: number;
        sort?: any;
        skip?: number;
    }): Promise<IntegrationEntity[]>;
    findByEnvironmentId(environmentId: string): Promise<IntegrationEntity[]>;
    findHighestPriorityIntegration({ _organizationId, _environmentId, channel, }: Pick<IntegrationEntity, '_environmentId' | '_organizationId' | 'channel'>): Promise<IntegrationEntity | null>;
    countActiveExcludingNovu({ _organizationId, _environmentId, channel, }: Pick<IntegrationEntity, '_environmentId' | '_organizationId' | 'channel'>): Promise<number>;
    create(data: IntegrationQuery): Promise<IntegrationEntity>;
    delete(query: IntegrationQuery): Promise<any>;
    deleteMany(query: IntegrationQuery): Promise<IDeleteResult>;
    findDeleted(query: IntegrationQuery): Promise<IntegrationEntity>;
    recalculatePriorityForAllActive({ _id, _organizationId, _environmentId, channel, }: Pick<IntegrationEntity, '_environmentId' | '_organizationId' | 'channel'> & {
        _id?: string;
        exclude?: boolean;
    }): Promise<void>;
}
//# sourceMappingURL=integration.repository.d.ts.map