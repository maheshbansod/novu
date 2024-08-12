"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPulseStyles = exports.getSubtleStyles = exports.getOutlineStyles = void 0;
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const getGradient = (color) => `linear-gradient(0deg, ${color} 0%, ${color} 100%)`;
const getLabelStyles = (disabled, variant) => {
    if (disabled && variant === 'subtle') {
        return {
            gap: '8px',
        };
    }
    if (disabled) {
        return {};
    }
    return {
        backgroundImage: config_1.colors.horizontal,
        backgroundClip: 'text',
        fontWeight: 'bold',
        gap: '8px',
    };
};
const getOutlineStyles = (theme) => {
    const dark = theme.colorScheme === 'dark';
    return {
        border: '1px solid transparent',
        background: `${dark ? getGradient(config_1.colors.B17) : getGradient(config_1.colors.white)} padding-box, ${config_1.colors.horizontal} border-box`,
        color: dark ? theme.white : 'transparent',
        boxShadow: dark ? config_1.shadows.dark : config_1.shadows.medium,
    };
};
exports.getOutlineStyles = getOutlineStyles;
const getSubtleStyles = (theme) => {
    const dark = theme.colorScheme === 'dark';
    return {
        border: 'none',
        padding: '0 8px',
        background: 'transparent',
        color: dark ? theme.white : 'transparent',
        boxShadow: 'none',
        '.mantine-Button-label': {
            'div[data-square]': {
                color: config_1.colors.white,
                backgroundImage: config_1.colors.horizontal,
                backgroundColor: 'transparent',
            },
        },
        '&:hover:not(:disabled)': {
            background: 'transparent',
            color: dark ? theme.white : 'transparent',
            filter: dark ? 'none' : 'brightness(0.9)',
            '.mantine-Button-label': {
                'div[data-square]': {
                    color: dark ? config_1.colors.gradientMiddle : theme.white,
                    backgroundColor: dark ? theme.white : 'transparent',
                    backgroundImage: dark ? 'none' : config_1.colors.horizontal,
                },
                'div:last-of-type': {
                    backgroundImage: 'none !important',
                    backgroundColor: dark ? theme.white : 'transparent',
                    backgroundClip: 'none !important',
                    color: 'transparent',
                    WebkitTextFillColor: 'initial !important',
                },
            },
        },
        '&:focus:not(:disabled)': {
            background: 'transparent',
            color: dark ? theme.white : 'transparent',
            filter: dark ? 'none' : 'brightness(0.9)',
            '.mantine-Button-label': {
                'div[data-square]': {
                    color: dark ? config_1.colors.gradientMiddle : theme.white,
                    backgroundColor: dark ? theme.white : 'transparent',
                    backgroundImage: dark ? 'none' : config_1.colors.horizontal,
                },
                'div:last-of-type': {
                    backgroundImage: 'none !important',
                    backgroundColor: dark ? theme.white : 'transparent',
                    backgroundClip: 'none !important',
                    color: 'transparent',
                    WebkitTextFillColor: 'initial !important',
                },
            },
        },
        '&:disabled': {
            opacity: 0.4,
            background: 'transparent',
        },
    };
};
exports.getSubtleStyles = getSubtleStyles;
const getPulseStyles = () => {
    return {
        [`&:not(:disabled):not([data-loading])`]: {
            animation: 'pulse-animation 2s infinite',
            '@keyframes pulse-animation': {
                '0%': {
                    boxShadow: '0 0 0 0 rgba(255, 82, 82, 0.7)',
                },
                '70%': {
                    boxShadow: '0 0 0 10px rgba(255, 82, 82, 0)',
                },
                '100%': {
                    boxShadow: '0 0 0 0 rgba(255, 82, 82, 0)',
                },
            },
        },
    };
};
exports.getPulseStyles = getPulseStyles;
exports.default = (0, core_1.createStyles)((theme, { disabled, inherit, variant, pulse }, getRef) => {
    const loading = getRef('loading');
    let overrides = {};
    if (variant === 'outline') {
        overrides = (0, exports.getOutlineStyles)(theme);
    }
    if (variant === 'subtle') {
        overrides = (0, exports.getSubtleStyles)(theme);
    }
    if (pulse) {
        overrides = Object.assign({}, overrides, (0, exports.getPulseStyles)());
    }
    return {
        label: getLabelStyles(disabled, variant),
        root: Object.assign({ backgroundImage: config_1.colors.horizontal, width: inherit ? '100%' : '', [`&:not(.${loading}):disabled`]: {
                boxShadow: 'none',
            }, '&&:hover': {
                backgroundSize: '100%',
            }, '&:focus': {
                outlineOffset: 0,
                outline: '2px solid rgb(153,200,255)',
            } }, overrides),
    };
});
//# sourceMappingURL=Button.styles.js.map