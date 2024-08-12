import { ParentProps } from 'solid-js';
type ExternalElementMounterProps = ParentProps<{
    mount: (el: HTMLDivElement) => () => void;
}>;
export declare const ExternalElementMounter: ({ mount, ...rest }: ExternalElementMounterProps) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=ExternalElementMounter.d.ts.map