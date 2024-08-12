import { Placement } from '@floating-ui/dom';
import { Accessor, JSX, Setter } from 'solid-js';
type TooltipRootProps = {
    open?: boolean;
    children?: JSX.Element;
    placement?: Placement;
    fallbackPlacements?: Placement[];
};
type TooltipContextValue = {
    open: Accessor<boolean>;
    setOpen: Setter<boolean>;
    reference: Accessor<HTMLElement | null>;
    floating: Accessor<HTMLElement | null>;
    setReference: Setter<HTMLElement | null>;
    setFloating: Setter<HTMLElement | null>;
    floatingStyles: () => Record<any, any>;
};
export declare function TooltipRoot(props: TooltipRootProps): JSX.Element;
export declare function useTooltip(): TooltipContextValue;
export {};
//# sourceMappingURL=TooltipRoot.d.ts.map