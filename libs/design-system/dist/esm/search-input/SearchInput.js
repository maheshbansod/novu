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
import { forwardRef } from 'react';
import { Input } from '@mantine/core';
import styled from '@emotion/styled';
import { IconClose, IconSearch } from '../iconsV2';
import { colors } from '../config';
const StyledInput = styled(Input) `
  max-width: 15rem;

  .mantine-Input-input {
    border: none;
    background-color: transparent;
    font-size: 0.875rem;

    &::placeholder {
      color: ${colors.B40};
    }
  }

  .mantine-Input-icon:has(~ input:disabled) {
    opacity: 0.6;
  }
`;
const IconCloseStyled = styled(IconClose) `
  cursor: pointer;
`;
export const SearchInput = forwardRef((_a, ref) => {
    var { value, onClearClick } = _a, restSearchInputProps = __rest(_a, ["value", "onClearClick"]);
    return (_jsx(StyledInput, Object.assign({}, restSearchInputProps, { ref: ref, value: value, icon: _jsx(IconSearch, { title: "search" }), rightSection: !!value && (_jsx(IconCloseStyled, { title: "clear", onClick: onClearClick, "data-test-id": "search-input-clear", role: "button" })) })));
});
//# sourceMappingURL=SearchInput.js.map