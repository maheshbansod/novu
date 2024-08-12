import { JSX, ParentComponent, Setter } from 'solid-js';
import type { NotificationFilter } from '../../../types';
import type { NotificationActionClickHandler, NotificationClickHandler, NotificationMounter } from '../../types';
export declare const NotificationListContainer: ParentComponent<{
    ref?: Setter<HTMLElement | null>;
}>;
type NotificationListProps = {
    mountNotification?: NotificationMounter;
    onNotificationClick?: NotificationClickHandler;
    onPrimaryActionClick?: NotificationActionClickHandler;
    onSecondaryActionClick?: NotificationActionClickHandler;
    limit?: number | undefined;
    filter?: NotificationFilter;
};
export declare const NotificationList: (props: NotificationListProps) => JSX.Element;
export {};
//# sourceMappingURL=NotificationList.d.ts.map