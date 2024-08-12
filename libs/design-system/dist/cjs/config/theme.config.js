"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mantineConfig = void 0;
const _1 = require(".");
exports.mantineConfig = {
    spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
    fontFamily: 'Lato, sans serif',
    fontSizes: { xs: 10, sm: 12, md: 14, lg: 16, xl: 18 },
    primaryColor: 'gradient',
    defaultGradient: { deg: 99, from: _1.colors.gradientStart, to: _1.colors.gradientEnd },
    radius: { md: 7, xl: 30 },
    lineHeight: '17px',
    shadows: {
        sm: _1.shadows.light,
        md: _1.shadows.medium,
        lg: _1.shadows.dark,
        xl: _1.shadows.color,
    },
    colors: {
        gray: [
            _1.colors.BGLight,
            '#f1f3f5',
            _1.colors.B98,
            '#dee2e6',
            '#ced4da',
            _1.colors.B80,
            _1.colors.B70,
            _1.colors.B60,
            _1.colors.B40,
            _1.colors.B30,
        ],
        dark: [
            _1.colors.white,
            _1.colors.BGLight,
            _1.colors.B80,
            _1.colors.B40,
            _1.colors.B20,
            _1.colors.B30,
            _1.colors.B40,
            _1.colors.B15,
            _1.colors.BGDark,
            _1.colors.B17,
        ],
        gradient: ['', '', '', '', '', _1.colors.error, _1.colors.horizontal, _1.colors.vertical, _1.colors.horizontal, ''],
    },
    headings: {
        fontFamily: 'Lato, sans-serif',
        sizes: {
            h1: { fontSize: 26 },
            h2: { fontSize: 20 },
        },
    },
};
//# sourceMappingURL=theme.config.js.map