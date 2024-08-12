/// <reference types="react" />
import { ISidebarBaseProps } from './Sidebar.types';
export interface ISidebarProps extends ISidebarBaseProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
export declare const Sidebar: ({ customFooter, customHeader, children, isOpened, isExpanded, isLoading, isParentScrollable, styles, navigationWidth, "data-test-id": dataTestId, onClose, onBack, onSubmit, }: ISidebarProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Sidebar.d.ts.map