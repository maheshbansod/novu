import { MantineTheme } from '@mantine/core';
export declare const getOutlineStyles: (theme: any) => {
    border: string;
    background: string;
    color: any;
    boxShadow: string;
};
export declare const getSubtleStyles: (theme: any) => {
    border: string;
    padding: string;
    background: string;
    color: any;
    boxShadow: string;
    '.mantine-Button-label': {
        'div[data-square]': {
            color: string;
            backgroundImage: string;
            backgroundColor: string;
        };
    };
    '&:hover:not(:disabled)': {
        background: string;
        color: any;
        filter: string;
        '.mantine-Button-label': {
            'div[data-square]': {
                color: any;
                backgroundColor: any;
                backgroundImage: string;
            };
            'div:last-of-type': {
                backgroundImage: string;
                backgroundColor: any;
                backgroundClip: string;
                color: string;
                WebkitTextFillColor: string;
            };
        };
    };
    '&:focus:not(:disabled)': {
        background: string;
        color: any;
        filter: string;
        '.mantine-Button-label': {
            'div[data-square]': {
                color: any;
                backgroundColor: any;
                backgroundImage: string;
            };
            'div:last-of-type': {
                backgroundImage: string;
                backgroundColor: any;
                backgroundClip: string;
                color: string;
                WebkitTextFillColor: string;
            };
        };
    };
    '&:disabled': {
        opacity: number;
        background: string;
    };
};
export declare const getPulseStyles: () => {
    "&:not(:disabled):not([data-loading])": {
        animation: string;
        '@keyframes pulse-animation': {
            '0%': {
                boxShadow: string;
            };
            '70%': {
                boxShadow: string;
            };
            '100%': {
                boxShadow: string;
            };
        };
    };
};
declare const _default: (params: {
    disabled: boolean;
    inherit: boolean;
    variant?: string;
    pulse?: boolean;
}, options?: import("@mantine/core").UseStylesOptions<string>) => {
    classes: {
        label: string;
        root: string;
    };
    cx: (...args: any) => string;
    theme: MantineTheme;
};
export default _default;
//# sourceMappingURL=Button.styles.d.ts.map