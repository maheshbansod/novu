import React, { MouseEventHandler } from 'react';
import { ButtonProps, Sx } from '@mantine/core';
export type Size = 'md' | 'lg' | undefined;
export interface IButtonProps extends ButtonProps {
    id?: string;
    loading?: boolean;
    size?: Size;
    variant?: 'outline' | 'gradient' | 'subtle';
    disabled?: boolean;
    icon?: React.ReactNode;
    fullWidth?: boolean;
    submit?: boolean;
    onClick?: (e: any) => void;
    onMouseEnter?: MouseEventHandler<any>;
    onMouseLeave?: MouseEventHandler<any>;
    inherit?: boolean;
    pulse?: boolean;
    sx?: Sx;
    iconPosition?: 'left' | 'right';
}
/**
 * Button component
 *
 */
export declare const Button: React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=Button.d.ts.map