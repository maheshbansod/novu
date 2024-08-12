var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Input, useMantineTheme } from '@mantine/core';
import { forwardRef, useContext, useMemo } from 'react';
import { Select } from '../select/Select';
import { DEFAULT_PAGINATION_PAGE_SIZES } from './Pagination.const';
import { PaginationContext } from './PaginationContext';
import { getPageNumberForNewPageSize } from './util';
import { colors } from '../config';
const InputWrapper = styled(Input.Wrapper)(({ theme }) => {
    return `
    display: flex;
    flex-direction: row;
    align-items: center;
    
    & label {
      color: inherit;
      font-size: inherit;
      line-height: inherit;
      text-wrap: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      /* TODO: use theme values */
      margin-left: ${'0.5rem'};
    }
    
    /**
     * TODO: use theme values for all styles below.
     * Should be enforced for all child elements as these are in the design system.
     */
    color: ${theme.colorScheme === 'dark' ? colors.B60 : colors.B40};

    & input {
      border-color: ${theme.colorScheme === 'dark' ? colors.B30 : colors.B80};
      background-color: transparent;
    }
`;
});
const StyledSelect = styled(Select)(() => `
    max-width: 71px;
    input {
      padding-left: 12px;
      padding-right: 8px;
      margin: 0;
      min-height: inherit;
      /** Explicitly set by designs */
      height: 32px;
      min-width: 44px;
    }

    input:not([type=hidden]) + div {
      /* TODO: use theme values */
      width: 20px;
    }
`);
/**
 * Component for selecting the desired page size for Pagination.
 * @requires this component to be a child of a Pagination component
 */
export const PageSizeSelect = forwardRef((_a, selectRef) => {
    var { onPageSizeChange, pageSizes = DEFAULT_PAGINATION_PAGE_SIZES } = _a, selectProps = __rest(_a, ["onPageSizeChange", "pageSizes"]);
    const { pageSize, totalItemCount, currentPageNumber, onPageChange } = useContext(PaginationContext);
    /** handles clamping of page sizes to avoid poor UX and impossible states */
    const handlePageSizeChange = (val) => {
        const newPageSize = typeof val === 'string' ? +val : +val[0];
        const updatedPageNum = getPageNumberForNewPageSize({
            newPageSize,
            prevPageSize: pageSize,
            currentPageNumber,
            totalItemCount,
        });
        onPageChange(updatedPageNum, true);
        onPageSizeChange(newPageSize);
    };
    const options = useMemo(() => pageSizes.map((val) => `${val}`), [pageSizes]);
    return (_jsx(InputWrapper, Object.assign({ label: 'rows per page', id: "pageSizeSelect", inputWrapperOrder: ['input', 'label'], theme: useMantineTheme() }, { children: _jsx(StyledSelect, { ref: selectRef, data: options, onChange: handlePageSizeChange, value: `${pageSize}`, className: selectProps.className }) })));
});
//# sourceMappingURL=PageSizeSelect.js.map