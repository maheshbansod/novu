import React, { PropsWithChildren } from 'react';
import { MantineColor, TextProps } from '@mantine/core';
import { SpacingProps } from '../../shared/spacing.props';
interface ITextProps extends PropsWithChildren<{}>, SpacingProps {
    size?: TextProps['size'];
    style?: TextProps['style'];
    styles?: TextProps['styles'];
    align?: 'left' | 'center' | 'right' | 'justify';
    weight?: 'bold' | 'normal';
    color?: MantineColor;
    rows?: number;
    gradient?: boolean;
    transform?: TextProps['transform'];
}
/**
 * Text component
 *
 */
export declare const Text: React.ForwardRefExoticComponent<ITextProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=Text.d.ts.map