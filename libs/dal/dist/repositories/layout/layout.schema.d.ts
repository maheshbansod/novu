import mongoose from 'mongoose';
import { LayoutDBModel } from './layout.entity';
export declare const Layout: mongoose.Model<LayoutDBModel, {}, {}, {}, mongoose.Document<unknown, {}, LayoutDBModel> & Omit<import("./layout.entity").LayoutEntity, "_organizationId" | "_parentId" | "_environmentId" | "_creatorId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _parentId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
    _creatorId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=layout.schema.d.ts.map