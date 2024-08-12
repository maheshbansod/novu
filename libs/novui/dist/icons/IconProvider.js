import { jsx as _jsx } from "react/jsx-runtime";
import { IconContext } from 'react-icons';
import { DEFAULT_ICON_SIZE } from './Icon.const';
import { css } from '../../styled-system/css';
const iconClassName = css({
    verticalAlign: 'middle',
    color: 'typography.text.secondary',
});
export const IconProvider = ({ children }) => {
    return (_jsx(IconContext.Provider, Object.assign({ value: {
            size: DEFAULT_ICON_SIZE,
            className: iconClassName,
        } }, { children: children })));
};
//# sourceMappingURL=IconProvider.js.map