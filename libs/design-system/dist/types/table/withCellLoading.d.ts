import { IExtendedCellProps } from './Table';
export declare const withCellLoading: <T extends object = {}>(Component: Renderer<any>, { width, height, loadingTestId }?: {
    width?: number;
    height?: number;
    loadingTestId?: string;
}) => {
    ({ isLoading, ...rest }: any): any;
    displayName: string;
};
//# sourceMappingURL=withCellLoading.d.ts.map