var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { act, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-namespace
import * as ReactRouterDOM from 'react-router-dom';
import { afterEach, expect, it, vi } from 'vitest';
import { usePaginationQueryParamsState } from './usePaginationQueryParamsState';
const initialPageNumber = 1;
const pageSizes = [10, 20, 30];
const defaultPageNumberQueryParamName = 'page';
const defaultPageSizeQueryParamName = 'size';
const callHook = (options, initialParams) => {
    const paramStr = initialParams ? `?page=${initialParams.page}&size=${initialParams.size}` : '';
    return renderHook(() => usePaginationQueryParamsState(options), {
        wrapper: ({ children }) => (_jsx(MemoryRouter, Object.assign({ initialEntries: [paramStr] }, { children: children }))),
    });
};
const setSearchParams = vi.fn();
const mockUseSearchParams = () => {
    const params = new URLSearchParams();
    return [params, setSearchParams];
};
vi.spyOn(ReactRouterDOM, 'useSearchParams').mockImplementation(mockUseSearchParams);
afterEach(() => {
    vi.clearAllMocks();
});
it('usePaginationQueryParamsState uses defaults', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = initialPageNumber;
    const size = pageSizes[0];
    const options = {
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options);
    yield waitFor(() => {
        // Verify that state is updated based on URL parameters on mount
        expect(result.current.currentPageNumberQueryParam).toBe(page);
        expect(result.current.pageSizeQueryParam).toBe(size);
    });
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    expect(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
it('usePaginationQueryParamsState updates state based on URL parameters on mount', () => __awaiter(void 0, void 0, void 0, function* () {
    const page = 2;
    const size = 20;
    const mockUseSearchParamsNew = () => {
        const params = new URLSearchParams();
        params.set('page', `${page}`);
        params.set('size', `${size}`);
        return [params, setSearchParams];
    };
    vi.spyOn(ReactRouterDOM, 'useSearchParams').mockImplementationOnce(mockUseSearchParamsNew);
    const options = {
        initialPageNumber,
        pageSizes,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options, { page, size });
    // Verify that state is updated based on URL parameters on mount
    expect(result.current.currentPageNumberQueryParam).toBe(page);
    expect(result.current.pageSizeQueryParam).toBe(size);
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    expect(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
it('usePaginationQueryParamsState updates URL parameters on state change', () => __awaiter(void 0, void 0, void 0, function* () {
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
    act(() => {
        result.current.setPageSizeQueryParam(size);
        result.current.setCurrentPageNumberQueryParam(page);
    });
    // Verify that URL parameters are updated on state change
    expect(result.current.pageSizeQueryParam).toBe(size);
    expect(result.current.currentPageNumberQueryParam).toBe(page);
    const newSearchParams = new URLSearchParams({
        [defaultPageNumberQueryParamName]: `${page}`,
        [defaultPageSizeQueryParamName]: `${size}`,
    });
    expect(setSearchParams).toHaveBeenCalledWith(newSearchParams, { replace: true });
}));
it('usePaginationQueryParamsState does not update URL parameters when areSearchParamsEnabled is false', () => __awaiter(void 0, void 0, void 0, function* () {
    const options = {
        areSearchParamsEnabled: false,
        initialPageNumber,
        pageSizes,
        defaultPageNumberQueryParamName,
        defaultPageSizeQueryParamName,
    };
    // Render hook
    const { result } = callHook(options);
    yield waitFor(() => {
        // Verify that state is updated based on URL parameters on mount
        expect(result.current.currentPageNumberQueryParam).toBe(1);
        expect(result.current.pageSizeQueryParam).toBe(10);
        expect(setSearchParams).not.toHaveBeenCalled();
    });
}));
//# sourceMappingURL=usePaginationQueryParamsState.spec.js.map