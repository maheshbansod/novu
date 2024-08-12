"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const Pagination_const_1 = require("../Pagination.const");
const getPaginationSymbols_1 = require("./getPaginationSymbols");
(0, vitest_1.describe)(getPaginationSymbols_1.getPaginationSymbols.name, () => {
    (0, vitest_1.it)('should have a single page number for 1 page', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 1, currentPageNumber: 1, siblingCount: 2 })).toEqual([1]);
    });
    (0, vitest_1.it)('should have 3 page numbers for 3 pages', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 3, currentPageNumber: 1, siblingCount: 2 })).toEqual([1, 2, 3]);
    });
    (0, vitest_1.it)('should show all page numbers for "max pages without ellipsis" regardless of sibling count', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: Pagination_const_1.MAX_PAGE_COUNT_WITHOUT_ELLIPSIS, currentPageNumber: 3, siblingCount: 0 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: Pagination_const_1.MAX_PAGE_COUNT_WITHOUT_ELLIPSIS, currentPageNumber: 3, siblingCount: 2 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: Pagination_const_1.MAX_PAGE_COUNT_WITHOUT_ELLIPSIS, currentPageNumber: 3, siblingCount: 6 })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    (0, vitest_1.it)('should show omit ellipsis and show page numbers when within the "window size" - 1 of page 1', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 11, currentPageNumber: 5, siblingCount: 2 })).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            'ELLIPSIS',
            11,
        ]);
    });
    (0, vitest_1.it)('should show show ellipsis a when at "window size" or above of page 1', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 11, currentPageNumber: 6, siblingCount: 2 })).toEqual([
            1,
            'ELLIPSIS',
            4,
            5,
            6,
            7,
            8,
            'ELLIPSIS',
            11,
        ]);
    });
    (0, vitest_1.it)('should show assymetric siblings for a >10 pages', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 48, currentPageNumber: 24, siblingCount: 2 })).toEqual([
            1,
            'ELLIPSIS',
            22,
            23,
            24,
            25,
            26,
            'ELLIPSIS',
            48,
        ]);
    });
    (0, vitest_1.it)('should show symmetric siblings for 100 <= pages < 10000', () => {
        (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount: 500, currentPageNumber: 101, siblingCount: 2 })).toEqual([
            1,
            'ELLIPSIS',
            99,
            100,
            101,
            102,
            103,
            'ELLIPSIS',
            500,
        ]);
    });
    (0, vitest_1.describe)('1 sibling', () => {
        const siblingCount = 1;
        const totalPageCount = 100;
        (0, vitest_1.it)('should work within the window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 4, siblingCount })).toEqual([
                1,
                2,
                3,
                4,
                5,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 5, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                4,
                5,
                6,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work in the middle-ish', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 20, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                19,
                20,
                21,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 96, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                95,
                96,
                97,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work within the window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 97, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                96,
                97,
                98,
                99,
                100,
            ]);
        });
    });
    (0, vitest_1.describe)('3 siblings', () => {
        const siblingCount = 3;
        const totalPageCount = 100;
        (0, vitest_1.it)('should work within the window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 6, siblingCount })).toEqual([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 7, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work in the middle-ish', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 20, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 94, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work within the window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 95, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                92,
                93,
                94,
                95,
                96,
                97,
                98,
                99,
                100,
            ]);
        });
    });
    (0, vitest_1.describe)('4 siblings', () => {
        const siblingCount = 4;
        const totalPageCount = 100;
        (0, vitest_1.it)('should work within the window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 7, siblingCount })).toEqual([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 8, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work in the middle-ish', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 20, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 93, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                89,
                90,
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work within the window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 94, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                90,
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                98,
                99,
                100,
            ]);
        });
    });
    (0, vitest_1.describe)('5 siblings', () => {
        const siblingCount = 5;
        const totalPageCount = 100;
        (0, vitest_1.it)('should work within the window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 8, siblingCount })).toEqual([
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the first page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 9, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work in the middle-ish', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 20, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work near, but not in window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 92, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                87,
                88,
                89,
                90,
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                'ELLIPSIS',
                100,
            ]);
        });
        (0, vitest_1.it)('should work within the window of the last page', () => {
            (0, vitest_1.expect)((0, getPaginationSymbols_1.getPaginationSymbols)({ totalPageCount, currentPageNumber: 93, siblingCount })).toEqual([
                1,
                'ELLIPSIS',
                88,
                89,
                90,
                91,
                92,
                93,
                94,
                95,
                96,
                97,
                98,
                99,
                100,
            ]);
        });
    });
});
//# sourceMappingURL=getPaginationSymbols.spec.js.map