import { ISidebarBaseProps } from './Sidebar.types';
/**
 * A Sidebar component without the form element that wraps content.
 *
 * This is a temporary solution to a overloaded pattern. The Sidebar component should
 * not have an embedded form as it removes the caller from properly controlling their own form.
 * We will refactor the Sidebar later on as part of the design system work.
 *
 * https://linear.app/novu/issue/NV-3632/de-couple-the-sidebar-from-its-internal-form
 */
export declare const SidebarFormless: ({ customFooter, customHeader, children, isOpened, isExpanded, isLoading, isParentScrollable, styles, "data-test-id": dataTestId, onClose, onBack, navigationWidth, }: ISidebarBaseProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SidebarFormless.d.ts.map