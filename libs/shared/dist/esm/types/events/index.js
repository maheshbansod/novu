export var TriggerEventStatusEnum;
(function (TriggerEventStatusEnum) {
    TriggerEventStatusEnum["ERROR"] = "error";
    TriggerEventStatusEnum["NOT_ACTIVE"] = "trigger_not_active";
    TriggerEventStatusEnum["NO_WORKFLOW_ACTIVE_STEPS"] = "no_workflow_active_steps_defined";
    TriggerEventStatusEnum["NO_WORKFLOW_STEPS"] = "no_workflow_steps_defined";
    TriggerEventStatusEnum["PROCESSED"] = "processed";
    TriggerEventStatusEnum["SUBSCRIBER_MISSING"] = "subscriber_id_missing";
    TriggerEventStatusEnum["TENANT_MISSING"] = "no_tenant_found";
})(TriggerEventStatusEnum || (TriggerEventStatusEnum = {}));
export var TriggerRecipientsTypeEnum;
(function (TriggerRecipientsTypeEnum) {
    TriggerRecipientsTypeEnum["SUBSCRIBER"] = "Subscriber";
    TriggerRecipientsTypeEnum["TOPIC"] = "Topic";
})(TriggerRecipientsTypeEnum || (TriggerRecipientsTypeEnum = {}));
export var AddressingTypeEnum;
(function (AddressingTypeEnum) {
    AddressingTypeEnum["BROADCAST"] = "broadcast";
    AddressingTypeEnum["MULTICAST"] = "multicast";
})(AddressingTypeEnum || (AddressingTypeEnum = {}));
export var TriggerRequestCategoryEnum;
(function (TriggerRequestCategoryEnum) {
    TriggerRequestCategoryEnum["SINGLE"] = "single";
    TriggerRequestCategoryEnum["BULK"] = "bulk";
})(TriggerRequestCategoryEnum || (TriggerRequestCategoryEnum = {}));
