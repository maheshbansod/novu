import { JSX, Accessor, ParentProps, Setter } from 'solid-js';
import type { AppearanceKey } from '../../../types';
type TabsRootProps = Omit<JSX.IntrinsicElements['div'], 'onChange'> & ParentProps & {
    defaultValue?: string;
    value?: string;
    class?: string;
    appearanceKey?: AppearanceKey;
    onChange?: (value: string) => void;
};
type TabsContextValue = {
    activeTab: Accessor<string>;
    setActiveTab: Setter<string>;
    visibleTabs: Accessor<string[]>;
    setVisibleTabs: Setter<string[]>;
};
export declare const useTabsContext: () => TabsContextValue;
export declare const tabsRootVariants: () => string;
export declare const TabsRoot: (props: TabsRootProps) => JSX.Element;
export {};
//# sourceMappingURL=TabsRoot.d.ts.map