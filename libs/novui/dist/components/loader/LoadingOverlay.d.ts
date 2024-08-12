import { LoaderProps as ExternalLoaderProps } from '@mantine/core';
import React from 'react';
import { PolymorphicComponentPropWithRef } from '../../types/props-helpers';
import { JsxStyleProps } from '../../../styled-system/types';
import { type LoadingOverlayVariant } from '../../../styled-system/recipes';
import { CoreProps } from '../../types';
import { IconSize } from '../../icons';
import { ZIndexToken } from '../../../styled-system/tokens';
export type LoaderSize = IconSize | '64';
type LoadingOverlayCoreProps = {
    isVisible?: boolean;
    size?: LoaderSize;
    zIndex?: ZIndexToken;
} & Pick<ExternalLoaderProps, 'type'>;
type LoadingOverlayDefaultElement = 'div';
export type LoadingOverlayProps<C extends React.ElementType = LoadingOverlayDefaultElement> = PolymorphicComponentPropWithRef<C, JsxStyleProps & Partial<LoadingOverlayVariant> & CoreProps & LoadingOverlayCoreProps>;
type PolymorphicComponent = <C extends React.ElementType = LoadingOverlayDefaultElement>(props: LoadingOverlayProps<C>) => JSX.Element | null;
/**
 * Loader with overlay.
 *
 * TODO: Add support for container-scoped loader. For now, only full-page works.
 * To work around this, use position: relative in the parent component
 */
export declare const LoadingOverlay: PolymorphicComponent;
export {};
//# sourceMappingURL=LoadingOverlay.d.ts.map