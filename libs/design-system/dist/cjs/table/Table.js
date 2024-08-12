"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@mantine/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const react_table_1 = require("react-table");
const useDataRef_1 = require("../hooks/useDataRef");
const Table_styles_1 = __importDefault(require("./Table.styles"));
const config_1 = require("../config");
const DefaultCell_1 = require("./DefaultCell");
const icons_1 = require("../icons");
const Radio_1 = require("../radio/Radio");
const NoDataPlaceholder = styled_1.default.div `
  padding: 0 30px;
  flex: 1;
`;
const RadioSkeleton = (0, styled_1.default)(core_1.Skeleton) `
  width: 20px;
  min-width: 20px;
  height: 20px;
  border-radius: 100%;
`;
const defaultColumn = {
    Cell: DefaultCell_1.DefaultCell,
};
/**
 * Table component
 *
 */
function Table(_a) {
    var { columns: userColumns, data: userData, pagination = false, loading = false, noDataPlaceholder, loadingItems = 10, withSelection = false, initialSelectedRows, onRowClick, onRowSelect } = _a, props = __rest(_a, ["columns", "data", "pagination", "loading", "noDataPlaceholder", "loadingItems", "withSelection", "initialSelectedRows", "onRowClick", "onRowSelect"]);
    const { pageSize, total, onPageChange, current } = pagination;
    const columns = (0, react_1.useMemo)(() => userColumns === null || userColumns === void 0 ? void 0 : userColumns.map((col) => (Object.assign({}, col))), [userColumns]);
    const data = (0, react_1.useMemo)(() => { var _a; return (_a = (userData || [])) === null || _a === void 0 ? void 0 : _a.map((row) => (Object.assign({}, row))); }, [userData]);
    const fakeData = (0, react_1.useMemo)(() => Array.from({ length: loadingItems }).map((_, index) => ({ index })), [loadingItems]);
    const onPageChangeRef = (0, useDataRef_1.useDataRef)(onPageChange);
    const { getTableProps, getTableBodyProps, headerGroups, rows: allRows, prepareRow, page, gotoPage, toggleAllRowsSelected, state: { pageIndex }, } = (0, react_table_1.useTable)(Object.assign(Object.assign({ columns,
        defaultColumn, data: loading ? fakeData : data }, (pagination && !(pagination === null || pagination === void 0 ? void 0 : pagination.minimalPagination)
        ? {
            initialState: { pageIndex: current, pageSize },
            manualPagination: true,
            pageCount: Math.ceil(total / pageSize),
        }
        : {})), (withSelection && {
        autoResetSelectedRows: false,
        initialState: { selectedRowIds: initialSelectedRows !== null && initialSelectedRows !== void 0 ? initialSelectedRows : {} },
    })), react_table_1.usePagination, react_table_1.useRowSelect, (hooks) => {
        if (!withSelection) {
            return;
        }
        const selectionRow = {
            id: 'selection',
            Header: () => null,
            Cell: ({ row, isLoading }) => {
                if (isLoading) {
                    return (0, jsx_runtime_1.jsx)(RadioSkeleton, {});
                }
                const { checked } = row.getToggleRowSelectedProps();
                return ((0, jsx_runtime_1.jsx)(Radio_1.Radio, { checked: checked, onChange: (e) => {
                        e.stopPropagation();
                        toggleAllRowsSelected(false);
                        row.toggleRowSelected(true);
                        onRowSelect === null || onRowSelect === void 0 ? void 0 : onRowSelect(row);
                    }, size: "sm", styles: { radio: { margin: '0 !important', cursor: 'pointer' } } }));
            },
            width: 30,
            maxWidth: 30,
        };
        hooks.visibleColumns.push((visibleColumns) => [selectionRow, ...visibleColumns]);
    });
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = onPageChangeRef.current) === null || _a === void 0 ? void 0 : _a.call(onPageChangeRef, pageIndex);
    }, [onPageChangeRef, pageIndex]);
    const handlePageChange = (pageNumber) => {
        if (pagination === null || pagination === void 0 ? void 0 : pagination.minimalPagination) {
            onPageChange(pageNumber);
        }
        else {
            gotoPage(pageNumber - 1);
        }
    };
    const getPageCount = () => {
        return Math.ceil(total / pageSize);
    };
    const { classes } = (0, Table_styles_1.default)({ withSelection });
    const defaultDesign = { verticalSpacing: 'sm', horizontalSpacing: 'sm', highlightOnHover: true };
    const rows = pagination ? page : allRows;
    const noData = rows.length === 0;
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ style: { position: 'relative', minHeight: 500, display: 'flex', flexDirection: 'column' }, "data-table-holder": true }, { children: [(0, jsx_runtime_1.jsxs)(core_1.Table, Object.assign({ className: classes.root }, defaultDesign, getTableProps(), props, { children: [(0, jsx_runtime_1.jsx)("thead", { children: headerGroups.map((headerGroup, i) => {
                            const _a = headerGroup.getHeaderGroupProps(), { key: trKey } = _a, trRest = __rest(_a, ["key"]);
                            return ((0, jsx_runtime_1.jsx)("tr", Object.assign({}, trRest, { children: headerGroup.headers.map((column) => {
                                    const _a = column.getHeaderProps(), { key: thKey } = _a, thRest = __rest(_a, ["key"]);
                                    return ((0, jsx_runtime_1.jsx)("th", Object.assign({}, thRest, { children: column.render('Header') }), thKey));
                                }) }), trKey));
                        }) }), (0, jsx_runtime_1.jsx)("tbody", Object.assign({}, getTableBodyProps(), { children: rows.map((row) => {
                            prepareRow(row);
                            const _a = row.getRowProps(), { key: trKey } = _a, trRest = __rest(_a, ["key"]);
                            return ((0, jsx_runtime_1.jsx)("tr", Object.assign({ onClick: (e) => {
                                    e.stopPropagation();
                                    if (!loading && onRowClick) {
                                        onRowClick(row);
                                    }
                                } }, trRest, { className: classes.tableRow, "data-disabled": loading || !onRowClick }, { children: row.cells.map((cell, i) => {
                                    const _a = cell.getCellProps({
                                        style: {
                                            maxWidth: cell.column.maxWidth,
                                            width: cell.column.width,
                                        },
                                    }), { key: tdKey } = _a, tdRest = __rest(_a, ["key"]);
                                    return ((0, jsx_runtime_1.jsx)("td", Object.assign({}, tdRest, { children: cell.render('Cell', { isLoading: loading }) }), tdKey));
                                }) }), trKey));
                        }) }))] })), !loading && noData && noDataPlaceholder && (0, jsx_runtime_1.jsx)(NoDataPlaceholder, { children: noDataPlaceholder }), !loading && pagination && total > 0 && pageSize > 1 && getPageCount() > 1 && !(pagination === null || pagination === void 0 ? void 0 : pagination.minimalPagination) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: { marginTop: 'auto' } }, { children: (0, jsx_runtime_1.jsx)(core_1.Pagination, { styles: {
                        item: {
                            marginTop: '15px',
                            marginBottom: '15px',
                            backgroundColor: 'transparent',
                            '&[data-active]': {
                                backgroundImage: config_1.colors.horizontal,
                                border: 'none',
                            },
                        },
                    }, total: getPageCount(), page: pageIndex + 1, onChange: handlePageChange, position: "center" }) }))), !loading && pagination && pageSize > 1 && (pagination === null || pagination === void 0 ? void 0 : pagination.minimalPagination) && ((0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '15px',
                } }, { children: (0, jsx_runtime_1.jsxs)(core_1.Button.Group, { children: [(0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ variant: "outline", disabled: (pagination === null || pagination === void 0 ? void 0 : pagination.current) === 0 || loading, onClick: () => handlePageChange((pagination === null || pagination === void 0 ? void 0 : pagination.current) - 1) }, { children: (0, jsx_runtime_1.jsx)(icons_1.ChevronLeft, {}) })), (0, jsx_runtime_1.jsx)(core_1.Button, Object.assign({ loading: loading, variant: "outline", disabled: !(pagination === null || pagination === void 0 ? void 0 : pagination.hasMore) || loading, onClick: () => handlePageChange((pagination === null || pagination === void 0 ? void 0 : pagination.current) + 1) }, { children: (0, jsx_runtime_1.jsx)(icons_1.ChevronRight, {}) }))] }) })))] })));
}
exports.Table = Table;
//# sourceMappingURL=Table.js.map