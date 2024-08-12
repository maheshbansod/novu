import { IPaginationContext } from '../PaginationContext';
/** 'ELLIPSIS' is used to indicate that there are page numbers between the adjacent values that are not being shown. */
export type PaginationSymbol = number | 'ELLIPSIS';
type TGetPaginationSymbolsParams = Pick<IPaginationContext, 'totalPageCount' | 'currentPageNumber'> & {
    siblingCount: number;
};
/**
 * Top-level function to determine what values should be used for a pagination ControlBar.
 * 'ELLIPSIS' is used to indicate that there are page numbers between the adjacent values that are not being shown.
 *
 * For example, if the totalPageCount is 11, the currentPageNumber is 6, the siblingCount is 2, this function will return:
 * [1, 'ELLIPSIS', 4, 5, 6, 7, 8, 'ELLIPSIS', 11]
 */
export declare const getPaginationSymbols: ({ totalPageCount, siblingCount, currentPageNumber, }: TGetPaginationSymbolsParams) => PaginationSymbol[];
export {};
//# sourceMappingURL=getPaginationSymbols.d.ts.map