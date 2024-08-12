import { ButtonProps as ExternalButtonProps } from '@mantine/core';
import React from 'react';
import { type ButtonVariant } from '../../../styled-system/recipes';
import { JsxStyleProps } from '../../../styled-system/types';
import { IconType } from '../../icons';
import { CoreProps, CorePropsWithChildren } from '../../types';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
export interface ButtonCoreProps extends CorePropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement>, Pick<ExternalButtonProps, 'loading'> {
    Icon?: IconType;
    loading?: boolean;
}
type ButtonDefaultElement = 'button';
export type ButtonProps<C extends React.ElementType = ButtonDefaultElement> = PolymorphicComponentPropWithRef<C, JsxStyleProps & Partial<ButtonVariant> & CoreProps & ButtonCoreProps>;
type PolymorphicComponent = <C extends React.ElementType = ButtonDefaultElement>(props: ButtonProps<C>) => JSX.Element | null;
export declare const Button: PolymorphicComponent;
export {};
//# sourceMappingURL=Button.d.ts.map