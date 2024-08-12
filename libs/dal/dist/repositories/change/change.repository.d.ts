import { ChangeEntityTypeEnum } from '@novu/shared';
import { EnforceEnvOrOrgIds } from '../../types/enforce';
import { BaseRepository } from '../base-repository';
import { ChangeEntity, ChangeDBModel } from './change.entity';
import { ChangeEntityPopulated } from './types';
export declare class ChangeRepository extends BaseRepository<ChangeDBModel, ChangeEntity, EnforceEnvOrOrgIds> {
    constructor();
    getEntityChanges(organizationId: string, entityType: ChangeEntityTypeEnum, entityId: string): Promise<ChangeEntity[]>;
    getChangeId(environmentId: string, entityType: ChangeEntityTypeEnum, entityId: string): Promise<string>;
    getList(organizationId: string, environmentId: string, enabled: boolean, skip?: number, limit?: number): Promise<{
        totalCount: number;
        data: ChangeEntityPopulated[];
    }>;
    getParentId(environmentId: string, entityType: ChangeEntityTypeEnum, entityId: string): Promise<string | null>;
}
//# sourceMappingURL=change.repository.d.ts.map