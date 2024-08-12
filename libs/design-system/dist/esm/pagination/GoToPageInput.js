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
import { forwardRef, useContext, useImperativeHandle, useRef, useState, } from 'react';
import { PaginationContext } from './PaginationContext';
import styled from '@emotion/styled';
import { Input, NumberInput, useMantineTheme } from '@mantine/core';
import { Tooltip } from '../tooltip/Tooltip';
import { FIRST_PAGE_NUMBER } from './Pagination.const';
import { colors } from '../config';
const InputWrapper = styled(Input.Wrapper)(({ theme }) => {
    return `
  display: flex;
  flex-direction: row;
  align-items: center;

      
  /**
   * TODO: use theme values for color styles below.
   * Should be enforced for all child elements as these are in the design system.
   */
  color: ${theme.colorScheme === 'dark' ? colors.B60 : colors.B40};

  input {
    background-color: transparent;
    border-color: ${theme.colorScheme === 'dark' ? colors.B30 : colors.B80};
    margin: 0;
    min-height: inherit;
    height: 32px;
    text-align: center;
    min-width: 56px;
    max-width: 60px;

    &:focus, &:focus-within {
      border-color: ${theme.colorScheme === 'dark' ? colors.B60 : colors.B60};
    }
  }

  label {
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* TODO: use theme values */
    margin-right: ${'0.5rem'};
  }
`;
});
/**
 * Input for navigating to the specified page size for Pagination.
 * @requires this component to be a child of a Pagination component
 */
export const GoToPageInput = forwardRef((_a, forwardedRef) => {
    var { label, firstPageNumber = FIRST_PAGE_NUMBER } = _a, inputProps = __rest(_a, ["label", "firstPageNumber"]);
    const { onPageChange, totalPageCount } = useContext(PaginationContext);
    const [hasError, setHasError] = useState(false);
    const [goToValue, setGoToValue] = useState(undefined);
    const validateValue = (val) => {
        const numVal = +val;
        return !!numVal && numVal >= 1 && numVal <= totalPageCount;
    };
    /*
     * since we are forwarding the ref, we must use useImperativeHandle to be able to
     * invoke behavior on the input element
     */
    const internalRef = useRef(null);
    useImperativeHandle(forwardedRef, () => internalRef.current, []);
    const handleBlurEvent = (event) => {
        const val = event.currentTarget.value;
        // check for empty value and ensure user can clear error
        if (!val) {
            setHasError(false);
            return;
        }
        if (!validateValue(val)) {
            setHasError(val !== undefined);
            return;
        }
        onPageChange(+val);
        setGoToValue(undefined);
        setHasError(false);
    };
    const handleKeyPress = (event) => {
        if (event.key !== 'Enter') {
            return;
        }
        internalRef.current.blur();
    };
    return (_jsx(InputWrapper, Object.assign({ label: label, id: "goToPage", theme: useMantineTheme() }, { children: _jsx(Tooltip, Object.assign({ opened: hasError, "data-test-id": "conditions-form-tooltip-error", error: true, position: "top-end", label: `Value must be between ${firstPageNumber} and ${totalPageCount}` }, { children: _jsx(NumberInput, Object.assign({ onKeyDown: handleKeyPress, value: goToValue, onChange: setGoToValue, id: 'goToPage', ref: internalRef, onBlur: handleBlurEvent, min: firstPageNumber, max: totalPageCount, maxLength: `${totalPageCount}`.length, hideControls: true, noClampOnBlur: true, autoCorrect: 'none', "aria-autocomplete": 'none', autoComplete: 'none', disabled: totalPageCount === 1 }, inputProps)) })) })));
});
//# sourceMappingURL=GoToPageInput.js.map