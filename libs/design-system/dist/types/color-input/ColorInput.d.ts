import React from 'react';
import { SpacingProps } from '../shared/spacing.props';
interface IColorInputProps extends SpacingProps {
    label?: React.ReactNode;
    error?: string;
    placeholder?: string;
    value?: string;
    description?: string;
    disallowInput?: boolean;
    onChange?: (color: string) => void;
}
/**
 * ColorPicker component
 *
 */
export declare const ColorInput: React.ForwardRefExoticComponent<IColorInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=ColorInput.d.ts.map