"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ELLIPSIS_NODE = exports.MAX_SIBLING_COUNT = exports.MIN_SIBLING_COUNT = exports.DEFAULT_SIBLING_COUNT = exports.MAX_PAGE_COUNT_WITHOUT_ELLIPSIS = exports.FIRST_PAGE_NUMBER = exports.DEFAULT_PAGE_SIZE = exports.DEFAULT_PAGINATION_PAGE_SIZES = void 0;
/** Default page size options for pagination  */
exports.DEFAULT_PAGINATION_PAGE_SIZES = [10, 25, 50, 100];
exports.DEFAULT_PAGE_SIZE = 10;
exports.FIRST_PAGE_NUMBER = 1;
/** based on designs -- the maximum value for which all page numbers should be shown simultaneously */
exports.MAX_PAGE_COUNT_WITHOUT_ELLIPSIS = 10;
/**
 * default number of "siblings" on pagination. A "sibling" is a page number on each side of the current page number
 * E.g. pagination with 2 siblings for a current page of 14 would look like the below -- note there are 2 values to each side:
 *
 * 12 13 [14] 15 16
 */
exports.DEFAULT_SIBLING_COUNT = 2;
exports.MIN_SIBLING_COUNT = 1;
exports.MAX_SIBLING_COUNT = 5;
exports.DEFAULT_ELLIPSIS_NODE = '...';
//# sourceMappingURL=Pagination.const.js.map