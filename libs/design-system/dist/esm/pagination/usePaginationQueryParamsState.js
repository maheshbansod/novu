import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGINATION_PAGE_SIZES, FIRST_PAGE_NUMBER } from './Pagination.const';
const URL_PAGE_SIZE_QUERY_PARAM_NAME = 'size';
const URL_PAGE_NUMBER_QUERY_PARAM_NAME = 'page';
export const usePaginationQueryParamsState = ({ areSearchParamsEnabled = true, initialPageNumber = FIRST_PAGE_NUMBER, initialPageSize = DEFAULT_PAGE_SIZE, pageSizes = DEFAULT_PAGINATION_PAGE_SIZES, defaultPageNumberQueryParamName = URL_PAGE_NUMBER_QUERY_PARAM_NAME, defaultPageSizeQueryParamName = URL_PAGE_SIZE_QUERY_PARAM_NAME, }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageSizeQueryParam, setPageSizeQueryParam] = useState(getValidatedPageSizeFromUrl(searchParams.get(defaultPageSizeQueryParamName), initialPageSize, pageSizes));
    const [currentPageNumberQueryParam, setCurrentPageNumberQueryParam] = useState(getValidatedPageNumberFromUrl(searchParams.get(defaultPageNumberQueryParamName), initialPageNumber));
    useEffect(() => {
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