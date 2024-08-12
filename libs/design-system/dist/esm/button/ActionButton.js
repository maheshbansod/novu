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
import React from 'react';
import { ActionIcon, Center } from '@mantine/core';
import { Tooltip } from '../tooltip/Tooltip';
import { Text } from '../typography/text/Text';
import { colors } from '../config';
export const ActionButton = React.forwardRef((_a, ref) => {
    var { tooltip, tooltipPosition, text, Icon, style, color, sx, onClick } = _a, rest = __rest(_a, ["tooltip", "tooltipPosition", "text", "Icon", "style", "color", "sx", "onClick"]);
    const pickedColor = color !== null && color !== void 0 ? color : colors.B60;
    const actionButton = (_jsx(ActionIcon, Object.assign({ ref: ref, sx: (theme) => (Object.assign({ minWidth: 28, width: 'initial', padding: '0 4px', border: 'none', '&:hover': {
                background: theme.colorScheme === 'dark' ? colors.B30 : colors.B98,
                borderRadius: '8px',
                '> svg': {
                    color: theme.colorScheme === 'dark' ? colors.white : colors.B60,
                },
            } }, sx)), onClick: onClick, style: style }, rest, { children: text ? (_jsxs(Center, Object.assign({ inline: true }, { children: [_jsx(Icon, { color: pickedColor, width: "20px", height: "20px" }), _jsx(Text, Object.assign({ color: pickedColor, weight: 'bold', ml: 4, size: 14 }, { children: text }))] }))) : (_jsx(Icon, { color: pickedColor, width: "20px", height: "20px" })) })));
    if (!tooltip) {
        return actionButton;
    }
    return (_jsx(Tooltip, Object.assign({ label: tooltip, position: tooltipPosition }, { children: actionButton })));
});
//# sourceMappingURL=ActionButton.js.map