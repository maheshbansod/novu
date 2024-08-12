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
import { Radio as MantineRadio } from '@mantine/core';
import useStyles from './Radio.styles';
/**
 * Checkbox Component
 *
 */
export function Radio(_a) {
    var { value, onChange, disabled = false, checked, children, size = 'md' } = _a, props = __rest(_a, ["value", "onChange", "disabled", "checked", "children", "size"]);
    const { classes } = useStyles();
    return (_jsx(MantineRadio, Object.assign({ value: value, onChange: onChange, checked: checked, classNames: classes, disabled: disabled, size: size }, props, { children: children })));
}
//# sourceMappingURL=Radio.js.map