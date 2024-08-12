import { MemberRoleEnum, MemberStatusEnum } from '@novu/shared';
import { MemberEntity, MemberDBModel } from './member.entity';
import { BaseRepository } from '../base-repository';
import type { EnforceOrgId } from '../../types/enforce';
import { IMemberRepository } from './member-repository.interface';
import { IAddMemberData } from './member.repository';
export declare class CommunityMemberRepository extends BaseRepository<MemberDBModel, MemberEntity, EnforceOrgId> implements IMemberRepository {
    constructor();
    removeMemberById(organizationId: string, memberId: string): Promise<{
        acknowledged: boolean;
        deletedCount: number;
    }>;
    updateMemberRoles(organizationId: string, memberId: string, roles: MemberRoleEnum[]): Promise<{
        matched: number;
        modified: number;
    }>;
    getOrganizationMembers(organizationId: string): Promise<any[]>;
    getOrganizationAdminAccount(organizationId: string): Promise<MemberEntity | null>;
    getOrganizationAdmins(organizationId: string): Promise<{
        _userId: any;
        user: string;
        _id: string;
        roles: MemberRoleEnum[];
        invite?: import("@novu/shared").IMemberInvite | undefined;
        memberStatus: MemberStatusEnum;
        _organizationId: string;
    }[]>;
    findUserActiveMembers(userId: string): Promise<MemberEntity[]>;
    convertInvitedUserToMember(organizationId: string, token: string, data: {
        memberStatus: MemberStatusEnum;
        _userId: string;
        answerDate: Date;
    }): Promise<void>;
    findByInviteToken(token: string): Promise<MemberEntity | null>;
    findInviteeByEmail(organizationId: string, email: string): Promise<MemberEntity | null>;
    addMember(organizationId: string, member: IAddMemberData): Promise<void>;
    isMemberOfOrganization(organizationId: string, userId: string): Promise<boolean>;
    findMemberByUserId(organizationId: string, userId: string): Promise<MemberEntity | null>;
    findMemberById(organizationId: string, memberId: string): Promise<MemberEntity | null>;
}
//# sourceMappingURL=community.member.repository.d.ts.map