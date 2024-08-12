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
import { ActionIcon } from '@mantine/core';
import React from 'react';
import { css, cx } from '../../../styled-system/css';
import { button } from '../../../styled-system/recipes';
import { token } from '../../../styled-system/tokens';
import { splitCssProps } from '../../../styled-system/jsx';
import { BUTTON_SIZE_TO_ICON_SIZE, DEFAULT_SIZE } from './Button.const';
const DEFAULT_VARIANT = 'transparent';
/**
 * A button with only an Icon.
 *
 * TODO: there are not specifications for these in the Design System, so this just follows the Button recipe.
 */
export const IconButton = React.forwardRef((_a, ref) => {
    var _b;
    var { variant = DEFAULT_VARIANT } = _a, props = __rest(_a, ["variant"]);
    const [variantProps, buttonProps] = button.splitVariantProps(Object.assign(Object.assign({}, props), { variant }));
    const [cssProps, localProps] = splitCssProps(buttonProps);
    const { className, as, loading, Icon } = localProps, otherProps = __rest(localProps, ["className", "as", "loading", "Icon"]);
    const styles = button(variantProps);
    return (_jsx(ActionIcon, Object.assign({ ref: ref, component: as !== null && as !== void 0 ? as : 'button', classNames: styles, className: cx(css(cssProps), className), variant: variantProps.variant, loading: loading }, otherProps, { children: _jsx(Icon, { title: props.title || 'action-icon', color: variant === 'filled' ? token('colors.button.icon.filled') : undefined, size: BUTTON_SIZE_TO_ICON_SIZE[(_b = variantProps.size) !== null && _b !== void 0 ? _b : DEFAULT_SIZE] }) })));
});
//# sourceMappingURL=IconButton.js.map