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
import { css, cx } from '../../../styled-system/css';
import { Button, IconButton } from '../../components';
import { IconAdd, IconArrowDownward, IconArrowUpward, IconOutlineDeleteOutline } from '../../icons/icon-registry';
export function RemoveButton(props) {
    return _jsx(IconButton, Object.assign({}, props, { Icon: IconOutlineDeleteOutline, title: "remove" }));
}
export function MoveUpButton(props) {
    return _jsx(IconButton, Object.assign({}, props, { Icon: IconArrowUpward, title: "move-up" }));
}
export function MoveDownButton(props) {
    return _jsx(IconButton, Object.assign({}, props, { Icon: IconArrowDownward, title: "move-down" }));
}
export function AddButton(_a) {
    var { className } = _a, props = __rest(_a, ["className"]);
    return (_jsx(Button, Object.assign({}, props, { variant: 'transparent', size: "md", Icon: IconAdd, className: cx(css({
            '& span': {
                color: 'typography.text.main',
                WebkitTextFillColor: 'unset',
            },
        }), className) }, { children: "Add item" })));
}
//# sourceMappingURL=IconButton.js.map