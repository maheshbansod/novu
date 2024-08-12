import { ComponentProps } from 'solid-js';
import { MountableElement } from 'solid-js/web';
import type { NovuOptions } from '../types';
import { NovuComponentName, novuComponents } from './components/Renderer';
import type { BaseNovuProviderProps, NovuProviderProps, Tab, Appearance, Localization } from './types';
export type NovuUIOptions = NovuProviderProps;
export type BaseNovuUIOptions = BaseNovuProviderProps;
export declare class NovuUI {
    #private;
    id: string;
    constructor(props: NovuProviderProps);
    mountComponent<T extends NovuComponentName>({ name, element, props: componentProps, }: {
        name: T;
        element: MountableElement;
        props?: ComponentProps<(typeof novuComponents)[T]>;
    }): void;
    unmountComponent(element: MountableElement): void;
    updateAppearance(appearance?: Appearance): void;
    updateLocalization(localization?: Localization): void;
    updateOptions(options: NovuOptions): void;
    updateTabs(tabs?: Array<Tab>): void;
    unmount(): void;
}
//# sourceMappingURL=novuUI.d.ts.map