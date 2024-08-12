import { BaseRepository } from '../base-repository';
import { TenantDBModel, TenantEntity } from './tenant.entity';
import { EnforceEnvId } from '../../types';
export declare class TenantRepository extends BaseRepository<TenantDBModel, TenantEntity, EnforceEnvId> {
    private tenant;
    constructor();
}
//# sourceMappingURL=tenant.repository.d.ts.map