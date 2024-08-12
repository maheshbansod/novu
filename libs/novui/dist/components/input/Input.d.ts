import { type InputProps as ExternalTextInputProps } from '@mantine/core';
import { ChangeEventHandler } from 'react';
import { CoreProps, LocalizedMessage, LocalizedString } from '../../types';
import { InputVariant } from '../../../styled-system/recipes';
import { JsxStyleProps } from '../../../styled-system/types';
export type TextInputType = 'text' | 'password' | 'email' | 'search' | 'tel';
export declare const DEFAULT_TEXT_INPUT_TYPE: TextInputType;
export interface IInputProps extends JsxStyleProps, CoreProps, Pick<ExternalTextInputProps, 'rightSection'>, Partial<InputVariant> {
    label?: LocalizedMessage;
    description?: LocalizedMessage;
    placeholder?: LocalizedString;
    error?: LocalizedMessage;
    type?: TextInputType;
    required?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string;
    defaultValue?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Input: import("react").ForwardRefExoticComponent<IInputProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=Input.d.ts.map