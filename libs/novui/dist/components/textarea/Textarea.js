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
import { Textarea as ExternalTextarea } from '@mantine/core';
import { forwardRef } from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { input } from '../../../styled-system/recipes';
export const Textarea = forwardRef((props, ref) => {
    const [variantProps, inputProps] = input.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(inputProps);
    const { onChange, className } = localProps, otherProps = __rest(localProps, ["onChange", "className"]);
    const styles = input(variantProps);
    return (_jsx(ExternalTextarea, Object.assign({ ref: ref, onChange: (event) => onChange === null || onChange === void 0 ? void 0 : onChange(event), autoComplete: "off", classNames: styles, className: cx(css(cssProps), className), minRows: 1, maxRows: 4, autosize: true }, otherProps)));
});
//# sourceMappingURL=Textarea.js.map