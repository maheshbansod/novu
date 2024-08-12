import { NotificationCenterComponentProps } from '@novu/notification-center';
import * as i0 from "@angular/core";
export declare class NotificationCenterComponent {
    backendUrl: NotificationCenterComponentProps['backendUrl'];
    socketUrl: NotificationCenterComponentProps['socketUrl'];
    subscriberId: NotificationCenterComponentProps['subscriberId'];
    applicationIdentifier: NotificationCenterComponentProps['applicationIdentifier'];
    subscriberHash: NotificationCenterComponentProps['subscriberHash'];
    stores: NotificationCenterComponentProps['stores'];
    tabs: NotificationCenterComponentProps['tabs'];
    showUserPreferences: NotificationCenterComponentProps['showUserPreferences'];
    allowedNotificationActions: NotificationCenterComponentProps['allowedNotificationActions'];
    /**
     * @deprecated Use popoverConfig instead
     */
    popover: NotificationCenterComponentProps['popover'];
    popoverConfig: NotificationCenterComponentProps['popoverConfig'];
    theme: NotificationCenterComponentProps['theme'];
    styles: NotificationCenterComponentProps['styles'];
    colorScheme?: NotificationCenterComponentProps['colorScheme'];
    i18n: NotificationCenterComponentProps['i18n'];
    sessionLoaded: NotificationCenterComponentProps['sessionLoaded'];
    notificationClicked?: NotificationCenterComponentProps['notificationClicked'];
    unseenCountChanged: NotificationCenterComponentProps['unseenCountChanged'];
    actionClicked: NotificationCenterComponentProps['actionClicked'];
    tabClicked: NotificationCenterComponentProps['tabClicked'];
    preferenceFilter: NotificationCenterComponentProps['preferenceFilter'];
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationCenterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationCenterComponent, "notification-center-component", never, { "backendUrl": { "alias": "backendUrl"; "required": false; }; "socketUrl": { "alias": "socketUrl"; "required": false; }; "subscriberId": { "alias": "subscriberId"; "required": false; }; "applicationIdentifier": { "alias": "applicationIdentifier"; "required": false; }; "subscriberHash": { "alias": "subscriberHash"; "required": false; }; "stores": { "alias": "stores"; "required": false; }; "tabs": { "alias": "tabs"; "required": false; }; "showUserPreferences": { "alias": "showUserPreferences"; "required": false; }; "allowedNotificationActions": { "alias": "allowedNotificationActions"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; "popoverConfig": { "alias": "popoverConfig"; "required": false; }; "theme": { "alias": "theme"; "required": false; }; "styles": { "alias": "styles"; "required": false; }; "colorScheme": { "alias": "colorScheme"; "required": false; }; "i18n": { "alias": "i18n"; "required": false; }; "sessionLoaded": { "alias": "sessionLoaded"; "required": false; }; "notificationClicked": { "alias": "notificationClicked"; "required": false; }; "unseenCountChanged": { "alias": "unseenCountChanged"; "required": false; }; "actionClicked": { "alias": "actionClicked"; "required": false; }; "tabClicked": { "alias": "tabClicked"; "required": false; }; "preferenceFilter": { "alias": "preferenceFilter"; "required": false; }; }, {}, never, never, false, never>;
}
