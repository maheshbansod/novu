import { ButtonTypeEnum } from '../entities/messages';
import { ChannelCTATypeEnum, WorkflowTypeEnum } from '../types';
export declare const isBridgeWorkflow: (workflowType?: WorkflowTypeEnum) => boolean;
type InAppOutput = {
    subject?: string;
    body: string;
    avatar?: string;
    primaryAction?: {
        label: string;
        url?: string;
    };
    secondaryAction?: {
        label: string;
        url?: string;
    };
};
export declare const inAppMessageFromBridgeOutputs: (outputs?: InAppOutput) => {
    subject: string | undefined;
    content: string;
    cta: {
        type: ChannelCTATypeEnum;
        data: {};
        action: {
            result: {};
            buttons: {
                type: ButtonTypeEnum;
                content: string;
                url: string | undefined;
            }[];
        };
    };
    avatar: string | undefined;
};
export {};
//# sourceMappingURL=bridge.utils.d.ts.map