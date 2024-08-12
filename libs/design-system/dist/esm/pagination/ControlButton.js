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
import { useMantineTheme } from '@mantine/core';
import { forwardRef, useContext } from 'react';
import { Button } from '../button/Button';
import { colors } from '../config';
import { PaginationContext } from './PaginationContext';
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontColor = ({ theme, isCurrentPage }) => {
    return theme.colorScheme === 'dark'
        ? isCurrentPage
            ? colors.white
            : colors.B60
        : isCurrentPage
            ? colors.BGDark // TODO: speak with Design -- this is bad, we should not be using a "BG" color for font
            : colors.B60;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontWeight = ({ theme, isCurrentPage }) => {
    return isCurrentPage ? 700 : 600;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getBackgroundColor = ({ theme, isCurrentPage }) => {
    return isCurrentPage ? (theme.colorScheme === 'dark' ? colors.B30 : colors.BGLight) : 'none';
};
const StyledButton = styled(Button, {
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
export const ControlButton = forwardRef((_a, buttonRef) => {
    var { onClick, className, id, disabled, isCurrentPage } = _a, buttonProps = __rest(_a, ["onClick", "className", "id", "disabled", "isCurrentPage"]);
    const paginationCtx = useContext(PaginationContext);
    // hydrate the click handler with the context
    const handleClick = () => onClick === null || onClick === void 0 ? void 0 : onClick(paginationCtx);
    return (_jsx(StyledButton, Object.assign({ theme: useMantineTheme(), isCurrentPage: isCurrentPage, id: id, onClick: handleClick, disabled: disabled || !onClick, ref: buttonRef, className: className }, { children: buttonProps.children })));
});
//# sourceMappingURL=ControlButton.js.map