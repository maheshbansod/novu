import { ParentProps } from 'solid-js';
import type { Appearance, Elements, Variables } from '../types';
type AppearanceContextType = {
    variables?: Variables;
    elements?: Elements;
    appearanceKeyToCssInJsClass: Record<string, string>;
    id: string;
};
type AppearanceProviderProps = ParentProps & {
    appearance?: Appearance;
} & {
    id: string;
};
export declare const AppearanceProvider: (props: AppearanceProviderProps) => import("solid-js").JSX.Element;
export declare function useAppearance(): AppearanceContextType;
export {};
//# sourceMappingURL=AppearanceContext.d.ts.map