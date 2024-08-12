import { Accessor, ParentProps } from 'solid-js';
import { NotificationFilter } from '../../types';
export declare const CountProvider: (props: ParentProps) => import("solid-js").JSX.Element;
export declare const useTotalUnreadCount: () => {
    totalUnreadCount: Accessor<number>;
};
type UseNewMessagesCountProps = {
    filter: Pick<NotificationFilter, 'tags'>;
};
export declare const useNewMessagesCount: (props: UseNewMessagesCountProps) => {
    count: Accessor<number>;
    reset: () => void;
};
type UseUnreadCountProps = {
    filter: Pick<NotificationFilter, 'tags'>;
};
export declare const useUnreadCount: (props: UseUnreadCountProps) => Accessor<number>;
type UseUnreadCountsProps = {
    filters: Pick<NotificationFilter, 'tags'>[];
};
export declare const useUnreadCounts: (props: UseUnreadCountsProps) => Accessor<number[]>;
export {};
//# sourceMappingURL=CountContext.d.ts.map