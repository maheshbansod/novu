import { ButtonTypeEnum } from '../../entities/messages';
export interface INotificationButtonConfig {
    key: ButtonTypeEnum;
    displayName: string;
}
export interface IButtonStyles {
    backGroundColor: string;
    fontColor: string;
    removeCircleColor: string;
}
export interface IStyleButtons {
    primary: IButtonStyles;
    secondary: IButtonStyles;
    clicked: IButtonStyles;
}
export declare const darkButtonStyle: IStyleButtons;
export declare const lightButtonStyle: IStyleButtons;
export declare const notificationItemButtons: INotificationButtonConfig[];
//# sourceMappingURL=notificationItemButton.d.ts.map