import { ReactNode } from 'react';
interface INavMenuProps {
    menuItems: IMenuItem[];
}
interface IMenuItem {
    icon: ReactNode;
    label: string;
    link: string;
    testId?: string;
    rightSide?: ReactNode | {
        component: ReactNode;
        displayOnHover: boolean;
    };
    condition?: boolean;
    tooltipLabel?: string;
}
/**
 * @deprecated
 */
export declare function NavMenu({ menuItems }: INavMenuProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=NavMenu.d.ts.map