import { jsx as _jsx } from "react/jsx-runtime";
import { getInputProps } from '@rjsf/utils';
import { Textarea } from '../../components';
export const TextareaWidget = (props) => {
    const { type, value, label, schema, onChange, options, required, readonly, rawErrors, disabled } = props;
    const inputProps = getInputProps(schema, type, options);
    return (_jsx(Textarea, { description: props.schema.description, onChange: (event) => {
            event.preventDefault();
            onChange(event.target.value);
        }, value: value || value === 0 ? value : '', required: required, label: label, type: inputProps.type, error: (rawErrors === null || rawErrors === void 0 ? void 0 : rawErrors.length) > 0 && rawErrors, readOnly: readonly, disabled: disabled }));
};
//# sourceMappingURL=TextareaWidget.js.map