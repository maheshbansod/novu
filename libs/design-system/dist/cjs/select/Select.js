"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const core_1 = require("@mantine/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const Select_styles_1 = require("./Select.styles");
const inputs_styles_1 = require("../config/inputs.styles");
const icons_1 = require("../icons");
const config_1 = require("../config");
const index_1 = require("../index");
/**
 * Select component
 *
 */
exports.Select = react_1.default.forwardRef((_a, ref) => {
    var { data, type = 'select', value, filter, searchable = false, creatable = false, loading = false, disabled = false, required = false, onChange, inputProps = {}, dataTestId, withinPortal = false, className } = _a, props = __rest(_a, ["data", "type", "value", "filter", "searchable", "creatable", "loading", "disabled", "required", "onChange", "inputProps", "dataTestId", "withinPortal", "className"]);
    const { classes, theme } = (0, Select_styles_1.useSelectStyles)();
    const searchableSelectProps = searchable
        ? {
            searchable,
            nothingFound: 'Nothing Found',
            clearable: true,
        }
        : {};
    const defaultDesign = Object.assign({ radius: 'md', size: 'md', rightSection: (0, jsx_runtime_1.jsx)(icons_1.ArrowDown, {}), rightSectionWidth: 50, styles: inputs_styles_1.inputStyles, classNames: classes }, inputProps);
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
    const loadingProps = (0, react_1.useMemo)(() => {
        const loadingStyle = Object.assign(Object.assign({}, (0, inputs_styles_1.inputStyles)(theme)), { rightSection: { width: '100%' } });
        return loading
            ? {
                rightSection: (0, jsx_runtime_1.jsx)(core_1.Loader, { color: config_1.colors.B70, size: 32 }),
                styles: loadingStyle,
                value: undefined,
                placeholder: '',
                disabled: true,
            }
            : {};
    }, [loading, theme]);
    return ((0, jsx_runtime_1.jsx)(Wrapper, Object.assign({ style: { position: 'relative' }, className: className }, { children: multiselect ? ((0, jsx_runtime_1.jsx)(core_1.MultiSelect, Object.assign({ ref: ref, onChange: onChange, autoComplete: "nope", value: value }, defaultDesign, searchableSelectProps, { creatable: creatable, data: data, disabled: disabled, required: required, valueComponent: Value, "data-test-id": dataTestId }, props, loadingProps))) : ((0, jsx_runtime_1.jsx)(core_1.Select, Object.assign({ ref: ref, value: value, autoComplete: "nope" }, defaultDesign, searchableSelectProps, { creatable: creatable, disabled: disabled, filter: filterResults, onChange: onChange, data: data, required: required, "data-test-id": dataTestId, withinPortal: withinPortal }, props, loadingProps))) })));
});
function Value({ label, onRemove }) {
    const theme = (0, core_1.useMantineTheme)();
    const dark = theme.colorScheme === 'dark';
    const backgroundColor = dark ? theme.colors.dark[4] : theme.colors.gray[0];
    const color = dark ? theme.colors.dark[3] : theme.colors.gray[5];
    return ((0, jsx_runtime_1.jsxs)(core_1.Box, Object.assign({ sx: {
            alignItems: 'center',
            display: 'flex',
            borderRadius: '5px',
            backgroundColor,
            margin: '5px',
        } }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ style: {
                    margin: '6.5px 0px 6.5px 10px',
                    lineHeight: '20px',
                    maxWidth: '80px',
                    fontSize: 14,
                    fontWeight: 400,
                } }, { children: (0, jsx_runtime_1.jsx)(index_1.Text, Object.assign({ rows: 1 }, { children: label })) })), (0, jsx_runtime_1.jsx)(core_1.CloseButton, { style: { color }, onMouseDown: onRemove, variant: "transparent", size: 30, iconSize: 15 })] })));
}
const Wrapper = styled_1.default.div `
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