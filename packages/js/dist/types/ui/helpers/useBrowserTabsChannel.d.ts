export declare const useBrowserTabsChannel: <T = unknown>({ channelName, onMessage, }: {
    channelName: string;
    onMessage: (args: T) => void;
}) => {
    postMessage: (data: T) => void;
};
//# sourceMappingURL=useBrowserTabsChannel.d.ts.map