import React, { ChangeEvent } from 'react';
import { CheckboxProps } from '@mantine/core';
interface ICheckboxProps extends CheckboxProps {
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode | string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Checkbox Component
 *
 */
export declare function Checkbox({ label, checked, onChange, disabled, ...props }: ICheckboxProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Checkbox {
    var Group: React.ForwardRefExoticComponent<import("@mantine/core").CheckboxGroupProps & React.RefAttributes<HTMLDivElement>>;
}
export {};
//# sourceMappingURL=Checkbox.d.ts.map