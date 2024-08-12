import { IPartnerConfiguration, OrganizationDBModel, OrganizationEntity } from './organization.entity';
import { BaseRepository } from '../base-repository';
import { ApiServiceLevelEnum } from '@novu/shared';
import { IOrganizationRepository } from './organization-repository.interface';
export declare class CommunityOrganizationRepository extends BaseRepository<OrganizationDBModel, OrganizationEntity, object> implements IOrganizationRepository {
    private memberRepository;
    constructor();
    findById(id: string, select?: string): Promise<OrganizationEntity | null>;
    findUserActiveOrganizations(userId: string): Promise<OrganizationEntity[]>;
    private getUsersMembersOrganizationIds;
    updateBrandingDetails(organizationId: string, branding: {
        color: string;
        logo: string;
    }): Promise<{
        matched: number;
        modified: number;
    }>;
    renameOrganization(organizationId: string, payload: {
        name: string;
    }): Promise<{
        matched: number;
        modified: number;
    }>;
    updateServiceLevel(organizationId: string, apiServiceLevel: ApiServiceLevelEnum): Promise<{
        matched: number;
        modified: number;
    }>;
    updateDefaultLocale(organizationId: string, defaultLocale: string): Promise<{
        matched: number;
        modified: number;
    }>;
    findPartnerConfigurationDetails(organizationId: string, userId: string, configurationId: string): Promise<OrganizationEntity[]>;
    updatePartnerConfiguration(organizationId: string, userId: string, configuration: IPartnerConfiguration): Promise<{
        matched: number;
        modified: number;
    }>;
    bulkUpdatePartnerConfiguration(userId: string, data: Record<string, string[]>, configurationId: string): Promise<any>;
}
//# sourceMappingURL=community.organization.repository.d.ts.map