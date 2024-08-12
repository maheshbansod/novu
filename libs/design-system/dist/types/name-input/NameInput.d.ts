import React, { ChangeEvent } from 'react';
import { SpacingProps } from '../shared/spacing.props';
interface INameInputProps extends SpacingProps {
    placeholder?: string;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * NameInput component
 *
 */
export declare const NameInput: React.ForwardRefExoticComponent<INameInputProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=NameInput.d.ts.map