import mongoose from 'mongoose';
import { FeedDBModel } from './feed.entity';
export declare const Feed: mongoose.Model<FeedDBModel, {}, {}, {}, mongoose.Document<unknown, {}, FeedDBModel> & Omit<import("./feed.entity").FeedEntity, "_organizationId" | "_environmentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=feed.schema.d.ts.map