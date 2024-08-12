import type { Notification as NotificationType } from '../../../notifications';
import type { NotificationActionClickHandler, NotificationClickHandler, NotificationMounter } from '../../types';
type NotificationProps = {
    notification: NotificationType;
    mountNotification?: NotificationMounter;
    onNotificationClick?: NotificationClickHandler;
    onPrimaryActionClick?: NotificationActionClickHandler;
    onSecondaryActionClick?: NotificationActionClickHandler;
};
export declare const Notification: (props: NotificationProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Notification.d.ts.map