import React from 'react';
interface ITemplateButtonProps {
    Icon: React.FC<any>;
    description: string;
    label: string;
    active?: boolean;
    action?: boolean;
    tabKey: string;
    testId?: string;
    checked?: boolean;
    readonly?: boolean;
    switchButton?: (boolean: any) => void;
    changeTab: (string: any) => void;
    errors?: boolean | string;
}
export declare function TemplateButton({ description, active, changeTab, tabKey, action, switchButton, checked, readonly, label, Icon, testId, errors, }: ITemplateButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TemplateButton.d.ts.map