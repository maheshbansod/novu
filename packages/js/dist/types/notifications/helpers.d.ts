import { ActionTypeEnum, NotificationFilter, Result } from '../types';
import type { InboxService } from '../api';
import type { NovuEventEmitter } from '../event-emitter';
import { Notification } from './notification';
import type { ArchivedArgs, CompleteArgs, ReadArgs, RevertArgs, UnarchivedArgs, UnreadArgs } from './types';
import type { NotificationsCache } from '../cache';
export declare const read: ({ emitter, apiService, args, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: ReadArgs;
}) => Result<Notification>;
export declare const unread: ({ emitter, apiService, args, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: UnreadArgs;
}) => Result<Notification>;
export declare const archive: ({ emitter, apiService, args, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: ArchivedArgs;
}) => Result<Notification>;
export declare const unarchive: ({ emitter, apiService, args, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: UnarchivedArgs;
}) => Result<Notification>;
export declare const completeAction: ({ emitter, apiService, args, actionType, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: CompleteArgs;
    actionType: ActionTypeEnum;
}) => Result<Notification>;
export declare const revertAction: ({ emitter, apiService, args, actionType, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: RevertArgs;
    actionType: ActionTypeEnum;
}) => Result<Notification>;
export declare const readAll: ({ emitter, inboxService, notificationsCache, tags, }: {
    emitter: NovuEventEmitter;
    inboxService: InboxService;
    notificationsCache: NotificationsCache;
    tags?: NotificationFilter['tags'];
}) => Result<void>;
export declare const archiveAll: ({ emitter, inboxService, notificationsCache, tags, }: {
    emitter: NovuEventEmitter;
    inboxService: InboxService;
    notificationsCache: NotificationsCache;
    tags?: NotificationFilter['tags'];
}) => Result<void>;
export declare const archiveAllRead: ({ emitter, inboxService, notificationsCache, tags, }: {
    emitter: NovuEventEmitter;
    inboxService: InboxService;
    notificationsCache: NotificationsCache;
    tags?: NotificationFilter['tags'];
}) => Result<void>;
//# sourceMappingURL=helpers.d.ts.map