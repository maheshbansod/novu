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
export function MailGradient(_a) {
    var { disabled = false, width = '30px', height = '31px' } = _a, props = __rest(_a, ["disabled", "width", "height"]);
    return (_jsxs("svg", Object.assign({ width: width, height: height, viewBox: "0 0 30 31", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("path", { d: "M24 9L15 15.75L6 9M7 7.5H23C24.1 7.5 25 8.4 25 9.5V21.5C25 22.6 24.1 23.5 23 23.5H7C5.9 23.5 5 22.6 5 21.5V9.5C5 8.4 5.9 7.5 7 7.5Z", stroke: !disabled ? 'url(#paint0_linear_440_2017)' : 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("defs", { children: _jsxs("linearGradient", Object.assign({ id: "paint0_linear_440_2017", x1: "15", y1: "23.5", x2: "15", y2: "7.5", gradientUnits: "userSpaceOnUse" }, { children: [_jsx("stop", { stopColor: "#FF512F" }), _jsx("stop", { offset: "1", stopColor: "#DD2476" })] })) })] })));
}
//# sourceMappingURL=MailGradient.js.map