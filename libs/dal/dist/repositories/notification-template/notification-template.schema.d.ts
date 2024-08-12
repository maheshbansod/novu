import mongoose from 'mongoose';
import { NotificationTemplateDBModel } from './notification-template.entity';
export declare const NotificationTemplate: mongoose.Model<NotificationTemplateDBModel, {}, {}, {}, mongoose.Document<unknown, {}, NotificationTemplateDBModel> & Omit<Omit<import("./notification-template.entity").NotificationTemplateEntity, "_parentId">, "_organizationId" | "_environmentId" | "_creatorId" | "_notificationGroupId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _creatorId: mongoose.Types.ObjectId;
    _notificationGroupId: mongoose.Types.ObjectId;
} & {
    _parentId?: mongoose.Types.ObjectId | undefined;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=notification-template.schema.d.ts.map