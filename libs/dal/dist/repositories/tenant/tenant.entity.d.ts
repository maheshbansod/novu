import { TenantCustomData } from '@novu/shared';
import { TenantId } from './types';
import { EnvironmentId } from '../environment';
import { ChangePropsValueType } from '../../types/helpers';
import { OrganizationId } from '../organization';
export declare class TenantEntity {
    _id: TenantId;
    identifier: string;
    name?: string;
    deleted?: boolean;
    createdAt: string;
    updatedAt: string;
    data?: TenantCustomData;
    _environmentId: EnvironmentId;
    _organizationId: OrganizationId;
}
export type TenantDBModel = ChangePropsValueType<TenantEntity, '_environmentId' | '_organizationId'>;
//# sourceMappingURL=tenant.entity.d.ts.map