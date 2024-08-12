import mongoose from 'mongoose';
import { SubscriberDBModel, SubscriberEntity } from './subscriber.entity';
export declare const Subscriber: mongoose.Model<SubscriberDBModel, {}, {}, {}, mongoose.Document<unknown, {}, SubscriberDBModel> & Omit<SubscriberEntity, "_organizationId" | "_environmentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=subscriber.schema.d.ts.map