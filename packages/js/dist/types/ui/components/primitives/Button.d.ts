import { VariantProps } from 'class-variance-authority';
import { JSX } from 'solid-js/jsx-runtime';
import type { AppearanceKey } from '../../types';
export declare const buttonVariants: (props?: ({
    variant?: "default" | "secondary" | "icon" | "ghost" | "unstyled" | null | undefined;
    size?: "none" | "default" | "icon" | "sm" | "lg" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
type ButtonProps = JSX.IntrinsicElements['button'] & {
    appearanceKey?: AppearanceKey;
} & VariantProps<typeof buttonVariants>;
export declare const Button: (props: ButtonProps) => JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map