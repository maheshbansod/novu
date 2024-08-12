import React, { ChangeEvent } from 'react';
import { SpacingProps } from '../shared/spacing.props';
interface IPasswordInputProps extends SpacingProps {
    label?: React.ReactNode;
    error?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    value?: string;
    description?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Password Input component
 *
 */
export declare const PasswordInput: React.ForwardRefExoticComponent<IPasswordInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=PasswordInput.d.ts.map