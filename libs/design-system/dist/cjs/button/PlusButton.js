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
exports.PlusButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const Button_1 = require("./Button");
const Text_1 = require("../typography/text/Text");
const icons_1 = require("../icons");
const ButtonStyled = (0, styled_1.default)(Button_1.Button) `
  padding: 0;
`;
function PlusButton(_a) {
    var { label, isGradient = true, onClick, disabled = false } = _a, rest = __rest(_a, ["label", "isGradient", "onClick", "disabled"]);
    return ((0, jsx_runtime_1.jsxs)(ButtonStyled, Object.assign({ id: "add-provider", onClick: onClick, disabled: disabled, variant: "subtle" }, rest, { children: [(0, jsx_runtime_1.jsx)(icons_1.PlusFilled, { width: 24, height: 24 }), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ gradient: isGradient }, { children: label }))] })));
}
exports.PlusButton = PlusButton;
//# sourceMappingURL=PlusButton.js.map