import { CellContext, Row, createColumnHelper as _createColumnHelper, ColumnDefTemplate } from '@tanstack/react-table';
import React from 'react';
import { CoreProps } from '../../types';
export type IRow<TRow extends object = {}> = Row<TRow>;
/** Component used to render the contents of a cell */
export type CellRendererComponent<TRow, TCellValue> = ColumnDefTemplate<CellContext<TRow, TCellValue>>;
/** Helper for type-safe column definitions */
export declare const createColumnHelper: typeof _createColumnHelper;
export interface ITableProps<TRow extends object> extends CoreProps {
    columns?: any[];
    data?: TRow[];
    isLoading?: boolean;
    pagination?: any;
    noDataPlaceholder?: React.ReactNode;
    loadingItems?: number;
    hasMore?: boolean;
    onRowClick?: (row: Row<TRow>) => void;
    onRowSelect?: (row: Row<TRow>) => void;
}
/**
 * Table component
 *
 */
export declare function Table<TRow extends object>({ columns: userColumns, data: userData, isLoading, noDataPlaceholder, loadingItems, onRowClick, onRowSelect, ...props }: ITableProps<TRow>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map