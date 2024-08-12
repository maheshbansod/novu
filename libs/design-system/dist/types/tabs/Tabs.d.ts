import { TabsValue } from '@mantine/core';
import React, { ReactNode } from 'react';
import { SpacingProps } from '../shared/spacing.props';
interface IMenuButtonProp {
    value: string;
    content?: ReactNode | string;
    icon?: ReactNode | string;
}
interface ITabsProp extends SpacingProps {
    menuTabs: IMenuButtonProp[];
    orientation?: 'horizontal' | 'vertical';
    value?: string | null;
    defaultValue?: string | null;
    onTabChange?: (value: TabsValue) => void;
    withIcon?: boolean;
    loading?: boolean;
    keepMounted?: boolean;
}
export declare const Tabs: React.ForwardRefExoticComponent<ITabsProp & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Tabs.d.ts.map