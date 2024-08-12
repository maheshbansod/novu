import mongoose from 'mongoose';
import { ExecutionDetailsDBModel } from './execution-details.entity';
export declare const ExecutionDetails: mongoose.Model<ExecutionDetailsDBModel, {}, {}, {}, mongoose.Document<unknown, {}, ExecutionDetailsDBModel> & Omit<import("./execution-details.entity").ExecutionDetailsEntity, "_organizationId" | "_environmentId" | "_subscriberId" | "_notificationId" | "_notificationTemplateId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
    _notificationId: mongoose.Types.ObjectId;
    _notificationTemplateId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=execution-details.schema.d.ts.map