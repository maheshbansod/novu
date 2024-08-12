import mongoose from 'mongoose';
import { LogDBModel } from './log.entity';
export declare const Log: mongoose.Model<LogDBModel, {}, {}, {}, mongoose.Document<unknown, {}, LogDBModel> & Omit<Omit<import("./log.entity").LogEntity, "createdAt">, "_organizationId" | "_environmentId" | "_subscriberId" | "_notificationId" | "_messageId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
    _notificationId: mongoose.Types.ObjectId;
    _messageId: mongoose.Types.ObjectId;
} & {
    createdAt: Date;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=log.schema.d.ts.map