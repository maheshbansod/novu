/// <reference types="react" />
import { MantineTheme } from '@mantine/core';
import { ISidebarBaseProps } from './Sidebar.types';
export declare const HeaderHolder: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const scrollableClass: string;
export declare const Form: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
} & {
    isParentScrollable: boolean;
}, import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {}>;
export declare const BodyHolder: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
} & {
    isParentScrollable: boolean;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const FooterHolder: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements>;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const useDrawerStyles: (params: Pick<ISidebarBaseProps, "isExpanded" | "navigationWidth">, options?: import("@mantine/core").UseStylesOptions<string>) => {
    classes: {
        root: string;
        drawer: string;
        body: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export declare const sidebarDrawerContentClassName: string;
//# sourceMappingURL=Sidebar.styles.d.ts.map