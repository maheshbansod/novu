import { ClassValue } from 'clsx';
import { type ClassNameValue } from 'tailwind-merge';
import type { CSSProperties, Elements, Variables } from '../types';
export type ClassName = ClassNameValue;
export declare function cn(...inputs: ClassValue[]): string;
export declare function generateRandomString(length: number): string;
export declare function cssObjectToString(styles: CSSProperties): string;
export declare function createClassAndRuleFromCssString(classNameSet: Set<string>, styles: string): {
    className: string;
    rule: string;
};
export declare function generateDefaultColor(props: {
    color: string;
    key: string;
    id: string;
}): string;
export declare function generatesSolidShadesFromColor(props: {
    color: string;
    key: string;
    id: string;
}): string[];
export declare function generatesAlphaShadesFromColor(props: {
    color: string;
    key: string;
    id: string;
}): string[];
export declare const parseVariables: (variables: Required<Variables>, id: string) => string[];
export declare const parseElements: (elements: Elements) => {
    key: string;
    rule: string;
    className: string;
}[];
//# sourceMappingURL=utils.d.ts.map