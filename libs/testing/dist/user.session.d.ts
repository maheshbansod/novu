import 'cross-fetch/polyfill';
import { SuperTest, Test } from 'supertest';
import { ApiServiceLevelEnum, IApiRateLimitMaximum, JobTopicNameEnum, StepTypeEnum, TriggerRecipientsPayload, ClerkJwtPayload } from '@novu/shared';
import { UserEntity, EnvironmentEntity, OrganizationEntity, NotificationGroupEntity, ChangeEntity } from '@novu/dal';
import { TestServer } from './test-server.service';
import { CreateTemplatePayload } from './create-notification-template.interface';
type UserSessionOptions = {
    noOrganization?: boolean;
    noEnvironment?: boolean;
    showOnBoardingTour?: boolean;
    ee?: {
        userId: 'clerk_user_1' | 'clerk_user_2';
        orgId: 'clerk_org_1';
    };
};
export declare class UserSession {
    serverUrl: string;
    private notificationGroupRepository;
    private feedRepository;
    private layoutRepository;
    private changeRepository;
    private environmentService;
    private integrationService;
    private jobsService;
    token: string;
    subscriberToken: string;
    subscriberId: string;
    subscriberProfile: {
        _id: string;
    } | null;
    notificationGroups: NotificationGroupEntity[];
    organization: OrganizationEntity;
    user: UserEntity;
    testAgent: SuperTest<Test>;
    environment: EnvironmentEntity;
    testServer: null | TestServer;
    apiKey: string;
    constructor(serverUrl?: string);
    initialize(options?: UserSessionOptions): Promise<void>;
    private initializeCommunity;
    private initializeEE;
    private initializeWidgetSession;
    private shouldUseTestServer;
    private get requestEndpoint();
    fetchJWT(): Promise<void>;
    addOrganization(): Promise<OrganizationEntity>;
    private fetchJwtCommunity;
    private fetchJwtEE;
    updateEETokenClaims(claims: Partial<ClerkJwtPayload>): Promise<void>;
    private decodeClerkJWT;
    createEnvironmentsAndFeeds(): Promise<void>;
    createEnvironment(name?: string, parentId?: string): Promise<EnvironmentEntity>;
    updateOrganizationDetails(): Promise<void>;
    createTemplate(template?: Partial<CreateTemplatePayload>): Promise<import("@novu/dal").NotificationTemplateEntity>;
    createIntegrations(environments: EnvironmentEntity[]): Promise<void>;
    createChannelTemplate(channel: StepTypeEnum): Promise<import("@novu/dal").NotificationTemplateEntity>;
    private addOrganizationCommunity;
    private addOrganizationEE;
    switchToProdEnvironment(): Promise<void>;
    switchToDevEnvironment(): Promise<void>;
    switchEnvironment(environmentId: string): Promise<void>;
    createFeed(name?: string): Promise<import("@novu/dal").FeedEntity>;
    triggerEvent(triggerName: string, to: TriggerRecipientsPayload, payload?: {}): Promise<void>;
    awaitRunningJobs(templateId?: string | string[], delay?: boolean, unfinishedJobs?: number, organizationId?: string): Promise<{
        getDelayedTimestamp: () => Promise<number>;
        runDelayedImmediately: () => Promise<void>;
    }>;
    queueGet(jobTopicName: JobTopicNameEnum, getter: 'getDelayed'): Promise<import("bullmq").Job<any, any, string>[]>;
    applyChanges(where?: Partial<ChangeEntity>): Promise<void>;
    updateOrganizationServiceLevel(serviceLevel: ApiServiceLevelEnum): Promise<void>;
    updateEnvironmentApiRateLimits(apiRateLimits: Partial<IApiRateLimitMaximum>): Promise<void>;
}
export {};
//# sourceMappingURL=user.session.d.ts.map