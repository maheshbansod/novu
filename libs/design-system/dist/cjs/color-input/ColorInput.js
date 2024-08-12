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
exports.ColorInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const inputs_styles_1 = require("../config/inputs.styles");
const defaultSwatchColors = [
    '#f47373',
    '#D9E3F0',
    '#697689',
    '#37D67A',
    '#2CCCE4',
    '#DCE775',
    '#FF8A65',
    '#BA68C8',
    '#555555',
];
/**
 * ColorPicker component
 *
 */
exports.ColorInput = react_1.default.forwardRef((_a, ref) => {
    var { value, onChange } = _a, props = __rest(_a, ["value", "onChange"]);
    const defaultDesign = { radius: 'md', size: 'md', disallowInput: true, styles: inputs_styles_1.inputStyles };
    return ((0, jsx_runtime_1.jsx)(core_1.ColorInput, Object.assign({ ref: ref, swatches: defaultSwatchColors }, defaultDesign, { onChange: onChange, value: value }, props)));
});
//# sourceMappingURL=ColorInput.js.map