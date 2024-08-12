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
import { CodeHighlight as ExternalCode } from '@mantine/code-highlight';
import React from 'react';
import { css, cx } from '../../../styled-system/css';
import { splitCssProps } from '../../../styled-system/jsx';
import { codeBlock } from '../../../styled-system/recipes';
// TODO: use @mantine/code-highlight/styles.layer.css instead
import '@mantine/code-highlight/styles.css';
const DEFAULT_CODE_BLOCK_ELEMENT = 'div';
/**
 * @deprecated This is not actually deprecated but needs more work to be styled properly and align with our use cases.
 *
 * Issues:
 * - switching between color modes and maintaining readable code
 * - no line numbers are built-in to Highlight JS
 **/
export const CodeBlock = React.forwardRef((props, ref) => {
    const [variantProps, codeBlockProps] = codeBlock.splitVariantProps(props);
    const [cssProps, localProps] = splitCssProps(codeBlockProps);
    const { className, as, code } = localProps, otherProps = __rest(localProps, ["className", "as", "code"]);
    const classNames = codeBlock(variantProps);
    const Component = props.as || DEFAULT_CODE_BLOCK_ELEMENT;
    return (_jsx(ExternalCode, Object.assign({ ref: ref, component: Component, classNames: classNames, className: cx(css(cssProps), className), code: code }, otherProps)));
});
//# sourceMappingURL=CodeBlock.js.map