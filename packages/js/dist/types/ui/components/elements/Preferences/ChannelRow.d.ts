import { JSX } from 'solid-js';
import { ChannelType } from '../../../../types';
type ChannelRowProps = {
    channel: ChannelType;
    enabled: boolean;
    channelIcon?: () => JSX.Element;
    workflowId?: string;
    onChange: ({ channel, enabled, workflowId }: {
        workflowId?: string;
        channel: ChannelType;
        enabled: boolean;
    }) => void;
};
export declare const ChannelRow: (props: ChannelRowProps) => JSX.Element;
export declare const getLabel: (channel: ChannelType) => "" | "In-App" | "Email" | "Push" | "SMS" | "Chat";
export {};
//# sourceMappingURL=ChannelRow.d.ts.map