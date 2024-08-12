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
import { jsx as _jsx } from "react/jsx-runtime";
import { Loader, Select as ExternalSelect } from '@mantine/core';
import { forwardRef } from 'react';
import { IconArrowDropDown } from '../../icons';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { select } from '../../../styled-system/recipes';
import { token } from '../../../styled-system/tokens';
export const Select = forwardRef((props, ref) => {
    const [variantProps, selectProps] = select.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(selectProps);
    const { onChange, className, icon, loading } = localProps, otherProps = __rest(localProps, ["onChange", "className", "icon", "loading"]);
    const selectClassNames = select(variantProps);
    const rightSection = loading ? (
    // TODO: replace with our own loader
    _jsx(Loader, { color: token('colors.icon.main'), size: '24' })) : (icon !== null && icon !== void 0 ? icon : _jsx(IconArrowDropDown, { title: "select-dropdown-icon", size: "32" }));
    return (_jsx(ExternalSelect, Object.assign({ ref: ref, onChange: (event) => onChange === null || onChange === void 0 ? void 0 : onChange(event), autoComplete: "off", rightSection: rightSection, rightSectionWidth: "auto", classNames: selectClassNames, className: cx(css(cssProps), className) }, otherProps)));
});
//# sourceMappingURL=Select.js.map