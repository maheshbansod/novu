/// <reference types="react" />
export interface IUsePaginationQueryParamsStateOptions {
    areSearchParamsEnabled?: boolean;
    initialPageNumber?: number;
    initialPageSize?: number;
    pageSizes?: number[];
    defaultPageSizeQueryParamName?: string;
    defaultPageNumberQueryParamName?: string;
}
export declare const usePaginationQueryParamsState: ({ areSearchParamsEnabled, initialPageNumber, initialPageSize, pageSizes, defaultPageNumberQueryParamName, defaultPageSizeQueryParamName, }: IUsePaginationQueryParamsStateOptions) => {
    pageSizeQueryParam: number;
    currentPageNumberQueryParam: number;
    setPageSizeQueryParam: import("react").Dispatch<import("react").SetStateAction<number>>;
    setCurrentPageNumberQueryParam: import("react").Dispatch<import("react").SetStateAction<number>>;
};
//# sourceMappingURL=usePaginationQueryParamsState.d.ts.map