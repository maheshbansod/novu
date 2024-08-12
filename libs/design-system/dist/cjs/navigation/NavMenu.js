"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("@mantine/core");
const NavMenu_styles_1 = __importDefault(require("./NavMenu.styles"));
const NavLinkPopover_styles_1 = __importDefault(require("./NavLinkPopover.styles"));
/**
 * @deprecated
 */
function NavMenu({ menuItems }) {
    return ((0, jsx_runtime_1.jsx)("div", { children: menuItems
            .filter(({ condition = true }) => condition)
            .map(({ icon, link, label, testId, rightSide, tooltipLabel }) => {
            return ((0, jsx_runtime_1.jsx)(NavLink, { link: link, icon: icon, label: label, tooltipLabel: tooltipLabel, rightSide: rightSide, testId: testId }, link));
        }) }));
}
exports.NavMenu = NavMenu;
const NavLink = ({ rightSide, link, testId, icon, label, tooltipLabel }) => {
    const [popoverOpened, setPopoverOpened] = (0, react_1.useState)(false);
    const [isHovered, setIsHovered] = (0, react_1.useState)(false);
    const { classes } = (0, NavMenu_styles_1.default)();
    const onHoverEnabled = (rightSide === null || rightSide === void 0 ? void 0 : rightSide.displayOnHover) || false;
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ to: link, className: ({ isActive }) => (isActive ? classes.linkActive : classes.link), "data-test-id": testId, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false) }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(core_1.Group, Object.assign({ spacing: 10 }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.linkIcon }, { children: icon })), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.linkLabel }, { children: label }))] })), !onHoverEnabled && rightSide, onHoverEnabled && ((0, jsx_runtime_1.jsx)(RightSide, { child: rightSide, isHover: isHovered, tooltipLabel: tooltipLabel, popoverOpened: popoverOpened, setPopoverOpened: setPopoverOpened }))] }) })));
};
const RightSide = ({ child, isHover, tooltipLabel, popoverOpened, setPopoverOpened, }) => {
    const { classes } = (0, NavLinkPopover_styles_1.default)();
    const component = (child === null || child === void 0 ? void 0 : child.component) || null;
    return ((0, jsx_runtime_1.jsx)(core_1.Transition, Object.assign({ mounted: isHover, transition: "fade", duration: 400, timingFunction: "ease" }, { children: (styles) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ onMouseEnter: () => setPopoverOpened(true), onMouseLeave: () => setPopoverOpened(false) }, { children: (0, jsx_runtime_1.jsxs)(core_1.Popover, Object.assign({ opened: popoverOpened, onClose: () => setPopoverOpened(false), classNames: classes, withArrow: true, withinPortal: true, transitionDuration: 250, position: "top", radius: "md" }, { children: [(0, jsx_runtime_1.jsx)(core_1.Popover.Target, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: styles }, { children: component })) }), (0, jsx_runtime_1.jsx)(core_1.Popover.Dropdown, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ style: { maxWidth: '190px' } }, { children: tooltipLabel })) })] })) }))) })));
};
//# sourceMappingURL=NavMenu.js.map