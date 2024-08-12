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
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const css_1 = require("@emotion/css");
const core_1 = require("@mantine/core");
const Tooltip_styles_1 = __importDefault(require("./Tooltip.styles"));
/**
 * Tooltip component
 *
 */
function Tooltip(_a) {
    var { children, label, opened = undefined, error = false, arrowSize = 3.5, classNames } = _a, props = __rest(_a, ["children", "label", "opened", "error", "arrowSize", "classNames"]);
    const { classes } = (0, Tooltip_styles_1.default)({ error });
    return ((0, jsx_runtime_1.jsx)(core_1.Tooltip, Object.assign({ transition: "fade", transitionDuration: 300, opened: opened, 
        // merge base classes with caller-supplied ones
        classNames: {
            tooltip: (0, css_1.cx)(classes.tooltip, classNames === null || classNames === void 0 ? void 0 : classNames.tooltip),
            arrow: (0, css_1.cx)(classes.arrow, classNames === null || classNames === void 0 ? void 0 : classNames.arrow),
        }, withArrow: true, arrowSize: arrowSize, radius: "md", label: label }, props, { children: children })));
}
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map