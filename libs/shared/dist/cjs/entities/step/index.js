"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdinalValueEnum = exports.OrdinalEnum = exports.MonthlyTypeEnum = exports.DelayTypeEnum = exports.DigestTypeEnum = exports.DaysEnum = exports.castUnitToDigestUnitEnum = exports.DigestUnitEnum = void 0;
var DigestUnitEnum;
(function (DigestUnitEnum) {
    DigestUnitEnum["SECONDS"] = "seconds";
    DigestUnitEnum["MINUTES"] = "minutes";
    DigestUnitEnum["HOURS"] = "hours";
    DigestUnitEnum["DAYS"] = "days";
    DigestUnitEnum["WEEKS"] = "weeks";
    DigestUnitEnum["MONTHS"] = "months";
})(DigestUnitEnum = exports.DigestUnitEnum || (exports.DigestUnitEnum = {}));
function castUnitToDigestUnitEnum(unit) {
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
exports.castUnitToDigestUnitEnum = castUnitToDigestUnitEnum;
var DaysEnum;
(function (DaysEnum) {
    DaysEnum["MONDAY"] = "monday";
    DaysEnum["TUESDAY"] = "tuesday";
    DaysEnum["WEDNESDAY"] = "wednesday";
    DaysEnum["THURSDAY"] = "thursday";
    DaysEnum["FRIDAY"] = "friday";
    DaysEnum["SATURDAY"] = "saturday";
    DaysEnum["SUNDAY"] = "sunday";
})(DaysEnum = exports.DaysEnum || (exports.DaysEnum = {}));
var DigestTypeEnum;
(function (DigestTypeEnum) {
    DigestTypeEnum["REGULAR"] = "regular";
    DigestTypeEnum["BACKOFF"] = "backoff";
    DigestTypeEnum["TIMED"] = "timed";
})(DigestTypeEnum = exports.DigestTypeEnum || (exports.DigestTypeEnum = {}));
var DelayTypeEnum;
(function (DelayTypeEnum) {
    DelayTypeEnum["REGULAR"] = "regular";
    DelayTypeEnum["SCHEDULED"] = "scheduled";
})(DelayTypeEnum = exports.DelayTypeEnum || (exports.DelayTypeEnum = {}));
var MonthlyTypeEnum;
(function (MonthlyTypeEnum) {
    MonthlyTypeEnum["EACH"] = "each";
    MonthlyTypeEnum["ON"] = "on";
})(MonthlyTypeEnum = exports.MonthlyTypeEnum || (exports.MonthlyTypeEnum = {}));
var OrdinalEnum;
(function (OrdinalEnum) {
    OrdinalEnum["FIRST"] = "1";
    OrdinalEnum["SECOND"] = "2";
    OrdinalEnum["THIRD"] = "3";
    OrdinalEnum["FOURTH"] = "4";
    OrdinalEnum["FIFTH"] = "5";
    OrdinalEnum["LAST"] = "last";
})(OrdinalEnum = exports.OrdinalEnum || (exports.OrdinalEnum = {}));
var OrdinalValueEnum;
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
})(OrdinalValueEnum = exports.OrdinalValueEnum || (exports.OrdinalValueEnum = {}));
