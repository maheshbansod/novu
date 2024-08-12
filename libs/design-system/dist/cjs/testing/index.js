"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const ThemeProvider_1 = require("../ThemeProvider");
const react_router_dom_1 = require("react-router-dom");
function TestWrapper({ children }) {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.MemoryRouter, { children: (0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(Frame, { children: (0, jsx_runtime_1.jsx)(ThemeProvider_1.ThemeProvider, { children: children }) }) }) }));
}
exports.TestWrapper = TestWrapper;
const Frame = styled_1.default.div `
  min-width: 500px;
  display: inline-block;
`;
const Wrapper = styled_1.default.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//# sourceMappingURL=index.js.map