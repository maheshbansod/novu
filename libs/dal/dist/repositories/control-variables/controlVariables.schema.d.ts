import mongoose from 'mongoose';
import { ChangePropsValueType } from '../../types';
import { ControlVariablesEntity } from './controlVariables.entity';
export type ControlVariablesModel = ChangePropsValueType<ControlVariablesEntity, '_environmentId' | '_organizationId' | '_workflowId'>;
export declare const ControlVariables: mongoose.Model<ControlVariablesModel, {}, {}, {}, mongoose.Document<unknown, {}, ControlVariablesModel> & Omit<ControlVariablesEntity, "_organizationId" | "_environmentId" | "_workflowId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _workflowId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=controlVariables.schema.d.ts.map