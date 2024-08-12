import mongoose from 'mongoose';
import { NotificationGroupDBModel } from './notification-group.entity';
export declare const NotificationGroup: mongoose.Model<NotificationGroupDBModel, {}, {}, {}, mongoose.Document<unknown, {}, NotificationGroupDBModel> & Omit<import("./notification-group.entity").NotificationGroupEntity, "_organizationId" | "_parentId" | "_environmentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _parentId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=notification-group.schema.d.ts.map