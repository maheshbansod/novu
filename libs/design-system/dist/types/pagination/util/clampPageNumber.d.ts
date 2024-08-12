import { IPaginationContext } from '../PaginationContext';
/**
 * Ensure that the page number is within the safe bounds of the total page count.
 */
export declare const clampPageNumber: (newPageNum: number, { totalPageCount, currentPageNumber }: Pick<IPaginationContext, 'totalPageCount' | 'currentPageNumber'>, firstPageNumber?: number) => number;
//# sourceMappingURL=clampPageNumber.d.ts.map