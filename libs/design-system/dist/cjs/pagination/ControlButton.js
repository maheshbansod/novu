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
exports.ControlButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const react_1 = require("react");
const Button_1 = require("../button/Button");
const config_1 = require("../config");
const PaginationContext_1 = require("./PaginationContext");
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontColor = ({ theme, isCurrentPage }) => {
    return theme.colorScheme === 'dark'
        ? isCurrentPage
            ? config_1.colors.white
            : config_1.colors.B60
        : isCurrentPage
            ? config_1.colors.BGDark // TODO: speak with Design -- this is bad, we should not be using a "BG" color for font
            : config_1.colors.B60;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontWeight = ({ theme, isCurrentPage }) => {
    return isCurrentPage ? 700 : 600;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getBackgroundColor = ({ theme, isCurrentPage }) => {
    return isCurrentPage ? (theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.BGLight) : 'none';
};
const StyledButton = (0, styled_1.default)(Button_1.Button, {
    shouldForwardProp: (propName) => {
        return propName !== 'isCurrentPage';
    },
})(({ theme, isCurrentPage }) => `
  font-weight: ${getFontWeight({ theme, isCurrentPage })};
  background: ${getBackgroundColor({ theme, isCurrentPage })};
  color: ${getFontColor({ theme, isCurrentPage })};

  & .mantine-Button-label {
    background-image: none;
  }

  &:disabled {
    background: ${getBackgroundColor({ theme, isCurrentPage })};
    color: ${getFontColor({ theme, isCurrentPage })};
  }
  
  /* override mantine */
  height: inherit;
  
  /* TODO: theme values for next few lines */
  border-radius: 4px;
  line-height: 20px;
  padding: 2px 3.5px;
  min-width: 24px;
`);
/**
 * Button for navigating to a specific page.
 * @requires this component to be a child of a Pagination component
 */
exports.ControlButton = (0, react_1.forwardRef)((_a, buttonRef) => {
    var { onClick, className, id, disabled, isCurrentPage } = _a, buttonProps = __rest(_a, ["onClick", "className", "id", "disabled", "isCurrentPage"]);
    const paginationCtx = (0, react_1.useContext)(PaginationContext_1.PaginationContext);
    // hydrate the click handler with the context
    const handleClick = () => onClick === null || onClick === void 0 ? void 0 : onClick(paginationCtx);
    return ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ theme: (0, core_1.useMantineTheme)(), isCurrentPage: isCurrentPage, id: id, onClick: handleClick, disabled: disabled || !onClick, ref: buttonRef, className: className }, { children: buttonProps.children })));
});
//# sourceMappingURL=ControlButton.js.map