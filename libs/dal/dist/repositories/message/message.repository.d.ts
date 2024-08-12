import { FilterQuery } from 'mongoose';
import { MessagesStatusEnum, ChannelTypeEnum, ButtonTypeEnum, MessageActionStatusEnum } from '@novu/shared';
import { BaseRepository } from '../base-repository';
import { MessageEntity, MessageDBModel } from './message.entity';
import { EnforceEnvId } from '../../types/enforce';
type MessageQuery = FilterQuery<MessageDBModel>;
export declare class MessageRepository extends BaseRepository<MessageDBModel, MessageEntity, EnforceEnvId> {
    private message;
    private feedRepository;
    constructor();
    private getFilterQueryForMessage;
    findBySubscriberChannel(environmentId: string, subscriberId: string, channel: ChannelTypeEnum, query?: {
        feedId?: string[];
        seen?: boolean;
        read?: boolean;
        payload?: object;
    }, options?: {
        limit: number;
        skip?: number;
    }): Promise<MessageEntity[]>;
    paginate({ environmentId, channel, subscriberId, tags, read, archived, }: {
        environmentId: string;
        subscriberId: string;
        channel: ChannelTypeEnum;
        tags?: string[];
        read?: boolean;
        archived?: boolean;
    }, options: {
        limit: number;
        offset: number;
        after?: string;
    }): Promise<{
        data: MessageEntity[];
        hasMore: boolean;
    }>;
    getCount(environmentId: string, subscriberId: string, channel: ChannelTypeEnum, query?: {
        feedId?: string[];
        tags?: string[];
        seen?: boolean;
        read?: boolean;
        archived?: boolean;
        payload?: object;
    }, options?: {
        limit: number;
        skip?: number;
    }): Promise<number>;
    private getReadSeenUpdateQuery;
    private getReadSeenUpdatePayload;
    markAllMessagesAs({ subscriberId, environmentId, markAs, channel, feedIdentifiers, }: {
        subscriberId: string;
        environmentId: string;
        markAs: MessagesStatusEnum;
        channel?: ChannelTypeEnum;
        feedIdentifiers?: string[];
    }): Promise<{
        matched: number;
        modified: number;
    }>;
    updateFeedByMessageTemplateId(environmentId: string, messageId: string, feedId?: string | null): Promise<{
        matched: number;
        modified: number;
    }>;
    updateMessageStatus(environmentId: string, id: string, status: 'error' | 'sent' | 'warning', providerPayload: any, errorId: string, errorText: string): Promise<{
        matched: number;
        modified: number;
    }>;
    changeMessagesStatus({ environmentId, subscriberId, messageIds, markAs, }: {
        environmentId: string;
        subscriberId: string;
        messageIds: string[];
        markAs: MessagesStatusEnum;
    }): Promise<void>;
    changeStatus(environmentId: string, subscriberId: string, messageIds: string[], mark: {
        seen?: boolean;
        read?: boolean;
    }): Promise<void>;
    updateMessagesStatusByIds({ environmentId, subscriberId, ids, seen, read, archived, }: {
        environmentId: string;
        subscriberId: string;
        ids: string[];
        seen?: boolean;
        read?: boolean;
        archived?: boolean;
    }): Promise<void>;
    updateMessagesFromToStatus({ environmentId, subscriberId, from, to, }: {
        environmentId: string;
        subscriberId: string;
        from: {
            tags?: string[];
            seen?: boolean;
            read?: boolean;
            archived?: boolean;
        };
        to: {
            seen?: boolean;
            read?: boolean;
            archived?: boolean;
        };
    }): Promise<void>;
    private updateMessagesStatus;
    updateActionStatus({ environmentId, subscriberId, id, actionType, actionStatus, }: {
        environmentId: string;
        subscriberId: string;
        id: string;
        actionType: ButtonTypeEnum;
        actionStatus: MessageActionStatusEnum;
    }): Promise<void>;
    delete(query: MessageQuery): Promise<any>;
    deleteMany(query: MessageQuery): Promise<any>;
    findDeleted(query: MessageQuery): Promise<MessageEntity>;
    findMessageById(query: {
        _id: string;
        _environmentId: string;
    }): Promise<MessageEntity | null>;
    findMessagesByTransactionId(query: {
        transactionId: string[];
        _environmentId: string;
    } & Partial<Omit<MessageEntity, 'transactionId'>>): Promise<MessageEntity[]>;
    getMessages(query: Partial<Omit<MessageEntity, 'transactionId'>> & {
        _environmentId: string;
        transactionId?: string[];
    }, select?: string, options?: {
        limit?: number;
        skip?: number;
    }): Promise<MessageEntity[]>;
}
export {};
//# sourceMappingURL=message.repository.d.ts.map