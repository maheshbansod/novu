import { MantineTheme } from '@mantine/core';
export declare const textareaStyles: (theme: MantineTheme) => {
    input: {
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
//# sourceMappingURL=textarea.styles.d.ts.map