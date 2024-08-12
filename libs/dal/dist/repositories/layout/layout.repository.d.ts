import { FilterQuery } from 'mongoose';
import { LayoutEntity, LayoutDBModel } from './layout.entity';
import { EnvironmentId, OrderDirectionEnum, OrganizationId, LayoutId } from './types';
import { BaseRepository } from '../base-repository';
import { EnforceEnvOrOrgIds } from '../../types/enforce';
type LayoutQuery = FilterQuery<LayoutDBModel> & EnforceEnvOrOrgIds;
export declare class LayoutRepository extends BaseRepository<LayoutDBModel, LayoutEntity, EnforceEnvOrOrgIds> {
    private layout;
    constructor();
    createLayout(entity: Omit<LayoutEntity, '_id' | 'createdAt' | 'updatedAt'>): Promise<LayoutEntity>;
    deleteLayout(_id: LayoutId, _environmentId: EnvironmentId, _organizationId: OrganizationId): Promise<void>;
    findDefault(_environmentId: EnvironmentId, _organizationId: OrganizationId): Promise<LayoutEntity | null>;
    findDeleted(id: LayoutId, environmentId: EnvironmentId): Promise<LayoutEntity | null>;
    findDeletedByParentId(parentId: LayoutId, environmentId: EnvironmentId): Promise<LayoutEntity | null>;
    filterLayouts(query: LayoutQuery, pagination: {
        limit: number;
        skip: number;
        sortBy?: string;
        orderBy?: OrderDirectionEnum;
    }): Promise<LayoutEntity[]>;
    updateIsDefault(_id: LayoutId, _environmentId: EnvironmentId, _organizationId: OrganizationId, isDefault: boolean): Promise<void>;
    updateLayout(entity: LayoutEntity): Promise<LayoutEntity>;
}
export {};
//# sourceMappingURL=layout.repository.d.ts.map