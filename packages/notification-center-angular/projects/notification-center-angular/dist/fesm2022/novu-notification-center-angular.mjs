import * as i0 from '@angular/core';
import { Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotificationCenterWebComponent } from '@novu/notification-center';

customElements.define('notification-center-web-component', NotificationCenterWebComponent);
class NotificationCenterComponent {
    constructor() {
        this.applicationIdentifier = '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.11", type: NotificationCenterComponent, selector: "notification-center-component", inputs: { backendUrl: "backendUrl", socketUrl: "socketUrl", subscriberId: "subscriberId", applicationIdentifier: "applicationIdentifier", subscriberHash: "subscriberHash", stores: "stores", tabs: "tabs", showUserPreferences: "showUserPreferences", allowedNotificationActions: "allowedNotificationActions", popover: "popover", popoverConfig: "popoverConfig", theme: "theme", styles: "styles", colorScheme: "colorScheme", i18n: "i18n", sessionLoaded: "sessionLoaded", notificationClicked: "notificationClicked", unseenCountChanged: "unseenCountChanged", actionClicked: "actionClicked", tabClicked: "tabClicked", preferenceFilter: "preferenceFilter" }, ngImport: i0, template: `<notification-center-web-component
    [backendUrl]="backendUrl"
    [socketUrl]="socketUrl"
    [subscriberId]="subscriberId"
    [applicationIdentifier]="applicationIdentifier"
    [subscriberHash]="subscriberHash"
    [stores]="stores"
    [tabs]="tabs"
    [showUserPreferences]="showUserPreferences"
    [allowedNotificationActions]="allowedNotificationActions"
    [popover]="popover"
    [popoverConfig]="popoverConfig"
    [theme]="theme"
    [styles]="styles"
    [colorScheme]="colorScheme"
    [i18n]="i18n"
    [sessionLoaded]="sessionLoaded"
    [notificationClicked]="notificationClicked"
    [unseenCountChanged]="unseenCountChanged"
    [actionClicked]="actionClicked"
    [tabClicked]="tabClicked"
    [preferenceFilter]="preferenceFilter"
  ></notification-center-web-component>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'notification-center-component',
                    template: `<notification-center-web-component
    [backendUrl]="backendUrl"
    [socketUrl]="socketUrl"
    [subscriberId]="subscriberId"
    [applicationIdentifier]="applicationIdentifier"
    [subscriberHash]="subscriberHash"
    [stores]="stores"
    [tabs]="tabs"
    [showUserPreferences]="showUserPreferences"
    [allowedNotificationActions]="allowedNotificationActions"
    [popover]="popover"
    [popoverConfig]="popoverConfig"
    [theme]="theme"
    [styles]="styles"
    [colorScheme]="colorScheme"
    [i18n]="i18n"
    [sessionLoaded]="sessionLoaded"
    [notificationClicked]="notificationClicked"
    [unseenCountChanged]="unseenCountChanged"
    [actionClicked]="actionClicked"
    [tabClicked]="tabClicked"
    [preferenceFilter]="preferenceFilter"
  ></notification-center-web-component>`,
                    inputs: [
                        'backendUrl',
                        'socketUrl',
                        'subscriberId',
                        'applicationIdentifier',
                        'subscriberHash',
                        'stores',
                        'tabs',
                        'showUserPreferences',
                        'allowedNotificationActions',
                        'popover',
                        'popoverConfig',
                        'theme',
                        'styles',
                        'colorScheme',
                        'i18n',
                        'sessionLoaded',
                        'notificationClicked',
                        'unseenCountChanged',
                        'actionClicked',
                        'tabClicked',
                        'preferenceFilter',
                    ],
                }]
        }], propDecorators: { backendUrl: [{
                type: Input
            }], socketUrl: [{
                type: Input
            }], subscriberId: [{
                type: Input
            }], applicationIdentifier: [{
                type: Input
            }], subscriberHash: [{
                type: Input
            }], stores: [{
                type: Input
            }], tabs: [{
                type: Input
            }], showUserPreferences: [{
                type: Input
            }], allowedNotificationActions: [{
                type: Input
            }], popover: [{
                type: Input
            }], popoverConfig: [{
                type: Input
            }], theme: [{
                type: Input
            }], styles: [{
                type: Input
            }], colorScheme: [{
                type: Input
            }], i18n: [{
                type: Input
            }], sessionLoaded: [{
                type: Input
            }], notificationClicked: [{
                type: Input
            }], unseenCountChanged: [{
                type: Input
            }], actionClicked: [{
                type: Input
            }], tabClicked: [{
                type: Input
            }], preferenceFilter: [{
                type: Input
            }] } });

class NotificationCenterModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterModule, declarations: [NotificationCenterComponent], exports: [NotificationCenterComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.11", ngImport: i0, type: NotificationCenterModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NotificationCenterComponent],
                    exports: [NotificationCenterComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NotificationCenterComponent, NotificationCenterModule };
//# sourceMappingURL=novu-notification-center-angular.mjs.map
