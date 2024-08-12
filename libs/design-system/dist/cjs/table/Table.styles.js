"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.default = (0, core_1.createStyles)((theme, { withSelection }, getRef) => {
    const dark = theme.colorScheme === 'dark';
    const hover = { ref: getRef('hover') };
    return {
        hover,
        tableRow: {
            td: {
                textOverflow: 'ellipsis',
            },
        },
        root: {
            borderCollapse: 'collapse',
            borderSpacing: '0px 20px',
            'tr td:first-of-type': {
                paddingLeft: withSelection ? 10 : 30,
                paddingRight: withSelection ? 10 : 30,
            },
            'tr th:first-of-type': {
                paddingLeft: withSelection ? 10 : 30,
                paddingRight: withSelection ? 10 : 30,
            },
            'tr td:last-child': {
                paddingRight: 30,
            },
            'tr th:last-child': {
                paddingRight: 30,
            },
            '& thead tr': {
                borderBottom: `1px solid ${dark ? config_1.colors.B30 : config_1.colors.B98}`,
            },
            '& thead tr th': {
                fontWeight: 400,
                height: '17px',
                color: dark ? config_1.colors.B40 : config_1.colors.B70,
                borderBottom: 'none',
                borderSpacing: '0px',
                paddingBottom: '15px',
            },
            '& tbody tr td': {
                maxWidth: '100px',
                color: dark ? config_1.colors.white : config_1.colors.B40,
                borderBottomColor: dark ? config_1.colors.BGDark : config_1.colors.BGLight,
                height: '80px',
            },
            '& tbody tr[data-disabled="true"]:hover': {
                cursor: 'default',
            },
            '& tbody tr[data-disabled="false"]:hover': {
                cursor: 'pointer',
            },
            '& tbody tr:last-of-type td': {
                borderBottom: `1px solid ${dark ? config_1.colors.B20 : config_1.colors.B98}`,
            },
            ['&[data-hover]']: {
                '& tbody tr:hover': {
                    backgroundColor: dark ? config_1.colors.B20 : config_1.colors.B98,
                },
                [`&.${hover.ref} tbody tr:hover`]: {
                    backgroundColor: dark ? config_1.colors.B20 : config_1.colors.B98,
                },
            },
        },
    };
});
//# sourceMappingURL=Table.styles.js.map