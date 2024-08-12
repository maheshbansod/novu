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
import { cx } from '@emotion/css';
import { Tooltip as MantineTooltip } from '@mantine/core';
import useStyles from './Tooltip.styles';
/**
 * Tooltip component
 *
 */
export function Tooltip(_a) {
    var { children, label, opened = undefined, error = false, arrowSize = 3.5, classNames } = _a, props = __rest(_a, ["children", "label", "opened", "error", "arrowSize", "classNames"]);
    const { classes } = useStyles({ error });
    return (_jsx(MantineTooltip, Object.assign({ transition: "fade", transitionDuration: 300, opened: opened, 
        // merge base classes with caller-supplied ones
        classNames: {
            tooltip: cx(classes.tooltip, classNames === null || classNames === void 0 ? void 0 : classNames.tooltip),
            arrow: cx(classes.arrow, classNames === null || classNames === void 0 ? void 0 : classNames.arrow),
        }, withArrow: true, arrowSize: arrowSize, radius: "md", label: label }, props, { children: children })));
}
//# sourceMappingURL=Tooltip.js.map