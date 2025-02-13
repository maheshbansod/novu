import { MessageTemplateContentType } from '../../entities/message-template';
import { IMessageCTA } from '../../entities/messages';
import { ActorTypeEnum, ChannelCTATypeEnum, IEmailBlock, ITemplateVariable, StepTypeEnum } from '../../types';
export declare class ChannelCTADto {
    type: ChannelCTATypeEnum;
    data: {
        url: string;
    };
}
export declare class MessageTemplateDto {
    type: StepTypeEnum;
    content: string | IEmailBlock[];
    contentType?: MessageTemplateContentType;
    cta?: IMessageCTA;
    actor?: {
        type: ActorTypeEnum;
        data: string | null;
    };
    variables?: ITemplateVariable[];
    feedId?: string;
    layoutId?: string | null;
    name?: string;
    subject?: string;
    title?: string;
    preheader?: string;
    senderName?: string;
    _creatorId?: string;
}
//# sourceMappingURL=message-template.dto.d.ts.map