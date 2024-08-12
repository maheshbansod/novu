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
import { Modal as MantineModal } from '@mantine/core';
import useStyles from './Modal.styles';
import { colors, shadows } from '../config';
export function Modal(_a) {
    var { children } = _a, props = __rest(_a, ["children"]);
    const { classes, theme } = useStyles();
    const defaultDesign = {
        radius: 'md',
        size: 'lg',
        overlayOpacity: 0.7,
        overlayColor: theme.colorScheme === 'dark' ? colors.BGDark : colors.BGLight,
        shadow: theme.colorScheme === 'dark' ? shadows.dark : shadows.medium,
        classNames: classes,
    };
    return (_jsx(MantineModal, Object.assign({}, defaultDesign, props, { sx: { backdropFilter: 'blur(10px)' } }, { children: children })));
}
//# sourceMappingURL=Modal.js.map