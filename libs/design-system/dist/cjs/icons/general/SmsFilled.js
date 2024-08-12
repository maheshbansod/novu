"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmsFilled = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
function SmsFilled(props) {
    const id = Date.now();
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", viewBox: "0 0 24 24", "data-workflow-node-icon": true }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: `url(#${id})`, d: "M18.75 3H5.25A2.252 2.252 0 003 5.25v10.124c0 1.241 1.009 2.25 2.25 2.25h3.375v2.953c0 .345.393.545.671.341l4.39-3.294h5.063c1.241 0 2.25-1.009 2.25-2.25V5.25c0-1.241-1.009-2.25-2.25-2.25z" }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("linearGradient", Object.assign({ id: String(id), x1: "3", x2: "20.999", y1: "12", y2: "12", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { stopColor: "#525266" }), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#525266" })] })) })] })));
}
exports.SmsFilled = SmsFilled;
//# sourceMappingURL=SmsFilled.js.map