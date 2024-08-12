import React, { ChangeEvent } from 'react';
import { SpacingProps } from '../shared/spacing.props';
interface ITextareaProps extends SpacingProps {
    label?: React.ReactNode;
    error?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    value?: string;
    description?: string;
    onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    minRows?: number;
    maxRows?: number;
}
/**
 * Textarea component
 *
 */
export declare const Textarea: React.ForwardRefExoticComponent<ITextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
export {};
//# sourceMappingURL=Textarea.d.ts.map