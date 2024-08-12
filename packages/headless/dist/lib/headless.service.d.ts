import { IUserPreferenceSettings, IStoreQuery, IUserGlobalPreferenceSettings } from '@novu/client';
import { IOrganizationEntity, IMessage, IPaginatedResponse } from '@novu/shared';
import type { ISession } from '../utils/types';
import { FetchResult, IFeedId, IHeadlessServiceOptions, IMessageId, IUpdateActionVariables, IUpdateUserPreferencesVariables, IUpdateUserGlobalPreferencesVariables, UpdateResult } from './types';
export declare const NOTIFICATION_CENTER_TOKEN_KEY = "nc_token";
export declare class HeadlessService {
    private options;
    private api;
    private queryClient;
    private queryService;
    private session;
    private socket;
    private sessionQueryOptions;
    private organizationQueryOptions;
    private unseenCountQueryOptions;
    private unreadCountQueryOptions;
    private userPreferencesQueryOptions;
    private userGlobalPreferencesQueryOptions;
    constructor(options: IHeadlessServiceOptions);
    private assertSessionInitialized;
    private applyToken;
    private initializeSocket;
    private callFetchListener;
    private callFetchListenerWithPagination;
    private callUpdateListener;
    initializeSession({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<ISession>) => void;
        onSuccess?: (session: ISession) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    fetchOrganization({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<IOrganizationEntity>) => void;
        onSuccess?: (session: IOrganizationEntity) => void;
        onError?: (error: unknown) => void;
    }): Promise<() => void>;
    fetchUnseenCount({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<{
            count: number;
        }>) => void;
        onSuccess?: (data: {
            count: number;
        }) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    fetchUnreadCount({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<{
            count: number;
        }>) => void;
        onSuccess?: (data: {
            count: number;
        }) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    listenNotificationReceive({ listener, }: {
        listener: (message: IMessage) => void;
    }): () => void;
    listenUnseenCountChange({ listener, }: {
        listener: (unseenCount: number) => void;
    }): () => void;
    listenUnreadCountChange({ listener, }: {
        listener: (unreadCount: number) => void;
    }): () => void;
    fetchNotifications({ page, storeId, query, listener, onSuccess, onError, }: {
        page?: number;
        storeId?: string;
        query?: IStoreQuery;
        listener: (result: FetchResult<IPaginatedResponse<IMessage>>) => void;
        onSuccess?: (messages: IPaginatedResponse<IMessage>) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    fetchUserPreferences({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<IUserPreferenceSettings[]>) => void;
        onSuccess?: (settings: IUserPreferenceSettings[]) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    fetchUserGlobalPreferences({ listener, onSuccess, onError, }: {
        listener: (result: FetchResult<IUserGlobalPreferenceSettings[]>) => void;
        onSuccess?: (settings: IUserGlobalPreferenceSettings[]) => void;
        onError?: (error: unknown) => void;
    }): () => void;
    updateUserPreferences({ templateId, channelType, checked, listener, onSuccess, onError, }: {
        templateId: IUpdateUserPreferencesVariables['templateId'];
        channelType: IUpdateUserPreferencesVariables['channelType'];
        checked: IUpdateUserPreferencesVariables['checked'];
        listener: (result: UpdateResult<IUserPreferenceSettings, unknown, IUpdateUserPreferencesVariables>) => void;
        onSuccess?: (settings: IUserPreferenceSettings) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    updateUserGlobalPreferences({ preferences, enabled, listener, onSuccess, onError, }: {
        preferences: IUpdateUserGlobalPreferencesVariables['preferences'];
        enabled?: IUpdateUserGlobalPreferencesVariables['enabled'];
        listener: (result: UpdateResult<IUserGlobalPreferenceSettings, unknown, IUpdateUserGlobalPreferencesVariables>) => void;
        onSuccess?: (settings: IUserGlobalPreferenceSettings) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    markNotificationsAsRead({ messageId, listener, onSuccess, onError, }: {
        messageId: IMessageId;
        listener: (result: UpdateResult<IMessage[], unknown, {
            messageId: IMessageId;
        }>) => void;
        onSuccess?: (message: IMessage[]) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    markNotificationsAsSeen({ messageId, listener, onSuccess, onError, }: {
        messageId: IMessageId;
        listener: (result: UpdateResult<IMessage[], unknown, {
            messageId: IMessageId;
        }>) => void;
        onSuccess?: (message: IMessage[]) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    markNotificationsAs({ messageId, mark, listener, onSuccess, onError, }: {
        messageId: IMessageId;
        mark: {
            seen?: boolean;
            read?: boolean;
        };
        listener: (result: UpdateResult<IMessage[], unknown, {
            messageId: IMessageId;
        }>) => void;
        onSuccess?: (message: IMessage[]) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    removeNotification({ messageId, listener, onSuccess, onError, }: {
        messageId: string;
        listener: (result: UpdateResult<IMessage, unknown, {
            messageId: string;
        }>) => void;
        onSuccess?: (message: IMessage) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    removeNotifications({ messageIds, listener, onSuccess, onError, }: {
        messageIds: string[];
        listener: (result: UpdateResult<void, unknown, {
            messageIds: string[];
        }>) => void;
        onSuccess?: (obj: void) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    updateAction({ messageId, actionButtonType, status, payload, listener, onSuccess, onError, }: {
        messageId: IUpdateActionVariables['messageId'];
        actionButtonType: IUpdateActionVariables['actionButtonType'];
        status: IUpdateActionVariables['status'];
        payload?: IUpdateActionVariables['payload'];
        listener: (result: UpdateResult<IMessage, unknown, IUpdateActionVariables>) => void;
        onSuccess?: (data: IMessage) => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
    markAllMessagesAsRead({ listener, onSuccess, onError, feedId, }: {
        listener: (result: UpdateResult<number, unknown, undefined>) => void;
        onSuccess?: (count: number) => void;
        onError?: (error: unknown) => void;
        feedId?: IFeedId;
    }): Promise<void>;
    markAllMessagesAsSeen({ listener, onSuccess, onError, feedId, }: {
        listener: (result: UpdateResult<number, unknown, undefined>) => void;
        onSuccess?: (count: number) => void;
        onError?: (error: unknown) => void;
        feedId?: IFeedId;
    }): Promise<void>;
    removeAllNotifications({ feedId, listener, onSuccess, onError, }: {
        feedId?: string;
        listener: (result: UpdateResult<void, unknown, undefined>) => void;
        onSuccess?: () => void;
        onError?: (error: unknown) => void;
    }): Promise<void>;
}
//# sourceMappingURL=headless.service.d.ts.map