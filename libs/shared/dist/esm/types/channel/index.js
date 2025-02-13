export var ChannelTypeEnum;
(function (ChannelTypeEnum) {
    ChannelTypeEnum["IN_APP"] = "in_app";
    ChannelTypeEnum["EMAIL"] = "email";
    ChannelTypeEnum["SMS"] = "sms";
    ChannelTypeEnum["CHAT"] = "chat";
    ChannelTypeEnum["PUSH"] = "push";
})(ChannelTypeEnum || (ChannelTypeEnum = {}));
export var ActionTypeEnum;
(function (ActionTypeEnum) {
    ActionTypeEnum["TRIGGER"] = "trigger";
    ActionTypeEnum["DIGEST"] = "digest";
    ActionTypeEnum["DELAY"] = "delay";
    ActionTypeEnum["CUSTOM"] = "custom";
})(ActionTypeEnum || (ActionTypeEnum = {}));
export var StepTypeEnum;
(function (StepTypeEnum) {
    StepTypeEnum["IN_APP"] = "in_app";
    StepTypeEnum["EMAIL"] = "email";
    StepTypeEnum["SMS"] = "sms";
    StepTypeEnum["CHAT"] = "chat";
    StepTypeEnum["PUSH"] = "push";
    StepTypeEnum["DIGEST"] = "digest";
    StepTypeEnum["TRIGGER"] = "trigger";
    StepTypeEnum["DELAY"] = "delay";
    StepTypeEnum["CUSTOM"] = "custom";
})(StepTypeEnum || (StepTypeEnum = {}));
export const STEP_TYPE_TO_CHANNEL_TYPE = new Map([
    [StepTypeEnum.IN_APP, ChannelTypeEnum.IN_APP],
    [StepTypeEnum.EMAIL, ChannelTypeEnum.EMAIL],
    [StepTypeEnum.SMS, ChannelTypeEnum.SMS],
    [StepTypeEnum.CHAT, ChannelTypeEnum.CHAT],
    [StepTypeEnum.PUSH, ChannelTypeEnum.PUSH],
]);
export var ChannelCTATypeEnum;
(function (ChannelCTATypeEnum) {
    ChannelCTATypeEnum["REDIRECT"] = "redirect";
})(ChannelCTATypeEnum || (ChannelCTATypeEnum = {}));
export var TemplateVariableTypeEnum;
(function (TemplateVariableTypeEnum) {
    TemplateVariableTypeEnum["STRING"] = "String";
    TemplateVariableTypeEnum["ARRAY"] = "Array";
    TemplateVariableTypeEnum["BOOLEAN"] = "Boolean";
})(TemplateVariableTypeEnum || (TemplateVariableTypeEnum = {}));
export var ActorTypeEnum;
(function (ActorTypeEnum) {
    ActorTypeEnum["NONE"] = "none";
    ActorTypeEnum["USER"] = "user";
    ActorTypeEnum["SYSTEM_ICON"] = "system_icon";
    ActorTypeEnum["SYSTEM_CUSTOM"] = "system_custom";
})(ActorTypeEnum || (ActorTypeEnum = {}));
export var SystemAvatarIconEnum;
(function (SystemAvatarIconEnum) {
    SystemAvatarIconEnum["WARNING"] = "warning";
    SystemAvatarIconEnum["INFO"] = "info";
    SystemAvatarIconEnum["ERROR"] = "error";
    SystemAvatarIconEnum["SUCCESS"] = "success";
    SystemAvatarIconEnum["UP"] = "up";
    SystemAvatarIconEnum["QUESTION"] = "question";
})(SystemAvatarIconEnum || (SystemAvatarIconEnum = {}));
export const CHANNELS_WITH_PRIMARY = [ChannelTypeEnum.EMAIL, ChannelTypeEnum.SMS];
export const DELAYED_STEPS = [StepTypeEnum.DELAY, StepTypeEnum.DIGEST];
