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
exports.Checkbox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const Checkbox_styles_1 = __importDefault(require("./Checkbox.styles"));
/**
 * Checkbox Component
 *
 */
function Checkbox(_a) {
    var { label = 'Default Checkbox', checked, onChange, disabled = false } = _a, props = __rest(_a, ["label", "checked", "onChange", "disabled"]);
    const { classes } = (0, Checkbox_styles_1.default)({ disabled });
    return ((0, jsx_runtime_1.jsx)(core_1.Checkbox, Object.assign({ classNames: classes, label: label, onChange: onChange, disabled: disabled, size: "sm", checked: checked }, props)));
}
exports.Checkbox = Checkbox;
Checkbox.Group = core_1.Checkbox.Group;
//# sourceMappingURL=Checkbox.js.map