import type { NotificationFilter } from '../../../types';
export declare const useArchiveAllRead: (props?: {
    onSuccess?: (() => void) | undefined;
    onError?: ((err: unknown) => void) | undefined;
} | undefined) => {
    archiveAllRead: ({ tags }?: {
        tags?: NotificationFilter['tags'];
    }) => Promise<void>;
};
//# sourceMappingURL=useArchiveAllRead.d.ts.map