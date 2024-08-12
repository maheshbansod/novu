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
import React from 'react';
import { Switch as MantineSwitch } from '@mantine/core';
import useStyles from './Switch.styles';
/**
 * Switch component
 *
 */
export const Switch = React.forwardRef((_a, ref) => {
    var { onChange, loading = false, disabled = false } = _a, props = __rest(_a, ["onChange", "loading", "disabled"]);
    const { classes } = useStyles();
    return (_jsx(MantineSwitch, Object.assign({ ref: ref, disabled: disabled, onChange: onChange, radius: "xl", size: "md", classNames: classes }, props)));
});
//# sourceMappingURL=Switch.js.map