/// <reference types="react" />
export interface IControlBarProps {
    /** the quantity of items to show on each side of the "current page" */
    siblingCount?: number;
    /** the node to render when showing a gap between two disparate page numbers. Defaults to "..." */
    ellipsisNode?: JSX.Element;
    className?: string;
}
/**
 * Primary pagination navigation component.
 *
 * `children` is optional, and if included, will override the default behavior.
 * If using your own children, use `Pagination.ControlButton` to hook into the PaginationContext.
 * @requires this component to be a child of a Pagination component
 */
export declare const ControlBar: import("react").ForwardRefExoticComponent<IControlBarProps & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=ControlBar.d.ts.map