import { MountableElement } from 'solid-js/web';
import { NovuUI } from '..';
import type { NovuOptions } from '../../types';
import type { Tab, Appearance, Localization } from '../types';
export declare const novuComponents: {
    Inbox: (props: import("./Inbox").InboxProps) => import("solid-js").JSX.Element;
    Bell: import("solid-js").Component<{
        mountBell?: import("..").BellMounter | undefined;
    }>;
    Preferences: () => import("solid-js").JSX.Element;
    Notifications: (props: {
        mountNotification?: import("..").NotificationMounter | undefined;
        onNotificationClick?: import("..").NotificationClickHandler | undefined;
        onPrimaryActionClick?: import("..").NotificationActionClickHandler | undefined;
        onSecondaryActionClick?: import("..").NotificationActionClickHandler | undefined;
        limit?: number | undefined;
        filter?: import("../../types").NotificationFilter | undefined;
    }) => import("solid-js").JSX.Element;
};
export type NovuComponent = {
    name: NovuComponentName;
    props?: any;
};
export type NovuMounterProps = NovuComponent & {
    element: MountableElement;
};
export type NovuComponentName = keyof typeof novuComponents;
export type NovuComponentControls = {
    mount: (params: NovuMounterProps) => void;
    unmount: (params: {
        element: MountableElement;
    }) => void;
    updateProps: (params: {
        element: MountableElement;
        props: unknown;
    }) => void;
};
type RendererProps = {
    novuUI: NovuUI;
    cssHref: string;
    appearance?: Appearance;
    nodes: Map<MountableElement, NovuComponent>;
    localization?: Localization;
    options: NovuOptions;
    tabs: Array<Tab>;
};
export declare const Renderer: (props: RendererProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=Renderer.d.ts.map