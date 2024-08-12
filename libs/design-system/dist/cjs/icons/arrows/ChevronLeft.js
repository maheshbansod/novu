"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronLeft = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable max-len */
const core_1 = require("@mantine/core");
const config_1 = require("../../config");
const ChevronLeft = () => {
    const theme = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "7", height: "12", viewBox: "0 0 7 12", fill: "none" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M4.66016 10.7188C5.22266 11.2812 6.16016 10.875 6.16016 10.125V1.84375C6.16016 1.09375 5.22266 0.6875 4.66016 1.25L0.410156 5.375C0.222656 5.53125 0.160156 5.75 0.160156 6C0.160156 6.21875 0.222656 6.4375 0.410156 6.59375L4.66016 10.7188Z", fill: theme.colorScheme === 'light' ? config_1.colors.B60 : 'white' }) })));
};
exports.ChevronLeft = ChevronLeft;
//# sourceMappingURL=ChevronLeft.js.map