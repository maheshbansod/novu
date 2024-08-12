"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Digest = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable */
function Digest(props) {
    return ((0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${props.width || '24'} ${props.height || '26'}`, fill: "none" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1 19L12 25L23 19M1 13L12 19L23 13M12 1L1 7L12 13L23 7L12 1Z", stroke: props.color ? props.color : 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })));
}
exports.Digest = Digest;
//# sourceMappingURL=Digest.js.map