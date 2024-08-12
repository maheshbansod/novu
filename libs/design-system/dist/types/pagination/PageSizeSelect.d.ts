/// <reference types="react" />
import { ISelectProps } from '../select/Select.types';
export type TPageSizeSelectOption = string;
export interface IPageSizeSelectProps extends Omit<ISelectProps, 'onChange' | 'data'> {
    onPageSizeChange: (pageSize: number) => void;
    pageSizes?: (number | TPageSizeSelectOption)[];
    className?: string;
}
/**
 * Component for selecting the desired page size for Pagination.
 * @requires this component to be a child of a Pagination component
 */
export declare const PageSizeSelect: React.FC<IPageSizeSelectProps>;
//# sourceMappingURL=PageSizeSelect.d.ts.map