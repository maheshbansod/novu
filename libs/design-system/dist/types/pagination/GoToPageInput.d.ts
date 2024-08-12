/// <reference types="react" />
import { NumberInputProps } from '@mantine/core';
export interface IGoToPageInputProps extends NumberInputProps {
    firstPageNumber?: number;
}
/**
 * Input for navigating to the specified page size for Pagination.
 * @requires this component to be a child of a Pagination component
 */
export declare const GoToPageInput: React.FC<IGoToPageInputProps>;
//# sourceMappingURL=GoToPageInput.d.ts.map