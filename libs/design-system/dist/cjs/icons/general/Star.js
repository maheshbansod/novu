"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Star = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
const styled_1 = __importDefault(require("@emotion/styled"));
const config_1 = require("../../config");
const StarHolder = styled_1.default.div `
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: white;
  border: 1px solid ${config_1.colors.gradientMiddle};
`;
const Star = (props) => {
    return ((0, jsx_runtime_1.jsx)(StarHolder, { children: (0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 10", width: 12, height: 12 }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "url(#a)", d: "m1.913 9.8.812-3.512L0 3.925l3.6-.312L5 .3l1.4 3.313 3.6.312-2.725 2.363.813 3.512L5 7.938 1.913 9.8Z" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "a", x1: "0", x2: "10", y1: "5.05", y2: "5.05", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: "#DD2476" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#FF512F" })] })) })] })) }));
};
exports.Star = Star;
//# sourceMappingURL=Star.js.map