import { FilterQuery } from 'mongoose';
import { TopicEntity, TopicDBModel } from './topic.entity';
import { EnvironmentId, ExternalSubscriberId, OrganizationId, TopicId, TopicKey, TopicName } from './types';
import { BaseRepository } from '../base-repository';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
export declare class TopicRepository extends BaseRepository<TopicDBModel, TopicEntity, EnforceEnvOrOrgIds> {
    constructor();
    createTopic(entity: Omit<TopicEntity, '_id'>): Promise<TopicEntity>;
    deleteTopic(key: TopicKey, environmentId: EnvironmentId, organizationId: OrganizationId): Promise<void>;
    filterTopics(query: FilterQuery<TopicDBModel>, pagination: {
        limit: number;
        skip: number;
    }): Promise<TopicEntity & {
        subscribers: ExternalSubscriberId[];
    }[]>;
    findTopic(topicKey: TopicKey, environmentId: EnvironmentId): Promise<(TopicEntity & {
        subscribers: ExternalSubscriberId[];
    }) | null>;
    findTopicByKey(key: TopicKey, organizationId: OrganizationId, environmentId: EnvironmentId): Promise<TopicEntity | null>;
    renameTopic(_id: TopicId, _environmentId: EnvironmentId, name: TopicName): Promise<TopicEntity & {
        subscribers: ExternalSubscriberId[];
    }>;
}
//# sourceMappingURL=topic.repository.d.ts.map