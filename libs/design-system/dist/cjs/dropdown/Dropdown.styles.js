"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme) => {
    const dark = theme.colorScheme === 'dark';
    return {
        arrow: {
            width: '7px',
            height: '7px',
            backgroundColor: dark ? config_1.colors.B20 : config_1.colors.white,
            border: 'none',
        },
        dropdown: {
            backgroundColor: dark ? config_1.colors.B20 : config_1.colors.white,
            color: dark ? theme.white : config_1.colors.B40,
            border: 'none',
            boxShadow: config_1.shadows.dark,
        },
        item: {
            borerRadius: '5px',
            color: `${dark ? theme.white : config_1.colors.B40} !important`,
            fontWeight: 400,
            fontSize: '14px',
            ['&[data-critical]']: { '&:hover': { color: `${config_1.colors.error} !important` } },
        },
        itemHovered: {
            backgroundColor: dark ? config_1.colors.B30 : config_1.colors.B98,
        },
        divider: {
            margin: '10px',
            borderTop: `0.0625rem solid ${dark ? config_1.colors.B30 : config_1.colors.BGLight}`,
        },
    };
});
//# sourceMappingURL=Dropdown.styles.js.map