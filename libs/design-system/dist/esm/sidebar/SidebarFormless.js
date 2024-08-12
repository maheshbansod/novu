import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cx } from '@emotion/css';
import { Drawer, Loader, Stack } from '@mantine/core';
import { useKeyDown } from '../hooks/useKeyDown';
import { ActionButton } from '../button/ActionButton';
import { colors } from '../config';
import { ArrowLeft } from '../icons';
import { When } from '../when';
import { Close } from './Close';
import { BodyHolder, FooterHolder, HeaderHolder, scrollableClass, sidebarDrawerContentClassName, useDrawerStyles, } from './Sidebar.styles';
/**
 * A Sidebar component without the form element that wraps content.
 *
 * This is a temporary solution to a overloaded pattern. The Sidebar component should
 * not have an embedded form as it removes the caller from properly controlling their own form.
 * We will refactor the Sidebar later on as part of the design system work.
 *
 * https://linear.app/novu/issue/NV-3632/de-couple-the-sidebar-from-its-internal-form
 */
export const SidebarFormless = ({ customFooter, customHeader, children, isOpened, isExpanded = false, isLoading = false, isParentScrollable = false, styles, 'data-test-id': dataTestId, onClose, onBack, navigationWidth, }) => {
    const { classes: drawerClasses } = useDrawerStyles({ isExpanded, navigationWidth });
    const onCloseCallback = () => {
        onClose();
    };
    useKeyDown('Escape', onCloseCallback);
    return (_jsx(Drawer, Object.assign({ opened: isOpened, position: "right", styles: styles, classNames: drawerClasses, onClose: onCloseCallback, withOverlay: false, withCloseButton: false, closeOnEscape: false, withinPortal: true, trapFocus: false, "data-expanded": isExpanded }, { children: _jsxs("div", Object.assign({ "data-test-id": dataTestId, className: cx(sidebarDrawerContentClassName, { [scrollableClass]: isParentScrollable }) }, { children: [_jsxs(HeaderHolder, Object.assign({ className: "sidebar-header-holder" }, { children: [isExpanded && onBack && (_jsx(ActionButton, { onClick: onBack, Icon: ArrowLeft, "data-test-id": "sidebar-back", sx: {
                                '> svg': {
                                    width: 16,
                                    height: 16,
                                },
                            } })), customHeader, _jsx(ActionButton, { onClick: onCloseCallback, Icon: Close, sx: {
                                marginLeft: 'auto',
                                '> svg': {
                                    width: 14,
                                    height: 14,
                                },
                            }, "data-test-id": "sidebar-close" })] })), _jsxs(BodyHolder, Object.assign({ isParentScrollable: isParentScrollable, className: "sidebar-body-holder" }, { children: [_jsx(When, Object.assign({ truthy: isLoading }, { children: _jsx(Stack, Object.assign({ align: "center", justify: "center", sx: {
                                    height: '100%',
                                } }, { children: _jsx(Loader, { color: colors.error, size: 32 }) })) })), _jsx(When, Object.assign({ truthy: !isLoading }, { children: children }))] })), customFooter && _jsx(FooterHolder, Object.assign({ className: "sidebar-footer-holder" }, { children: customFooter }))] })) })));
};
//# sourceMappingURL=SidebarFormless.js.map