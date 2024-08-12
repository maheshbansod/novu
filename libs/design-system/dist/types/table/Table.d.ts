import React from 'react';
import { Column, Row, CellProps, IdType } from 'react-table';
export type IExtendedCellProps<T extends object = {}> = CellProps<T> & {
    isLoading: boolean;
};
export type IExtendedColumn<T extends object = {}> = Column<T> & {
    Cell?: (props: IExtendedCellProps<T>) => React.ReactNode;
};
export type IRow<T extends object = {}> = Row<T>;
export interface ITableProps<T extends object> {
    columns?: IExtendedColumn<T>[];
    data?: T[];
    loading?: boolean;
    pagination?: any;
    noDataPlaceholder?: React.ReactNode;
    loadingItems?: number;
    hasMore?: boolean;
    minimalPagination?: boolean;
    withSelection?: boolean;
    withRowClickSelection?: boolean;
    initialSelectedRows?: Record<IdType<T>, boolean>;
    onRowClick?: (row: Row<T>) => void;
    onRowSelect?: (row: Row<T>) => void;
}
/**
 * Table component
 *
 */
export declare function Table<T extends object>({ columns: userColumns, data: userData, pagination, loading, noDataPlaceholder, loadingItems, withSelection, initialSelectedRows, onRowClick, onRowSelect, ...props }: ITableProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Table.d.ts.map