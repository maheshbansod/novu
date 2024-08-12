"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearchQueryParamState = void 0;
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const URL_SEARCH_QUERY_PARAM_NAME = 'q';
const getInitialSearchQueryParamValue = (searchParam, initialSearchQueryParam) => {
    const search = searchParam !== null && searchParam !== void 0 ? searchParam : initialSearchQueryParam === null || initialSearchQueryParam === void 0 ? void 0 : initialSearchQueryParam.trim();
    return search !== null && search !== void 0 ? search : '';
};
const useSearchQueryParamState = ({ areSearchParamsEnabled = true, initialSearchQueryParam, defaultSearchQueryParamName = URL_SEARCH_QUERY_PARAM_NAME, }) => {
    const [searchParams, setSearchParams] = (0, react_router_dom_1.useSearchParams)();
    const [searchQueryParam, setSearchQueryParam] = (0, react_1.useState)(() => getInitialSearchQueryParamValue(searchParams.get(defaultSearchQueryParamName), initialSearchQueryParam));
    const setSearchQueryParamCallback = (0, react_1.useCallback)((newSearch) => setSearchQueryParam(newSearch.trimStart()), [setSearchQueryParam]);
    (0, react_1.useEffect)(() => {
        if (!areSearchParamsEnabled) {
            return;
        }
        // make sure that the other query params are not overridden
        const newSearchParams = new URLSearchParams(document.location.search);
        if (searchQueryParam) {
            newSearchParams.set(defaultSearchQueryParamName, searchQueryParam);
        }
        else {
            newSearchParams.delete(defaultSearchQueryParamName);
        }
        setSearchParams(newSearchParams, { replace: true });
    }, [areSearchParamsEnabled, defaultSearchQueryParamName, searchQueryParam, setSearchParams]);
    return {
        searchQueryParam,
        setSearchQueryParam: setSearchQueryParamCallback,
    };
};
exports.useSearchQueryParamState = useSearchQueryParamState;
//# sourceMappingURL=useSearchQueryParamState.js.map