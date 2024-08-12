import { Accessor } from 'solid-js';
import type { NotificationFilter } from '../../../types';
import { ListNotificationsArgs } from '../../../notifications';
type UseNotificationsInfiniteScrollProps = {
    options: Accessor<Exclude<ListNotificationsArgs, 'offset'>>;
};
export declare const useNotificationsInfiniteScroll: (props: UseNotificationsInfiniteScrollProps) => {
    data: Accessor<import("../../../types").Notification[]>;
    initialLoading: Accessor<boolean>;
    setEl: (el: Element) => void;
    end: Accessor<boolean>;
    refetch: ({ filter }: {
        filter?: NotificationFilter | undefined;
    }) => void;
};
export {};
//# sourceMappingURL=useNotifications.d.ts.map