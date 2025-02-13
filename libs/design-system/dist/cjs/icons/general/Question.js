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
exports.Question = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function Question(props) {
    const { isGradient = false } = props, rest = __rest(props, ["isGradient"]);
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "26", height: "25", fill: "none", viewBox: "0 0 26 25" }, rest, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "url(#paint0_linear_2687_104875)", d: "M12.938 20c.437 0 .807-.151 1.109-.453.302-.302.453-.672.453-1.11 0-.437-.151-.807-.453-1.109a1.509 1.509 0 00-1.11-.453c-.437 0-.807.151-1.109.453a1.509 1.509 0 00-.453 1.11c0 .437.151.807.453 1.109.302.302.672.453 1.11.453zm-1.126-4.813h2.313c0-.687.078-1.229.234-1.624.157-.396.6-.938 1.329-1.626.541-.541.968-1.057 1.28-1.546.313-.49.47-1.079.47-1.766 0-1.167-.428-2.063-1.282-2.688C15.302 5.313 14.292 5 13.125 5c-1.188 0-2.151.313-2.89.938-.74.625-1.256 1.375-1.547 2.25L10.75 9c.104-.375.338-.781.703-1.219.365-.437.922-.656 1.672-.656.667 0 1.167.182 1.5.547.333.364.5.766.5 1.203 0 .417-.125.807-.375 1.172-.25.364-.563.703-.938 1.015-.916.813-1.479 1.428-1.687 1.844-.208.417-.313 1.177-.313 2.281zM13 25c-1.73 0-3.354-.328-4.875-.984a12.622 12.622 0 01-3.969-2.672 12.624 12.624 0 01-2.672-3.969C.828 15.855.5 14.229.5 12.5c0-1.73.328-3.354.984-4.875a12.623 12.623 0 012.672-3.969A12.623 12.623 0 018.125.984C9.645.328 11.271 0 13 0c1.73 0 3.354.328 4.875.984a12.624 12.624 0 013.969 2.672 12.622 12.622 0 012.672 3.969c.656 1.52.984 3.146.984 4.875 0 1.73-.328 3.354-.984 4.875a12.623 12.623 0 01-2.672 3.969 12.623 12.623 0 01-3.969 2.672c-1.52.656-3.146.984-4.875.984zm0-2.5c2.792 0 5.156-.969 7.094-2.906C22.03 17.656 23 15.292 23 12.5c0-2.792-.969-5.156-2.906-7.094C18.156 3.47 15.792 2.5 13 2.5c-2.792 0-5.156.969-7.094 2.906C3.97 7.344 3 9.708 3 12.5c0 2.792.969 5.156 2.906 7.094C7.844 21.53 10.208 22.5 13 22.5z" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: "paint0_linear_2687_104875", x1: "0.5", x2: "25.5", y1: "12.5", y2: "12.5", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: isGradient ? '#DD2476' : 'currentColor' }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: isGradient ? '#FF512F' : 'currentColor' })] })) })] })));
}
exports.Question = Question;
//# sourceMappingURL=Question.js.map