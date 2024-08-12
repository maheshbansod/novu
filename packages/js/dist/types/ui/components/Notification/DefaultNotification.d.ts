import { JSX } from 'solid-js';
import type { Notification } from '../../../notifications';
import type { NotificationActionClickHandler, NotificationClickHandler } from '../../types';
type DefaultNotificationProps = {
    notification: Notification;
    onNotificationClick?: NotificationClickHandler;
    onPrimaryActionClick?: NotificationActionClickHandler;
    onSecondaryActionClick?: NotificationActionClickHandler;
};
export declare const DefaultNotification: (props: DefaultNotificationProps) => JSX.Element;
export {};
//# sourceMappingURL=DefaultNotification.d.ts.map