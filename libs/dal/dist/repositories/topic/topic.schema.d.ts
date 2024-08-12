import mongoose from 'mongoose';
import { TopicDBModel } from './topic.entity';
export declare const Topic: mongoose.Model<TopicDBModel, {}, {}, {}, mongoose.Document<unknown, {}, TopicDBModel> & Omit<import("./topic.entity").TopicEntity, "_organizationId" | "_environmentId"> & {
    _environmentId: mongoose.Types.ObjectId;
    _organizationId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=topic.schema.d.ts.map