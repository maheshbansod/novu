import { QueryClient, QueryKey, QueryObserver, QueryObserverOptions, QueryObserverResult, MutationObserver, MutationObserverOptions, MutationObserverResult } from '@tanstack/query-core';
export declare class QueryService {
    private queryClient;
    constructor(queryClient?: QueryClient);
    subscribeQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>({ options, listener, }: {
        options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryData, TQueryKey>;
        listener: (result: QueryObserverResult<TData>) => void;
    }): {
        result: QueryObserverResult<TData, TError>;
        unsubscribe: () => void;
        queryObserver: QueryObserver<TQueryFnData, TError, TData, TQueryData, TQueryKey>;
    };
    subscribeMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>({ options, listener, }: {
        options: MutationObserverOptions<TData, TError, TVariables, TContext>;
        listener: (result: MutationObserverResult<TData, TError, TVariables, TContext>) => void;
    }): {
        result: MutationObserverResult<TData, TError, TVariables, TContext>;
        unsubscribe: () => void;
        mutationObserver: MutationObserver<TData, TError, TVariables, TContext>;
    };
}
//# sourceMappingURL=query.service.d.ts.map