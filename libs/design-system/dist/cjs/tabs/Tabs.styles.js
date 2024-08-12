"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTabsStyles = void 0;
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.useTabsStyles = (0, core_1.createStyles)((theme, withIcon, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const tabLabel = getRef('tabLabel');
    const tabIcon = getRef('tabIcon');
    return {
        tabsList: {
            gap: '30px',
            borderBottom: 'none',
        },
        panel: {
            paddingTop: '15px',
        },
        tab: {
            display: 'block',
            cursor: 'pointer',
            marginBottom: withIcon ? '30px' : '0',
            padding: '0px',
            height: '30px',
            borderBottom: 'none',
            '&:hover': {
                background: 'none',
                [`& .${tabIcon}`]: {
                    color: dark ? config_1.colors.white : config_1.colors.B40,
                },
                [`& .${tabLabel}`]: {
                    color: dark ? config_1.colors.white : config_1.colors.B40,
                },
            },
            ['&[data-active]']: {
                width: 'auto',
                [`& .${tabLabel}`]: {
                    color: dark ? config_1.colors.white : config_1.colors.B40,
                    '&::after': {
                        content: '""',
                        display: 'block',
                        height: '2px',
                        marginTop: '10px',
                        background: config_1.colors.horizontal,
                        borderRadius: '10px',
                    },
                },
                [`& .${tabIcon}`]: {
                    color: 'red',
                    background: config_1.colors.horizontal,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                },
            },
        },
        tabLabel: {
            ref: tabLabel,
            height: '100%',
            fontSize: '14px',
            fontWeight: 700,
            color: config_1.colors.B60,
            textAlign: 'left',
        },
        tabIcon: {
            ref: tabIcon,
            display: 'block',
            fontSize: '26px',
            fontWeight: 700,
            marginBottom: '5px',
            color: config_1.colors.B60,
            textAlign: 'left',
        },
    };
});
//# sourceMappingURL=Tabs.styles.js.map