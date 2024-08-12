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
import { TextInput as MantineTextInput } from '@mantine/core';
import { inputStyles } from '../config/inputs.styles';
/**
 * Input component
 *
 */
export const Input = React.forwardRef((_a, ref) => {
    var { value, rightSection, rightSectionWidth, onChange, readOnly = false, disabled = false, type } = _a, props = __rest(_a, ["value", "rightSection", "rightSectionWidth", "onChange", "readOnly", "disabled", "type"]);
    const defaultDesign = { radius: 'md', size: 'md', styles: inputStyles, type: 'text' };
    return (_jsx(MantineTextInput, Object.assign({ ref: ref }, (rightSection ? { rightSection, rightSectionWidth: rightSectionWidth !== null && rightSectionWidth !== void 0 ? rightSectionWidth : 50 } : {}), defaultDesign, { onChange: onChange, autoComplete: "off", readOnly: readOnly, disabled: disabled, value: value, type: type }, props)));
});
//# sourceMappingURL=Input.js.map