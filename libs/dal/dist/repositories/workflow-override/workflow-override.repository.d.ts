import { BaseRepository } from '../base-repository';
import { EnforceEnvId } from '../../types';
import { WorkflowOverrideDBModel, WorkflowOverrideEntity } from './workflow-override.entity';
export declare class WorkflowOverrideRepository extends BaseRepository<WorkflowOverrideDBModel, WorkflowOverrideEntity, EnforceEnvId> {
    private workflowOverride;
    constructor();
    getList(options: {
        skip: number;
        limit: number;
    }, query: {
        environmentId: string;
    }): Promise<{
        data: WorkflowOverrideEntity[];
    }>;
}
//# sourceMappingURL=workflow-override.repository.d.ts.map