import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Box, useMantineTheme } from '@mantine/core';
import { forwardRef, useContext, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from '../icons';
import { ControlButton } from './ControlButton';
import { DEFAULT_ELLIPSIS_NODE, DEFAULT_SIBLING_COUNT, MAX_SIBLING_COUNT, MIN_SIBLING_COUNT } from './Pagination.const';
import { PaginationContext } from './PaginationContext';
import { getPaginationSymbols } from './util';
import { clamp } from '../utils';
import { IconControlButton } from './IconControlButton';
const Group = styled(Box)(({ theme }) => `
  display: flex;
  flex-direction: row;
  align-items: center;
  /* TODO: use theme value */
  gap: 0.25rem;
`);
/**
 * Primary pagination navigation component.
 *
 * `children` is optional, and if included, will override the default behavior.
 * If using your own children, use `Pagination.ControlButton` to hook into the PaginationContext.
 * @requires this component to be a child of a Pagination component
 */
export const ControlBar = forwardRef(({ className, siblingCount = DEFAULT_SIBLING_COUNT, ellipsisNode = DEFAULT_ELLIPSIS_NODE, children }, ref) => {
    const { currentPageNumber, totalPageCount } = useContext(PaginationContext);
    const [clampedSiblingCount, setClampedSiblingCount] = useState(siblingCount);
    useEffect(() => {
        // ensure the sibling count is within the allowed range
        if (siblingCount < MIN_SIBLING_COUNT || siblingCount > MAX_SIBLING_COUNT) {
            setClampedSiblingCount(clamp(siblingCount, MIN_SIBLING_COUNT, MAX_SIBLING_COUNT));
        }
    }, [siblingCount, setClampedSiblingCount]);
    const renderCentralButton = (curPageSymbol, index) => {
        if (curPageSymbol === 'ELLIPSIS') {
            return (_jsx(ControlButton, Object.assign({ disabled: true }, { children: ellipsisNode }), `pagination-ellipsis-btn-${index}`));
        }
        return (_jsx(ControlButton, Object.assign({ onClick: ({ onPageChange }) => {
                onPageChange(curPageSymbol);
            }, isCurrentPage: curPageSymbol === currentPageNumber }, { children: curPageSymbol }), `pagination-page-number-btn-${curPageSymbol}-${index}`));
    };
    return (_jsx(Group, Object.assign({ ref: ref, className: className, theme: useMantineTheme() }, { children: children || (_jsxs(_Fragment, { children: [_jsx(IconControlButton, Object.assign({ onClick: ({ onPageChange, currentPageNumber: curPageNum }) => {
                        onPageChange(curPageNum - 1);
                    }, disabled: currentPageNumber === 1 }, { children: _jsx(ChevronLeft, {}) })), getPaginationSymbols({ totalPageCount, currentPageNumber, siblingCount: clampedSiblingCount }).map(renderCentralButton), _jsx(IconControlButton, Object.assign({ onClick: ({ onPageChange, currentPageNumber: curPageNum }) => {
                        onPageChange(curPageNum + 1);
                    }, disabled: currentPageNumber === totalPageCount }, { children: _jsx(ChevronRight, {}) }))] })) })));
});
//# sourceMappingURL=ControlBar.js.map