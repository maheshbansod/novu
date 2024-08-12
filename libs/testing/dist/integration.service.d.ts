import { ChannelTypeEnum, ProvidersIdEnum } from '@novu/shared';
export declare class IntegrationService {
    private integrationRepository;
    private environmentRepository;
    createIntegration({ organizationId, environmentId, channel, providerId: providerIdArg, name: nameArg, active, }: {
        environmentId: string;
        organizationId: string;
        channel: ChannelTypeEnum;
        providerId?: ProvidersIdEnum;
        name?: string;
        active?: boolean;
    }): Promise<import("@novu/dal").IntegrationEntity>;
    deleteAllForOrganization(organizationId: string): Promise<void>;
    createChannelIntegrations(environmentId: string, organizationId: string): Promise<void>;
}
//# sourceMappingURL=integration.service.d.ts.map