import { type TabsProps as ExternalTabsProps } from '@mantine/core';
import { ReactNode } from 'react';
import { CoreProps, LocalizedMessage } from '../../types';
import { JsxStyleProps } from '../../../styled-system/types';
interface ITabProps<TTabType extends string = string> {
    value: TTabType;
    label: LocalizedMessage;
    content?: ReactNode;
    icon?: ReactNode;
}
export interface ITabsProps<TTabType extends string = string> extends JsxStyleProps, CoreProps, Pick<ExternalTabsProps, 'keepMounted'> {
    value?: TTabType;
    defaultValue?: TTabType;
    onTabChange?: (tab: TTabType) => void;
    tabConfigs: ITabProps[];
}
export declare const Tabs: import("react").ForwardRefExoticComponent<ITabsProps<string> & import("react").RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Tabs.d.ts.map