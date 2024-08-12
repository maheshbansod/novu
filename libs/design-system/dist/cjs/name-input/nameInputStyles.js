"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameInputStyles = void 0;
const config_1 = require("../config");
const nameInputStyles = (theme) => {
    const dark = theme.colorScheme === 'dark';
    return {
        root: {
            flex: '1 1 auto',
        },
        wrapper: {
            background: 'transparent',
            width: '100%',
        },
        input: {
            background: 'transparent',
            borderStyle: 'solid',
            borderColor: dark ? theme.colors.dark[5] : theme.colors.gray[5],
            color: dark ? config_1.colors.white : config_1.colors.B40,
            borderWidth: '1px',
            fontSize: '20px',
            fontWeight: 700,
            padding: '4px 10px',
            lineHeight: '28px',
            minHeight: 'auto',
            height: 'auto',
            width: '100%',
            textOverflow: 'ellipsis',
            '&:not(:placeholder-shown)': {
                borderColor: 'transparent',
                padding: '4px 10px',
            },
            '&:hover, &:focus': {
                borderColor: dark ? config_1.colors.B30 : config_1.colors.B80,
                padding: '4px 10px',
            },
            '&:disabled': {
                backgroundColor: dark ? config_1.colors.B15 : theme.white,
                color: dark ? theme.white : theme.black,
                opacity: 1,
            },
        },
    };
};
exports.nameInputStyles = nameInputStyles;
//# sourceMappingURL=nameInputStyles.js.map