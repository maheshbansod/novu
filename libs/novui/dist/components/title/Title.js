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
import React from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { title } from '../../../styled-system/recipes';
const VARIANT_ELEMENT_LOOKUP = {
    page: 'h1',
    section: 'h2',
    subsection: 'h3',
};
const DEFAULT_VARIANT = 'page';
export const Title = React.forwardRef((props, ref) => {
    var _a;
    const [variantProps, titleProps] = title.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(titleProps);
    const { className, as } = localProps, otherProps = __rest(localProps, ["className", "as"]);
    const styles = title(variantProps);
    const Component = props.as || VARIANT_ELEMENT_LOOKUP[(_a = variantProps.variant) !== null && _a !== void 0 ? _a : DEFAULT_VARIANT];
    return _jsx(Component, Object.assign({ ref: ref, className: cx(styles, css(cssProps), className) }, otherProps));
});
//# sourceMappingURL=Title.js.map