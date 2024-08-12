"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationBadge = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const config_1 = require("../config");
/**
 * Gradient Badge Component
 *
 */
function NotificationBadge({ children }) {
    return ((0, jsx_runtime_1.jsx)(core_1.Badge, Object.assign({ sx: {
            padding: 0,
            width: 20,
            height: 20,
            pointerEvents: 'none',
            border: 'none',
            background: config_1.colors.horizontal,
            lineHeight: '14px',
            color: config_1.colors.white,
            fontWeight: 'bold',
            fontSize: '12px',
        }, radius: 100 }, { children: children })));
}
exports.NotificationBadge = NotificationBadge;
//# sourceMappingURL=NotificationBadge.js.map