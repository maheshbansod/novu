import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { LoadingOverlay, Tabs as MantineTabs, Group } from '@mantine/core';
import React from 'react';
import { useTabsStyles } from './Tabs.styles';
import { colors } from '../config';
export const Tabs = React.forwardRef(({ menuTabs, value, defaultValue, onTabChange, orientation = 'horizontal', withIcon = false, loading = false, keepMounted = true, }, ref) => {
    const { classes, theme } = useTabsStyles(withIcon);
    return (_jsxs("div", Object.assign({ style: { position: 'relative', minHeight: 'inherit' } }, { children: [_jsx(LoadingOverlay, { visible: loading, overlayColor: theme.colorScheme === 'dark' ? colors.B30 : colors.B98, loaderProps: {
                    color: colors.error,
                } }), _jsxs(MantineTabs, Object.assign({ orientation: orientation, ref: ref, value: value, defaultValue: defaultValue, onTabChange: onTabChange, variant: "default", classNames: classes, keepMounted: keepMounted }, { children: [_jsx(MantineTabs.List, { children: menuTabs.map((menuTab, i) => withIcon ? (_jsx(MantineTabs.Tab, Object.assign({ mb: 0, value: menuTab.value }, { children: _jsxs(Group, Object.assign({ spacing: 8 }, { children: [menuTab.icon, " ", _jsx("span", { children: menuTab.value })] })) }), i)) : (_jsx(MantineTabs.Tab, Object.assign({ value: menuTab.value }, { children: menuTab.value }), i))) }), menuTabs.map((menuTab, i) => (_jsx(MantineTabs.Panel, Object.assign({ value: menuTab.value }, { children: menuTab.content }), i)))] }))] })));
});
//# sourceMappingURL=Tabs.js.map