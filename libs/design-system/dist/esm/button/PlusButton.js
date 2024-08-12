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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Button } from './Button';
import { Text } from '../typography/text/Text';
import { PlusFilled } from '../icons';
const ButtonStyled = styled(Button) `
  padding: 0;
`;
export function PlusButton(_a) {
    var { label, isGradient = true, onClick, disabled = false } = _a, rest = __rest(_a, ["label", "isGradient", "onClick", "disabled"]);
    return (_jsxs(ButtonStyled, Object.assign({ id: "add-provider", onClick: onClick, disabled: disabled, variant: "subtle" }, rest, { children: [_jsx(PlusFilled, { width: 24, height: 24 }), _jsx(Text, Object.assign({ gradient: isGradient }, { children: label }))] })));
}
//# sourceMappingURL=PlusButton.js.map