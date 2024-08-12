import { jsx as _jsx } from "react/jsx-runtime";
import { MantineProvider } from '@mantine/core';
import { IconProvider } from '../icons/IconProvider';
import { MANTINE_THEME } from './mantine-theme.config';
/** Used to export a v7 Mantine provider */
export const NovuiProvider = ({ children }) => {
    return (_jsx(MantineProvider, Object.assign({ theme: MANTINE_THEME }, { children: _jsx(IconProvider, { children: children }) })));
};
//# sourceMappingURL=NovuiProvider.js.map