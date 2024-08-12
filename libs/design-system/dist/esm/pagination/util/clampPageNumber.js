import { clamp } from '../../utils';
import { FIRST_PAGE_NUMBER } from '../Pagination.const';
/**
 * Ensure that the page number is within the safe bounds of the total page count.
 */
export const clampPageNumber = (newPageNum, { totalPageCount, currentPageNumber }, firstPageNumber = FIRST_PAGE_NUMBER) => {
    if (!Number.isInteger(newPageNum)) {
        return !Number.isInteger(currentPageNumber)
            ? firstPageNumber
            : clamp(currentPageNumber, firstPageNumber, totalPageCount);
    }
    return clamp(newPageNum, firstPageNumber, totalPageCount);
};
//# sourceMappingURL=clampPageNumber.js.map