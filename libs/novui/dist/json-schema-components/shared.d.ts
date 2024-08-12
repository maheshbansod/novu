import { FC } from 'react';
import { CoreProps, CorePropsWithChildren } from '../types';
export declare const FormGroupTitle: FC<CorePropsWithChildren>;
type SectionTitleToggleProps = CoreProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'children' | 'title'> & {
    onToggle: () => void;
    isExpanded: boolean;
    sectionDepth: number;
    sectionTitle?: React.ReactNode;
};
export declare const SectionTitleToggle: FC<SectionTitleToggleProps>;
export {};
//# sourceMappingURL=shared.d.ts.map