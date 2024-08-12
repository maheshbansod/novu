"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChevronUp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const config_1 = require("../../config");
/* eslint-disable */
const ChevronUp = () => {
    const theme = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsx)("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "12", height: "6", viewBox: "0 0 12 6", fill: "none" }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.44141 4.5C0.878906 5.0625 1.28516 6 2.03516 6L10.3164 6C11.0664 6 11.4727 5.0625 10.9102 4.5L6.78516 0.25C6.62891 0.0625 6.41016 0 6.16016 0C5.94141 0 5.72266 0.0625 5.56641 0.25L1.44141 4.5Z", fill: theme.colorScheme === 'light' ? config_1.colors.B60 : 'white' }) })));
};
exports.ChevronUp = ChevronUp;
//# sourceMappingURL=ChevronUp.js.map