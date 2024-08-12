import { FilterQuery } from 'mongoose';
import { BaseRepository } from '../base-repository';
import { FeedDBModel, FeedEntity } from './feed.entity';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
export declare class FeedRepository extends BaseRepository<FeedDBModel, FeedEntity, EnforceEnvOrOrgIds> {
    private feed;
    private messageTemplateRepository;
    constructor();
    delete(query: FilterQuery<FeedEntity>): Promise<any>;
    findDeleted(query: FilterQuery<FeedEntity>): Promise<FeedEntity>;
}
//# sourceMappingURL=feed.repository.d.ts.map