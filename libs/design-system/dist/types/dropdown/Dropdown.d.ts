import React from 'react';
import { MenuProps } from '@mantine/core';
export interface IDropdownProps extends Pick<MenuProps, 'withArrow' | 'opened' | 'offset' | 'position' | 'onOpen' | 'onClose' | 'withinPortal' | 'middlewares' | 'disabled' | 'width' | 'styles' | 'zIndex'> {
    control: React.ReactNode;
    children: React.ReactNode;
}
export declare function Dropdown({ control, withArrow, offset, children, ...props }: IDropdownProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Dropdown {
    var Item;
    var Label: React.ForwardRefExoticComponent<import("@mantine/core").MenuLabelProps & React.RefAttributes<HTMLDivElement>>;
    var Divider: React.ForwardRefExoticComponent<import("@mantine/core").MenuDividerProps & React.RefAttributes<HTMLDivElement>>;
}
//# sourceMappingURL=Dropdown.d.ts.map