"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DigestAction = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function DigestAction(props) {
    const id = Date.now();
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", "data-blue-gradient-svg": true }, props, { children: [(0, jsx_runtime_1.jsx)("mask", Object.assign({ id: "mask0_528_4359", style: { maskType: 'alpha' }, width: "24", height: "24", x: "0", y: "0", maskUnits: "userSpaceOnUse" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#525266", d: "M0 0H24V24H0z" }) })), (0, jsx_runtime_1.jsx)("g", Object.assign({ mask: "url(#mask0_528_4359)" }, { children: (0, jsx_runtime_1.jsx)("path", { fill: `url(#${id})`, d: "M12 22c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0110 20v-8c0-.55.196-1.02.588-1.412A1.926 1.926 0 0112 10h8c.55 0 1.02.196 1.413.588.391.391.587.862.587 1.412v8c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0120 22h-8zm0-2h8v-8h-8v8zm-6-2V8c0-.55.196-1.02.588-1.412A1.926 1.926 0 018 6h10v2H8v10H6zm-4-4V4c0-.55.196-1.02.587-1.413A1.926 1.926 0 014 2h10v2H4v10H2z" }) })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: String(id), x1: "2", x2: "22", y1: "12", y2: "12", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: "#525266" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#525266" })] })) })] })));
}
exports.DigestAction = DigestAction;
//# sourceMappingURL=DigestAction.js.map