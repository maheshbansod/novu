import { ExternalSubscriberId } from '@novu/shared';
import { CreateTopicSubscribersEntity, TopicSubscribersEntity, TopicSubscribersDBModel } from './topic-subscribers.entity';
import { EnvironmentId, OrganizationId, TopicId, TopicKey } from './types';
import { BaseRepository } from '../base-repository';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
export declare class TopicSubscribersRepository extends BaseRepository<TopicSubscribersDBModel, TopicSubscribersEntity, EnforceEnvOrOrgIds> {
    constructor();
    addSubscribers(subscribers: CreateTopicSubscribersEntity[]): Promise<void>;
    getTopicDistinctSubscribers({ query, batchSize, }: {
        query: {
            _environmentId: EnvironmentId;
            _organizationId: OrganizationId;
            topicIds: string[];
            excludeSubscribers: string[];
        };
        batchSize?: number;
    }): AsyncGenerator<TopicSubscribersEntity | null, void, unknown>;
    findOneByTopicKeyAndExternalSubscriberId(_environmentId: EnvironmentId, _organizationId: OrganizationId, topicKey: TopicKey, externalSubscriberId: ExternalSubscriberId): Promise<TopicSubscribersEntity | null>;
    findSubscribersByTopicId(_environmentId: EnvironmentId, _organizationId: OrganizationId, _topicId: TopicId): Promise<TopicSubscribersEntity[]>;
    removeSubscribers(_environmentId: EnvironmentId, _organizationId: OrganizationId, topicKey: TopicKey, externalSubscriberIds: ExternalSubscriberId[]): Promise<void>;
}
//# sourceMappingURL=topic-subscribers.repository.d.ts.map