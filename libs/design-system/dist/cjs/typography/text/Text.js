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
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const config_1 = require("../../config");
/**
 * Text component
 *
 */
exports.Text = react_1.default.forwardRef((_a, ref) => {
    var { children, gradient = false } = _a, props = __rest(_a, ["children", "gradient"]);
    const { colorScheme } = (0, core_1.useMantineTheme)();
    const gradientStyles = gradient
        ? { backgroundImage: config_1.colors.horizontal, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }
        : {};
    let textColor = props.color;
    if (!textColor) {
        textColor = colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B40;
    }
    return ((0, jsx_runtime_1.jsx)(core_1.Text, Object.assign({ lineClamp: props.rows, size: "md", weight: "normal", style: gradientStyles, ref: ref }, props, { color: textColor }, { children: children })));
});
//# sourceMappingURL=Text.js.map