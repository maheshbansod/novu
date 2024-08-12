"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const helper_1 = require("../config/helper");
exports.default = (0, core_1.createStyles)((theme, _params, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const label = getRef('label');
    return {
        root: {
            width: '100%',
            maxWidth: '300px',
            background: dark ? theme.colors.dark[7] : theme.white,
            padding: '5px',
            boxShadow: dark ? config_1.shadows.dark : config_1.shadows.light,
        },
        active: {
            background: `${dark ? (0, helper_1.getGradient)(config_1.colors.B20) : (0, helper_1.getGradient)(config_1.colors.white)} padding-box, ${config_1.colors.horizontal} border-box`,
            border: '2px solid transparent',
        },
        label: {
            ref: label,
            fontSize: '14px',
            fontWeight: 700,
            padding: `12px ${_params.size === 'md' ? '18' : '14'}px`,
            color: theme.colors.gray[8],
        },
        labelActive: {
            color: dark ? theme.white : theme.colors.gray[8],
        },
    };
});
//# sourceMappingURL=SegmentedControl.styles.js.map