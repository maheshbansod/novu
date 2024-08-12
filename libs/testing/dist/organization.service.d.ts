import { ApiServiceLevelEnum } from '@novu/shared';
import { OrganizationRepository } from '@novu/dal';
export declare class OrganizationService {
    private organizationRepository;
    private memberRepository;
    createOrganization(options?: Parameters<OrganizationRepository['create']>[0]): Promise<import("@novu/dal").OrganizationEntity>;
    addMember(organizationId: string, userId: string): Promise<void>;
    getOrganization(organizationId: string): Promise<import("@novu/dal").OrganizationEntity>;
    updateServiceLevel(organizationId: string, serviceLevel: ApiServiceLevelEnum): Promise<void>;
}
//# sourceMappingURL=organization.service.d.ts.map