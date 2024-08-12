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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { token } from '../../styled-system/tokens';
import { hstack } from '../../styled-system/patterns';
import { Title } from '../components';
import { IconExpandLess, IconExpandMore } from '../icons';
import { cva, cx } from '../../styled-system/css';
export const FormGroupTitle = (_a) => {
    var { children } = _a, titleProps = __rest(_a, ["children"]);
    return (_jsx(Title, Object.assign({ variant: "subsection", color: "typography.text.secondary" }, titleProps, { children: children })));
};
const toggleButtonRecipe = cva({
    base: {
        gap: 'margins.icons.Icon20-txt',
        cursor: 'pointer',
        _disabled: {
            cursor: 'default',
        },
        '&:hover:not(:disabled)': {
            opacity: 'hover',
        },
    },
    variants: {
        isExpanded: {
            true: { marginBottom: '100' },
            false: {},
        },
    },
});
export const SectionTitleToggle = (_a) => {
    var { onToggle, isExpanded, sectionDepth, sectionTitle } = _a, buttonProps = __rest(_a, ["onToggle", "isExpanded", "sectionDepth", "sectionTitle"]);
    const handleToggle = (event) => {
        event.preventDefault();
        onToggle();
    };
    const shouldShowToggle = sectionDepth > 0;
    if (!sectionTitle && !shouldShowToggle) {
        return null;
    }
    return (_jsx("button", Object.assign({ onClick: handleToggle, disabled: !shouldShowToggle, className: cx(hstack(), toggleButtonRecipe({ isExpanded: isExpanded || !shouldShowToggle })) }, buttonProps, { children: !shouldShowToggle ? (sectionTitle) : (_jsxs(_Fragment, { children: [isExpanded ? (_jsx(IconExpandLess, { title: "expand-less-section-icon", color: token('colors.typography.text.main') })) : (_jsx(IconExpandMore, { title: "expand-more-section-icon" })), sectionTitle] })) })));
};
//# sourceMappingURL=shared.js.map