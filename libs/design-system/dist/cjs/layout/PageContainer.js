"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const Container_1 = require("../container/Container");
const PageMeta_1 = require("./PageMeta");
function PageContainer({ children, title, style, }) {
    const containerStyle = Object.assign({ borderRadius: 0 }, style);
    return ((0, jsx_runtime_1.jsxs)(StyledContainer, Object.assign({ fluid: true, style: containerStyle, h: `100%` }, { children: [(0, jsx_runtime_1.jsx)(PageMeta_1.PageMeta, { title: title }), children] })));
}
exports.PageContainer = PageContainer;
const StyledContainer = (0, styled_1.default)(Container_1.Container) `
  overflow-y: auto !important;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
`;
//# sourceMappingURL=PageContainer.js.map