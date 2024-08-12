"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = exports.successMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const notifications_1 = require("@mantine/notifications");
const config_1 = require("../config");
const icons_1 = require("../icons");
function successMessage(message, id) {
    (0, notifications_1.showNotification)({
        id,
        message,
        icon: (0, jsx_runtime_1.jsx)(icons_1.Check, {}),
        styles: (theme) => ({
            icon: {
                width: '22px',
                height: '22px',
                marginRight: '10px',
                color: theme.colorScheme === 'dark' ? `${config_1.colors.B15} !important` : `${config_1.colors.white} !important`,
                backgroundColor: config_1.colors.success,
            },
        }),
    });
}
exports.successMessage = successMessage;
function errorMessage(message) {
    (0, notifications_1.showNotification)({
        message,
        icon: (0, jsx_runtime_1.jsx)(icons_1.ErrorIcon, {}),
        styles: (theme) => ({
            icon: {
                width: '22px',
                height: '22px',
                marginRight: '10px',
                color: `${config_1.colors.error} !important`,
                backgroundColor: theme.colorScheme === 'dark' ? config_1.colors.B15 : config_1.colors.white,
            },
        }),
    });
}
exports.errorMessage = errorMessage;
//# sourceMappingURL=notifications.js.map