"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const utils_1 = require("../utils");
const config_1 = require("../config");
const theme_config_1 = require("../config/theme.config");
const ControlBar_1 = require("./ControlBar");
const ControlButton_1 = require("./ControlButton");
const GoToPageInput_1 = require("./GoToPageInput");
const PageSizeSelect_1 = require("./PageSizeSelect");
const Pagination_const_1 = require("./Pagination.const");
const PaginationContext_1 = require("./PaginationContext");
const util_1 = require("./util");
const IconControlButton_1 = require("./IconControlButton");
const PaginationWrapper = styled_1.default.div(({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    /**
     * TODO: use theme values for all styles below.
     * Should be enforced for all child elements as these are in the design system.
     */
    color: ${theme.colorScheme === 'dark' ? config_1.colors.B60 : config_1.colors.B40};
    font-size: ${theme_config_1.mantineConfig.fontSizes.md}px;
    line-height: 20px;

    & input {
      background-color: ${theme.colorScheme === 'dark' ? config_1.colors.B15 : config_1.colors.white};
      border-radius: 7px;
      font-size: 14px;
    } 
`);
/**
 * Primary Pagination component.
 *
 * Use the namespaced components (like Pagination.ControlBar) as children to compose your controls.
 *
 * <Pagination ...>
 *  <Pagination.ControlBar />
 * </Pagination>
 */
const Pagination = ({ currentPageNumber, totalPageCount, totalItemCount, onPageChange, pageSize, className, shouldSkipValidation, children, }) => {
    const handlePageChangeWithValidation = (pageNum, shouldSkipPageChangeValidation) => {
        const val = shouldSkipValidation || shouldSkipPageChangeValidation
            ? pageNum
            : (0, util_1.clampPageNumber)(pageNum, { totalPageCount, currentPageNumber });
        onPageChange(val, shouldSkipPageChangeValidation);
    };
    const totalPageCountToUse = shouldSkipValidation
        ? totalPageCount
        : (0, utils_1.clamp)(totalPageCount, Pagination_const_1.FIRST_PAGE_NUMBER, Number.MAX_SAFE_INTEGER);
    const curPageNumToUse = shouldSkipValidation
        ? currentPageNumber
        : (0, util_1.clampPageNumber)(currentPageNumber, {
            totalPageCount: totalPageCountToUse,
            currentPageNumber,
        });
    return ((0, jsx_runtime_1.jsx)(PaginationContext_1.PaginationContext.Provider, Object.assign({ value: {
            currentPageNumber: curPageNumToUse,
            totalItemCount,
            onPageChange: handlePageChangeWithValidation,
            totalPageCount: totalPageCountToUse,
            pageSize,
        } }, { children: (0, jsx_runtime_1.jsx)(PaginationWrapper, Object.assign({ className: className }, { children: children })) })));
};
exports.Pagination = Pagination;
exports.Pagination.Context = PaginationContext_1.PaginationContext;
exports.Pagination.ControlButton = ControlButton_1.ControlButton;
exports.Pagination.IconControlButton = IconControlButton_1.IconControlButton;
exports.Pagination.ControlBar = ControlBar_1.ControlBar;
exports.Pagination.GoToPageInput = GoToPageInput_1.GoToPageInput;
exports.Pagination.PageSizeSelect = PageSizeSelect_1.PageSizeSelect;
exports.default = exports.Pagination;
//# sourceMappingURL=Pagination.js.map