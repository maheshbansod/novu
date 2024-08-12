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
import { ColorInput as MantineColorInput } from '@mantine/core';
import { inputStyles } from '../config/inputs.styles';
const defaultSwatchColors = [
    '#f47373',
    '#D9E3F0',
    '#697689',
    '#37D67A',
    '#2CCCE4',
    '#DCE775',
    '#FF8A65',
    '#BA68C8',
    '#555555',
];
/**
 * ColorPicker component
 *
 */
export const ColorInput = React.forwardRef((_a, ref) => {
    var { value, onChange } = _a, props = __rest(_a, ["value", "onChange"]);
    const defaultDesign = { radius: 'md', size: 'md', disallowInput: true, styles: inputStyles };
    return (_jsx(MantineColorInput, Object.assign({ ref: ref, swatches: defaultSwatchColors }, defaultDesign, { onChange: onChange, value: value }, props)));
});
//# sourceMappingURL=ColorInput.js.map