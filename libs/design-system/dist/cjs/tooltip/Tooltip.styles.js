"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const helper_1 = require("../config/helper");
exports.default = (0, core_1.createStyles)((theme, { error }) => {
    const dark = theme.colorScheme === 'dark';
    const opacityErrorColor = theme.fn.rgba(config_1.colors.error, 0.2);
    const errorGradient = (0, helper_1.getGradient)(opacityErrorColor);
    const backgroundErrorColor = dark ? config_1.colors.B17 : config_1.colors.white;
    const backgroundColor = dark ? config_1.colors.B20 : config_1.colors.white;
    const background = error ? `${errorGradient}, ${backgroundErrorColor}` : backgroundColor;
    const color = error ? config_1.colors.error : config_1.colors.B60;
    return {
        tooltip: {
            background,
            color,
            boxShadow: dark ? config_1.shadows.dark : config_1.shadows.medium,
            padding: '12px 15px',
            fontSize: '14px',
            fontWeight: 400,
        },
        arrow: {
            background,
        },
    };
});
//# sourceMappingURL=Tooltip.styles.js.map