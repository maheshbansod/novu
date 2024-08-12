import { JSX, ParentProps, Ref } from 'solid-js';
import type { AppearanceKey } from '../../../types';
type TabsTriggerProps = JSX.IntrinsicElements['button'] & ParentProps & {
    value: string;
    class?: string;
    appearanceKey?: AppearanceKey;
    ref?: Ref<HTMLButtonElement>;
    onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
};
export declare const tabsTriggerVariants: () => string;
export declare const TabsTrigger: (props: TabsTriggerProps) => JSX.Element;
export {};
//# sourceMappingURL=TabsTrigger.d.ts.map