var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Popover, createStyles } from '@mantine/core';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { Text } from '../typography/text/Text';
import { Switch } from '../switch/Switch';
import { useTemplateButtonStyles } from './TemplateButton.styles';
import { colors } from '../config';
import { IconWrapper } from './IconWrapper';
import { UnstyledButton, createPolymorphicComponent } from '@mantine/core';
const Button = createPolymorphicComponent(React.forwardRef((props, ref) => {
    return _jsx(WrapperButton, Object.assign({ ref: ref }, props));
}));
const WrapperButton = styled(UnstyledButton) `
  position: relative;

  @media screen and (max-width: 1400px) {
    padding: 0 5px;
  }
`;
const usePopoverStyles = createStyles(() => ({
    dropdown: {
        position: 'absolute',
        padding: '12px 15px 14px',
        backgroundColor: colors.error,
        color: colors.white,
        border: 'none',
        marginTop: '1px',
        maxWidth: 300,
    },
    arrow: {
        backgroundColor: colors.error,
        height: '7px',
        border: 'none',
        margin: '0px',
    },
}));
export function TemplateButton({ description, active, changeTab, tabKey, action = false, switchButton, checked = false, readonly = false, label, Icon, testId, errors = false, }) {
    const { cx, classes, theme } = useTemplateButtonStyles();
    const disabled = action && !checked;
    const disabledColor = disabled ? { color: theme.colorScheme === 'dark' ? colors.B40 : colors.B70 } : {};
    const disabledProp = disabled ? { disabled } : {};
    const [popoverOpened, setPopoverOpened] = useState(false);
    const { trigger } = useFormContext();
    const { classes: popoverClasses } = usePopoverStyles();
    return (_jsxs(Button, Object.assign({ onMouseEnter: () => setPopoverOpened(true), onMouseLeave: () => setPopoverOpened(false), onClick: () => __awaiter(this, void 0, void 0, function* () {
            if (active) {
                return;
            }
            changeTab(tabKey);
        }), "data-test-id": testId, className: cx(classes.button, { [classes.active]: active }) }, { children: [_jsxs(ButtonWrapper, { children: [_jsxs(LeftContainerWrapper, { children: [_jsx(IconWrapper, Object.assign({ className: classes.linkIcon }, { children: _jsx(Icon, Object.assign({}, disabledProp)) })), _jsxs(StyledContentWrapper, { children: [_jsx(Text, Object.assign({}, disabledColor, { weight: "bold" }, { children: label })), _jsx(Text, Object.assign({ mt: 3, color: colors.B60 }, disabledColor, { children: description }))] })] }), _jsx(ActionWrapper, { children: action && !readonly && (_jsx(Switch, { checked: checked, onChange: (e) => switchButton && switchButton(e.target.checked) })) })] }), errors && (_jsxs(Popover, Object.assign({ classNames: popoverClasses, withArrow: true, opened: popoverOpened, transition: "rotate-left", transitionDuration: 250, offset: theme.spacing.xs, position: "right" }, { children: [_jsx(Popover.Target, { children: _jsx(ErrorCircle, { "data-test-id": "error-circle", dark: theme.colorScheme === 'dark' }) }), _jsx(Popover.Dropdown, { children: _jsx(Text, Object.assign({ color: colors.white, rows: 1 }, { children: errors || 'Something is missing here' })) })] })))] })));
}
const ErrorCircle = styled.div `
  width: 11px;
  height: 11px;
  display: inline-block;
  position: absolute;
  right: -6px;
  top: calc(50% - 4px);
  background: ${colors.error};
  border-radius: 50%;
  border: 3px solid ${({ dark }) => (dark ? colors.B15 : 'white')};
`;
const ActionWrapper = styled.div `
  display: flex;
  align-items: center;
`;
const LeftContainerWrapper = styled.div `
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div `
  display: flex;
  justify-content: space-between;
`;
const StyledContentWrapper = styled.div `
  padding-right: 10px;
`;
//# sourceMappingURL=TemplateButton.js.map