"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inAppMessageFromBridgeOutputs = exports.isBridgeWorkflow = void 0;
const messages_1 = require("../entities/messages");
const types_1 = require("../types");
const isBridgeWorkflow = (workflowType) => {
    return workflowType === types_1.WorkflowTypeEnum.BRIDGE || workflowType === types_1.WorkflowTypeEnum.ECHO;
};
exports.isBridgeWorkflow = isBridgeWorkflow;
const inAppMessageFromBridgeOutputs = (outputs) => {
    const cta = {
        type: types_1.ChannelCTATypeEnum.REDIRECT,
        data: {},
        action: {
            result: {},
            buttons: [
                ...((outputs === null || outputs === void 0 ? void 0 : outputs.primaryAction)
                    ? [
                        {
                            type: messages_1.ButtonTypeEnum.PRIMARY,
                            content: outputs.primaryAction.label,
                            url: outputs.primaryAction.url,
                        },
                    ]
                    : []),
                ...((outputs === null || outputs === void 0 ? void 0 : outputs.secondaryAction)
                    ? [
                        {
                            type: messages_1.ButtonTypeEnum.SECONDARY,
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
exports.inAppMessageFromBridgeOutputs = inAppMessageFromBridgeOutputs;
