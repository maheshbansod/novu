"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)(({ colorScheme }) => ({
    dropdown: {
        padding: '16px',
        backgroundColor: colorScheme === 'dark' ? config_1.colors.B20 : config_1.colors.white,
        color: config_1.colors.B60,
        border: 'none',
    },
    arrow: {
        backgroundColor: colorScheme === 'dark' ? config_1.colors.B20 : config_1.colors.white,
        height: '7px',
        border: 'none',
        margin: '0px',
    },
}));
//# sourceMappingURL=NavLinkPopover.styles.js.map