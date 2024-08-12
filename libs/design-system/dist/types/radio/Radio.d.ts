import React, { ChangeEvent } from 'react';
import { RadioProps as MantineRadioProps } from '@mantine/core';
export interface RadioProps extends MantineRadioProps {
    children?: React.ReactNode;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Checkbox Component
 *
 */
export declare function Radio({ value, onChange, disabled, checked, children, size, ...props }: RadioProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Radio.d.ts.map