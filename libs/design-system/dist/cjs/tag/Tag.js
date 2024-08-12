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
exports.Tag = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const config_1 = require("../config");
/**
 * Tag Component
 *
 */
function Tag(_a) {
    var { children, color, border } = _a, props = __rest(_a, ["children", "color", "border"]);
    return ((0, jsx_runtime_1.jsx)(core_1.Badge, Object.assign({ sx: (theme) => ({
            color: theme.colorScheme === 'dark' ? theme.white : config_1.colors.B40,
            border: `1px solid ${config_1.colors.B30}`,
            borderRadius: '5px',
            textTransform: 'none',
            backgroundColor: 'transparent',
            height: '30px',
            padding: '10px',
            fontSize: '14px',
            fontWeight: 400,
        }), variant: "outline", size: "md", radius: "xs" }, props, { children: children })));
}
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map