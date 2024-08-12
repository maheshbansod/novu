import { Accessor, ParentProps } from 'solid-js';
import { defaultLocalization } from '../config/defaultLocalization';
import type { Localization, LocalizationKey } from '../types';
type LocalizationValue<K extends LocalizationKey> = (typeof defaultLocalization)[K];
type LocalizationParams<K extends LocalizationKey> = LocalizationValue<K> extends (args: infer P) => any ? P : undefined;
type LocalizationContextType = {
    t: <K extends LocalizationKey>(key: K, ...args: LocalizationParams<K> extends undefined ? [] : [LocalizationParams<K>]) => string;
    locale: Accessor<string>;
};
type LocalizationProviderProps = ParentProps & {
    localization?: Localization;
};
export declare const LocalizationProvider: (props: LocalizationProviderProps) => import("solid-js").JSX.Element;
export declare function useLocalization(): LocalizationContextType;
export {};
//# sourceMappingURL=LocalizationContext.d.ts.map