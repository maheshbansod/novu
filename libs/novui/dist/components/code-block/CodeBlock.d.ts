import { CodeHighlightProps as ExternalCodeProps } from '@mantine/code-highlight';
import React from 'react';
import { CodeBlockVariantProps } from '../../../styled-system/recipes';
import type { JsxStyleProps } from '../../../styled-system/types';
import { CoreProps } from '../../types';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
import '@mantine/code-highlight/styles.css';
export type CodeBlockCoreProps = Pick<ExternalCodeProps, 'language' | 'code' | 'withCopyButton'>;
type CodeBlockElement = 'div';
export type CodeBlockProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, JsxStyleProps & CodeBlockVariantProps & CoreProps & CodeBlockCoreProps>;
type PolymorphicComponent = <C extends React.ElementType = CodeBlockElement>(props: CodeBlockProps<C>) => JSX.Element | null;
/**
 * @deprecated This is not actually deprecated but needs more work to be styled properly and align with our use cases.
 *
 * Issues:
 * - switching between color modes and maintaining readable code
 * - no line numbers are built-in to Highlight JS
 **/
export declare const CodeBlock: PolymorphicComponent;
export {};
//# sourceMappingURL=CodeBlock.d.ts.map