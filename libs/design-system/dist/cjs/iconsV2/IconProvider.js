"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_icons_1 = require("react-icons");
const react_1 = require("@emotion/react");
const core_1 = require("@mantine/core");
const Icon_const_1 = require("./Icon.const");
const iconClassName = (0, react_1.css) `
  vertical-align: middle;
`;
const IconProvider = ({ children }) => {
    const theme = (0, core_1.useMantineTheme)();
    return ((0, jsx_runtime_1.jsx)(react_icons_1.IconContext.Provider, Object.assign({ value: {
            color: theme.colorScheme === 'dark' ? theme.colors.gray[7] : theme.colors.gray[7],
            size: Icon_const_1.DEFAULT_ICON_SIZE,
            className: iconClassName.name,
        } }, { children: children })));
};
exports.IconProvider = IconProvider;
//# sourceMappingURL=IconProvider.js.map