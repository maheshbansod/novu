"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidHttpHeaderEnumString = exports.invalidHttpHeaderUnionString = exports.invalidHttpHeaderSingleString = exports.validHttpHeaderDoubleSingleEnum = exports.validHttpHeaderSingleSingleEnum = exports.validHttpHeaderSingleEnum = exports.validHttpHeaderUnion2String = exports.validHttpHeaderUnion1String = exports.validHttpHeaderDoubleSingleString = exports.validHttpHeaderSingleSingleString = exports.validHttpHeaderSingleString = exports.invalidConstantSingleString = exports.validConstantDoubleSingleString = exports.validConstantSingleSingleString = exports.validConstantSingleString = exports.invalidTestType = exports.validTestType = void 0;
const utils_types_1 = require("./utils.types");
describe('HTTP headers', () => {
    it('tests the Typescript compiler errors below', () => {
        expect(true).toEqual(true);
    });
});
exports.validTestType = {
    optional: 'test',
    required: 1,
};
exports.invalidTestType = {
    required: 1,
};
exports.validConstantSingleString = 'SINGLE';
exports.validConstantSingleSingleString = 'DOUBLE_STRING';
exports.validConstantDoubleSingleString = 'DOUBLEWORD_STRING';
exports.invalidConstantSingleString = 'single';
exports.validHttpHeaderSingleString = 'Single';
exports.validHttpHeaderSingleSingleString = 'Double-String';
exports.validHttpHeaderDoubleSingleString = 'DoubleWord-String';
exports.validHttpHeaderUnion1String = 'First-String';
exports.validHttpHeaderUnion2String = 'Second-String';
var TestCapitalHeaderEnum;
(function (TestCapitalHeaderEnum) {
    TestCapitalHeaderEnum["SINGLE"] = "Single";
    TestCapitalHeaderEnum["INVALID"] = "invalid-string";
    TestCapitalHeaderEnum["DOUBLE_STRING"] = "Double-String";
    TestCapitalHeaderEnum["DOUBLEWORD_STRING"] = "DoubleWord-String";
})(TestCapitalHeaderEnum || (TestCapitalHeaderEnum = {}));
exports.validHttpHeaderSingleEnum = 'Single';
exports.validHttpHeaderSingleSingleEnum = 'Double-String';
exports.validHttpHeaderDoubleSingleEnum = 'DoubleWord-String';
exports.invalidHttpHeaderSingleString = 'Invalid';
exports.invalidHttpHeaderUnionString = 'invalid-string';
exports.invalidHttpHeaderEnumString = 'invalid';
var ValidHeaderEnum;
(function (ValidHeaderEnum) {
    ValidHeaderEnum["SINGLE"] = "Single";
    ValidHeaderEnum["DOUBLE_STRING"] = "Double-String";
    ValidHeaderEnum["DOUBLEWORD_STRING"] = "DoubleWord-String";
})(ValidHeaderEnum || (ValidHeaderEnum = {}));
(0, utils_types_1.testHttpHeaderEnumValidity)(ValidHeaderEnum);
var InvalidKeyHeaderEnum;
(function (InvalidKeyHeaderEnum) {
    InvalidKeyHeaderEnum["SINGLE"] = "Single";
    InvalidKeyHeaderEnum["Invalid_Key"] = "Invalid-Key";
})(InvalidKeyHeaderEnum || (InvalidKeyHeaderEnum = {}));
(0, utils_types_1.testHttpHeaderEnumValidity)(InvalidKeyHeaderEnum);
var InvalidValueHeaderEnum;
(function (InvalidValueHeaderEnum) {
    InvalidValueHeaderEnum["SINGLE"] = "Single";
    InvalidValueHeaderEnum["INVALID_VALUE"] = "invalid-key";
})(InvalidValueHeaderEnum || (InvalidValueHeaderEnum = {}));
(0, utils_types_1.testHttpHeaderEnumValidity)(InvalidValueHeaderEnum);
