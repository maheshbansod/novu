"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewportWide = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const ViewportWide = () => {
    const theme = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "#00abfb", fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }, { children: [(0, jsx_runtime_1.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), (0, jsx_runtime_1.jsx)("path", { d: "M10 12h-7l3 -3m0 6l-3 -3" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 12h7l-3 -3m0 6l3 -3" }), (0, jsx_runtime_1.jsx)("path", { d: "M3 6v-3h18v3" }), (0, jsx_runtime_1.jsx)("path", { d: "M3 18v3h18v-3" })] })));
};
exports.ViewportWide = ViewportWide;
//# sourceMappingURL=ViewportWide.js.map