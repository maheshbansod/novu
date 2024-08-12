import mongoose from 'mongoose';
import { MemberDBModel } from './member.entity';
export declare const Member: mongoose.Model<MemberDBModel, {}, {}, {}, mongoose.Document<unknown, {}, MemberDBModel> & Omit<Omit<import("./member.entity").MemberEntity, "invite">, "_userId" | "_organizationId"> & {
    _userId: mongoose.Types.ObjectId;
    _organizationId: mongoose.Types.ObjectId;
} & {
    invite?: (import("@novu/shared").IMemberInvite & {
        _inviterId: mongoose.Types.ObjectId;
    }) | undefined;
} & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=member.schema.d.ts.map