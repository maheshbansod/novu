import { Accessor, ParentProps } from 'solid-js';
import { NotificationFilter } from '../../types';
import { NotificationStatus, Tab } from '../types';
type InboxContextType = {
    setStatus: (status: NotificationStatus) => void;
    status: Accessor<NotificationStatus>;
    filter: Accessor<NotificationFilter>;
    tabs: Accessor<Array<Tab>>;
    activeTab: Accessor<string>;
    setActiveTab: (tab: string) => void;
};
type InboxProviderProps = ParentProps<{
    tabs: Array<Tab>;
}>;
export declare const InboxProvider: (props: InboxProviderProps) => import("solid-js").JSX.Element;
export declare const useInboxContext: () => InboxContextType;
export {};
//# sourceMappingURL=InboxContext.d.ts.map