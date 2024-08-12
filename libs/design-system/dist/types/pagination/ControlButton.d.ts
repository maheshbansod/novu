/// <reference types="react" />
import { IButtonProps } from '../button/Button';
import { IPaginationContext } from './PaginationContext';
export type TPageButtonClickHandler = (ctx: IPaginationContext) => void;
export interface IControlButtonProps extends Omit<IButtonProps, 'onClick'> {
    onClick?: TPageButtonClickHandler;
    /** Does the button represent the currently-selected page */
    isCurrentPage?: boolean;
}
/**
 * Button for navigating to a specific page.
 * @requires this component to be a child of a Pagination component
 */
export declare const ControlButton: React.FC<IControlButtonProps>;
//# sourceMappingURL=ControlButton.d.ts.map