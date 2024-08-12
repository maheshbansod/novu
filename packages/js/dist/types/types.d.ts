export type { Notification } from './notifications';
export declare enum NotificationStatus {
    READ = "read",
    SEEN = "seen",
    UNREAD = "unread",
    UNSEEN = "unseen"
}
export declare enum NotificationButton {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export declare enum NotificationActionStatus {
    PENDING = "pending",
    DONE = "done"
}
export declare enum CtaType {
    REDIRECT = "redirect"
}
export declare enum PreferenceLevel {
    GLOBAL = "global",
    TEMPLATE = "template"
}
export declare enum ChannelType {
    IN_APP = "in_app",
    EMAIL = "email",
    SMS = "sms",
    CHAT = "chat",
    PUSH = "push"
}
export declare enum PreferenceOverrideSource {
    SUBSCRIBER = "subscriber",
    TEMPLATE = "template",
    WORKFLOW_OVERRIDE = "workflowOverride"
}
export declare enum WebSocketEvent {
    RECEIVED = "notification_received",
    UNREAD = "unread_count_changed",
    UNSEEN = "unseen_count_changed"
}
export declare enum ActionTypeEnum {
    PRIMARY = "primary",
    SECONDARY = "secondary"
}
export type Session = {
    token: string;
    totalUnreadCount: number;
};
export type MessageButton = {
    type: NotificationButton;
    content: string;
    resultContent?: string;
};
export type MessageAction = {
    status?: NotificationActionStatus;
    buttons?: MessageButton[];
    result: {
        payload?: Record<string, unknown>;
        type?: NotificationButton;
    };
};
export type Subscriber = {
    id: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;
    subscriberId: string;
};
export type Action = {
    label: string;
    isCompleted: boolean;
};
export type InboxNotification = {
    id: string;
    subject?: string;
    body: string;
    to: Subscriber;
    isRead: boolean;
    isArchived: boolean;
    createdAt: string;
    readAt?: string | null;
    archivedAt?: string | null;
    avatar?: string;
    primaryAction?: Action;
    secondaryAction?: Action;
    channelType: ChannelType;
    tags?: string[];
    redirect?: {
        url: string;
    };
};
export type NotificationFilter = {
    tags?: string[];
    read?: boolean;
    archived?: boolean;
};
export type Workflow = {
    id: string;
    name: string;
    critical: boolean;
    identifier: string;
    data?: Record<string, any>;
};
export type ChannelPreference = {
    email?: boolean;
    sms?: boolean;
    in_app?: boolean;
    chat?: boolean;
    push?: boolean;
};
export type PaginatedResponse<T = unknown> = {
    data: T[];
    hasMore: boolean;
    totalCount: number;
    pageSize: number;
    page: number;
};
export type PreferencesResponse = {
    level: PreferenceLevel;
    enabled: boolean;
    channels: ChannelPreference;
    overrides?: IPreferenceOverride[];
    workflow?: Workflow;
};
export declare enum PreferenceOverrideSourceEnum {
    SUBSCRIBER = "subscriber",
    TEMPLATE = "template",
    WORKFLOW_OVERRIDE = "workflowOverride"
}
export type IPreferenceOverride = {
    channel: ChannelType;
    source: PreferenceOverrideSourceEnum;
};
export type TODO = any;
export type Result<D = undefined, E = unknown> = Promise<{
    data?: D;
    error?: E;
}>;
export type NovuOptions = {
    applicationIdentifier: string;
    subscriberId: string;
    subscriberHash?: string;
    backendUrl?: string;
    socketUrl?: string;
    useCache?: boolean;
};
//# sourceMappingURL=types.d.ts.map