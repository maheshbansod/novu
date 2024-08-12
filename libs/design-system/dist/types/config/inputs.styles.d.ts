import { MantineTheme } from '@mantine/core';
export declare const INPUT_HEIGHT_PX = 50;
export declare const inputStyles: (theme: MantineTheme) => {
    rightSection: {
        color: string;
    };
    input: {
        minHeight: string;
        borderRadius: string;
        borderColor: string;
        backgroundColor: string;
        color: string;
        margin: string;
        '&:focus, &:focus-within': {
            borderColor: string;
        };
        '&::placeholder': {
            color: string;
        };
        '&:focus&:invalid': {
            borderColor: string;
        };
    };
    label: {
        color: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        margin: string;
    };
    invalid: {
        borderColor: string;
        color: string;
        '&::placeholder': {
            color: string;
        };
    };
    error: {
        color: string;
        fontSize: string;
    };
    description: {
        color: string;
        fontSize: string;
        fontWeight: number;
        marginTop: string;
        marginBottom: string;
        lineHeight: string;
    };
    disabled: {
        backgroundColor: string;
        borderColor: string;
        color: string;
        '&::placeholder': {
            color: string;
        };
    };
};
//# sourceMappingURL=inputs.styles.d.ts.map