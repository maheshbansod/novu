import { ParentProps } from 'solid-js';
type FocusManagerContextType = {
    active: () => HTMLElement | null;
    setActive: (element: HTMLElement) => void;
    removeActive: (element: HTMLElement) => void;
    focusTraps: () => HTMLElement[];
};
type FocusManagerProviderProps = ParentProps;
export declare const FocusManagerProvider: (props: FocusManagerProviderProps) => import("solid-js").JSX.Element;
export declare function useFocusManager(): FocusManagerContextType;
export {};
//# sourceMappingURL=FocusManagerContext.d.ts.map