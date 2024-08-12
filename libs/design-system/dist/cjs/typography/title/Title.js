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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const config_1 = require("../../config");
/**
 * Use Title to create headers.
 *
 */
function Title(_a) {
    var { size = 1, children } = _a, props = __rest(_a, ["size", "children"]);
    const { colorScheme } = (0, core_1.useMantineTheme)();
    let textColor = props.color;
    if (!textColor) {
        textColor = colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B40;
    }
    return ((0, jsx_runtime_1.jsx)(core_1.Title, Object.assign({ sx: {
            fontWeight: size === 1 ? 800 : 700,
        }, order: size, color: textColor }, props, { children: children })));
}
exports.Title = Title;
//# sourceMappingURL=Title.js.map