import { testFlagEnumValidity } from './flags.types';
import { FeatureFlagsKeysEnum } from './feature-flags';
import { SystemCriticalFlagsEnum } from './system-critical-flags';
describe('Flags', () => {
    it('tests the Typescript compiler errors below', () => {
        expect(true).toEqual(true);
    });
});
export const validFlag = 'IS_SOMETHING_ENABLED';
export const invalidPrefixFlag = 'SOMETHING_ENABLED';
export const invalidSuffixFlag = 'IS_SOMETHING';
export const invalidSubjectFlag = 'IS_something_ENABLED';
var ValidFlagsEnum;
(function (ValidFlagsEnum) {
    ValidFlagsEnum["IS_SOMETHING_ENABLED"] = "IS_SOMETHING_ENABLED";
    ValidFlagsEnum["IS_SOMETHING_ELSE_ENABLED"] = "IS_SOMETHING_ELSE_ENABLED";
})(ValidFlagsEnum || (ValidFlagsEnum = {}));
testFlagEnumValidity(ValidFlagsEnum);
var InvalidFlagsEnum;
(function (InvalidFlagsEnum) {
    InvalidFlagsEnum["INVALID_ENABLED"] = "INVALID_ENABLED";
})(InvalidFlagsEnum || (InvalidFlagsEnum = {}));
testFlagEnumValidity(InvalidFlagsEnum);
var NonMatchingKeyValueEnum;
(function (NonMatchingKeyValueEnum) {
    NonMatchingKeyValueEnum["IS_SOMETHING_ENABLED"] = "IS_SOMETHING_ELSE_ENABLED";
})(NonMatchingKeyValueEnum || (NonMatchingKeyValueEnum = {}));
const validateNonMatchingKeyValueEnum = NonMatchingKeyValueEnum;
const validateFeatureFlagsKeysEnum = FeatureFlagsKeysEnum;
testFlagEnumValidity(FeatureFlagsKeysEnum);
const validateSystemCriticalFlagsEnum = SystemCriticalFlagsEnum;
testFlagEnumValidity(SystemCriticalFlagsEnum);
