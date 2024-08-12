import React, { MouseEventHandler, FunctionComponent, ReactNode } from 'react';
import { Sx } from '@mantine/core';
import { ITooltipProps } from '../tooltip/Tooltip';
export declare const ActionButton: React.ForwardRefExoticComponent<{
    tooltip?: ReactNode;
    tooltipPosition?: ITooltipProps['position'];
    text?: string;
    color?: string;
    Icon: FunctionComponent<{
        color?: string;
        width?: string;
        height?: string;
    }>;
    style?: React.CSSProperties;
    sx?: Sx;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
} & React.RefAttributes<HTMLButtonElement>>;
//# sourceMappingURL=ActionButton.d.ts.map