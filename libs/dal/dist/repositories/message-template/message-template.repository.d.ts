import { FilterQuery } from 'mongoose';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
import { BaseRepository } from '../base-repository';
import { MessageTemplateDBModel, MessageTemplateEntity } from './message-template.entity';
type MessageTemplateQuery = FilterQuery<MessageTemplateDBModel>;
export declare class MessageTemplateRepository extends BaseRepository<MessageTemplateDBModel, MessageTemplateEntity, EnforceEnvOrOrgIds> {
    private messageTemplate;
    constructor();
    getMessageTemplatesByFeed(environmentId: string, feedId: string): Promise<MessageTemplateEntity[]>;
    getMessageTemplatesByLayout(_environmentId: string, _layoutId: string, pagination?: {
        limit?: number;
    }): Promise<MessageTemplateEntity[]>;
    delete(query: MessageTemplateQuery): Promise<any>;
    findDeleted(query: MessageTemplateQuery): Promise<MessageTemplateEntity>;
}
export {};
//# sourceMappingURL=message-template.repository.d.ts.map