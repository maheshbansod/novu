import { ButtonTypeEnum } from '../entities/messages';
import { ChannelCTATypeEnum, WorkflowTypeEnum } from '../types';
export const isBridgeWorkflow = (workflowType) => {
    return workflowType === WorkflowTypeEnum.BRIDGE || workflowType === WorkflowTypeEnum.ECHO;
};
export const inAppMessageFromBridgeOutputs = (outputs) => {
    const cta = {
        type: ChannelCTATypeEnum.REDIRECT,
        data: {},
        action: {
            result: {},
            buttons: [
                ...((outputs === null || outputs === void 0 ? void 0 : outputs.primaryAction)
                    ? [
                        {
                            type: ButtonTypeEnum.PRIMARY,
                            content: outputs.primaryAction.label,
                            url: outputs.primaryAction.url,
                        },
                    ]
                    : []),
                ...((outputs === null || outputs === void 0 ? void 0 : outputs.secondaryAction)
                    ? [
                        {
                            type: ButtonTypeEnum.SECONDARY,
                            content: outputs.secondaryAction.label,
                            url: outputs.secondaryAction.url,
                        },
                    ]
                    : []),
            ],
        },
    };
    return {
        subject: outputs === null || outputs === void 0 ? void 0 : outputs.subject,
        content: (outputs === null || outputs === void 0 ? void 0 : outputs.body) || '',
        cta,
        avatar: outputs === null || outputs === void 0 ? void 0 : outputs.avatar,
    };
};
