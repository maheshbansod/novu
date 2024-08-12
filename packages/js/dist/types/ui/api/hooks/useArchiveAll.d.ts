import type { NotificationFilter } from '../../../types';
export declare const useArchiveAll: (props?: {
    onSuccess?: (() => void) | undefined;
    onError?: ((err: unknown) => void) | undefined;
} | undefined) => {
    archiveAll: ({ tags }?: {
        tags?: NotificationFilter['tags'];
    }) => Promise<void>;
};
//# sourceMappingURL=useArchiveAll.d.ts.map