"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlBar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const react_1 = require("react");
const icons_1 = require("../icons");
const ControlButton_1 = require("./ControlButton");
const Pagination_const_1 = require("./Pagination.const");
const PaginationContext_1 = require("./PaginationContext");
const util_1 = require("./util");
const utils_1 = require("../utils");
const IconControlButton_1 = require("./IconControlButton");
const Group = (0, styled_1.default)(core_1.Box)(({ theme }) => `
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
exports.ControlBar = (0, react_1.forwardRef)(({ className, siblingCount = Pagination_const_1.DEFAULT_SIBLING_COUNT, ellipsisNode = Pagination_const_1.DEFAULT_ELLIPSIS_NODE, children }, ref) => {
    const { currentPageNumber, totalPageCount } = (0, react_1.useContext)(PaginationContext_1.PaginationContext);
    const [clampedSiblingCount, setClampedSiblingCount] = (0, react_1.useState)(siblingCount);
    (0, react_1.useEffect)(() => {
        // ensure the sibling count is within the allowed range
        if (siblingCount < Pagination_const_1.MIN_SIBLING_COUNT || siblingCount > Pagination_const_1.MAX_SIBLING_COUNT) {
            setClampedSiblingCount((0, utils_1.clamp)(siblingCount, Pagination_const_1.MIN_SIBLING_COUNT, Pagination_const_1.MAX_SIBLING_COUNT));
        }
    }, [siblingCount, setClampedSiblingCount]);
    const renderCentralButton = (curPageSymbol, index) => {
        if (curPageSymbol === 'ELLIPSIS') {
            return ((0, jsx_runtime_1.jsx)(ControlButton_1.ControlButton, Object.assign({ disabled: true }, { children: ellipsisNode }), `pagination-ellipsis-btn-${index}`));
        }
        return ((0, jsx_runtime_1.jsx)(ControlButton_1.ControlButton, Object.assign({ onClick: ({ onPageChange }) => {
                onPageChange(curPageSymbol);
            }, isCurrentPage: curPageSymbol === currentPageNumber }, { children: curPageSymbol }), `pagination-page-number-btn-${curPageSymbol}-${index}`));
    };
    return ((0, jsx_runtime_1.jsx)(Group, Object.assign({ ref: ref, className: className, theme: (0, core_1.useMantineTheme)() }, { children: children || ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(IconControlButton_1.IconControlButton, Object.assign({ onClick: ({ onPageChange, currentPageNumber: curPageNum }) => {
                        onPageChange(curPageNum - 1);
                    }, disabled: currentPageNumber === 1 }, { children: (0, jsx_runtime_1.jsx)(icons_1.ChevronLeft, {}) })), (0, util_1.getPaginationSymbols)({ totalPageCount, currentPageNumber, siblingCount: clampedSiblingCount }).map(renderCentralButton), (0, jsx_runtime_1.jsx)(IconControlButton_1.IconControlButton, Object.assign({ onClick: ({ onPageChange, currentPageNumber: curPageNum }) => {
                        onPageChange(curPageNum + 1);
                    }, disabled: currentPageNumber === totalPageCount }, { children: (0, jsx_runtime_1.jsx)(icons_1.ChevronRight, {}) }))] })) })));
});
//# sourceMappingURL=ControlBar.js.map