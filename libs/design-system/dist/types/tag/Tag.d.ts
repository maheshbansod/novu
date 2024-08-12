import { PropsWithChildren } from 'react';
interface ITagProps extends PropsWithChildren<{}> {
    color?: string;
    border?: string;
    ml?: number;
    mr?: number;
}
/**
 * Tag Component
 *
 */
export declare function Tag({ children, color, border, ...props }: ITagProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Tag.d.ts.map