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
exports.PasswordInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const inputs_styles_1 = require("../config/inputs.styles");
/**
 * Password Input component
 *
 */
exports.PasswordInput = react_1.default.forwardRef((_a, ref) => {
    var { value, onChange } = _a, props = __rest(_a, ["value", "onChange"]);
    const defaultDesign = { radius: 'md', size: 'md', styles: inputs_styles_1.inputStyles };
    return ((0, jsx_runtime_1.jsx)(StyledPassword, Object.assign({ ref: ref }, defaultDesign, { onChange: onChange, autoComplete: "off", value: value }, props, { toggleTabIndex: 0 })));
});
const StyledPassword = (0, styled_1.default)(core_1.PasswordInput) `
  button {
    color: ${config_1.colors.B40};
    margin-right: 10px;
  }

  input {
    height: 100%;
  }
`;
//# sourceMappingURL=PasswordInput.js.map