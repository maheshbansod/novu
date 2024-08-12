import { Accessor, Setter } from 'solid-js';
export declare function createInfiniteScroll<T>(fetcher: (page: number) => Promise<{
    data: T[];
    hasMore: boolean;
}>): [
    data: Accessor<T[]>,
    options: {
        initialLoading: Accessor<boolean>;
        setEl: (el: Element) => void;
        offset: Accessor<number>;
        end: Accessor<boolean>;
        reset: () => Promise<void>;
        mutate: Setter<{
            data: T[];
            hasMore: boolean;
        } | undefined>;
    }
];
//# sourceMappingURL=createInfiniteScroll.d.ts.map