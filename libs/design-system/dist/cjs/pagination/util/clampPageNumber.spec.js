"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const clampPageNumber_1 = require("./clampPageNumber");
const FIRST_PAGE_NUMBER = 1;
(0, vitest_1.describe)('clampPageNumber', () => {
    (0, vitest_1.it)('should clamp page number to the first page if it is less than the first page number', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(0, { totalPageCount: 10, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(FIRST_PAGE_NUMBER);
    });
    (0, vitest_1.it)('should clamp page number to the total page count if it is greater than the total page count', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(15, { totalPageCount: 10, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(10);
    });
    (0, vitest_1.it)('should return the new page number if it is within the safe bounds', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(3, { totalPageCount: 10, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(3);
    });
    (0, vitest_1.it)('should return the current page number if the new page number is not an integer', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(3.5, { totalPageCount: 10, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(5);
    });
    (0, vitest_1.it)('should return the first page number if total page count is zero', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(3, { totalPageCount: 0, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(FIRST_PAGE_NUMBER);
    });
    (0, vitest_1.it)('should return the first page number if total page count is negative', () => {
        const result = (0, clampPageNumber_1.clampPageNumber)(3, { totalPageCount: -5, currentPageNumber: 5 });
        (0, vitest_1.expect)(result).to.equal(FIRST_PAGE_NUMBER);
    });
});
//# sourceMappingURL=clampPageNumber.spec.js.map