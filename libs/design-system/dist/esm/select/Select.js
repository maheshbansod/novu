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
import React, { useMemo } from 'react';
import { Box, Select as MantineSelect, MultiSelect as MantineMultiSelect, CloseButton, useMantineTheme, Loader, } from '@mantine/core';
import styled from '@emotion/styled';
import { useSelectStyles } from './Select.styles';
import { inputStyles } from '../config/inputs.styles';
import { ArrowDown } from '../icons';
import { colors } from '../config';
import { Text } from '../index';
/**
 * Select component
 *
 */
export const Select = React.forwardRef((_a, ref) => {
    var { data, type = 'select', value, filter, searchable = false, creatable = false, loading = false, disabled = false, required = false, onChange, inputProps = {}, dataTestId, withinPortal = false, className } = _a, props = __rest(_a, ["data", "type", "value", "filter", "searchable", "creatable", "loading", "disabled", "required", "onChange", "inputProps", "dataTestId", "withinPortal", "className"]);
    const { classes, theme } = useSelectStyles();
    const searchableSelectProps = searchable
        ? {
            searchable,
            nothingFound: 'Nothing Found',
            clearable: true,
        }
        : {};
    const defaultDesign = Object.assign({ radius: 'md', size: 'md', rightSection: _jsx(ArrowDown, {}), rightSectionWidth: 50, styles: inputStyles, classNames: classes }, inputProps);
    const multiselect = type === 'multiselect';
    let filterResults = filter;
    if (creatable && !filter) {
        filterResults = (currentValue, _) => {
            const isEmptyValue = !currentValue;
            const includedInExistingGroups = !!data.find((group) => {
                var _a;
                return (_a = group === null || group === void 0 ? void 0 : group.label) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(currentValue.toLowerCase());
            });
            const showAllOptionsInSelect = isEmptyValue || includedInExistingGroups;
            return showAllOptionsInSelect;
        };
    }
    const loadingProps = useMemo(() => {
        const loadingStyle = Object.assign(Object.assign({}, inputStyles(theme)), { rightSection: { width: '100%' } });
        return loading
            ? {
                rightSection: _jsx(Loader, { color: colors.B70, size: 32 }),
                styles: loadingStyle,
                value: undefined,
                placeholder: '',
                disabled: true,
            }
            : {};
    }, [loading, theme]);
    return (_jsx(Wrapper, Object.assign({ style: { position: 'relative' }, className: className }, { children: multiselect ? (_jsx(MantineMultiSelect, Object.assign({ ref: ref, onChange: onChange, autoComplete: "nope", value: value }, defaultDesign, searchableSelectProps, { creatable: creatable, data: data, disabled: disabled, required: required, valueComponent: Value, "data-test-id": dataTestId }, props, loadingProps))) : (_jsx(MantineSelect, Object.assign({ ref: ref, value: value, autoComplete: "nope" }, defaultDesign, searchableSelectProps, { creatable: creatable, disabled: disabled, filter: filterResults, onChange: onChange, data: data, required: required, "data-test-id": dataTestId, withinPortal: withinPortal }, props, loadingProps))) })));
});
function Value({ label, onRemove }) {
    const theme = useMantineTheme();
    const dark = theme.colorScheme === 'dark';
    const backgroundColor = dark ? theme.colors.dark[4] : theme.colors.gray[0];
    const color = dark ? theme.colors.dark[3] : theme.colors.gray[5];
    return (_jsxs(Box, Object.assign({ sx: {
            alignItems: 'center',
            display: 'flex',
            borderRadius: '5px',
            backgroundColor,
            margin: '5px',
        } }, { children: [_jsx("div", Object.assign({ style: {
                    margin: '6.5px 0px 6.5px 10px',
                    lineHeight: '20px',
                    maxWidth: '80px',
                    fontSize: 14,
                    fontWeight: 400,
                } }, { children: _jsx(Text, Object.assign({ rows: 1 }, { children: label })) })), _jsx(CloseButton, { style: { color }, onMouseDown: onRemove, variant: "transparent", size: 30, iconSize: 15 })] })));
}
const Wrapper = styled.div `
  .mantine-MultiSelect-values {
    min-height: 48px;
    padding: 0;
  }

  .mantine-MultiSelect-input {
    min-height: 50px;

    input {
      height: 100%;
    }
  }
`;
//# sourceMappingURL=Select.js.map