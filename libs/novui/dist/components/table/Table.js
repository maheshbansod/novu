var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Table as ExternalTable } from '@mantine/core';
import { flexRender, getCoreRowModel, useReactTable, createColumnHelper as _createColumnHelper, } from '@tanstack/react-table';
import { useMemo } from 'react';
import classes from './Table.styles';
/** Helper for type-safe column definitions */
export const createColumnHelper = _createColumnHelper;
/**
 * Table component
 *
 */
export function Table(_a) {
    var { columns: userColumns, data: userData, isLoading = false, noDataPlaceholder, loadingItems = 10, onRowClick, onRowSelect } = _a, props = __rest(_a, ["columns", "data", "isLoading", "noDataPlaceholder", "loadingItems", "onRowClick", "onRowSelect"]);
    const columns = useMemo(() => userColumns === null || userColumns === void 0 ? void 0 : userColumns.map((col) => (Object.assign({}, col))), [userColumns]);
    const data = useMemo(() => { var _a; return (_a = (userData || [])) === null || _a === void 0 ? void 0 : _a.map((row) => (Object.assign({}, row))); }, [userData]);
    const fakeData = useMemo(() => Array.from({ length: loadingItems }).map((_, index) => ({ index })), [loadingItems]);
    const table = useReactTable({
        columns,
        data: isLoading ? fakeData : data,
        getCoreRowModel: getCoreRowModel(),
    });
    return (_jsxs(ExternalTable, Object.assign({ classNames: classes, highlightOnHover: true }, props, { children: [_jsx("thead", { children: table.getHeaderGroups().map((headerGroup, i) => {
                    return (_jsx("tr", { children: headerGroup.headers.map((header) => {
                            return _jsx("th", { children: flexRender(header.column.columnDef.header, header.getContext()) }, header.id);
                        }) }, headerGroup.id));
                }) }), _jsx("tbody", { children: table.getRowModel().rows.map((row) => {
                    return (_jsx("tr", Object.assign({ onClick: (e) => {
                            e.stopPropagation();
                            if (!isLoading && onRowClick) {
                                onRowClick(row);
                            }
                        }, className: classes.tr, "data-disabled": isLoading || !onRowClick }, { children: row.getVisibleCells().map((cell) => {
                            return _jsx("td", { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id);
                        }) }), row.id));
                }) })] })));
}
//# sourceMappingURL=Table.js.map