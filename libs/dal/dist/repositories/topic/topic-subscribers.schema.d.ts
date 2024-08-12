import mongoose from 'mongoose';
import { TopicSubscribersDBModel } from './topic-subscribers.entity';
export declare const TopicSubscribers: mongoose.Model<TopicSubscribersDBModel, {}, {}, {}, mongoose.Document<unknown, {}, TopicSubscribersDBModel> & Omit<import("./topic-subscribers.entity").TopicSubscribersEntity, "_organizationId" | "_environmentId" | "_subscriberId" | "_topicId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
    _topicId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=topic-subscribers.schema.d.ts.map