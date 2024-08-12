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
import { TextInput as ExternalTextInput } from '@mantine/core';
import { forwardRef } from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { input } from '../../../styled-system/recipes';
import { IconErrorOutline } from '../../icons';
export const DEFAULT_TEXT_INPUT_TYPE = 'text';
export const Input = forwardRef((_a, ref) => {
    var { type = DEFAULT_TEXT_INPUT_TYPE } = _a, props = __rest(_a, ["type"]);
    const [variantProps, inputProps] = input.splitVariantProps(Object.assign(Object.assign({}, props), { type }));
    const [cssProps, localProps] = splitCssProps(inputProps);
    const { onChange, className, rightSection } = localProps, otherProps = __rest(localProps, ["onChange", "className", "rightSection"]);
    const classNames = input(variantProps);
    return (_jsx(ExternalTextInput, Object.assign({ ref: ref, onChange: (event) => onChange === null || onChange === void 0 ? void 0 : onChange(event), autoComplete: "off", classNames: classNames, className: cx(css(cssProps), className), rightSection: otherProps.error ? _jsx(IconErrorOutline, { title: "input error indicator" }) : rightSection, variant: undefined }, otherProps)));
});
//# sourceMappingURL=Input.js.map