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
import { Button as ExternalButton } from '@mantine/core';
import React from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { button } from '../../../styled-system/recipes';
import { BUTTON_SIZE_TO_EXTERNAL_BUTTON_SIZE, BUTTON_SIZE_TO_ICON_SIZE, BUTTON_VARIANT_TO_EXTERNAL_BUTTON_VARIANT, DEFAULT_SIZE, DEFAULT_VARIANT, } from './Button.const';
export const Button = React.forwardRef((_a, ref) => {
    var { variant = DEFAULT_VARIANT, size = DEFAULT_SIZE } = _a, props = __rest(_a, ["variant", "size"]);
    const [variantProps, buttonProps] = button.splitVariantProps(Object.assign(Object.assign({}, props), { variant, size }));
    const [cssProps, localProps] = splitCssProps(buttonProps);
    const { className, as, Icon, children } = localProps, otherProps = __rest(localProps, ["className", "as", "Icon", "children"]);
    const styles = button(variantProps);
    return (_jsx(ExternalButton, Object.assign({ ref: ref, component: as !== null && as !== void 0 ? as : 'button', size: BUTTON_SIZE_TO_EXTERNAL_BUTTON_SIZE[size], variant: BUTTON_VARIANT_TO_EXTERNAL_BUTTON_VARIANT[variant], leftSection: Icon ? (_jsx(Icon, { title: "button-icon", size: variant === 'transparent' ? '20' : BUTTON_SIZE_TO_ICON_SIZE[size] })) : undefined, classNames: styles, className: cx(css(cssProps), className), fullWidth: Boolean(variantProps.fullWidth) }, otherProps, { children: children })));
});
//# sourceMappingURL=Button.js.map