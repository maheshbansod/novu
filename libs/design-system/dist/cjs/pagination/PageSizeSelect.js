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
exports.PageSizeSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const react_1 = require("react");
const Select_1 = require("../select/Select");
const Pagination_const_1 = require("./Pagination.const");
const PaginationContext_1 = require("./PaginationContext");
const util_1 = require("./util");
const config_1 = require("../config");
const InputWrapper = (0, styled_1.default)(core_1.Input.Wrapper)(({ theme }) => {
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
    color: ${theme.colorScheme === 'dark' ? config_1.colors.B60 : config_1.colors.B40};

    & input {
      border-color: ${theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B80};
      background-color: transparent;
    }
`;
});
const StyledSelect = (0, styled_1.default)(Select_1.Select)(() => `
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
exports.PageSizeSelect = (0, react_1.forwardRef)((_a, selectRef) => {
    var { onPageSizeChange, pageSizes = Pagination_const_1.DEFAULT_PAGINATION_PAGE_SIZES } = _a, selectProps = __rest(_a, ["onPageSizeChange", "pageSizes"]);
    const { pageSize, totalItemCount, currentPageNumber, onPageChange } = (0, react_1.useContext)(PaginationContext_1.PaginationContext);
    /** handles clamping of page sizes to avoid poor UX and impossible states */
    const handlePageSizeChange = (val) => {
        const newPageSize = typeof val === 'string' ? +val : +val[0];
        const updatedPageNum = (0, util_1.getPageNumberForNewPageSize)({
            newPageSize,
            prevPageSize: pageSize,
            currentPageNumber,
            totalItemCount,
        });
        onPageChange(updatedPageNum, true);
        onPageSizeChange(newPageSize);
    };
    const options = (0, react_1.useMemo)(() => pageSizes.map((val) => `${val}`), [pageSizes]);
    return ((0, jsx_runtime_1.jsx)(InputWrapper, Object.assign({ label: 'rows per page', id: "pageSizeSelect", inputWrapperOrder: ['input', 'label'], theme: (0, core_1.useMantineTheme)() }, { children: (0, jsx_runtime_1.jsx)(StyledSelect, { ref: selectRef, data: options, onChange: handlePageSizeChange, value: `${pageSize}`, className: selectProps.className }) })));
});
//# sourceMappingURL=PageSizeSelect.js.map