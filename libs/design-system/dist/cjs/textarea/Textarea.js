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
exports.Textarea = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const textarea_styles_1 = require("./textarea.styles");
/**
 * Textarea component
 *
 */
exports.Textarea = react_1.default.forwardRef((_a, ref) => {
    var { value, onChange, disabled = false } = _a, props = __rest(_a, ["value", "onChange", "disabled"]);
    return ((0, jsx_runtime_1.jsx)(core_1.Textarea, Object.assign({ ref: ref, styles: textarea_styles_1.textareaStyles, onChange: onChange, autoComplete: "off", disabled: disabled, value: value }, props)));
});
//# sourceMappingURL=Textarea.js.map