import mongoose from 'mongoose';
import { EnvironmentDBModel } from './environment.entity';
export declare const Environment: mongoose.Model<EnvironmentDBModel, {}, {}, {}, mongoose.Document<unknown, {}, EnvironmentDBModel> & Omit<Omit<import("./environment.entity").EnvironmentEntity, "apiKeys">, "_organizationId" | "_parentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _parentId: mongoose.Types.ObjectId;
} & {
    apiKeys: import("./environment.entity").IApiKey & {
        _userId: mongoose.Types.ObjectId;
    }[];
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=environment.schema.d.ts.map