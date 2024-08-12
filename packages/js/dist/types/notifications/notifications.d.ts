import { BaseModule } from '../base-module';
import { NotificationFilter, Result } from '../types';
import { Notification } from './notification';
import type { FiltersCountResponse, ListNotificationsArgs, ListNotificationsResponse, InstanceArgs, FilterCountArgs, FilterCountResponse, FiltersCountArgs, BaseArgs } from './types';
export declare class Notifications extends BaseModule {
    #private;
    constructor({ useCache }: {
        useCache: boolean;
    });
    list({ limit, ...restOptions }?: ListNotificationsArgs): Result<ListNotificationsResponse>;
    count(args?: FilterCountArgs): Result<FilterCountResponse>;
    count(args?: FiltersCountArgs): Result<FiltersCountResponse>;
    read(args: BaseArgs): Result<Notification>;
    read(args: InstanceArgs): Result<Notification>;
    unread(args: BaseArgs): Result<Notification>;
    unread(args: InstanceArgs): Result<Notification>;
    archive(args: BaseArgs): Result<Notification>;
    archive(args: InstanceArgs): Result<Notification>;
    unarchive(args: BaseArgs): Result<Notification>;
    unarchive(args: InstanceArgs): Result<Notification>;
    completePrimary(args: BaseArgs): Result<Notification>;
    completePrimary(args: InstanceArgs): Result<Notification>;
    completeSecondary(args: BaseArgs): Result<Notification>;
    completeSecondary(args: InstanceArgs): Result<Notification>;
    revertPrimary(args: BaseArgs): Result<Notification>;
    revertPrimary(args: InstanceArgs): Result<Notification>;
    revertSecondary(args: BaseArgs): Result<Notification>;
    revertSecondary(args: InstanceArgs): Result<Notification>;
    readAll({ tags }?: {
        tags?: NotificationFilter['tags'];
    }): Result<void>;
    archiveAll({ tags }?: {
        tags?: NotificationFilter['tags'];
    }): Result<void>;
    archiveAllRead({ tags }?: {
        tags?: NotificationFilter['tags'];
    }): Result<void>;
    clearCache({ filter }?: {
        filter?: NotificationFilter;
    }): void;
}
//# sourceMappingURL=notifications.d.ts.map