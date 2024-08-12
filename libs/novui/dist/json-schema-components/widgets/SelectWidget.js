import { jsx as _jsx } from "react/jsx-runtime";
import { Select } from '../../components';
export const SelectWidget = (props) => {
    const { options, label, required, disabled, readonly, value, schema, onChange, rawErrors } = props;
    const data = options.enumOptions.map((option) => {
        return {
            label: option.label,
            value: String(option.value),
        };
    });
    return (_jsx(Select, { description: schema.description, onChange: onChange, value: typeof value === 'undefined' ? '' : String(value), required: required, label: label, data: data, disabled: disabled, readOnly: readonly, error: (rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) > 0 && rawErrors }));
};
//# sourceMappingURL=SelectWidget.js.map