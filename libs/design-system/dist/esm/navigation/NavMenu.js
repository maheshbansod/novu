import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import { Group, Transition, Popover } from '@mantine/core';
import useStyles from './NavMenu.styles';
import usePopoverStyles from './NavLinkPopover.styles';
/**
 * @deprecated
 */
export function NavMenu({ menuItems }) {
    return (_jsx("div", { children: menuItems
            .filter(({ condition = true }) => condition)
            .map(({ icon, link, label, testId, rightSide, tooltipLabel }) => {
            return (_jsx(NavLink, { link: link, icon: icon, label: label, tooltipLabel: tooltipLabel, rightSide: rightSide, testId: testId }, link));
        }) }));
}
const NavLink = ({ rightSide, link, testId, icon, label, tooltipLabel }) => {
    const [popoverOpened, setPopoverOpened] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { classes } = useStyles();
    const onHoverEnabled = (rightSide === null || rightSide === void 0 ? void 0 : rightSide.displayOnHover) || false;
    return (_jsx(ReactNavLink, Object.assign({ to: link, className: ({ isActive }) => (isActive ? classes.linkActive : classes.link), "data-test-id": testId, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, { children: _jsxs(_Fragment, { children: [_jsxs(Group, Object.assign({ spacing: 10 }, { children: [_jsx("div", Object.assign({ className: classes.linkIcon }, { children: icon })), _jsx("div", Object.assign({ className: classes.linkLabel }, { children: label }))] })), !onHoverEnabled && rightSide, onHoverEnabled && (_jsx(RightSide, { child: rightSide, isHover: isHovered, tooltipLabel: tooltipLabel, popoverOpened: popoverOpened, setPopoverOpened: setPopoverOpened }))] }) })));
};
const RightSide = ({ child, isHover, tooltipLabel, popoverOpened, setPopoverOpened, }) => {
    const { classes } = usePopoverStyles();
    const component = (child === null || child === void 0 ? void 0 : child.component) || null;
    return (_jsx(Transition, Object.assign({ mounted: isHover, transition: "fade", duration: 400, timingFunction: "ease" }, { children: (styles) => (_jsx("div", Object.assign({ onMouseEnter: () => setPopoverOpened(true), onMouseLeave: () => setPopoverOpened(false) }, { children: _jsxs(Popover, Object.assign({ opened: popoverOpened, onClose: () => setPopoverOpened(false), classNames: classes, withArrow: true, withinPortal: true, transitionDuration: 250, position: "top", radius: "md" }, { children: [_jsx(Popover.Target, { children: _jsx("div", Object.assign({ style: styles }, { children: component })) }), _jsx(Popover.Dropdown, { children: _jsx("div", Object.assign({ style: { maxWidth: '190px' } }, { children: tooltipLabel })) })] })) }))) })));
};
//# sourceMappingURL=NavMenu.js.map