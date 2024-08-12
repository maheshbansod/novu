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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigestGradient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
function DigestGradient(_a) {
    var { width = '30', height = '31' } = _a, props = __rest(_a, ["width", "height"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: 30, height: 31, viewBox: `0 0 30 31`, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M1 19.5L12 25.5L23 19.5M1 13.5L12 19.5L23 13.5M12 1.5L1 7.5L12 13.5L23 7.5L12 1.5Z", stroke: "url(#paint0_linear_1981_26278)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "paint0_linear_1981_26278", x1: "12", y1: "25.5", x2: "12", y2: "1.5", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: "#14DEEB" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#446EDC" })] })) })] })));
}
exports.DigestGradient = DigestGradient;
//# sourceMappingURL=DigestGradient.js.map