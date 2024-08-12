"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clampPageNumber = void 0;
const utils_1 = require("../../utils");
const Pagination_const_1 = require("../Pagination.const");
/**
 * Ensure that the page number is within the safe bounds of the total page count.
 */
const clampPageNumber = (newPageNum, { totalPageCount, currentPageNumber }, firstPageNumber = Pagination_const_1.FIRST_PAGE_NUMBER) => {
    if (!Number.isInteger(newPageNum)) {
        return !Number.isInteger(currentPageNumber)
            ? firstPageNumber
            : (0, utils_1.clamp)(currentPageNumber, firstPageNumber, totalPageCount);
    }
    return (0, utils_1.clamp)(newPageNum, firstPageNumber, totalPageCount);
};
exports.clampPageNumber = clampPageNumber;
//# sourceMappingURL=clampPageNumber.js.map