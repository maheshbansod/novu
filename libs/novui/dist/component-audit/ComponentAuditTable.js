import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo, useState } from 'react';
import { css } from '../../styled-system/css';
export const ComponentAuditTable = ({ data: jsonData, className }) => {
    const [expandedRows, setExpandedRows] = useState([]);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState(null);
    const data = useMemo(() => {
        return Object.entries(jsonData).map(([key, value]) => (Object.assign(Object.assign({}, value), { name: key.split('/')[1] })));
    }, [jsonData]);
    const toggleRow = (name) => {
        setExpandedRows((prevState) => prevState.includes(name) ? prevState.filter((row) => row !== name) : [...prevState, name]);
    };
    const sortData = (key) => {
        if (sortColumn === key) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        }
        else {
            setSortColumn(key);
            setSortOrder('asc');
        }
    };
    const getSortIcon = (key) => {
        if (sortColumn !== key)
            return null;
        if (sortOrder === 'asc')
            return '⬆️';
        if (sortOrder === 'desc')
            return '⬇️';
        return null;
    };
    const sortedData = sortColumn
        ? data.sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (typeof aValue === 'string' && typeof bValue === 'string') {
                return sortOrder === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
            }
            if (typeof aValue === 'number' && typeof bValue === 'number') {
                return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
            }
            return 0;
        })
        : data;
    return (_jsxs("table", Object.assign({ className: `${css({ width: '[100%]', borderCollapse: 'collapse', color: 'typography.text.main' })} ${className !== null && className !== void 0 ? className : ''}` }, { children: [_jsx("thead", { children: _jsxs("tr", Object.assign({ className: css({ bg: 'surface.popover', fontSize: '100', fontWeight: 'strong' }) }, { children: [_jsxs("th", Object.assign({ className: css({
                                py: '[2]',
                                px: '25',
                                textAlign: 'left',
                                borderBottom: 'solid',
                                borderColor: 'typography.text.secondary',
                                cursor: 'pointer',
                            }), onClick: () => sortData('name') }, { children: ["Name ", getSortIcon('name')] })), _jsxs("th", Object.assign({ className: css({
                                py: '[2]',
                                px: '25',
                                textAlign: 'left',
                                borderBottom: 'solid',
                                borderColor: 'typography.text.secondary',
                                cursor: 'pointer',
                            }), onClick: () => sortData('instances') }, { children: ["Instance Count ", getSortIcon('instances')] })), _jsxs("th", Object.assign({ className: css({
                                py: '[2]',
                                px: '25',
                                textAlign: 'left',
                                borderBottom: 'solid',
                                borderColor: 'typography.text.secondary',
                                cursor: 'pointer',
                            }), onClick: () => sortData('srcPkg') }, { children: ["Source ", getSortIcon('srcPkg')] })), _jsx("th", Object.assign({ className: css({
                                py: '[2]',
                                px: '25',
                                textAlign: 'left',
                                borderBottom: 'solid',
                                borderColor: 'typography.text.secondary',
                            }) }, { children: "Props" }))] })) }), _jsx("tbody", { children: sortedData.map(({ name, instances, props, srcPkg }) => (_jsxs(React.Fragment, { children: [_jsxs("tr", Object.assign({ className: css({ bg: 'surface.page', _even: { bg: { base: '[#DDDDDD]', _dark: '[#222233]' } } }) }, { children: [_jsx("td", Object.assign({ className: css({
                                        py: '[2]',
                                        px: '25',
                                        borderBottom: 'solid',
                                        borderColor: 'typography.text.secondary',
                                    }) }, { children: name })), _jsx("td", Object.assign({ className: css({
                                        py: '[2]',
                                        px: '25',
                                        borderBottom: 'solid',
                                        borderColor: 'typography.text.secondary',
                                    }) }, { children: instances })), _jsx("td", Object.assign({ className: css({
                                        py: '[2]',
                                        px: '25',
                                        borderBottom: 'solid',
                                        borderColor: 'typography.text.secondary',
                                    }) }, { children: srcPkg })), _jsx("td", Object.assign({ className: css({
                                        py: '[2]',
                                        px: '25',
                                        borderBottom: 'solid',
                                        borderColor: 'typography.text.secondary',
                                        maxW: '[300px]',
                                        textOverflow: 'ellipsis',
                                    }) }, { children: _jsxs("span", Object.assign({ className: css({
                                            textDecoration: 'underline',
                                            _hover: { color: 'typography.text.feedback.info' },
                                            cursor: 'pointer',
                                        }), onClick: () => toggleRow(name) }, { children: [Object.entries(props)
                                                .slice(0, 3)
                                                .map(([prop, value]) => `${prop}: ${typeof value === 'number' ? value : value.join(', ')}`)
                                                .join(', '), Object.keys(props).length > 3 && '...'] })) }))] })), expandedRows.includes(name) && (_jsx("tr", { children: _jsx("td", Object.assign({ colSpan: 4, className: css({ py: '[2]', px: '25' }) }, { children: _jsx("div", Object.assign({ className: css({
                                        display: 'grid',
                                        gridTemplateColumns: '[repeat(auto-fit, minmax(150px, 1fr))]',
                                        gap: '25',
                                    }) }, { children: Object.entries(props).map(([prop, value]) => (_jsxs("div", Object.assign({ className: css({
                                            bg: 'surface.popover',
                                            px: '25',
                                            py: '[2]',
                                            display: 'grid',
                                            gridTemplateColumns: '[max-content 1fr]',
                                            alignItems: 'center',
                                            gap: '25',
                                        }) }, { children: [_jsxs("span", Object.assign({ className: css({ fontWeight: 'strong' }) }, { children: [prop, ":"] })), _jsx("span", { children: typeof value === 'number' ? value : value.join(', ') })] }), prop))) })) })) }))] }, `${srcPkg}-${name}`))) })] })));
};
//# sourceMappingURL=ComponentAuditTable.js.map