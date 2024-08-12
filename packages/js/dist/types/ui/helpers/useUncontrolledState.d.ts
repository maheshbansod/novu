import { Accessor, Setter } from 'solid-js';
type UseUncontrolledState = {
    value?: boolean;
    fallbackValue?: boolean;
};
type UseUncontrolledStateOutput = [Accessor<boolean>, Setter<boolean>];
export declare function useUncontrolledState(props: UseUncontrolledState): UseUncontrolledStateOutput;
export {};
//# sourceMappingURL=useUncontrolledState.d.ts.map