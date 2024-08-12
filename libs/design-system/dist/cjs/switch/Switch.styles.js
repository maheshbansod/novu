"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme, _params, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const label = getRef('label');
    return {
        root: {
            display: 'flex',
            alignItems: 'center',
        },
        input: {
            backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[5],
            width: '1px',
            height: '1px',
            border: 'transparent',
            cursor: 'pointer',
            '&::before': {
                border: 'transparent',
                width: '20px',
                height: '20px',
            },
            '&:not(checked) ~ label': {
                backgroundColor: dark ? 'rgb(61, 61, 77)' : theme.colors.gray[5],
            },
            '&:checked ~ label': {
                backgroundImage: config_1.colors.horizontal,
            },
            [`&:checked ~ div > .${label}`]: {
                backgroundImage: config_1.colors.horizontal,
                backgroundClip: 'text',
                color: 'transparent',
            },
            '&:disabled': {
                opacity: 0.75,
            },
        },
        label: {
            ref: label,
            paddingLeft: '10px',
            backgroundImage: 'none',
            color: dark ? theme.colors.dark[6] : theme.colors.gray[6],
            cursor: 'pointer',
        },
        track: {
            width: '46px',
            height: '24px',
            border: 'none',
        },
        thumb: {
            border: 'none',
        },
    };
});
//# sourceMappingURL=Switch.styles.js.map