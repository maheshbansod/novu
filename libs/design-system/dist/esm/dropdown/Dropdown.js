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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu } from '@mantine/core';
import useStyles from './Dropdown.styles';
import { shadows } from '../config';
export function Dropdown(_a) {
    var { control, withArrow = true, offset = 10, children } = _a, props = __rest(_a, ["control", "withArrow", "offset", "children"]);
    const { classes, theme } = useStyles();
    return (_jsxs(Menu, Object.assign({ withArrow: withArrow, transitionDuration: 0, radius: 7, offset: offset, shadow: theme.colorScheme === 'dark' ? shadows.dark : shadows.light, classNames: classes, clickOutsideEvents: ['click', 'mousedown', 'touchstart'], middlewares: { flip: false, shift: false } }, props, { children: [_jsx(Menu.Target, { children: control }), _jsx(Menu.Dropdown, { children: children })] })));
}
Dropdown.Item = Menu.Item;
Dropdown.Label = Menu.Label;
Dropdown.Divider = Menu.Divider;
//# sourceMappingURL=Dropdown.js.map