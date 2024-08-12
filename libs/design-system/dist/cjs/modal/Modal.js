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
exports.Modal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const Modal_styles_1 = __importDefault(require("./Modal.styles"));
const config_1 = require("../config");
function Modal(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { classes, theme } = (0, Modal_styles_1.default)();
    const defaultDesign = {
        radius: 'md',
        size: 'lg',
        overlayOpacity: 0.7,
        overlayColor: theme.colorScheme === 'dark' ? config_1.colors.BGDark : config_1.colors.BGLight,
        shadow: theme.colorScheme === 'dark' ? config_1.shadows.dark : config_1.shadows.medium,
        classNames: classes,
    };
    return ((0, jsx_runtime_1.jsx)(core_1.Modal, Object.assign({}, defaultDesign, props, { sx: { backdropFilter: 'blur(10px)' } }, { children: children })));
}
exports.Modal = Modal;
//# sourceMappingURL=Modal.js.map