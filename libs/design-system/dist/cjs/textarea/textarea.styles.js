"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textareaStyles = void 0;
const config_1 = require("../config");
const textareaStyles = (theme) => {
    const dark = theme.colorScheme === 'dark';
    const primaryColor = dark ? theme.white : theme.colors.gray[8];
    const invalidColor = config_1.colors.error;
    const secondaryColor = dark ? theme.colors.dark[3] : theme.colors.gray[6];
    return {
        input: {
            borderColor: dark ? theme.colors.dark[5] : theme.colors.gray[5],
            backgroundColor: 'transparent',
            color: primaryColor,
            margin: '5px 0px',
            '&:focus, &:focus-within': {
                borderColor: theme.colors.gray[7],
            },
            '&::placeholder': {
                color: secondaryColor,
            },
        },
        label: {
            color: primaryColor,
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            margin: '5px 0px',
        },
        invalid: {
            borderColor: invalidColor,
            color: primaryColor,
            '&::placeholder': {
                color: secondaryColor,
            },
        },
        error: {
            color: `${invalidColor} !important`,
            fontSize: '12px',
        },
        description: {
            color: `${secondaryColor} !important`,
            fontSize: `14px !important`,
            fontWeight: 400,
            marginTop: '0px',
            marginBottom: '10px',
            lineHeight: '17px',
        },
        disabled: {
            backgroundColor: `${dark ? config_1.colors.B20 : config_1.colors.B98} !important`,
            borderColor: `${dark ? config_1.colors.B30 : config_1.colors.BGLight} !important`,
            color: `${secondaryColor} !important`,
            '&::placeholder': {
                color: `${secondaryColor} !important`,
            },
        },
    };
};
exports.textareaStyles = textareaStyles;
//# sourceMappingURL=textarea.styles.js.map