import { Types } from 'mongoose';
import { FilterParts, BuilderFieldType, BuilderGroupValues, IPreferenceChannels, IWorkflowStepMetadata, NotificationTemplateCustomData, IStepVariant, IMessageFilter, INotificationTrigger, TriggerTypeEnum, INotificationTriggerVariable, ITriggerReservedVariable, INotificationTemplate, INotificationTemplateStep, IMessageTemplate, ControlsDto, WorkflowTypeEnum } from '@novu/shared';
import { NotificationGroupEntity } from '../notification-group';
import type { OrganizationId } from '../organization';
import type { EnvironmentId } from '../environment';
import type { ChangePropsValueType } from '../../types';
import { JSONSchema } from 'json-schema-to-ts';
export declare class NotificationTemplateEntity implements INotificationTemplate {
    _id: string;
    name: string;
    description: string;
    active: boolean;
    draft: boolean;
    preferenceSettings: IPreferenceChannels;
    critical: boolean;
    tags: string[];
    steps: NotificationStepEntity[];
    _organizationId: OrganizationId;
    _creatorId: string;
    _environmentId: EnvironmentId;
    triggers: NotificationTriggerEntity[];
    _notificationGroupId: string;
    _parentId?: string;
    deleted: boolean;
    deletedAt: string;
    deletedBy: string;
    createdAt?: string;
    updatedAt?: string;
    readonly notificationGroup?: NotificationGroupEntity;
    isBlueprint: boolean;
    blueprintId?: string;
    data?: NotificationTemplateCustomData;
    type?: WorkflowTypeEnum;
    rawData?: any;
    payloadSchema?: any;
}
export type NotificationTemplateDBModel = ChangePropsValueType<Omit<NotificationTemplateEntity, '_parentId'>, '_environmentId' | '_organizationId' | '_creatorId' | '_notificationGroupId'> & {
    _parentId?: Types.ObjectId;
};
export declare class NotificationTriggerEntity implements INotificationTrigger {
    type: TriggerTypeEnum;
    identifier: string;
    variables: INotificationTriggerVariable[];
    subscriberVariables?: Pick<INotificationTriggerVariable, 'name'>[];
    reservedVariables?: ITriggerReservedVariable[];
}
export declare class StepVariantEntity implements IStepVariant {
    _id?: string;
    uuid?: string;
    stepId?: string;
    name?: string;
    _templateId: string;
    active?: boolean;
    replyCallback?: {
        active: boolean;
        url: string;
    };
    template?: IMessageTemplate;
    filters?: StepFilter[];
    _parentId?: string | null;
    metadata?: IWorkflowStepMetadata;
    shouldStopOnFail?: boolean;
    bridgeUrl?: string;
    controlVariables?: ControlsDto;
    controls?: {
        schema: JSONSchema;
    };
}
export declare class NotificationStepEntity extends StepVariantEntity implements INotificationTemplateStep {
    variants?: StepVariantEntity[];
}
export declare class StepFilter implements IMessageFilter {
    isNegated?: boolean;
    type?: BuilderFieldType;
    value: BuilderGroupValues;
    children: FilterParts[];
}
//# sourceMappingURL=notification-template.entity.d.ts.map