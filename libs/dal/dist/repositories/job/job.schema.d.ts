import mongoose from 'mongoose';
import { JobDBModel } from './job.entity';
export declare const Job: mongoose.Model<JobDBModel, {}, {}, {}, mongoose.Document<unknown, {}, JobDBModel> & Omit<Omit<import("./job.entity").JobEntity, "_parentId" | "_actorId">, "_userId" | "_organizationId" | "_environmentId" | "_subscriberId" | "_notificationId"> & {
    _userId: mongoose.Types.ObjectId;
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _subscriberId: mongoose.Types.ObjectId;
    _notificationId: mongoose.Types.ObjectId;
} & {
    _parentId?: mongoose.Types.ObjectId | undefined;
    _actorId?: mongoose.Types.ObjectId | undefined;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=job.schema.d.ts.map