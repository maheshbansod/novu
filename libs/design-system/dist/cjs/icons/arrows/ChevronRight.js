"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronRight = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable max-len */
const core_1 = require("@mantine/core");
const config_1 = require("../../config");
const ChevronRight = () => {
    const theme = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "7", height: "12", viewBox: "0 0 7 12", fill: "none" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.66016 1.28223C1.09766 0.719727 0.160156 1.12598 0.160156 1.87598L0.160156 10.1572C0.160156 10.9072 1.09766 11.3135 1.66016 10.751L5.91016 6.62598C6.09766 6.46973 6.16016 6.25098 6.16016 6.00098C6.16016 5.78223 6.09766 5.56348 5.91016 5.40723L1.66016 1.28223Z", fill: theme.colorScheme === 'light' ? config_1.colors.B60 : 'white' }) })));
};
exports.ChevronRight = ChevronRight;
//# sourceMappingURL=ChevronRight.js.map