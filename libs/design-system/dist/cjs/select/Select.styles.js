"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSelectStyles = void 0;
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.useSelectStyles = (0, core_1.createStyles)((theme, _params, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const rightSection = getRef('rightSection');
    return {
        rightSection: {
            ref: rightSection,
            color: `${dark ? theme.white : theme.colors.gray[8]} !important`,
            pointerEvents: 'none',
            marginRight: '2.5px',
        },
        dropdown: {
            backgroundColor: dark ? theme.colors.dark[4] : theme.white,
            borderRadius: '7px',
            padding: '5px',
            border: 'none',
            margin: '5px 0px',
            boxShadow: dark ? theme.shadows.lg : theme.shadows.md,
        },
        item: {
            padding: '10px',
            borderRadius: '5px',
            color: dark ? theme.white : theme.colors.gray[8],
            left: '5px',
            top: '5px',
            margin: '2.5px 0px',
            lineHeight: '20px',
            ['&[data-selected]']: {
                color: dark ? theme.white : theme.colors.gray[8],
                backgroundColor: dark
                    ? theme.fn.lighten(theme.colors.dark[5], 0.1)
                    : theme.fn.darken(theme.colors.gray[2], 0.1),
            },
            '&[data-hovered]:not([data-selected])': {
                backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[2],
            },
        },
        values: {
            height: 'auto',
            lineHeight: '50px',
        },
        value: {
            borderRadius: '5px',
            backgroundColor: dark ? theme.colors.dark[4] : theme.colors.gray[0],
            padding: '15px 7px 15px 10px',
            margin: '0px 5px',
            fontWeight: 400,
        },
        disabled: {
            [`& + .${rightSection}`]: {
                color: `${config_1.colors.B70} !important`,
            },
        },
    };
});
//# sourceMappingURL=Select.styles.js.map