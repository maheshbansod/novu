import { JSX, ParentProps } from 'solid-js';
import type { AppearanceKey } from '../../../types';
type TabsContentProps = JSX.IntrinsicElements['div'] & ParentProps & {
    class?: string;
    value: string;
    appearanceKey?: AppearanceKey;
};
export declare const TabsContent: (props: TabsContentProps) => JSX.Element;
export {};
//# sourceMappingURL=TabsContent.d.ts.map