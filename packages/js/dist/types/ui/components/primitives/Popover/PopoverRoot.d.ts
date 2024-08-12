import { Placement } from '@floating-ui/dom';
import { Accessor, JSX, Setter } from 'solid-js';
type PopoverRootProps = {
    open?: boolean;
    children?: JSX.Element;
    fallbackPlacements?: Placement[];
    placement?: Placement;
};
type PopoverContextValue = {
    open: Accessor<boolean>;
    reference: Accessor<HTMLElement | null>;
    floating: Accessor<HTMLElement | null>;
    setReference: Setter<HTMLElement | null>;
    setFloating: Setter<HTMLElement | null>;
    onToggle: () => void;
    onClose: () => void;
    floatingStyles: () => Record<any, any>;
};
export declare function PopoverRoot(props: PopoverRootProps): JSX.Element;
export declare function usePopover(): PopoverContextValue;
export {};
//# sourceMappingURL=PopoverRoot.d.ts.map