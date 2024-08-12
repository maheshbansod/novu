"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePaginationQueryParamsState = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const Pagination_const_1 = require("./Pagination.const");
const URL_PAGE_SIZE_QUERY_PARAM_NAME = 'size';
const URL_PAGE_NUMBER_QUERY_PARAM_NAME = 'page';
const usePaginationQueryParamsState = ({ areSearchParamsEnabled = true, initialPageNumber = Pagination_const_1.FIRST_PAGE_NUMBER, initialPageSize = Pagination_const_1.DEFAULT_PAGE_SIZE, pageSizes = Pagination_const_1.DEFAULT_PAGINATION_PAGE_SIZES, defaultPageNumberQueryParamName = URL_PAGE_NUMBER_QUERY_PARAM_NAME, defaultPageSizeQueryParamName = URL_PAGE_SIZE_QUERY_PARAM_NAME, }) => {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const [pageSizeQueryParam, setPageSizeQueryParam] = (0, react_1.useState)(getValidatedPageSizeFromUrl(searchParams.get(defaultPageSizeQueryParamName), initialPageSize, pageSizes));
    const [currentPageNumberQueryParam, setCurrentPageNumberQueryParam] = (0, react_1.useState)(getValidatedPageNumberFromUrl(searchParams.get(defaultPageNumberQueryParamName), initialPageNumber));
    (0, react_1.useEffect)(() => {
        if (!areSearchParamsEnabled) {
            return;
        }
        // make sure that the other query params are not overridden
        const newSearchParams = new URLSearchParams(document.location.search);
        newSearchParams.set(defaultPageNumberQueryParamName, `${currentPageNumberQueryParam}`);
        newSearchParams.set(defaultPageSizeQueryParamName, `${pageSizeQueryParam}`);
        setSearchParams(newSearchParams, { replace: true });
    }, [
        pageSizeQueryParam,
        currentPageNumberQueryParam,
        setSearchParams,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    ]);
    return {
        pageSizeQueryParam,
        currentPageNumberQueryParam,
        setPageSizeQueryParam,
        setCurrentPageNumberQueryParam,
    };
};
exports.usePaginationQueryParamsState = usePaginationQueryParamsState;
function getValidatedPageNumberFromUrl(pageNumberStr, initialPageNumber) {
    const pageNumberUnchecked = parseInt(pageNumberStr !== null && pageNumberStr !== void 0 ? pageNumberStr : 'NaN', 10);
    return pageNumberUnchecked && pageNumberUnchecked > 0 ? pageNumberUnchecked : initialPageNumber;
}
function getValidatedPageSizeFromUrl(pageSizeStr, initialPageSize, pageSizes) {
    const sizeValUnchecked = parseInt(pageSizeStr !== null && pageSizeStr !== void 0 ? pageSizeStr : 'NaN', 10);
    return pageSizes.includes(sizeValUnchecked) && sizeValUnchecked > 0
        ? sizeValUnchecked
        : initialPageSize !== null && initialPageSize !== void 0 ? initialPageSize : pageSizes[0];
}
//# sourceMappingURL=usePaginationQueryParamsState.js.map