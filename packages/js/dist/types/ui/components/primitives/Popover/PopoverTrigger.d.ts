import { JSX } from 'solid-js';
import type { AppearanceKey } from '../../../types';
type PopoverTriggerProps = JSX.IntrinsicElements['button'] & {
    appearanceKey?: AppearanceKey;
    asChild?: (props: any) => JSX.Element;
};
export declare const PopoverTrigger: (props: PopoverTriggerProps) => JSX.Element;
export {};
//# sourceMappingURL=PopoverTrigger.d.ts.map