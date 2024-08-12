import mongoose from 'mongoose';
import { IntegrationDBModel } from './integration.entity';
export declare const Integration: mongoose.Model<IntegrationDBModel, {}, {}, {}, mongoose.Document<unknown, {}, IntegrationDBModel> & Omit<import("./integration.entity").IntegrationEntity, "_organizationId" | "_environmentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=integration.schema.d.ts.map