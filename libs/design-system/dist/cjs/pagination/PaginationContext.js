"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationContext = void 0;
const react_1 = require("react");
const DEFAULT_PAGINATION_CONTEXT = {
    totalItemCount: 0,
    totalPageCount: 1,
    currentPageNumber: 1,
    pageSize: 10,
    onPageChange: () => { },
};
exports.PaginationContext = (0, react_1.createContext)(DEFAULT_PAGINATION_CONTEXT);
//# sourceMappingURL=PaginationContext.js.map