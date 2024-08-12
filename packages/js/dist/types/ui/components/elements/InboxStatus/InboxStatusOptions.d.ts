import { JSX } from 'solid-js/jsx-runtime';
import { NotificationStatus } from '../../../types';
export declare const StatusOptions: (props: {
    setStatus: (status: NotificationStatus) => void;
    status: NotificationStatus;
}) => JSX.Element;
export declare const StatusItem: (props: {
    label: string;
    onClick: () => void;
    isSelected?: boolean;
    icon: () => JSX.Element;
}) => JSX.Element;
//# sourceMappingURL=InboxStatusOptions.d.ts.map