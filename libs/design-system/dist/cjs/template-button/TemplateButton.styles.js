"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTemplateButtonStyles = void 0;
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const helper_1 = require("../config/helper");
exports.useTemplateButtonStyles = (0, core_1.createStyles)((theme) => {
    const dark = theme.colorScheme === 'dark';
    return {
        active: {
            background: `${dark ? (0, helper_1.getGradient)(config_1.colors.B20) : (0, helper_1.getGradient)(config_1.colors.white)} padding-box, ${config_1.colors.horizontal} border-box`,
            boxShadow: dark ? config_1.shadows.dark : config_1.shadows.light,
        },
        variant: {
            height: '120px',
        },
        variantRoot: {
            border: `1px dashed ${dark ? config_1.colors.B40 : config_1.colors.B60}`,
        },
        button: {
            height: '80px',
            width: '100%',
            margin: '0px',
            backgroundColor: dark ? config_1.colors.B17 : config_1.colors.B98,
            borderRadius: '7px',
            fontWeight: 700,
            border: '1px solid transparent',
            boxShadow: dark ? config_1.shadows.dark : config_1.shadows.light,
            '&:hover': {
                backgroundColor: dark ? config_1.colors.B20 : config_1.colors.BGLight,
            },
        },
        linkIcon: {
            marginLeft: '5px',
            color: dark ? config_1.colors.B40 : config_1.colors.B70,
            '& *': {
                display: 'block',
            },
        },
    };
});
//# sourceMappingURL=TemplateButton.styles.js.map