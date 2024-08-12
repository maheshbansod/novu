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
import { Popover as MantinePopover, useMantineTheme } from '@mantine/core';
import { colors, shadows } from '../config';
import { Label } from '../typography/label';
const DescriptionHolder = styled.div `
  max-width: 220px;
`;
export const Popover = (_a) => {
    var _b;
    var { target, content, title, titleGradient = 'none', description, url, urlText, onUrlClick, className, opacity, onDropdownMouseEnter, onDropdownMouseLeave } = _a, rest = __rest(_a, ["target", "content", "title", "titleGradient", "description", "url", "urlText", "onUrlClick", "className", "opacity", "onDropdownMouseEnter", "onDropdownMouseLeave"]);
    const { colorScheme } = useMantineTheme();
    return (_jsxs(MantinePopover, Object.assign({ withArrow: true, position: "right", radius: "md", shadow: colorScheme === 'dark' ? shadows.dark : shadows.medium, offset: 30, middlewares: { flip: false, shift: false } }, rest, { children: [_jsx(MantinePopover.Target, { children: target }), _jsxs(MantinePopover.Dropdown, Object.assign({ className: className, onMouseEnter: onDropdownMouseEnter, onMouseLeave: onDropdownMouseLeave, onClick: (e) => e.stopPropagation(), style: {
                    minHeight: '100px',
                    padding: '16px',
                    backgroundColor: colorScheme === 'dark' ? colors.B17 : colors.white,
                }, sx: { opacity: (_b = `${opacity} !important`) !== null && _b !== void 0 ? _b : 1 } }, { children: [title && (_jsx(Label, Object.assign({ gradientColor: titleGradient, style: { marginBottom: '8px' } }, { children: title }))), _jsxs(DescriptionHolder, Object.assign({ className: "popover-description-holder" }, { children: [description && (_jsx("span", Object.assign({ style: { color: colorScheme === 'dark' ? colors.white : colors.B60, lineHeight: 1.5 } }, { children: description }))), url && (_jsx("a", Object.assign({ href: url, style: { color: '#DD2476', textDecoration: 'underline' }, onClick: onUrlClick, target: "_blank", rel: "noreferrer" }, { children: urlText !== null && urlText !== void 0 ? urlText : 'Learn More' })))] })), content] }))] })));
};
//# sourceMappingURL=Popover.js.map