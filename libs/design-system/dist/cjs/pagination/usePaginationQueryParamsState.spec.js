"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const react_hooks_1 = require("@testing-library/react-hooks");
const react_router_dom_1 = require("react-router-dom");
// eslint-disable-next-line import/no-namespace
const ReactRouterDOM = __importStar(require("react-router-dom"));
const vitest_1 = require("vitest");
const usePaginationQueryParamsState_1 = require("./usePaginationQueryParamsState");
const initialPageNumber = 1;
const pageSizes = [10, 20, 30];
const defaultPageNumberQueryParamName = 'page';
const defaultPageSizeQueryParamName = 'size';
const callHook = (options, initialParams) => {
    const paramStr = initialParams ? `?page=${initialParams.page}&size=${initialParams.size}` : '';
    return (0, react_hooks_1.renderHook)(() => (0, usePaginationQueryParamsState_1.usePaginationQueryParamsState)(options), {
        wrapper: ({ children }) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.MemoryRouter, Object.assign({ initialEntries: [paramStr] }, { children: children }))),
    });
};
const setSearchParams = vitest_1.vi.fn();
const mockUseSearchParams = () => {
    const params = new URLSearchParams();
    return [params, setSearchParams];
};
vitest_1.vi.spyOn(ReactRouterDOM, 'useSearchParams').mockImplementation(mockUseSearchParams);
(0, vitest_1.afterEach)(() => {
    vitest_1.vi.clearAllMocks();
});
(0, vitest_1.it)('usePaginationQueryParamsState uses defaults', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = initialPageNumber;
    const size = pageSizes[0];
    const options = {
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options);
    yield (0, react_1.waitFor)(() => {
        // Verify that state is updated based on URL parameters on mount
        (0, vitest_1.expect)(result.current.currentPageNumberQueryParam).toBe(page);
        (0, vitest_1.expect)(result.current.pageSizeQueryParam).toBe(size);
    });
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    (0, vitest_1.expect)(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
(0, vitest_1.it)('usePaginationQueryParamsState updates state based on URL parameters on mount', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = 2;
    const size = 20;
    const mockUseSearchParamsNew = () => {
        const params = new URLSearchParams();
        params.set('page', `${page}`);
        params.set('size', `${size}`);
        return [params, setSearchParams];
    };
    vitest_1.vi.spyOn(ReactRouterDOM, 'useSearchParams').mockImplementationOnce(mockUseSearchParamsNew);
    const options = {
        initialPageNumber,
        pageSizes,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options, { page, size });
    // Verify that state is updated based on URL parameters on mount
    (0, vitest_1.expect)(result.current.currentPageNumberQueryParam).toBe(page);
    (0, vitest_1.expect)(result.current.pageSizeQueryParam).toBe(size);
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    (0, vitest_1.expect)(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
(0, vitest_1.it)('usePaginationQueryParamsState updates URL parameters on state change', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = 3;
    const size = 30;
    const options = {
        initialPageNumber,
        pageSizes,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options);
    // Update state to trigger URL parameter update
    (0, react_1.act)(() => {
        result.current.setPageSizeQueryParam(size);
        result.current.setCurrentPageNumberQueryParam(page);
    });
    // Verify that URL parameters are updated on state change
    (0, vitest_1.expect)(result.current.pageSizeQueryParam).toBe(size);
    (0, vitest_1.expect)(result.current.currentPageNumberQueryParam).toBe(page);
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    (0, vitest_1.expect)(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
(0, vitest_1.it)('usePaginationQueryParamsState does not update URL parameters when areSearchParamsEnabled is false', () => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        areSearchParamsEnabled: false,
        initialPageNumber,
        pageSizes,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options);
    yield (0, react_1.waitFor)(() => {
        // Verify that state is updated based on URL parameters on mount
        (0, vitest_1.expect)(result.current.currentPageNumberQueryParam).toBe(1);
        (0, vitest_1.expect)(result.current.pageSizeQueryParam).toBe(10);
        (0, vitest_1.expect)(setSearchParams).not.toHaveBeenCalled();
    });
}));
//# sourceMappingURL=usePaginationQueryParamsState.spec.js.map