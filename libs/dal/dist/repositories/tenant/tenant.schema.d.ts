import mongoose from 'mongoose';
import { TenantDBModel } from './tenant.entity';
export declare const Tenant: mongoose.Model<TenantDBModel, {}, {}, {}, mongoose.Document<unknown, {}, TenantDBModel> & Omit<import("./tenant.entity").TenantEntity, "_organizationId" | "_environmentId"> & {
    _organizationId: mongoose.Types.ObjectId;
    _environmentId: mongoose.Types.ObjectId;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=tenant.schema.d.ts.map