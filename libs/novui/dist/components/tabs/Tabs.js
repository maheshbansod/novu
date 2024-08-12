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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs as ExternalTabs } from '@mantine/core';
import { forwardRef } from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { tabs } from '../../../styled-system/recipes';
export const Tabs = forwardRef((props, ref) => {
    const [variantProps, tabsProps] = tabs.splitVariantProps(Object.assign({}, props));
    const [cssProps, localProps] = splitCssProps(tabsProps);
    const { onTabChange, className, tabConfigs } = localProps, otherProps = __rest(localProps, ["onTabChange", "className", "tabConfigs"]);
    const styles = tabs(variantProps);
    return (_jsxs(ExternalTabs, Object.assign({ ref: ref, onChange: (newTab) => onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(newTab), orientation: "horizontal", variant: "default", classNames: styles, className: cx(css(cssProps), className) }, otherProps, { children: [_jsx(ExternalTabs.List, { children: tabConfigs.map((menuTab, i) => (_jsx(ExternalTabs.Tab, Object.assign({ value: menuTab.value, leftSection: menuTab.icon }, { children: menuTab.label }), `tab-${menuTab.value}`))) }), tabConfigs.map((menuTab, i) => (_jsx(ExternalTabs.Panel, Object.assign({ value: menuTab.value }, { children: menuTab.content }), `tab-panel-${menuTab.value}`)))] })));
});
//# sourceMappingURL=Tabs.js.map