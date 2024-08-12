import mongoose from 'mongoose';
import { NotificationDBModel } from './notification.entity';
export declare const Notification: mongoose.Model<NotificationDBModel, {}, {}, {}, mongoose.Document<unknown, {}, NotificationDBModel> & Omit<import("./notification.entity").NotificationEntity, "_organizationId" | "_environmentId" | "_templateId" | "_subscriberId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _templateId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=notification.schema.d.ts.map