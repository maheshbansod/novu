import mongoose from 'mongoose';
import { MessageTemplateDBModel } from './message-template.entity';
export declare const MessageTemplate: mongoose.Model<MessageTemplateDBModel, {}, {}, {}, mongoose.Document<unknown, {}, MessageTemplateDBModel> & Omit<import("./message-template.entity").MessageTemplateEntity, "_organizationId" | "_parentId" | "_environmentId" | "_creatorId" | "_layoutId" | "_feedId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _parentId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _creatorId: mongoose.Types.ObjectId;
    _layoutId: mongoose.Types.ObjectId;
    _feedId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=message-template.schema.d.ts.map