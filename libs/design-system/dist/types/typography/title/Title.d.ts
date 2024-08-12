import { MantineColor } from '@mantine/core';
import { PropsWithChildren } from 'react';
import { SpacingProps } from '../../shared/spacing.props';
interface ITitleProps extends PropsWithChildren<{}>, SpacingProps {
    size?: 1 | 2;
    color?: MantineColor;
}
/**
 * Use Title to create headers.
 *
 */
export declare function Title({ size, children, ...props }: ITitleProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Title.d.ts.map