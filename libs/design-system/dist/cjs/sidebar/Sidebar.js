"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const useKeyDown_1 = require("../hooks/useKeyDown");
const ActionButton_1 = require("../button/ActionButton");
const config_1 = require("../config");
const icons_1 = require("../icons");
const when_1 = require("../when");
const Close_1 = require("./Close");
const Sidebar_styles_1 = require("./Sidebar.styles");
const Sidebar = ({ customFooter, customHeader, children, isOpened, isExpanded = false, isLoading = false, isParentScrollable = false, styles, navigationWidth, 'data-test-id': dataTestId, onClose, onBack, onSubmit, }) => {
    const { classes: drawerClasses } = (0, Sidebar_styles_1.useDrawerStyles)({ isExpanded, navigationWidth });
    const onCloseCallback = () => {
        onClose();
    };
    (0, useKeyDown_1.useKeyDown)('Escape', onCloseCallback);
    return ((0, jsx_runtime_1.jsx)(core_1.Drawer, Object.assign({ opened: isOpened, position: "right", styles: styles, classNames: drawerClasses, onClose: onCloseCallback, withOverlay: false, withCloseButton: false, closeOnEscape: false, withinPortal: true, trapFocus: false, "data-expanded": isExpanded }, { children: (0, jsx_runtime_1.jsxs)(Sidebar_styles_1.Form, Object.assign({ name: "form-name", noValidate: true, onSubmit: onSubmit, "data-test-id": dataTestId, isParentScrollable: isParentScrollable, onClick: (e) => {
                e.stopPropagation();
            } }, { children: [(0, jsx_runtime_1.jsxs)(Sidebar_styles_1.HeaderHolder, Object.assign({ className: "sidebar-header-holder" }, { children: [isExpanded && onBack && ((0, jsx_runtime_1.jsx)(ActionButton_1.ActionButton, { onClick: onBack, Icon: icons_1.ArrowLeft, "data-test-id": "sidebar-back", sx: {
                                '> svg': {
                                    width: 16,
                                    height: 16,
                                },
                            } })), customHeader, (0, jsx_runtime_1.jsx)(ActionButton_1.ActionButton, { onClick: onCloseCallback, Icon: Close_1.Close, sx: {
                                marginLeft: 'auto',
                                '> svg': {
                                    width: 14,
                                    height: 14,
                                },
                            }, "data-test-id": "sidebar-close" })] })), (0, jsx_runtime_1.jsxs)(Sidebar_styles_1.BodyHolder, Object.assign({ isParentScrollable: isParentScrollable, className: "sidebar-body-holder" }, { children: [(0, jsx_runtime_1.jsx)(when_1.When, Object.assign({ truthy: isLoading }, { children: (0, jsx_runtime_1.jsx)(core_1.Stack, Object.assign({ align: "center", justify: "center", sx: {
                                    height: '100%',
                                } }, { children: (0, jsx_runtime_1.jsx)(core_1.Loader, { color: config_1.colors.error, size: 32 }) })) })), (0, jsx_runtime_1.jsx)(when_1.When, Object.assign({ truthy: !isLoading }, { children: children }))] })), customFooter && (0, jsx_runtime_1.jsx)(Sidebar_styles_1.FooterHolder, Object.assign({ className: "sidebar-footer-holder" }, { children: customFooter }))] })) })));
};
exports.Sidebar = Sidebar;
//# sourceMappingURL=Sidebar.js.map