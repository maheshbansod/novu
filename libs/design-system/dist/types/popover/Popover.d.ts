import { MouseEventHandler, ReactNode } from 'react';
import { PopoverProps as MantinePopoverProps } from '@mantine/core';
type PopoverProps = {
    target: ReactNode;
    content?: ReactNode;
    title?: string;
    description?: string;
    url?: string;
    urlText?: string;
    onUrlClick?: MouseEventHandler<HTMLAnchorElement>;
    titleGradient?: 'red' | 'blue' | 'none';
    className?: string;
    opacity?: string | number;
    onDropdownMouseEnter?: MouseEventHandler<HTMLDivElement>;
    onDropdownMouseLeave?: MouseEventHandler<HTMLDivElement>;
} & Omit<MantinePopoverProps, 'children'>;
export declare const Popover: ({ target, content, title, titleGradient, description, url, urlText, onUrlClick, className, opacity, onDropdownMouseEnter, onDropdownMouseLeave, ...rest }: PopoverProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Popover.d.ts.map