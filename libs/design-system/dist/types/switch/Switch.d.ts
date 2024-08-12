import React, { ChangeEvent } from 'react';
interface ISwitchProps {
    label?: React.ReactNode;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    loading?: boolean;
    disabled?: boolean;
}
/**
 * Switch component
 *
 */
export declare const Switch: React.ForwardRefExoticComponent<ISwitchProps & React.RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=Switch.d.ts.map