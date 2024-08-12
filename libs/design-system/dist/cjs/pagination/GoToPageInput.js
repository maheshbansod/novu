"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoToPageInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PaginationContext_1 = require("./PaginationContext");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const Tooltip_1 = require("../tooltip/Tooltip");
const Pagination_const_1 = require("./Pagination.const");
const config_1 = require("../config");
const InputWrapper = (0, styled_1.default)(core_1.Input.Wrapper)(({ theme }) => {
    return `
  display: flex;
  flex-direction: row;
  align-items: center;

      
  /**
   * TODO: use theme values for color styles below.
   * Should be enforced for all child elements as these are in the design system.
   */
  color: ${theme.colorScheme === 'dark' ? config_1.colors.B60 : config_1.colors.B40};

  input {
    background-color: transparent;
    border-color: ${theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B80};
    margin: 0;
    min-height: inherit;
    height: 32px;
    text-align: center;
    min-width: 56px;
    max-width: 60px;

    &:focus, &:focus-within {
      border-color: ${theme.colorScheme === 'dark' ? config_1.colors.B60 : config_1.colors.B60};
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
exports.GoToPageInput = (0, react_1.forwardRef)((_a, forwardedRef) => {
    var { label, firstPageNumber = Pagination_const_1.FIRST_PAGE_NUMBER } = _a, inputProps = __rest(_a, ["label", "firstPageNumber"]);
    const { onPageChange, totalPageCount } = (0, react_1.useContext)(PaginationContext_1.PaginationContext);
    const [hasError, setHasError] = (0, react_1.useState)(false);
    const [goToValue, setGoToValue] = (0, react_1.useState)(undefined);
    const validateValue = (val) => {
        const numVal = +val;
        return !!numVal && numVal >= 1 && numVal <= totalPageCount;
    };
    /*
     * since we are forwarding the ref, we must use useImperativeHandle to be able to
     * invoke behavior on the input element
     */
    const internalRef = (0, react_1.useRef)(null);
    (0, react_1.useImperativeHandle)(forwardedRef, () => internalRef.current, []);
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
    return ((0, jsx_runtime_1.jsx)(InputWrapper, Object.assign({ label: label, id: "goToPage", theme: (0, core_1.useMantineTheme)() }, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ opened: hasError, "data-test-id": "conditions-form-tooltip-error", error: true, position: "top-end", label: `Value must be between ${firstPageNumber} and ${totalPageCount}` }, { children: (0, jsx_runtime_1.jsx)(core_1.NumberInput, Object.assign({ onKeyDown: handleKeyPress, value: goToValue, onChange: setGoToValue, id: 'goToPage', ref: internalRef, onBlur: handleBlurEvent, min: firstPageNumber, max: totalPageCount, maxLength: `${totalPageCount}`.length, hideControls: true, noClampOnBlur: true, autoCorrect: 'none', "aria-autocomplete": 'none', autoComplete: 'none', disabled: totalPageCount === 1 }, inputProps)) })) })));
});
//# sourceMappingURL=GoToPageInput.js.map