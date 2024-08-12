import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box } from '../../../styled-system/jsx';
import { jsonSchemaFormSection } from '../../../styled-system/recipes';
import { FormGroupTitle, SectionTitleToggle } from '../shared';
import { calculateSectionDepth, getVariantFromDepth } from '../utils';
import { useExpandToggle } from '../useExpandToggle';
export function ObjectFieldTemplate(props) {
    const [isExpanded, toggleExpanded] = useExpandToggle();
    const sectionDepth = calculateSectionDepth({ sectionId: props.idSchema.$id });
    const depthVariant = getVariantFromDepth(sectionDepth);
    const sectionClassNames = jsonSchemaFormSection({
        depth: depthVariant,
    });
    return (_jsxs(Box, Object.assign({ className: sectionClassNames.sectionRoot }, { children: [_jsx(SectionTitleToggle, { onToggle: toggleExpanded, isExpanded: isExpanded, sectionDepth: sectionDepth, sectionTitle: props.title ? _jsx(FormGroupTitle, { children: props.title }) : undefined }), isExpanded ? (_jsx(_Fragment, { children: props.properties.map((element) => (_jsx(Box, { children: element.content }, element.name))) })) : null] })));
}
//# sourceMappingURL=ObjectFieldTemplate.js.map