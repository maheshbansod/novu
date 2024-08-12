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
exports.Input = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const inputs_styles_1 = require("../config/inputs.styles");
/**
 * Input component
 *
 */
exports.Input = react_1.default.forwardRef((_a, ref) => {
    var { value, rightSection, rightSectionWidth, onChange, readOnly = false, disabled = false, type } = _a, props = __rest(_a, ["value", "rightSection", "rightSectionWidth", "onChange", "readOnly", "disabled", "type"]);
    const defaultDesign = { radius: 'md', size: 'md', styles: inputs_styles_1.inputStyles, type: 'text' };
    return ((0, jsx_runtime_1.jsx)(core_1.TextInput, Object.assign({ ref: ref }, (rightSection ? { rightSection, rightSectionWidth: rightSectionWidth !== null && rightSectionWidth !== void 0 ? rightSectionWidth : 50 } : {}), defaultDesign, { onChange: onChange, autoComplete: "off", readOnly: readOnly, disabled: disabled, value: value, type: type }, props)));
});
//# sourceMappingURL=Input.js.map