import React, { ChangeEvent, FocusEvent } from 'react';
import { Styles, InputProps } from '@mantine/core';
import { SpacingProps } from '../shared/spacing.props';
export interface IInputProps extends SpacingProps, Pick<InputProps, 'classNames'> {
    label?: React.ReactNode;
    error?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string;
    description?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    rightSection?: React.ReactNode;
    rightSectionWidth?: React.CSSProperties['width'];
    type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number' | 'time';
    min?: string | number;
    max?: string | number;
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
    styles?: Styles<string, Record<string, any>>;
    className?: string;
    id?: string;
}
/**
 * Input component
 *
 */
export declare const Input: React.ForwardRefExoticComponent<IInputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map