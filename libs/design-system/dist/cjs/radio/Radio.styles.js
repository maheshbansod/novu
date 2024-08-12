"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme, _params, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const label = getRef('label');
    return {
        radio: {
            marginRight: '10px',
            color: config_1.colors.B60,
            background: 'transparent',
            border: `1px solid ${config_1.colors.B60}`,
            '&:disabled': {
                opacity: '0.85',
                '& + span': {
                    opacity: '0.85',
                },
            },
            '&:disabled:not(:checked)': {
                background: 'transparent',
            },
            '&:checked:before': {
                width: '8px',
                height: '8px',
                background: 'white',
            },
            '&:checked': {
                color: dark ? 'white' : config_1.colors.B40,
                border: 'none',
                '&:disabled': {
                    opacity: '0.65',
                    '& + span': {
                        opacity: '0.65',
                    },
                },
                '& + span': {
                    color: dark ? 'white' : config_1.colors.B40,
                },
            },
        },
        label: {
            ref: label,
            color: config_1.colors.B60,
            fontSize: '14px',
            paddingLeft: '10px',
        },
    };
});
//# sourceMappingURL=Radio.styles.js.map