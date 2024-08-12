import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from '@mantine/core';
import { colors } from '../config';
/**
 * Gradient Badge Component
 *
 */
export function NotificationBadge({ children }) {
    return (_jsx(Badge, Object.assign({ sx: {
            padding: 0,
            width: 20,
            height: 20,
            pointerEvents: 'none',
            border: 'none',
            background: colors.horizontal,
            lineHeight: '14px',
            color: colors.white,
            fontWeight: 'bold',
            fontSize: '12px',
        }, radius: 100 }, { children: children })));
}
//# sourceMappingURL=NotificationBadge.js.map