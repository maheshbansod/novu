import { jsx as _jsx } from "react/jsx-runtime";
import { IconContext } from 'react-icons';
import { css } from '@emotion/react';
import { useMantineTheme } from '@mantine/core';
import { DEFAULT_ICON_SIZE } from './Icon.const';
const iconClassName = css `
  vertical-align: middle;
`;
export const IconProvider = ({ children }) => {
    const theme = useMantineTheme();
    return (_jsx(IconContext.Provider, Object.assign({ value: {
            color: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[7],
            size: DEFAULT_ICON_SIZE,
            className: iconClassName.name,
        } }, { children: children })));
};
//# sourceMappingURL=IconProvider.js.map