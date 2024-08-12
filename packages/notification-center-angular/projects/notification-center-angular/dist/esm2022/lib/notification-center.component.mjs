import { Component, Input } from '@angular/core';
import { NotificationCenterWebComponent } from '@novu/notification-center';
import * as i0 from "@angular/core";
customElements.define('notification-center-web-component', NotificationCenterWebComponent);
export class NotificationCenterComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLWNlbnRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL25vdGlmaWNhdGlvbi1jZW50ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSw4QkFBOEIsRUFBb0MsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFN0csY0FBYyxDQUFDLE1BQU0sQ0FBQyxtQ0FBbUMsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDO0FBbUQzRixNQUFNLE9BQU8sMkJBQTJCO0lBakR4QztRQXFEVywwQkFBcUIsR0FBOEQsRUFBRSxDQUFDO0tBcUJoRzsrR0F6QlksMkJBQTJCO21HQUEzQiwyQkFBMkIsK3NCQS9DNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBc0I0Qjs7NEZBeUIzQiwyQkFBMkI7a0JBakR2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwrQkFBK0I7b0JBQ3pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FzQjRCO29CQUN0QyxNQUFNLEVBQUU7d0JBQ04sWUFBWTt3QkFDWixXQUFXO3dCQUNYLGNBQWM7d0JBQ2QsdUJBQXVCO3dCQUN2QixnQkFBZ0I7d0JBQ2hCLFFBQVE7d0JBQ1IsTUFBTTt3QkFDTixxQkFBcUI7d0JBQ3JCLDRCQUE0Qjt3QkFDNUIsU0FBUzt3QkFDVCxlQUFlO3dCQUNmLE9BQU87d0JBQ1AsUUFBUTt3QkFDUixhQUFhO3dCQUNiLE1BQU07d0JBQ04sZUFBZTt3QkFDZixxQkFBcUI7d0JBQ3JCLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixZQUFZO3dCQUNaLGtCQUFrQjtxQkFDbkI7aUJBQ0Y7OEJBRVUsVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0cscUJBQXFCO3NCQUE3QixLQUFLO2dCQUNHLGNBQWM7c0JBQXRCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csMEJBQTBCO3NCQUFsQyxLQUFLO2dCQUlHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csV0FBVztzQkFBbkIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBQ0csa0JBQWtCO3NCQUExQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25DZW50ZXJXZWJDb21wb25lbnQsIE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzIH0gZnJvbSAnQG5vdnUvbm90aWZpY2F0aW9uLWNlbnRlcic7XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbm90aWZpY2F0aW9uLWNlbnRlci13ZWItY29tcG9uZW50JywgTm90aWZpY2F0aW9uQ2VudGVyV2ViQ29tcG9uZW50KTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbm90aWZpY2F0aW9uLWNlbnRlci1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogYDxub3RpZmljYXRpb24tY2VudGVyLXdlYi1jb21wb25lbnRcbiAgICBbYmFja2VuZFVybF09XCJiYWNrZW5kVXJsXCJcbiAgICBbc29ja2V0VXJsXT1cInNvY2tldFVybFwiXG4gICAgW3N1YnNjcmliZXJJZF09XCJzdWJzY3JpYmVySWRcIlxuICAgIFthcHBsaWNhdGlvbklkZW50aWZpZXJdPVwiYXBwbGljYXRpb25JZGVudGlmaWVyXCJcbiAgICBbc3Vic2NyaWJlckhhc2hdPVwic3Vic2NyaWJlckhhc2hcIlxuICAgIFtzdG9yZXNdPVwic3RvcmVzXCJcbiAgICBbdGFic109XCJ0YWJzXCJcbiAgICBbc2hvd1VzZXJQcmVmZXJlbmNlc109XCJzaG93VXNlclByZWZlcmVuY2VzXCJcbiAgICBbYWxsb3dlZE5vdGlmaWNhdGlvbkFjdGlvbnNdPVwiYWxsb3dlZE5vdGlmaWNhdGlvbkFjdGlvbnNcIlxuICAgIFtwb3BvdmVyXT1cInBvcG92ZXJcIlxuICAgIFtwb3BvdmVyQ29uZmlnXT1cInBvcG92ZXJDb25maWdcIlxuICAgIFt0aGVtZV09XCJ0aGVtZVwiXG4gICAgW3N0eWxlc109XCJzdHlsZXNcIlxuICAgIFtjb2xvclNjaGVtZV09XCJjb2xvclNjaGVtZVwiXG4gICAgW2kxOG5dPVwiaTE4blwiXG4gICAgW3Nlc3Npb25Mb2FkZWRdPVwic2Vzc2lvbkxvYWRlZFwiXG4gICAgW25vdGlmaWNhdGlvbkNsaWNrZWRdPVwibm90aWZpY2F0aW9uQ2xpY2tlZFwiXG4gICAgW3Vuc2VlbkNvdW50Q2hhbmdlZF09XCJ1bnNlZW5Db3VudENoYW5nZWRcIlxuICAgIFthY3Rpb25DbGlja2VkXT1cImFjdGlvbkNsaWNrZWRcIlxuICAgIFt0YWJDbGlja2VkXT1cInRhYkNsaWNrZWRcIlxuICAgIFtwcmVmZXJlbmNlRmlsdGVyXT1cInByZWZlcmVuY2VGaWx0ZXJcIlxuICA+PC9ub3RpZmljYXRpb24tY2VudGVyLXdlYi1jb21wb25lbnQ+YCxcbiAgaW5wdXRzOiBbXG4gICAgJ2JhY2tlbmRVcmwnLFxuICAgICdzb2NrZXRVcmwnLFxuICAgICdzdWJzY3JpYmVySWQnLFxuICAgICdhcHBsaWNhdGlvbklkZW50aWZpZXInLFxuICAgICdzdWJzY3JpYmVySGFzaCcsXG4gICAgJ3N0b3JlcycsXG4gICAgJ3RhYnMnLFxuICAgICdzaG93VXNlclByZWZlcmVuY2VzJyxcbiAgICAnYWxsb3dlZE5vdGlmaWNhdGlvbkFjdGlvbnMnLFxuICAgICdwb3BvdmVyJyxcbiAgICAncG9wb3ZlckNvbmZpZycsXG4gICAgJ3RoZW1lJyxcbiAgICAnc3R5bGVzJyxcbiAgICAnY29sb3JTY2hlbWUnLFxuICAgICdpMThuJyxcbiAgICAnc2Vzc2lvbkxvYWRlZCcsXG4gICAgJ25vdGlmaWNhdGlvbkNsaWNrZWQnLFxuICAgICd1bnNlZW5Db3VudENoYW5nZWQnLFxuICAgICdhY3Rpb25DbGlja2VkJyxcbiAgICAndGFiQ2xpY2tlZCcsXG4gICAgJ3ByZWZlcmVuY2VGaWx0ZXInLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBiYWNrZW5kVXJsOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snYmFja2VuZFVybCddO1xuICBASW5wdXQoKSBzb2NrZXRVcmw6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydzb2NrZXRVcmwnXTtcbiAgQElucHV0KCkgc3Vic2NyaWJlcklkOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snc3Vic2NyaWJlcklkJ107XG4gIEBJbnB1dCgpIGFwcGxpY2F0aW9uSWRlbnRpZmllcjogTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50UHJvcHNbJ2FwcGxpY2F0aW9uSWRlbnRpZmllciddID0gJyc7XG4gIEBJbnB1dCgpIHN1YnNjcmliZXJIYXNoOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snc3Vic2NyaWJlckhhc2gnXTtcbiAgQElucHV0KCkgc3RvcmVzOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snc3RvcmVzJ107XG4gIEBJbnB1dCgpIHRhYnM6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWyd0YWJzJ107XG4gIEBJbnB1dCgpIHNob3dVc2VyUHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydzaG93VXNlclByZWZlcmVuY2VzJ107XG4gIEBJbnB1dCgpIGFsbG93ZWROb3RpZmljYXRpb25BY3Rpb25zOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snYWxsb3dlZE5vdGlmaWNhdGlvbkFjdGlvbnMnXTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFVzZSBwb3BvdmVyQ29uZmlnIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpIHBvcG92ZXI6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydwb3BvdmVyJ107XG4gIEBJbnB1dCgpIHBvcG92ZXJDb25maWc6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydwb3BvdmVyQ29uZmlnJ107XG4gIEBJbnB1dCgpIHRoZW1lOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1sndGhlbWUnXTtcbiAgQElucHV0KCkgc3R5bGVzOiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snc3R5bGVzJ107XG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lPzogTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50UHJvcHNbJ2NvbG9yU2NoZW1lJ107XG4gIEBJbnB1dCgpIGkxOG46IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydpMThuJ107XG4gIEBJbnB1dCgpIHNlc3Npb25Mb2FkZWQ6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWydzZXNzaW9uTG9hZGVkJ107XG4gIEBJbnB1dCgpIG5vdGlmaWNhdGlvbkNsaWNrZWQ/OiBOb3RpZmljYXRpb25DZW50ZXJDb21wb25lbnRQcm9wc1snbm90aWZpY2F0aW9uQ2xpY2tlZCddO1xuICBASW5wdXQoKSB1bnNlZW5Db3VudENoYW5nZWQ6IE5vdGlmaWNhdGlvbkNlbnRlckNvbXBvbmVudFByb3BzWyd1bnNlZW5Db3VudENoYW5nZWQnXTtcbiAgQElucHV0KCkgYWN0aW9uQ2xpY2tlZDogTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50UHJvcHNbJ2FjdGlvbkNsaWNrZWQnXTtcbiAgQElucHV0KCkgdGFiQ2xpY2tlZDogTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50UHJvcHNbJ3RhYkNsaWNrZWQnXTtcbiAgQElucHV0KCkgcHJlZmVyZW5jZUZpbHRlcjogTm90aWZpY2F0aW9uQ2VudGVyQ29tcG9uZW50UHJvcHNbJ3ByZWZlcmVuY2VGaWx0ZXInXTtcbn1cbiJdfQ==