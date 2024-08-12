import type { BellMounter, NotificationActionClickHandler, NotificationClickHandler, NotificationMounter } from '../types';
export type InboxProps = {
    open?: boolean;
    mountNotification?: NotificationMounter;
    mountBell?: BellMounter;
    onNotificationClick?: NotificationClickHandler;
    onPrimaryActionClick?: NotificationActionClickHandler;
    onSecondaryActionClick?: NotificationActionClickHandler;
};
export declare const Inbox: (props: InboxProps) => import("solid-js").JSX.Element;
//# sourceMappingURL=Inbox.d.ts.map