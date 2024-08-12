import { FilterQuery } from 'mongoose';
import { SubscriberEntity, SubscriberDBModel } from './subscriber.entity';
import { IExternalSubscribersEntity } from './types';
import { BaseRepository } from '../base-repository';
import type { EnforceEnvOrOrgIds } from '../../types';
import { EnvironmentId, ISubscribersDefine, OrganizationId } from '@novu/shared';
type SubscriberQuery = FilterQuery<SubscriberDBModel> & EnforceEnvOrOrgIds;
type SubscriberDeleteQuery = Pick<SubscriberQuery, 'subscriberId' | '_environmentId'> & EnforceEnvOrOrgIds;
type SubscriberDeleteManyQuery = Pick<SubscriberQuery, 'subscriberId' | '_id' | '_environmentId'> & EnforceEnvOrOrgIds;
export declare class SubscriberRepository extends BaseRepository<SubscriberDBModel, SubscriberEntity, EnforceEnvOrOrgIds> {
    private subscriber;
    constructor();
    findBySubscriberId(environmentId: string, subscriberId: string, secondaryRead?: boolean): Promise<SubscriberEntity | null>;
    bulkCreateSubscribers(subscribers: ISubscribersDefine[], environmentId: EnvironmentId, organizationId: OrganizationId): Promise<{
        updated: {
            subscriberId: string;
        }[];
        created: any;
        failed: never[];
    }>;
    searchByExternalSubscriberIds(externalSubscribersEntity: IExternalSubscribersEntity): Promise<SubscriberEntity[]>;
    searchSubscribers(environmentId: string, subscriberIds?: string[], emails?: string[], search?: string): Promise<SubscriberEntity[]>;
    delete(query: SubscriberDeleteQuery): Promise<any>;
    deleteMany(query: SubscriberDeleteManyQuery): Promise<any>;
    findDeleted(query: SubscriberQuery): Promise<SubscriberEntity | null>;
}
export {};
//# sourceMappingURL=subscriber.repository.d.ts.map