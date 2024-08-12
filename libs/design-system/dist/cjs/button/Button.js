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
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
const Button_styles_1 = __importDefault(require("./Button.styles"));
/**
 * Button component
 *
 */
exports.Button = (0, react_1.forwardRef)((_a, buttonRef) => {
    var { id, loading, children, submit = false, icon, size = 'md', fullWidth, disabled = false, inherit = false, onClick, variant = 'gradient', pulse, iconPosition = 'left' } = _a, props = __rest(_a, ["id", "loading", "children", "submit", "icon", "size", "fullWidth", "disabled", "inherit", "onClick", "variant", "pulse", "iconPosition"]);
    const { classes } = (0, Button_styles_1.default)({ disabled, inherit, variant, pulse });
    const withIconProps = icon ? (iconPosition === 'left' ? { leftIcon: icon } : { rightIcon: icon }) : {};
    return ((0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ id: id, ref: buttonRef, radius: "md", classNames: classes }, withIconProps, { type: submit ? 'submit' : 'button', onClick: onClick, disabled: disabled, size: size, loading: loading, fullWidth: fullWidth, variant: variant }, props, { children: children })));
});
//# sourceMappingURL=Button.js.map