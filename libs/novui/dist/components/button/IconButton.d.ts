import React from 'react';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
import { JsxStyleProps } from '../../../styled-system/types';
import { type ButtonVariant } from '../../../styled-system/recipes';
import { IconType } from '../../icons';
import { CoreProps } from '../../types';
interface IIconButtonProps {
    Icon: IconType;
    loading?: boolean;
}
type IconButtonDefaultElement = 'button';
export type IconButtonProps<C extends React.ElementType = IconButtonDefaultElement> = PolymorphicComponentPropWithRef<C, JsxStyleProps & Partial<ButtonVariant> & CoreProps & IIconButtonProps>;
type PolymorphicComponent = <C extends React.ElementType = IconButtonDefaultElement>(props: IconButtonProps<C>) => JSX.Element | null;
/**
 * A button with only an Icon.
 *
 * TODO: there are not specifications for these in the Design System, so this just follows the Button recipe.
 */
export declare const IconButton: PolymorphicComponent;
export {};
//# sourceMappingURL=IconButton.d.ts.map