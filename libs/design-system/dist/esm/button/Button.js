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
import { forwardRef } from 'react';
import { Button as MantineButton } from '@mantine/core';
import useStyles from './Button.styles';
/**
 * Button component
 *
 */
export const Button = forwardRef((_a, buttonRef) => {
    var { id, loading, children, submit = false, icon, size = 'md', fullWidth, disabled = false, inherit = false, onClick, variant = 'gradient', pulse, iconPosition = 'left' } = _a, props = __rest(_a, ["id", "loading", "children", "submit", "icon", "size", "fullWidth", "disabled", "inherit", "onClick", "variant", "pulse", "iconPosition"]);
    const { classes } = useStyles({ disabled, inherit, variant, pulse });
    const withIconProps = icon ? (iconPosition === 'left' ? { leftIcon: icon } : { rightIcon: icon }) : {};
    return (_jsx(MantineButton, Object.assign({ id: id, ref: buttonRef, radius: "md", classNames: classes }, withIconProps, { type: submit ? 'submit' : 'button', onClick: onClick, disabled: disabled, size: size, loading: loading, fullWidth: fullWidth, variant: variant }, props, { children: children })));
});
//# sourceMappingURL=Button.js.map