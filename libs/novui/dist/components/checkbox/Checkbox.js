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
import { Checkbox as ExternalCheckbox } from '@mantine/core';
import { forwardRef } from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { checkbox } from '../../../styled-system/recipes';
export const Checkbox = forwardRef((_a, ref) => {
    var props = __rest(_a, []);
    const [variantProps, inputProps] = checkbox.splitVariantProps(Object.assign({}, props));
    const [cssProps, localProps] = splitCssProps(inputProps);
    const { onChange, className } = localProps, otherProps = __rest(localProps, ["onChange", "className"]);
    const classNames = checkbox(variantProps);
    return (_jsx(ExternalCheckbox, Object.assign({ ref: ref, classNames: classNames, className: cx(css(cssProps), className), onChange: onChange, size: "md" }, otherProps)));
});
//# sourceMappingURL=Checkbox.js.map