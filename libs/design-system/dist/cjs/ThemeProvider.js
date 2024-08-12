"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const notifications_1 = require("@mantine/notifications");
const theme_config_1 = require("./config/theme.config");
const config_1 = require("./config");
const icons_1 = require("./icons");
const IconProvider_1 = require("./iconsV2/IconProvider");
const color_scheme_1 = require("./color-scheme");
const accordionStyles = (theme) => ({
    item: {
        background: theme.colorScheme === 'dark' ? config_1.colors.B15 : config_1.colors.B98,
        borderRadius: 8,
        marginBottom: 24,
    },
    control: {
        color: config_1.colors.B60,
        fontSize: 14,
        lineHeight: '20px',
        padding: 16,
        paddingRight: 20,
        '&:hover': {
            background: 'transparent',
        },
    },
    content: {
        padding: 16,
    },
});
const notificationStyles = (theme) => {
    return {
        root: {
            backgroundColor: theme.colorScheme === 'dark' ? config_1.colors.B15 : config_1.colors.white,
            border: 'none',
            boxShadow: theme.colorScheme === 'dark' ? config_1.shadows.dark : config_1.shadows.light,
            width: '460px',
            borderRadius: '7px',
            padding: '20px',
            justify: 'space-between',
        },
        description: {
            fontSize: '16px',
            fontWeight: 400,
            color: theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B40,
        },
        closeButton: {
            color: theme.colorScheme === 'dark' ? config_1.colors.B40 : config_1.colors.B80,
        },
        icon: {
            width: '22px',
            height: '22px',
            marginRight: '10px',
        },
    };
};
function ThemeProvider({ children, shouldDisableGlobals, }) {
    const { colorScheme, toggleColorScheme } = (0, color_scheme_1.useColorScheme)();
    return ((0, jsx_runtime_1.jsx)(core_1.ColorSchemeProvider, Object.assign({ colorScheme: colorScheme, toggleColorScheme: toggleColorScheme }, { children: (0, jsx_runtime_1.jsxs)(core_1.MantineProvider, Object.assign({ withGlobalStyles: !shouldDisableGlobals, withNormalizeCSS: !shouldDisableGlobals, theme: Object.assign(Object.assign({ 
                // Override any other properties from default theme
                colorScheme }, theme_config_1.mantineConfig), { components: {
                    Notification: {
                        styles: notificationStyles,
                    },
                    Accordion: {
                        styles: accordionStyles,
                        defaultProps: {
                            chevron: (0, jsx_runtime_1.jsx)(icons_1.ChevronDown, {}),
                        },
                    },
                } }) }, { children: [!shouldDisableGlobals && ((0, jsx_runtime_1.jsx)(core_1.Global, { styles: (theme) => ({
                        body: Object.assign(Object.assign({}, theme.fn.fontStyles()), { backgroundColor: theme.colorScheme === 'dark' ? config_1.colors.BGDark : config_1.colors.BGLight, color: theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B40, marginRight: `calc(-1 * var(--removed-scroll-width, 0))`, overflow: 'hidden' }),
                        a: {
                            textDecoration: 'none',
                            color: 'inherit',
                        },
                    }) })), (0, jsx_runtime_1.jsx)(notifications_1.NotificationsProvider, { children: (0, jsx_runtime_1.jsx)(IconProvider_1.IconProvider, { children: children }) })] })) })));
}
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map