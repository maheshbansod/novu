import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MantineProvider, Global, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { mantineConfig } from './config/theme.config';
import { colors, shadows } from './config';
import { ChevronDown } from './icons';
import { IconProvider } from './iconsV2/IconProvider';
import { useColorScheme } from './color-scheme';
const accordionStyles = (theme) => ({
    item: {
        background: theme.colorScheme === 'dark' ? colors.B15 : colors.B98,
        borderRadius: 8,
        marginBottom: 24,
    },
    control: {
        color: colors.B60,
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
            backgroundColor: theme.colorScheme === 'dark' ? colors.B15 : colors.white,
            border: 'none',
            boxShadow: theme.colorScheme === 'dark' ? shadows.dark : shadows.light,
            width: '460px',
            borderRadius: '7px',
            padding: '20px',
            justify: 'space-between',
        },
        description: {
            fontSize: '16px',
            fontWeight: 400,
            color: theme.colorScheme === 'dark' ? colors.white : colors.B40,
        },
        closeButton: {
            color: theme.colorScheme === 'dark' ? colors.B40 : colors.B80,
        },
        icon: {
            width: '22px',
            height: '22px',
            marginRight: '10px',
        },
    };
};
export function ThemeProvider({ children, shouldDisableGlobals, }) {
    const { colorScheme, toggleColorScheme } = useColorScheme();
    return (_jsx(ColorSchemeProvider, Object.assign({ colorScheme: colorScheme, toggleColorScheme: toggleColorScheme }, { children: _jsxs(MantineProvider, Object.assign({ withGlobalStyles: !shouldDisableGlobals, withNormalizeCSS: !shouldDisableGlobals, theme: Object.assign(Object.assign({ 
                // Override any other properties from default theme
                colorScheme }, mantineConfig), { components: {
                    Notification: {
                        styles: notificationStyles,
                    },
                    Accordion: {
                        styles: accordionStyles,
                        defaultProps: {
                            chevron: _jsx(ChevronDown, {}),
                        },
                    },
                } }) }, { children: [!shouldDisableGlobals && (_jsx(Global, { styles: (theme) => ({
                        body: Object.assign(Object.assign({}, theme.fn.fontStyles()), { backgroundColor: theme.colorScheme === 'dark' ? colors.BGDark : colors.BGLight, color: theme.colorScheme === 'dark' ? colors.white : colors.B40, marginRight: `calc(-1 * var(--removed-scroll-width, 0))`, overflow: 'hidden' }),
                        a: {
                            textDecoration: 'none',
                            color: 'inherit',
                        },
                    }) })), _jsx(NotificationsProvider, { children: _jsx(IconProvider, { children: children }) })] })) })));
}
//# sourceMappingURL=ThemeProvider.js.map