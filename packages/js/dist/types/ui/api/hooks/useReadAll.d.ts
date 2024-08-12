import type { NotificationFilter } from '../../../types';
export declare const useReadAll: (props?: {
    onSuccess?: (() => void) | undefined;
    onError?: ((err: unknown) => void) | undefined;
} | undefined) => {
    readAll: ({ tags }?: {
        tags?: NotificationFilter['tags'];
    }) => Promise<void>;
};
//# sourceMappingURL=useReadAll.d.ts.map