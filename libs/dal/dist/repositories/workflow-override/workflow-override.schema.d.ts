import mongoose from 'mongoose';
import { WorkflowOverrideDBModel } from './workflow-override.entity';
export declare const WorkflowOverride: mongoose.Model<WorkflowOverrideDBModel, {}, {}, {}, mongoose.Document<unknown, {}, WorkflowOverrideDBModel> & Omit<import("./workflow-override.entity").WorkflowOverrideEntity, "_organizationId" | "_environmentId" | "_workflowId" | "_tenantId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _workflowId: mongoose.Types.ObjectId;
    _tenantId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=workflow-override.schema.d.ts.map