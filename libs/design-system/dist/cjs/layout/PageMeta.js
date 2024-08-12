"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMeta = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_helmet_async_1 = require("react-helmet-async");
function PageMeta({ title }) {
    return ((0, jsx_runtime_1.jsx)(react_helmet_async_1.Helmet, { children: (0, jsx_runtime_1.jsxs)("title", { children: [title ? `${title} | ` : ``, "Novu Cloud Dashboard"] }) }));
}
exports.PageMeta = PageMeta;
//# sourceMappingURL=PageMeta.js.map