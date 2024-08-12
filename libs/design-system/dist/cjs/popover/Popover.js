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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const label_1 = require("../typography/label");
const DescriptionHolder = styled_1.default.div `
  max-width: 220px;
`;
const Popover = (_a) => {
    var _b;
    var { target, content, title, titleGradient = 'none', description, url, urlText, onUrlClick, className, opacity, onDropdownMouseEnter, onDropdownMouseLeave } = _a, rest = __rest(_a, ["target", "content", "title", "titleGradient", "description", "url", "urlText", "onUrlClick", "className", "opacity", "onDropdownMouseEnter", "onDropdownMouseLeave"]);
    const { colorScheme } = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsxs)(core_1.Popover, Object.assign({ withArrow: true, position: "right", radius: "md", shadow: colorScheme === 'dark' ? config_1.shadows.dark : config_1.shadows.medium, offset: 30, middlewares: { flip: false, shift: false } }, rest, { children: [(0, jsx_runtime_1.jsx)(core_1.Popover.Target, { children: target }), (0, jsx_runtime_1.jsxs)(core_1.Popover.Dropdown, Object.assign({ className: className, onMouseEnter: onDropdownMouseEnter, onMouseLeave: onDropdownMouseLeave, onClick: (e) => e.stopPropagation(), style: {
                    minHeight: '100px',
                    padding: '16px',
                    backgroundColor: colorScheme === 'dark' ? config_1.colors.B17 : config_1.colors.white,
                }, sx: { opacity: (_b = `${opacity} !important`) !== null && _b !== void 0 ? _b : 1 } }, { children: [title && ((0, jsx_runtime_1.jsx)(label_1.Label, Object.assign({ gradientColor: titleGradient, style: { marginBottom: '8px' } }, { children: title }))), (0, jsx_runtime_1.jsxs)(DescriptionHolder, Object.assign({ className: "popover-description-holder" }, { children: [description && ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: { color: colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B60, lineHeight: 1.5 } }, { children: description }))), url && ((0, jsx_runtime_1.jsx)("a", Object.assign({ href: url, style: { color: '#DD2476', textDecoration: 'underline' }, onClick: onUrlClick, target: "_blank", rel: "noreferrer" }, { children: urlText !== null && urlText !== void 0 ? urlText : 'Learn More' })))] })), content] }))] })));
};
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map