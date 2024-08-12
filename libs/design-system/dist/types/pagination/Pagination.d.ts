import { PropsWithChildren } from 'react';
import { IPaginationContext } from './PaginationContext';
export interface IPaginationProps extends IPaginationContext {
    /** Ignore validations which clamp the current page number between 1 and totalPageCount */
    shouldSkipValidation?: boolean;
    className?: string;
}
/**
 * Primary Pagination component.
 *
 * Use the namespaced components (like Pagination.ControlBar) as children to compose your controls.
 *
 * <Pagination ...>
 *  <Pagination.ControlBar />
 * </Pagination>
 */
export declare const Pagination: {
    ({ currentPageNumber, totalPageCount, totalItemCount, onPageChange, pageSize, className, shouldSkipValidation, children, }: PropsWithChildren<IPaginationProps>): import("react/jsx-runtime").JSX.Element;
    Context: import("react").Context<IPaginationContext>;
    ControlButton: import("react").FC<import("./ControlButton").IControlButtonProps>;
    IconControlButton: import("react").FC<import("./IconControlButton").IconControlButtonProps>;
    ControlBar: import("react").ForwardRefExoticComponent<import("./ControlBar").IControlBarProps & {
        children?: import("react").ReactNode;
    } & import("react").RefAttributes<HTMLDivElement>>;
    GoToPageInput: import("react").FC<import("./GoToPageInput").IGoToPageInputProps>;
    PageSizeSelect: import("react").FC<import("./PageSizeSelect").IPageSizeSelectProps>;
};
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map