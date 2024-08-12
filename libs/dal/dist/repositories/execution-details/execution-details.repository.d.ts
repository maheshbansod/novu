import { ExecutionDetailsStatusEnum } from '@novu/shared';
import { ExecutionDetailsEntity, ExecutionDetailsDBModel } from './execution-details.entity';
import { BaseRepository } from '../base-repository';
import { EnforceEnvId } from '../../types/enforce';
export declare class ExecutionDetailsRepository extends BaseRepository<ExecutionDetailsDBModel, ExecutionDetailsEntity, EnforceEnvId> {
    constructor();
    updateStatus(environmentId: string, executionDetailsId: string, status: ExecutionDetailsStatusEnum): Promise<void>;
    findAllNotificationExecutions(organizationId: string, environmentId: string, notificationId: string): Promise<ExecutionDetailsEntity[]>;
}
//# sourceMappingURL=execution-details.repository.d.ts.map