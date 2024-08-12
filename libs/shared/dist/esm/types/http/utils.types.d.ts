export type WithRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export type ConvertToConstantCase<S extends string> = S extends `${infer T}-${infer U}` ? `${Uppercase<T>}_${ConvertToConstantCase<U>}` : Uppercase<S>;
export type ValidateHttpHeaderCase<S extends string> = S extends `${infer U}-${infer V}` ? U extends Capitalize<U> ? `${U}-${ValidateHttpHeaderCase<V>}` : never : S extends Capitalize<S> ? `${S}` : never;
export declare function testHttpHeaderEnumValidity<TEnum extends IConstants, TValue extends TEnum[keyof TEnum] & string, IConstants = Record<ConvertToConstantCase<TValue>, ValidateHttpHeaderCase<TValue>>>(testEnum: TEnum & Record<Exclude<keyof TEnum, keyof IConstants>, [
    'Key must be the CONSTANT_CASED version of the Capital-Cased value'
]>): void;
//# sourceMappingURL=utils.types.d.ts.map