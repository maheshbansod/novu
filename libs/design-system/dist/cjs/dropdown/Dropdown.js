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
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const Dropdown_styles_1 = __importDefault(require("./Dropdown.styles"));
const config_1 = require("../config");
function Dropdown(_a) {
    var { control, withArrow = true, offset = 10, children } = _a, props = __rest(_a, ["control", "withArrow", "offset", "children"]);
    const { classes, theme } = (0, Dropdown_styles_1.default)();
    return ((0, jsx_runtime_1.jsxs)(core_1.Menu, Object.assign({ withArrow: withArrow, transitionDuration: 0, radius: 7, offset: offset, shadow: theme.colorScheme === 'dark' ? config_1.shadows.dark : config_1.shadows.light, classNames: classes, clickOutsideEvents: ['click', 'mousedown', 'touchstart'], middlewares: { flip: false, shift: false } }, props, { children: [(0, jsx_runtime_1.jsx)(core_1.Menu.Target, { children: control }), (0, jsx_runtime_1.jsx)(core_1.Menu.Dropdown, { children: children })] })));
}
exports.Dropdown = Dropdown;
Dropdown.Item = core_1.Menu.Item;
Dropdown.Label = core_1.Menu.Label;
Dropdown.Divider = core_1.Menu.Divider;
//# sourceMappingURL=Dropdown.js.map