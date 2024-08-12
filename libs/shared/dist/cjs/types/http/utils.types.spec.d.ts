import { WithRequired, ConvertToConstantCase, ValidateHttpHeaderCase } from './utils.types';
type TestWithRequired = {
    optional?: string;
    required: number;
};
export declare const validTestType: WithRequired<TestWithRequired, 'optional'>;
export declare const invalidTestType: WithRequired<TestWithRequired, 'optional'>;
export declare const validConstantSingleString: ConvertToConstantCase<'Single'>;
export declare const validConstantSingleSingleString: ConvertToConstantCase<'Double-String'>;
export declare const validConstantDoubleSingleString: ConvertToConstantCase<'DoubleWord-String'>;
export declare const invalidConstantSingleString: ConvertToConstantCase<'Single'>;
export declare const validHttpHeaderSingleString: ValidateHttpHeaderCase<'Single'>;
export declare const validHttpHeaderSingleSingleString: ValidateHttpHeaderCase<'Double-String'>;
export declare const validHttpHeaderDoubleSingleString: ValidateHttpHeaderCase<'DoubleWord-String'>;
export declare const validHttpHeaderUnion1String: ValidateHttpHeaderCase<'First-String' | 'Second-String'>;
export declare const validHttpHeaderUnion2String: ValidateHttpHeaderCase<'First-String' | 'Second-String'>;
declare enum TestCapitalHeaderEnum {
    SINGLE = "Single",
    INVALID = "invalid-string",
    DOUBLE_STRING = "Double-String",
    DOUBLEWORD_STRING = "DoubleWord-String"
}
export declare const validHttpHeaderSingleEnum: ValidateHttpHeaderCase<TestCapitalHeaderEnum.SINGLE>;
export declare const validHttpHeaderSingleSingleEnum: ValidateHttpHeaderCase<TestCapitalHeaderEnum.DOUBLE_STRING>;
export declare const validHttpHeaderDoubleSingleEnum: ValidateHttpHeaderCase<TestCapitalHeaderEnum.DOUBLEWORD_STRING>;
export declare const invalidHttpHeaderSingleString: ValidateHttpHeaderCase<'invalid-string'>;
export declare const invalidHttpHeaderUnionString: ValidateHttpHeaderCase<'First-String' | 'invalid-string'>;
export declare const invalidHttpHeaderEnumString: ValidateHttpHeaderCase<TestCapitalHeaderEnum.INVALID>;
export {};
//# sourceMappingURL=utils.types.spec.d.ts.map