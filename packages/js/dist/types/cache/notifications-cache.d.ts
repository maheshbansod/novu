import type { ListNotificationsArgs, ListNotificationsResponse, Notification } from '../notifications';
import type { NotificationFilter } from '../types';
export declare class NotificationsCache {
    #private;
    constructor();
    private updateNotification;
    private removeNotification;
    private handleNotificationEvent;
    private has;
    private getAggregated;
    set(args: ListNotificationsArgs, data: ListNotificationsResponse): void;
    getAll(args: ListNotificationsArgs): ListNotificationsResponse | undefined;
    /**
     * Get unique notifications based on specified filter fields.
     * The same tags can be applied to multiple filters which means that the same notification can be duplicated.
     */
    getUniqueNotifications({ tags, read }: Pick<ListNotificationsArgs, 'tags' | 'read'>): Array<Notification>;
    clear(filter: NotificationFilter): void;
    clearAll(): void;
}
//# sourceMappingURL=notifications-cache.d.ts.map