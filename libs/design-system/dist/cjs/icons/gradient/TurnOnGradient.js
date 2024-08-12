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
exports.TurnOnGradient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
function TurnOnGradient(_a) {
    var { stopColor, offSetStopColor } = _a, props = __rest(_a, ["stopColor", "offSetStopColor"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "22", height: "24", viewBox: "0 0 22 24", fill: "none" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M18.0722 6.10325C19.4704 7.48772 20.4225 9.25148 20.8081 11.1715C21.1937 13.0916 20.9955 15.0817 20.2385 16.8902C19.4815 18.6987 18.1998 20.2445 16.5554 21.332C14.9109 22.4195 12.9777 23 11 23C9.02233 23 7.08906 22.4195 5.44464 21.332C3.80022 20.2445 2.51849 18.6987 1.76152 16.8902C1.00455 15.0817 0.806325 13.0916 1.19191 11.1715C1.5775 9.25148 2.52958 7.48772 3.92778 6.10325M11.0056 1V11.9984", stroke: "url(#paint0_linear_1020_1949)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "paint0_linear_1020_1949", x1: "11", y1: "23", x2: "11", y2: "1", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: stopColor !== null && stopColor !== void 0 ? stopColor : '#FF512F' }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: offSetStopColor !== null && offSetStopColor !== void 0 ? offSetStopColor : '#DD2476' })] })) })] })));
}
exports.TurnOnGradient = TurnOnGradient;
//# sourceMappingURL=TurnOnGradient.js.map