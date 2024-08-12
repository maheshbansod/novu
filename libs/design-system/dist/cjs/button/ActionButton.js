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
exports.ActionButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const Tooltip_1 = require("../tooltip/Tooltip");
const Text_1 = require("../typography/text/Text");
const config_1 = require("../config");
exports.ActionButton = react_1.default.forwardRef((_a, ref) => {
    var { tooltip, tooltipPosition, text, Icon, style, color, sx, onClick } = _a, rest = __rest(_a, ["tooltip", "tooltipPosition", "text", "Icon", "style", "color", "sx", "onClick"]);
    const pickedColor = color !== null && color !== void 0 ? color : config_1.colors.B60;
    const actionButton = ((0, jsx_runtime_1.jsx)(core_1.ActionIcon, Object.assign({ ref: ref, sx: (theme) => (Object.assign({ minWidth: 28, width: 'initial', padding: '0 4px', border: 'none', '&:hover': {
                background: theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B98,
                borderRadius: '8px',
                '> svg': {
                    color: theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B60,
                },
            } }, sx)), onClick: onClick, style: style }, rest, { children: text ? ((0, jsx_runtime_1.jsxs)(core_1.Center, Object.assign({ inline: true }, { children: [(0, jsx_runtime_1.jsx)(Icon, { color: pickedColor, width: "20px", height: "20px" }), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ color: pickedColor, weight: 'bold', ml: 4, size: 14 }, { children: text }))] }))) : ((0, jsx_runtime_1.jsx)(Icon, { color: pickedColor, width: "20px", height: "20px" })) })));
    if (!tooltip) {
        return actionButton;
    }
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.Tooltip, Object.assign({ label: tooltip, position: tooltipPosition }, { children: actionButton })));
});
//# sourceMappingURL=ActionButton.js.map