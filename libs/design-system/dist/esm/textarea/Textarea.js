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
import { Textarea as MantineTextarea } from '@mantine/core';
import { textareaStyles } from './textarea.styles';
/**
 * Textarea component
 *
 */
export const Textarea = React.forwardRef((_a, ref) => {
    var { value, onChange, disabled = false } = _a, props = __rest(_a, ["value", "onChange", "disabled"]);
    return (_jsx(MantineTextarea, Object.assign({ ref: ref, styles: textareaStyles, onChange: onChange, autoComplete: "off", disabled: disabled, value: value }, props)));
});
//# sourceMappingURL=Textarea.js.map