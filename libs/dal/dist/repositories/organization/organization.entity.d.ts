import { ApiServiceLevelEnum, IOrganizationEntity, ProductUseCases } from '@novu/shared';
export declare class OrganizationEntity implements IOrganizationEntity {
    _id: string;
    name: string;
    logo?: string;
    apiServiceLevel?: ApiServiceLevelEnum;
    branding?: Branding;
    partnerConfigurations?: IPartnerConfiguration[];
    defaultLocale?: string;
    domain?: string;
    productUseCases?: ProductUseCases;
    language?: string[];
    createdAt: string;
    updatedAt: string;
    externalId?: string;
    createdBy?: string;
}
export type Branding = {
    fontFamily?: string;
    fontColor?: string;
    contentBackground?: string;
    logo: string;
    color: string;
    direction?: 'ltr' | 'rtl';
};
export type OrganizationDBModel = OrganizationEntity;
export interface IPartnerConfiguration {
    accessToken: string;
    configurationId: string;
    projectIds?: string[];
    teamId?: string;
    partnerType: PartnerTypeEnum;
}
export declare enum PartnerTypeEnum {
    VERCEL = "vercel"
}
export declare enum DirectionEnum {
    LTR = "ltr",
    RTL = "trl"
}
//# sourceMappingURL=organization.entity.d.ts.map