import React from 'react';
import { SegmentedControlItem, Sx } from '@mantine/core';
interface ISegmentedControlProps {
    data: string[] | SegmentedControlItem[];
    defaultValue?: string;
    value?: string;
    onChange?(value: string): void;
    loading?: boolean;
    fullWidth?: boolean;
    sx?: Sx | (Sx | undefined)[];
    disabled?: boolean;
    size?: 'md' | 'sm';
}
/**
 * SegmentedControl component
 *
 */
export declare const SegmentedControl: React.ForwardRefExoticComponent<ISegmentedControlProps & React.RefAttributes<HTMLDivElement>>;
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map