"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsGradient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
function SmsGradient({ disabled = false, width = '31px', height = '31px' }) {
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: width, height: height, viewBox: "0 0 41 41", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M33.8332 26.2778C33.8332 27.0047 33.521 27.7018 32.9653 28.2158C32.4097 28.7298 31.656 29.0186 30.8702 29.0186H13.0924L7.1665 33.8334V12.5741C7.1665 11.8472 7.47867 11.1501 8.03434 10.6361C8.59 10.1221 9.34364 9.83337 10.1295 9.83337H30.8702C31.656 9.83337 32.4097 10.1221 32.9653 10.6361C33.521 11.1501 33.8332 11.8472 33.8332 12.5741V26.2778Z", stroke: !disabled ? 'url(#paint0_linear_440_3090)' : 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "paint0_linear_440_3090", x1: "20.4998", y1: "33.8334", x2: "20.4998", y2: "9.83337", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: "#FF512F" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#DD2476" })] })) })] })));
}
exports.SmsGradient = SmsGradient;
//# sourceMappingURL=SmsGradient.js.map