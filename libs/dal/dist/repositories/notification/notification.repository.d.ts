import { ChannelTypeEnum } from '@novu/shared';
import { BaseRepository } from '../base-repository';
import { NotificationEntity, NotificationDBModel } from './notification.entity';
import type { EnforceEnvOrOrgIds } from '../../types';
import { EnvironmentId } from '../environment';
export declare class NotificationRepository extends BaseRepository<NotificationDBModel, NotificationEntity, EnforceEnvOrOrgIds> {
    constructor();
    findBySubscriberId(environmentId: string, subscriberId: string): Promise<NotificationEntity[]>;
    getFeed(environmentId: string, query?: {
        channels?: ChannelTypeEnum[] | null;
        templates?: string[] | null;
        subscriberIds?: string[];
        transactionId?: string;
    }, skip?: number, limit?: number): Promise<{
        data: NotificationEntity[];
    }>;
    getFeedItem(notificationId: string, _environmentId: string, _organizationId: string): Promise<NotificationEntity>;
    private populateFeed;
    getActivityGraphStats(date: Date, environmentId: string): Promise<any>;
    getStats(environmentId: EnvironmentId): Promise<{
        weekly: number;
        monthly: number;
    }>;
}
//# sourceMappingURL=notification.repository.d.ts.map