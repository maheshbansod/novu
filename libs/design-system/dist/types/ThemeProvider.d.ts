import { ReactNode } from 'react';
declare module '@mantine/core' {
    type MantineColor = MantineColor | 'gradient';
}
export declare function ThemeProvider({ children, shouldDisableGlobals, }: {
    children: ReactNode | ReactNode[];
    shouldDisableGlobals?: Boolean;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ThemeProvider.d.ts.map