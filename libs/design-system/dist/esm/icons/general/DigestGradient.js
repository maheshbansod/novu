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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable */
export function DigestGradient(_a) {
    var { width = '30', height = '31' } = _a, props = __rest(_a, ["width", "height"]);
    return (_jsxs("svg", Object.assign({ width: 30, height: 31, viewBox: `0 0 30 31`, fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("path", { d: "M1 19.5L12 25.5L23 19.5M1 13.5L12 19.5L23 13.5M12 1.5L1 7.5L12 13.5L23 7.5L12 1.5Z", stroke: "url(#paint0_linear_1981_26278)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("defs", { children: _jsxs("linearGradient", Object.assign({ id: "paint0_linear_1981_26278", x1: "12", y1: "25.5", x2: "12", y2: "1.5", gradientUnits: "userSpaceOnUse" }, { children: [_jsx("stop", { stopColor: "#14DEEB" }), _jsx("stop", { offset: "1", stopColor: "#446EDC" })] })) })] })));
}
//# sourceMappingURL=DigestGradient.js.map