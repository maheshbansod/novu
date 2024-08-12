import mongoose from 'mongoose';
import { SubscriberPreferenceDBModel } from './subscriber-preference.entity';
export declare const SubscriberPreference: mongoose.Model<SubscriberPreferenceDBModel, {}, {}, {}, mongoose.Document<unknown, {}, SubscriberPreferenceDBModel> & Omit<import("./subscriber-preference.entity").SubscriberPreferenceEntity, "_organizationId" | "_environmentId" | "_templateId" | "_subscriberId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _templateId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=subscriber-preference.schema.d.ts.map