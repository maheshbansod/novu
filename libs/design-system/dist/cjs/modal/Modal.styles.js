"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme) => {
    return {
        modal: {
            backgroundColor: theme.colorScheme === 'dark' ? config_1.colors.B15 : config_1.colors.white,
        },
        body: {
            paddingTop: '5px',
        },
        inner: {
            paddingTop: '180px',
        },
    };
});
//# sourceMappingURL=Modal.styles.js.map