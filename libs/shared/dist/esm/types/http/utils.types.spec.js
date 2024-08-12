import { testHttpHeaderEnumValidity } from './utils.types';
describe('HTTP headers', () => {
    it('tests the Typescript compiler errors below', () => {
        expect(true).toEqual(true);
    });
});
export const validTestType = {
    optional: 'test',
    required: 1,
};
export const invalidTestType = {
    required: 1,
};
export const validConstantSingleString = 'SINGLE';
export const validConstantSingleSingleString = 'DOUBLE_STRING';
export const validConstantDoubleSingleString = 'DOUBLEWORD_STRING';
export const invalidConstantSingleString = 'single';
export const validHttpHeaderSingleString = 'Single';
export const validHttpHeaderSingleSingleString = 'Double-String';
export const validHttpHeaderDoubleSingleString = 'DoubleWord-String';
export const validHttpHeaderUnion1String = 'First-String';
export const validHttpHeaderUnion2String = 'Second-String';
var TestCapitalHeaderEnum;
(function (TestCapitalHeaderEnum) {
    TestCapitalHeaderEnum["SINGLE"] = "Single";
    TestCapitalHeaderEnum["INVALID"] = "invalid-string";
    TestCapitalHeaderEnum["DOUBLE_STRING"] = "Double-String";
    TestCapitalHeaderEnum["DOUBLEWORD_STRING"] = "DoubleWord-String";
})(TestCapitalHeaderEnum || (TestCapitalHeaderEnum = {}));
export const validHttpHeaderSingleEnum = 'Single';
export const validHttpHeaderSingleSingleEnum = 'Double-String';
export const validHttpHeaderDoubleSingleEnum = 'DoubleWord-String';
export const invalidHttpHeaderSingleString = 'Invalid';
export const invalidHttpHeaderUnionString = 'invalid-string';
export const invalidHttpHeaderEnumString = 'invalid';
var ValidHeaderEnum;
(function (ValidHeaderEnum) {
    ValidHeaderEnum["SINGLE"] = "Single";
    ValidHeaderEnum["DOUBLE_STRING"] = "Double-String";
    ValidHeaderEnum["DOUBLEWORD_STRING"] = "DoubleWord-String";
})(ValidHeaderEnum || (ValidHeaderEnum = {}));
testHttpHeaderEnumValidity(ValidHeaderEnum);
var InvalidKeyHeaderEnum;
(function (InvalidKeyHeaderEnum) {
    InvalidKeyHeaderEnum["SINGLE"] = "Single";
    InvalidKeyHeaderEnum["Invalid_Key"] = "Invalid-Key";
})(InvalidKeyHeaderEnum || (InvalidKeyHeaderEnum = {}));
testHttpHeaderEnumValidity(InvalidKeyHeaderEnum);
var InvalidValueHeaderEnum;
(function (InvalidValueHeaderEnum) {
    InvalidValueHeaderEnum["SINGLE"] = "Single";
    InvalidValueHeaderEnum["INVALID_VALUE"] = "invalid-key";
})(InvalidValueHeaderEnum || (InvalidValueHeaderEnum = {}));
testHttpHeaderEnumValidity(InvalidValueHeaderEnum);
