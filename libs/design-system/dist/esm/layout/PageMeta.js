import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
export function PageMeta({ title }) {
    return (_jsx(Helmet, { children: _jsxs("title", { children: [title ? `${title} | ` : ``, "Novu Cloud Dashboard"] }) }));
}
//# sourceMappingURL=PageMeta.js.map