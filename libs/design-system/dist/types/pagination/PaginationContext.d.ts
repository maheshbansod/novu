/// <reference types="react" />
export interface IPaginationContext {
    totalItemCount: number;
    totalPageCount: number;
    /** Note: this is a page *number*, not index */
    currentPageNumber: number;
    pageSize: number;
    onPageChange: (pageNumber: number, shouldSkipPageValidation?: boolean) => void;
}
export declare const PaginationContext: import("react").Context<IPaginationContext>;
//# sourceMappingURL=PaginationContext.d.ts.map