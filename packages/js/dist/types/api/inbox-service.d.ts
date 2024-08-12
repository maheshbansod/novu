import { ApiOptions } from '@novu/client';
import type { ActionTypeEnum, ChannelPreference, InboxNotification, NotificationFilter, PreferencesResponse, Session } from '../types';
export type InboxServiceOptions = ApiOptions;
export declare class InboxService {
    #private;
    isSessionInitialized: boolean;
    constructor(options?: InboxServiceOptions);
    initializeSession({ applicationIdentifier, subscriberId, subscriberHash, }: {
        applicationIdentifier: string;
        subscriberId: string;
        subscriberHash?: string;
    }): Promise<Session>;
    fetchNotifications({ after, archived, limit, offset, read, tags, }: {
        tags?: string[];
        read?: boolean;
        archived?: boolean;
        limit?: number;
        after?: string;
        offset?: number;
    }): Promise<{
        data: InboxNotification[];
        hasMore: boolean;
        filter: NotificationFilter;
    }>;
    count({ filters }: {
        filters: Array<{
            tags?: string[];
            read?: boolean;
            archived?: boolean;
        }>;
    }): Promise<{
        data: Array<{
            count: number;
            filter: NotificationFilter;
        }>;
    }>;
    read(notificationId: string): Promise<InboxNotification>;
    unread(notificationId: string): Promise<InboxNotification>;
    archive(notificationId: string): Promise<InboxNotification>;
    unarchive(notificationId: string): Promise<InboxNotification>;
    readAll({ tags }: {
        tags?: string[];
    }): Promise<void>;
    archiveAll({ tags }: {
        tags?: string[];
    }): Promise<void>;
    archiveAllRead({ tags }: {
        tags?: string[];
    }): Promise<void>;
    completeAction({ actionType, notificationId, }: {
        notificationId: string;
        actionType: ActionTypeEnum;
    }): Promise<InboxNotification>;
    revertAction({ actionType, notificationId, }: {
        notificationId: string;
        actionType: ActionTypeEnum;
    }): Promise<InboxNotification>;
    fetchPreferences(): Promise<PreferencesResponse[]>;
    updateGlobalPreferences(channelPreferences: ChannelPreference): Promise<PreferencesResponse>;
    updateWorkflowPreferences({ workflowId, channelPreferences, }: {
        workflowId: string;
        channelPreferences: ChannelPreference;
    }): Promise<PreferencesResponse>;
}
//# sourceMappingURL=inbox-service.d.ts.map