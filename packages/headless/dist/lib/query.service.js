"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryService = void 0;
const query_core_1 = require("@tanstack/query-core");
class QueryService {
    constructor(queryClient) {
        this.queryClient = queryClient !== null && queryClient !== void 0 ? queryClient : new query_core_1.QueryClient();
        this.queryClient.mount();
    }
    subscribeQuery({ options, listener, }) {
        const defaultedOptions = this.queryClient.defaultQueryOptions(options);
        const queryObserver = new query_core_1.QueryObserver(this.queryClient, defaultedOptions);
        const result = queryObserver.getOptimisticResult(defaultedOptions);
        const unsubscribe = queryObserver.subscribe(listener);
        return { result, unsubscribe, queryObserver };
    }
    subscribeMutation({ options, listener, }) {
        const defaultedOptions = this.queryClient.defaultMutationOptions(options);
        const mutationObserver = new query_core_1.MutationObserver(this.queryClient, defaultedOptions);
        const result = mutationObserver.getCurrentResult();
        const unsubscribe = mutationObserver.subscribe(listener);
        return { result, unsubscribe, mutationObserver };
    }
}
exports.QueryService = QueryService;
