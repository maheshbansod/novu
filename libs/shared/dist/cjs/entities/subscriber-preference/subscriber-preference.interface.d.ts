import { ChannelTypeEnum, PreferenceOverrideSourceEnum } from '../../types';
import { INotificationTrigger } from '../notification-template';
export interface IPreferenceChannels {
    email?: boolean;
    sms?: boolean;
    in_app?: boolean;
    chat?: boolean;
    push?: boolean;
}
export interface IPreferenceOverride {
    channel: ChannelTypeEnum;
    source: PreferenceOverrideSourceEnum;
}
export interface ISubscriberPreferenceResponse {
    template: ITemplateConfiguration;
    preference: IPreferenceResponse;
}
export interface ISubscriberWorkflowPreferenceResponse extends IPreferenceResponse {
    workflow: ITemplateConfiguration;
    level: PreferenceLevelEnum.TEMPLATE;
}
export interface IWorkflow extends Omit<ITemplateConfiguration, '_id'> {
    id: string;
}
export interface ISubscriberPreferences {
    level: PreferenceLevelEnum;
    workflow?: IWorkflow;
    enabled: boolean;
    channels: IPreferenceChannels;
    overrides?: IPreferenceOverride[];
}
export interface IPreferenceResponse {
    enabled: boolean;
    channels: IPreferenceChannels;
    overrides: IPreferenceOverride[];
}
export interface ITemplateConfiguration {
    _id: string;
    name: string;
    critical: boolean;
    tags?: string[];
    triggers: INotificationTrigger[];
}
export declare enum PreferenceLevelEnum {
    GLOBAL = "global",
    TEMPLATE = "template"
}
export interface IOverridePreferencesSources {
    [PreferenceOverrideSourceEnum.TEMPLATE]: IPreferenceChannels;
    [PreferenceOverrideSourceEnum.SUBSCRIBER]: IPreferenceChannels;
    [PreferenceOverrideSourceEnum.WORKFLOW_OVERRIDE]?: IPreferenceChannels;
}
//# sourceMappingURL=subscriber-preference.interface.d.ts.map