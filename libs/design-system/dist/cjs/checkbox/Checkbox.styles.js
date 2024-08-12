"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme, _params, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const label = getRef('label');
    return {
        icon: {
            color: 'white',
        },
        input: {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.gray[7]}`,
            '&:checked': {
                backgroundImage: config_1.colors.horizontal,
                color: dark ? 'white' : config_1.colors.B40,
                border: 'transparent',
                [`& + .${label}`]: {
                    fontWeight: 'bold !important',
                },
                '&:disabled': {
                    opacity: '0.45',
                    '& + svg': {
                        color: 'white',
                        opacity: '0.45',
                    },
                },
            },
            '&:disabled': {
                backgroundColor: 'transparent',
            },
        },
        label: {
            ref: label,
            color: dark ? 'white' : config_1.colors.B40,
            fontSize: '14px',
            padding: '0',
            margin: '0 10px',
            opacity: _params.disabled ? 0.4 : 1,
        },
    };
});
//# sourceMappingURL=Checkbox.styles.js.map