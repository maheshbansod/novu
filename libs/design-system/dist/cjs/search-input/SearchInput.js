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
exports.SearchInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const iconsV2_1 = require("../iconsV2");
const config_1 = require("../config");
const StyledInput = (0, styled_1.default)(core_1.Input) `
  max-width: 15rem;

  .mantine-Input-input {
    border: none;
    background-color: transparent;
    font-size: 0.875rem;

    &::placeholder {
      color: ${config_1.colors.B40};
    }
  }

  .mantine-Input-icon:has(~ input:disabled) {
    opacity: 0.6;
  }
`;
const IconCloseStyled = (0, styled_1.default)(iconsV2_1.IconClose) `
  cursor: pointer;
`;
exports.SearchInput = (0, react_1.forwardRef)((_a, ref) => {
    var { value, onClearClick } = _a, restSearchInputProps = __rest(_a, ["value", "onClearClick"]);
    return ((0, jsx_runtime_1.jsx)(StyledInput, Object.assign({}, restSearchInputProps, { ref: ref, value: value, icon: (0, jsx_runtime_1.jsx)(iconsV2_1.IconSearch, { title: "search" }), rightSection: !!value && ((0, jsx_runtime_1.jsx)(IconCloseStyled, { title: "clear", onClick: onClearClick, "data-test-id": "search-input-clear", role: "button" })) })));
});
//# sourceMappingURL=SearchInput.js.map