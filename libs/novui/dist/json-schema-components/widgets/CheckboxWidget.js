import { jsx as _jsx } from "react/jsx-runtime";
import { Checkbox } from '../../components/checkbox/Checkbox';
export const CheckboxWidget = (props) => {
    return (_jsx(Checkbox, { checked: typeof props.value === 'undefined' ? false : props.value, description: props.schema.description, onChange: ({ target }) => props.onChange(target.checked), required: props.required, label: props.label }));
};
//# sourceMappingURL=CheckboxWidget.js.map