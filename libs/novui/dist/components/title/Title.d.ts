import React from 'react';
import { type TitleVariantProps } from '../../../styled-system/recipes';
import type { JsxStyleProps } from '../../../styled-system/types';
import { CoreProps, ExtractGeneric } from '../../types';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
export type TitleProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, JsxStyleProps & TitleVariantProps & CoreProps>;
export type TitleVariant = ExtractGeneric<TitleVariantProps['variant']>;
type PolymorphicComponent = <C extends React.ElementType = 'h1'>(props: TitleProps<C>) => JSX.Element | null;
export declare const Title: PolymorphicComponent;
export {};
//# sourceMappingURL=Title.d.ts.map