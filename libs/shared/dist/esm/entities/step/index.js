export var DigestUnitEnum;
(function (DigestUnitEnum) {
    DigestUnitEnum["SECONDS"] = "seconds";
    DigestUnitEnum["MINUTES"] = "minutes";
    DigestUnitEnum["HOURS"] = "hours";
    DigestUnitEnum["DAYS"] = "days";
    DigestUnitEnum["WEEKS"] = "weeks";
    DigestUnitEnum["MONTHS"] = "months";
})(DigestUnitEnum || (DigestUnitEnum = {}));
export function castUnitToDigestUnitEnum(unit) {
    switch (unit) {
        case 'seconds':
            return DigestUnitEnum.SECONDS;
        case 'minutes':
            return DigestUnitEnum.MINUTES;
        case 'hours':
            return DigestUnitEnum.HOURS;
        case 'days':
            return DigestUnitEnum.DAYS;
        case 'weeks':
            return DigestUnitEnum.WEEKS;
        case 'months':
            return DigestUnitEnum.MONTHS;
        default:
            return undefined;
    }
}
export var DaysEnum;
(function (DaysEnum) {
    DaysEnum["MONDAY"] = "monday";
    DaysEnum["TUESDAY"] = "tuesday";
    DaysEnum["WEDNESDAY"] = "wednesday";
    DaysEnum["THURSDAY"] = "thursday";
    DaysEnum["FRIDAY"] = "friday";
    DaysEnum["SATURDAY"] = "saturday";
    DaysEnum["SUNDAY"] = "sunday";
})(DaysEnum || (DaysEnum = {}));
export var DigestTypeEnum;
(function (DigestTypeEnum) {
    DigestTypeEnum["REGULAR"] = "regular";
    DigestTypeEnum["BACKOFF"] = "backoff";
    DigestTypeEnum["TIMED"] = "timed";
})(DigestTypeEnum || (DigestTypeEnum = {}));
export var DelayTypeEnum;
(function (DelayTypeEnum) {
    DelayTypeEnum["REGULAR"] = "regular";
    DelayTypeEnum["SCHEDULED"] = "scheduled";
})(DelayTypeEnum || (DelayTypeEnum = {}));
export var MonthlyTypeEnum;
(function (MonthlyTypeEnum) {
    MonthlyTypeEnum["EACH"] = "each";
    MonthlyTypeEnum["ON"] = "on";
})(MonthlyTypeEnum || (MonthlyTypeEnum = {}));
export var OrdinalEnum;
(function (OrdinalEnum) {
    OrdinalEnum["FIRST"] = "1";
    OrdinalEnum["SECOND"] = "2";
    OrdinalEnum["THIRD"] = "3";
    OrdinalEnum["FOURTH"] = "4";
    OrdinalEnum["FIFTH"] = "5";
    OrdinalEnum["LAST"] = "last";
})(OrdinalEnum || (OrdinalEnum = {}));
export var OrdinalValueEnum;
(function (OrdinalValueEnum) {
    OrdinalValueEnum["DAY"] = "day";
    OrdinalValueEnum["WEEKDAY"] = "weekday";
    OrdinalValueEnum["WEEKEND"] = "weekend";
    OrdinalValueEnum["SUNDAY"] = "sunday";
    OrdinalValueEnum["MONDAY"] = "monday";
    OrdinalValueEnum["TUESDAY"] = "tuesday";
    OrdinalValueEnum["WEDNESDAY"] = "wednesday";
    OrdinalValueEnum["THURSDAY"] = "thursday";
    OrdinalValueEnum["FRIDAY"] = "friday";
    OrdinalValueEnum["SATURDAY"] = "saturday";
})(OrdinalValueEnum || (OrdinalValueEnum = {}));
