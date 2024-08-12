"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const react_1 = __importDefault(require("react"));
const Tabs_styles_1 = require("./Tabs.styles");
const config_1 = require("../config");
exports.Tabs = react_1.default.forwardRef(({ menuTabs, value, defaultValue, onTabChange, orientation = 'horizontal', withIcon = false, loading = false, keepMounted = true, }, ref) => {
    const { classes, theme } = (0, Tabs_styles_1.useTabsStyles)(withIcon);
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { position: 'relative', minHeight: 'inherit' } }, { children: [(0, jsx_runtime_1.jsx)(core_1.LoadingOverlay, { visible: loading, overlayColor: theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B98, loaderProps: {
                    color: config_1.colors.error,
                } }), (0, jsx_runtime_1.jsxs)(core_1.Tabs, Object.assign({ orientation: orientation, ref: ref, value: value, defaultValue: defaultValue, onTabChange: onTabChange, variant: "default", classNames: classes, keepMounted: keepMounted }, { children: [(0, jsx_runtime_1.jsx)(core_1.Tabs.List, { children: menuTabs.map((menuTab, i) => withIcon ? ((0, jsx_runtime_1.jsx)(core_1.Tabs.Tab, Object.assign({ mb: 0, value: menuTab.value }, { children: (0, jsx_runtime_1.jsxs)(core_1.Group, Object.assign({ spacing: 8 }, { children: [menuTab.icon, " ", (0, jsx_runtime_1.jsx)("span", { children: menuTab.value })] })) }), i)) : ((0, jsx_runtime_1.jsx)(core_1.Tabs.Tab, Object.assign({ value: menuTab.value }, { children: menuTab.value }), i))) }), menuTabs.map((menuTab, i) => ((0, jsx_runtime_1.jsx)(core_1.Tabs.Panel, Object.assign({ value: menuTab.value }, { children: menuTab.content }), i)))] }))] })));
});
//# sourceMappingURL=Tabs.js.map