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
import styled from '@emotion/styled';
import { PasswordInput as MantinePasswordInput } from '@mantine/core';
import { colors } from '../config';
import { inputStyles } from '../config/inputs.styles';
/**
 * Password Input component
 *
 */
export const PasswordInput = React.forwardRef((_a, ref) => {
    var { value, onChange } = _a, props = __rest(_a, ["value", "onChange"]);
    const defaultDesign = { radius: 'md', size: 'md', styles: inputStyles };
    return (_jsx(StyledPassword, Object.assign({ ref: ref }, defaultDesign, { onChange: onChange, autoComplete: "off", value: value }, props, { toggleTabIndex: 0 })));
});
const StyledPassword = styled(MantinePasswordInput) `
  button {
    color: ${colors.B40};
    margin-right: 10px;
  }

  input {
    height: 100%;
  }
`;
//# sourceMappingURL=PasswordInput.js.map