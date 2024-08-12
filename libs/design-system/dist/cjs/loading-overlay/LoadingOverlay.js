"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingOverlay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const config_1 = require("../config");
function LoadingOverlay({ children, minLayoutHeight = 500, visible }) {
    const theme = (0, core_1.useMantineTheme)();
    const defaultDesign = {
        overlayColor: theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B98,
        loaderProps: { color: config_1.colors.error },
    };
    return (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { position: 'relative', minHeight: minLayoutHeight } }, { children: children }));
}
exports.LoadingOverlay = LoadingOverlay;
//# sourceMappingURL=LoadingOverlay.js.map