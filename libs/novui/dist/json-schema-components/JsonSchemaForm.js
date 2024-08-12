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
import { jsx as _jsx } from "react/jsx-runtime";
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import { splitCssProps } from '../../styled-system/jsx';
import { css, cx } from '../../styled-system/css';
import { ArrayFieldItemTemplate, ArrayFieldTemplate, ArrayFieldTitleTemplate } from './templates/ArrayFieldTemplate';
import { AddButton, MoveDownButton, MoveUpButton, RemoveButton } from './templates/IconButton';
import { ObjectFieldTemplate } from './templates/ObjectFieldTemplate';
import { CheckboxWidget, InputWidget, SelectWidget, TextareaWidget } from './widgets';
import { JSON_SCHEMA_FORM_ID_DELIMITER } from './utils';
const WIDGETS = {
    CheckboxWidget: CheckboxWidget,
    SelectWidget: SelectWidget,
    TextWidget: TextareaWidget,
    URLWidget: InputWidget,
    EmailWidget: InputWidget,
};
const UI_SCHEMA = {
    'ui:globalOptions': { addable: true, copyable: false, label: true, orderable: true },
    'ui:options': {
        hideError: true,
        submitButtonOptions: {
            norender: true,
        },
    },
};
/**
 * Specialized form editor for data passed as JSON.
 */
export function JsonSchemaForm(props) {
    const [cssProps, _a] = splitCssProps(props), { className } = _a, formProps = __rest(_a, ["className"]);
    return (_jsx(Form, Object.assign({ tagName: 'fieldset', className: cx(css({
            // default elements to hide
            '& .control-label, & .field-description': {
                display: 'none',
            },
            // hide raw text errors
            '& .panel.panel-danger.errors': {
                display: 'none',
            },
        }), css(cssProps), className), uiSchema: UI_SCHEMA, widgets: WIDGETS, validator: validator, autoComplete: 'false', idSeparator: JSON_SCHEMA_FORM_ID_DELIMITER, liveValidate: true, templates: {
            ArrayFieldTitleTemplate,
            ArrayFieldTemplate,
            ArrayFieldItemTemplate,
            ObjectFieldTemplate,
            ButtonTemplates: { MoveDownButton, AddButton, RemoveButton, MoveUpButton },
        } }, formProps)));
}
//# sourceMappingURL=JsonSchemaForm.js.map