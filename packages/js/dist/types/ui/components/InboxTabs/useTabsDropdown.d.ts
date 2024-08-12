import type { Tab } from '../../types';
type TabsArray = Array<Tab>;
export declare const useTabsDropdown: ({ tabs }: {
    tabs: TabsArray;
}) => {
    dropdownTabs: import("solid-js").Accessor<TabsArray>;
    setTabsList: import("solid-js").Setter<HTMLDivElement | undefined>;
    visibleTabs: import("solid-js").Accessor<TabsArray>;
};
export {};
//# sourceMappingURL=useTabsDropdown.d.ts.map