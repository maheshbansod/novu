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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { getTemplate, getUiOptions, } from '@rjsf/utils';
import { css } from '../../../styled-system/css';
import { Box } from '../../../styled-system/jsx';
import { jsonSchemaFormArrayToolbar, jsonSchemaFormSection } from '../../../styled-system/recipes';
import { FormGroupTitle, SectionTitleToggle } from '../shared';
import { calculateSectionDepth, getVariantFromDepth } from '../utils';
import { useExpandToggle } from '../useExpandToggle';
export function ArrayFieldTemplate(props) {
    const [isExpanded, toggleExpanded] = useExpandToggle();
    const { canAdd, disabled, idSchema, uiSchema, items, onAddClick, readonly, registry, required, title, schema } = props;
    const { ButtonTemplates: { AddButton }, } = registry.templates;
    const uiOptions = getUiOptions(uiSchema);
    const ArrayFieldTitleTemplate = getTemplate('ArrayFieldTitleTemplate', registry, uiOptions);
    const ArrayFieldItemTemplate = getTemplate('ArrayFieldItemTemplate', registry, uiOptions);
    const sectionDepth = calculateSectionDepth({ sectionId: props.idSchema.$id });
    const depthVariant = getVariantFromDepth(sectionDepth);
    const sectionClassNames = jsonSchemaFormSection({
        depth: depthVariant,
    });
    return (_jsxs(Box, Object.assign({ className: sectionClassNames.sectionRoot }, { children: [_jsx(SectionTitleToggle, { onToggle: toggleExpanded, isExpanded: isExpanded, sectionDepth: sectionDepth, sectionTitle: uiOptions.title || title ? (_jsx(ArrayFieldTitleTemplate, { idSchema: idSchema, title: uiOptions.title || title, schema: schema, uiSchema: uiSchema, required: required, registry: registry })) : undefined }), isExpanded ? (_jsxs(_Fragment, { children: [items.map((_a) => {
                        var { key } = _a, itemProps = __rest(_a, ["key"]);
                        return _jsx(ArrayFieldItemTemplate, Object.assign({}, itemProps), key);
                    }), canAdd && (_jsx(AddButton, { onClick: onAddClick, disabled: disabled || readonly, registry: registry, className: css({ mt: '150' }) }))] })) : null] })));
}
export function ArrayFieldTitleTemplate({ title }) {
    return _jsx(FormGroupTitle, { children: title });
}
export function ArrayFieldItemTemplate(props) {
    const { children, disabled, hasMoveDown, hasMoveUp, hasRemove, index, onDropIndexClick, onReorderClick, readonly, registry, schema, } = props;
    const { MoveDownButton, MoveUpButton, RemoveButton } = registry.templates.ButtonTemplates;
    const toolbarClassNames = jsonSchemaFormArrayToolbar({
        itemType: typeof schema.type === 'object' ? schema.type[0] : schema.type,
    });
    return (_jsxs("div", Object.assign({ className: toolbarClassNames.toolbarWrapper }, { children: [children, _jsxs("div", Object.assign({ role: "toolbar", className: toolbarClassNames.toolbar }, { children: [(hasMoveUp || hasMoveDown) && (_jsx(MoveUpButton, { disabled: disabled || readonly || !hasMoveUp, onClick: onReorderClick(index, index - 1), registry: registry })), (hasMoveUp || hasMoveDown) && (_jsx(MoveDownButton, { disabled: disabled || readonly || !hasMoveDown, onClick: onReorderClick(index, index + 1), registry: registry })), hasRemove && (_jsx(RemoveButton, { disabled: disabled || readonly, onClick: onDropIndexClick(index), registry: registry }))] }))] })));
}
//# sourceMappingURL=ArrayFieldTemplate.js.map