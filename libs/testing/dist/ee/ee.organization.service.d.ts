import { ApiServiceLevelEnum } from '@novu/shared';
export declare class EEOrganizationService {
    private organizationRepository;
    private communityOrganizationRepository;
    private memberRepository;
    createOrganization(orgId: string): Promise<import("@novu/dal").OrganizationEntity>;
    addMember(organizationId: string, userId: string): Promise<void>;
    getOrganization(organizationId: string): Promise<import("@novu/dal").OrganizationEntity>;
    updateServiceLevel(organizationId: string, serviceLevel: ApiServiceLevelEnum): Promise<void>;
}
//# sourceMappingURL=ee.organization.service.d.ts.map