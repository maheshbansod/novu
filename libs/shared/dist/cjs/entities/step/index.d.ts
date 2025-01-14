import { CronExpressionEnum } from '../../types';
export declare enum DigestUnitEnum {
    SECONDS = "seconds",
    MINUTES = "minutes",
    HOURS = "hours",
    DAYS = "days",
    WEEKS = "weeks",
    MONTHS = "months"
}
export declare function castUnitToDigestUnitEnum(unit: string): DigestUnitEnum | undefined;
export declare enum DaysEnum {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday"
}
export declare enum DigestTypeEnum {
    REGULAR = "regular",
    BACKOFF = "backoff",
    TIMED = "timed"
}
export declare enum DelayTypeEnum {
    REGULAR = "regular",
    SCHEDULED = "scheduled"
}
export declare enum MonthlyTypeEnum {
    EACH = "each",
    ON = "on"
}
export declare enum OrdinalEnum {
    FIRST = "1",
    SECOND = "2",
    THIRD = "3",
    FOURTH = "4",
    FIFTH = "5",
    LAST = "last"
}
export declare enum OrdinalValueEnum {
    DAY = "day",
    WEEKDAY = "weekday",
    WEEKEND = "weekend",
    SUNDAY = "sunday",
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday"
}
export interface IAmountAndUnit {
    amount: number;
    unit: DigestUnitEnum;
}
export interface IAmountAndUnitDigest {
    amount?: number;
    unit?: DigestUnitEnum;
}
export interface IDigestBaseMetadata extends IAmountAndUnitDigest {
    digestKey?: string;
}
export interface IDigestRegularMetadata extends IDigestBaseMetadata {
    type: DigestTypeEnum.REGULAR | DigestTypeEnum.BACKOFF;
    backoff?: boolean;
    backoffAmount?: number;
    backoffUnit?: DigestUnitEnum;
    updateMode?: boolean;
}
export interface ITimedConfig {
    atTime?: string;
    weekDays?: DaysEnum[];
    monthDays?: number[];
    ordinal?: OrdinalEnum;
    ordinalValue?: OrdinalValueEnum;
    monthlyType?: MonthlyTypeEnum;
    cronExpression?: CronExpressionEnum | string;
}
export interface IDigestTimedMetadata extends IDigestBaseMetadata {
    type: DigestTypeEnum.TIMED;
    timed?: ITimedConfig;
}
export interface IDelayRegularMetadata extends IAmountAndUnit {
    type: DelayTypeEnum.REGULAR;
}
export interface IDelayScheduledMetadata {
    type: DelayTypeEnum.SCHEDULED;
    delayPath: string;
}
export type IWorkflowStepMetadata = IDigestRegularMetadata | IDigestTimedMetadata | IDelayRegularMetadata | IDelayScheduledMetadata;
//# sourceMappingURL=index.d.ts.map