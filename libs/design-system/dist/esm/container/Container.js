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
import { Container as MantineContainer } from '@mantine/core';
import { colors, shadows } from '../config';
/**
 * Container component
 *
 */
export function Container(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    return (_jsx(MantineContainer, Object.assign({ sx: (theme) => ({
            padding: '0px',
            borderRadius: '7px',
            boxShadow: theme.colorScheme === 'dark' ? shadows.dark : shadows.light,
            backgroundColor: theme.colorScheme === 'dark' ? colors.B15 : colors.white,
        }) }, props, { children: children })));
}
//# sourceMappingURL=Container.js.map