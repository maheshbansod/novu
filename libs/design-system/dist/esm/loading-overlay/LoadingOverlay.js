import { jsx as _jsx } from "react/jsx-runtime";
import { useMantineTheme } from '@mantine/core';
import { colors } from '../config';
export function LoadingOverlay({ children, minLayoutHeight = 500, visible }) {
    const theme = useMantineTheme();
    const defaultDesign = {
        overlayColor: theme.colorScheme === 'dark' ? colors.B30 : colors.B98,
        loaderProps: { color: colors.error },
    };
    return _jsx("div", Object.assign({ style: { position: 'relative', minHeight: minLayoutHeight } }, { children: children }));
}
//# sourceMappingURL=LoadingOverlay.js.map