import { EventHandler, EventNames, Events, NovuEventEmitter } from '../event-emitter';
import { InboxNotification, Result } from '../types';
export declare class Notification implements Pick<NovuEventEmitter, 'on' | 'off'>, InboxNotification {
    #private;
    readonly id: InboxNotification['id'];
    readonly subject?: InboxNotification['subject'];
    readonly body: InboxNotification['body'];
    readonly to: InboxNotification['to'];
    readonly isRead: InboxNotification['isRead'];
    readonly isArchived: InboxNotification['isArchived'];
    readonly createdAt: InboxNotification['createdAt'];
    readonly readAt?: InboxNotification['readAt'];
    readonly archivedAt?: InboxNotification['archivedAt'];
    readonly avatar?: InboxNotification['avatar'];
    readonly primaryAction?: InboxNotification['primaryAction'];
    readonly secondaryAction?: InboxNotification['secondaryAction'];
    readonly channelType: InboxNotification['channelType'];
    readonly tags: InboxNotification['tags'];
    readonly redirect: InboxNotification['redirect'];
    constructor(notification: InboxNotification);
    read(): Result<Notification>;
    unread(): Result<Notification>;
    archive(): Result<Notification>;
    unarchive(): Result<Notification>;
    completePrimary(): Result<Notification>;
    completeSecondary(): Result<Notification>;
    revertPrimary(): Result<Notification>;
    revertSecondary(): Result<Notification>;
    on<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
    off<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
}
//# sourceMappingURL=notification.d.ts.map