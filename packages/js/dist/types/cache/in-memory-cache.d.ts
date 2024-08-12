import type { Cache } from './types';
export declare class InMemoryCache<T> implements Cache<T> {
    #private;
    constructor();
    get(key: string): T | undefined;
    getValues(): T[];
    entries(): [string, T][];
    keys(): string[];
    set(key: string, value: T): void;
    remove(key: string): void;
    clear(): void;
}
//# sourceMappingURL=in-memory-cache.d.ts.map