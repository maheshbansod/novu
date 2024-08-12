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
import { Title as MantineTitle, useMantineTheme } from '@mantine/core';
import { colors } from '../../config';
/**
 * Use Title to create headers.
 *
 */
export function Title(_a) {
    var { size = 1, children } = _a, props = __rest(_a, ["size", "children"]);
    const { colorScheme } = useMantineTheme();
    let textColor = props.color;
    if (!textColor) {
        textColor = colorScheme === 'dark' ? colors.white : colors.B40;
    }
    return (_jsx(MantineTitle, Object.assign({ sx: {
            fontWeight: size === 1 ? 800 : 700,
        }, order: size, color: textColor }, props, { children: children })));
}
//# sourceMappingURL=Title.js.map