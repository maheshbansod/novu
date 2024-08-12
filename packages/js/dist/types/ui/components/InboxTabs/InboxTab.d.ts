import { ComponentProps, JSX } from 'solid-js';
import { ClassName } from '../../helpers';
import { Tab } from '../../types';
import { Dropdown } from '../primitives';
export declare const InboxTabUnreadNotificationsCount: (props: {
    count: number;
}) => JSX.Element;
export declare const InboxTab: (props: Tab & {
    class?: ClassName;
}) => JSX.Element;
type InboxDropdownTabProps = Pick<ComponentProps<(typeof Dropdown)['Item']>, 'onClick'> & Tab & {
    rightIcon: JSX.Element;
};
export declare const InboxDropdownTab: (props: InboxDropdownTabProps) => JSX.Element;
export {};
//# sourceMappingURL=InboxTab.d.ts.map