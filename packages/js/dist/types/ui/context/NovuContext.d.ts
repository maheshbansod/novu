import { JSX } from 'solid-js';
import { Novu } from '../../novu';
import type { NovuOptions } from '../../types';
type NovuProviderProps = {
    options: NovuOptions;
    children: JSX.Element;
};
export declare function NovuProvider(props: NovuProviderProps): JSX.Element;
export declare function useNovu(): Novu;
export {};
//# sourceMappingURL=NovuContext.d.ts.map