/// <reference types="node" />
import { ChannelTypeEnum } from '../channel';
import { TopicKey } from '../topic';
export declare enum TriggerEventStatusEnum {
    ERROR = "error",
    NOT_ACTIVE = "trigger_not_active",
    NO_WORKFLOW_ACTIVE_STEPS = "no_workflow_active_steps_defined",
    NO_WORKFLOW_STEPS = "no_workflow_steps_defined",
    PROCESSED = "processed",
    SUBSCRIBER_MISSING = "subscriber_id_missing",
    TENANT_MISSING = "no_tenant_found"
}
export interface IAttachmentOptions {
    mime: string;
    file: Buffer;
    name?: string;
    channels?: ChannelTypeEnum[];
    cid?: string;
    disposition?: string;
}
export interface IEmailOptions {
    to: string[];
    subject: string;
    html: string;
    from?: string;
    text?: string;
    attachments?: IAttachmentOptions[];
    id?: string;
    replyTo?: string;
    cc?: string[];
    bcc?: string[];
    payloadDetails?: any;
    notificationDetails?: any;
    ipPoolName?: string;
    customData?: Record<string, any>;
    headers?: Record<string, string>;
    senderName?: string;
    bridgeProviderData?: Record<string, unknown>;
}
export interface ITriggerPayload {
    attachments?: IAttachmentOptions[];
    [key: string]: string | string[] | boolean | number | undefined | IAttachmentOptions | IAttachmentOptions[] | Record<string, unknown>;
}
export declare enum TriggerRecipientsTypeEnum {
    SUBSCRIBER = "Subscriber",
    TOPIC = "Topic"
}
export interface ITopic {
    type: TriggerRecipientsTypeEnum.TOPIC;
    topicKey: TopicKey;
}
export type TriggerRecipientTopics = ITopic[];
export declare enum AddressingTypeEnum {
    BROADCAST = "broadcast",
    MULTICAST = "multicast"
}
export declare enum TriggerRequestCategoryEnum {
    SINGLE = "single",
    BULK = "bulk"
}
//# sourceMappingURL=index.d.ts.map