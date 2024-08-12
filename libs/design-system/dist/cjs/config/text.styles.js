"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTextStyles = void 0;
const core_1 = require("@mantine/core");
const colors_1 = require("./colors");
exports.useTextStyles = (0, core_1.createStyles)((theme) => {
    const dark = theme.colorScheme === 'dark';
    const primaryColor = dark ? theme.white : theme.colors.gray[8];
    return {
        heading: {
            color: dark ? theme.white : colors_1.colors.B40,
        },
        subHeading: {
            color: dark ? colors_1.colors.B40 : primaryColor,
        },
        separator: {
            borderTopColor: dark ? colors_1.colors.B20 : colors_1.colors.BGLight,
            margin: '24px 0',
        },
    };
});
//# sourceMappingURL=text.styles.js.map