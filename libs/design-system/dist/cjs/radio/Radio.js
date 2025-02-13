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
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const Radio_styles_1 = __importDefault(require("./Radio.styles"));
/**
 * Checkbox Component
 *
 */
function Radio(_a) {
    var { value, onChange, disabled = false, checked, children, size = 'md' } = _a, props = __rest(_a, ["value", "onChange", "disabled", "checked", "children", "size"]);
    const { classes } = (0, Radio_styles_1.default)();
    return ((0, jsx_runtime_1.jsx)(core_1.Radio, Object.assign({ value: value, onChange: onChange, checked: checked, classNames: classes, disabled: disabled, size: size }, props, { children: children })));
}
exports.Radio = Radio;
//# sourceMappingURL=Radio.js.map