import type { ButtonTypeEnum, MessageActionStatusEnum, IPaginatedResponse, ISessionDto, INotificationDto, MessagesStatusEnum, PreferenceLevelEnum } from '@novu/shared';
import { ITabCountQuery, IStoreQuery, IUserPreferenceSettings, IUnseenCountQuery, IUnreadCountQuery, IUserGlobalPreferenceSettings, ApiOptions } from '../index';
export declare class ApiService {
    private httpClient;
    isAuthenticated: boolean;
    constructor(backendUrl: string, apiVersion?: ApiOptions['apiVersion']);
    constructor(options?: ApiOptions);
    private removeNullUndefined;
    setAuthorizationToken(token: string): void;
    disposeAuthorizationToken(): void;
    updateAction(messageId: string, executedType: `${ButtonTypeEnum}`, status: `${MessageActionStatusEnum}`, payload?: Record<string, unknown>): Promise<INotificationDto>;
    markMessageAs(messageId: string | string[], mark: {
        seen?: boolean;
        read?: boolean;
    }): Promise<any>;
    markMessagesAs({ messageId, markAs, }: {
        messageId: string | string[];
        markAs: `${MessagesStatusEnum}`;
    }): Promise<INotificationDto[]>;
    removeMessage(messageId: string): Promise<any>;
    removeMessages(messageIds: string[]): Promise<any>;
    removeAllMessages(feedId?: string): Promise<any>;
    markAllMessagesAsRead(feedId?: string | string[]): Promise<number>;
    markAllMessagesAsSeen(feedId?: string | string[]): Promise<number>;
    getNotificationsList(page: number, { payload, ...rest }?: IStoreQuery): Promise<IPaginatedResponse<INotificationDto>>;
    initializeSession(appId: string, subscriberId: string, hmacHash?: any): Promise<ISessionDto>;
    postUsageLog(name: string, payload: {
        [key: string]: string | boolean | undefined;
    }): Promise<any>;
    getUnseenCount(query?: IUnseenCountQuery): Promise<{
        count: number;
    }>;
    getUnreadCount(query?: IUnreadCountQuery): Promise<{
        count: number;
    }>;
    getTabCount(query?: ITabCountQuery): Promise<any>;
    getOrganization(): Promise<any>;
    getUserPreference(): Promise<IUserPreferenceSettings[]>;
    getUserGlobalPreference(): Promise<IUserGlobalPreferenceSettings[]>;
    getPreferences({ level, }: {
        level?: `${PreferenceLevelEnum}`;
    }): Promise<Array<IUserPreferenceSettings | IUserGlobalPreferenceSettings>>;
    updateSubscriberPreference(templateId: string, channelType: string, enabled: boolean): Promise<IUserPreferenceSettings>;
    updateSubscriberGlobalPreference(preferences: {
        channelType: string;
        enabled: boolean;
    }[], enabled?: boolean): Promise<IUserPreferenceSettings>;
}
//# sourceMappingURL=api.service.d.ts.map