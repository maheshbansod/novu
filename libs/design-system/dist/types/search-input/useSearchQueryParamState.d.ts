export interface IUseSearchQueryParamStateOptions {
    areSearchParamsEnabled?: boolean;
    initialSearchQueryParam?: string;
    defaultSearchQueryParamName?: string;
}
export declare const useSearchQueryParamState: ({ areSearchParamsEnabled, initialSearchQueryParam, defaultSearchQueryParamName, }: IUseSearchQueryParamStateOptions) => {
    searchQueryParam: string;
    setSearchQueryParam: (newSearch: string) => void;
};
//# sourceMappingURL=useSearchQueryParamState.d.ts.map