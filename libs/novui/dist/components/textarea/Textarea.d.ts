import { type TextareaProps as ExternalTextareaProps } from '@mantine/core';
import { ChangeEventHandler } from 'react';
import { CoreProps, LocalizedMessage, LocalizedString } from '../../types';
import { InputVariant } from '../../../styled-system/recipes';
import { JsxStyleProps } from '../../../styled-system/types';
import { TextInputType } from '../input';
export interface TextareaProps extends JsxStyleProps, CoreProps, Pick<ExternalTextareaProps, 'leftSection'>, Partial<InputVariant> {
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
    onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
//# sourceMappingURL=Textarea.d.ts.map