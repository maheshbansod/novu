import { TooltipProps } from '@mantine/core';
export interface ITooltipProps extends Pick<TooltipProps, 'arrowSize' | 'multiline' | 'width' | 'label' | 'opened' | 'position' | 'disabled' | 'children' | 'sx' | 'withinPortal' | 'offset' | 'classNames'> {
    error?: boolean;
}
/**
 * Tooltip component
 *
 */
export declare function Tooltip({ children, label, opened, error, arrowSize, classNames, ...props }: ITooltipProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map