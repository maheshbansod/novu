import React from 'react';
import { type TextVariantProps } from '../../../styled-system/recipes';
import type { JsxStyleProps } from '../../../styled-system/types';
import { CoreProps } from '../../types';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
export type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, JsxStyleProps & TextVariantProps & CoreProps>;
type PolymorphicComponent = <C extends React.ElementType = 'p'>(props: TextProps<C>) => JSX.Element | null;
export declare const Text: PolymorphicComponent;
export {};
//# sourceMappingURL=Text.d.ts.map