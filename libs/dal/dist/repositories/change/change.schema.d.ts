import mongoose from 'mongoose';
import { ChangeDBModel } from './change.entity';
export declare const Change: mongoose.Model<ChangeDBModel, {}, {}, {}, mongoose.Document<unknown, {}, ChangeDBModel> & Omit<Omit<import("./change.entity").ChangeEntity, "_parentId">, "_organizationId" | "_environmentId" | "_creatorId" | "_entityId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _creatorId: mongoose.Types.ObjectId;
    _entityId: mongoose.Types.ObjectId;
} & {
    _parentId?: mongoose.Types.ObjectId | undefined;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=change.schema.d.ts.map