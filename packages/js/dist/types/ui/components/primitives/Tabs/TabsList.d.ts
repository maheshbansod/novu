import { JSX, ParentProps, Ref } from 'solid-js';
import type { AppearanceKey } from '../../../types';
export declare const tabsListVariants: () => string;
type TabsListProps = JSX.IntrinsicElements['div'] & ParentProps & {
    class?: string;
    appearanceKey?: AppearanceKey;
    ref?: Ref<HTMLDivElement>;
};
export declare const TabsList: (props: TabsListProps) => JSX.Element;
export {};
//# sourceMappingURL=TabsList.d.ts.map