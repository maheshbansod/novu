"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const getPageNumberForNewPageSize_1 = require("./getPageNumberForNewPageSize");
(0, vitest_1.describe)('getPageNumberForNewPageSize', () => {
    (0, vitest_1.it)('computes the new page size as 1 when the currentPageNumber * prevPageSize < newPageSize', () => {
        const params = {
            prevPageSize: 10,
            newPageSize: 50,
            totalItemCount: 80,
            currentPageNumber: 3,
        };
        const result = (0, getPageNumberForNewPageSize_1.getPageNumberForNewPageSize)(params);
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)('computes a page greater than 1 when the previous and new item ranges do not include the first item', () => {
        const params = {
            prevPageSize: 10,
            newPageSize: 25,
            totalItemCount: 80,
            currentPageNumber: 5,
        };
        const result = (0, getPageNumberForNewPageSize_1.getPageNumberForNewPageSize)(params);
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)('returns 3 when moving from a higher to lower page size ', () => {
        const params = {
            prevPageSize: 25,
            newPageSize: 10,
            totalItemCount: 46,
            currentPageNumber: 2,
        };
        const result = (0, getPageNumberForNewPageSize_1.getPageNumberForNewPageSize)(params);
        (0, vitest_1.expect)(result).toBe(3);
    });
    (0, vitest_1.it)('computes a higher page number when switching to a smaller page size', () => {
        const params = {
            prevPageSize: 50,
            newPageSize: 25,
            totalItemCount: 122,
            currentPageNumber: 3,
        };
        const result = (0, getPageNumberForNewPageSize_1.getPageNumberForNewPageSize)(params);
        (0, vitest_1.expect)(result).toBe(5);
    });
    (0, vitest_1.it)('ensures the current page number is clamped for the new total page count', () => {
        const params = {
            prevPageSize: 10,
            newPageSize: 25,
            totalItemCount: 20,
            currentPageNumber: 2,
        };
        const result = (0, getPageNumberForNewPageSize_1.getPageNumberForNewPageSize)(params);
        (0, vitest_1.expect)(result).toBe(1);
    });
});
//# sourceMappingURL=getPageNumberForNewPageSize.spec.js.map