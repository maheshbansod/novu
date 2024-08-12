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
import { Text as MantineText, useMantineTheme } from '@mantine/core';
import { colors } from '../../config';
/**
 * Text component
 *
 */
export const Text = React.forwardRef((_a, ref) => {
    var { children, gradient = false } = _a, props = __rest(_a, ["children", "gradient"]);
    const { colorScheme } = useMantineTheme();
    const gradientStyles = gradient
        ? { backgroundImage: colors.horizontal, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
        : {};
    let textColor = props.color;
    if (!textColor) {
        textColor = colorScheme === 'dark' ? colors.white : colors.B40;
    }
    return (_jsx(MantineText, Object.assign({ lineClamp: props.rows, size: "md", weight: "normal", style: gradientStyles, ref: ref }, props, { color: textColor }, { children: children })));
});
//# sourceMappingURL=Text.js.map