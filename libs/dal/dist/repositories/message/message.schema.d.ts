import mongoose from 'mongoose';
import { MessageDBModel } from './message.entity';
export declare const Message: mongoose.Model<MessageDBModel, {}, {}, {}, mongoose.Document<unknown, {}, MessageDBModel> & Omit<import("./message.entity").MessageEntity, "_organizationId" | "_environmentId" | "_templateId" | "_subscriberId" | "_notificationId" | "_feedId" | "_messageTemplateId" | "_jobId" | "_actorId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _templateId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
    _notificationId: mongoose.Types.ObjectId;
    _feedId: mongoose.Types.ObjectId;
    _messageTemplateId: mongoose.Types.ObjectId;
    _jobId: mongoose.Types.ObjectId;
    _actorId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=message.schema.d.ts.map