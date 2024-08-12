import React from 'react';
interface ICardCell {
    navIcon?: (props: React.ComponentPropsWithoutRef<'svg'>) => JSX.Element | React.ReactNode;
    description?: React.ReactNode | string;
    navigateTo?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    imagePath?: string;
    href?: string;
    disabled?: boolean;
    testId?: string;
}
export declare function Cards({ cells }: {
    cells: ICardCell[];
}): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Cards.d.ts.map