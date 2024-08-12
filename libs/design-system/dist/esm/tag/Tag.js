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
import { Badge } from '@mantine/core';
import { colors } from '../config';
/**
 * Tag Component
 *
 */
export function Tag(_a) {
    var { children, color, border } = _a, props = __rest(_a, ["children", "color", "border"]);
    return (_jsx(Badge, Object.assign({ sx: (theme) => ({
            color: theme.colorScheme === 'dark' ? theme.white : colors.B40,
            border: `1px solid ${colors.B30}`,
            borderRadius: '5px',
            textTransform: 'none',
            backgroundColor: 'transparent',
            height: '30px',
            padding: '10px',
            fontSize: '14px',
            fontWeight: 400,
        }), variant: "outline", size: "md", radius: "xs" }, props, { children: children })));
}
//# sourceMappingURL=Tag.js.map