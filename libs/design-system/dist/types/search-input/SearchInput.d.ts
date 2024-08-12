/// <reference types="react" />
export interface ISearchInputProps {
    placeholder?: string;
    value?: string;
    ref?: React.Ref<HTMLInputElement>;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClearClick?: React.MouseEventHandler<SVGElement>;
    'data-test-id'?: string;
}
export declare const SearchInput: import("react").ForwardRefExoticComponent<Omit<ISearchInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=SearchInput.d.ts.map