import { createContext } from 'react';
const DEFAULT_PAGINATION_CONTEXT = {
    totalItemCount: 0,
    totalPageCount: 1,
    currentPageNumber: 1,
    pageSize: 10,
    onPageChange: () => { },
};
export const PaginationContext = createContext(DEFAULT_PAGINATION_CONTEXT);
//# sourceMappingURL=PaginationContext.js.map