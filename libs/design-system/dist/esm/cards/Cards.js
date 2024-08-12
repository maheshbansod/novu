import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import { Grid, Stack, useMantineColorScheme } from '@mantine/core';
import styled from '@emotion/styled';
import { When } from '../when';
import { colors, shadows } from '../config';
import { Text } from '../typography/text/Text';
export function Cards({ cells }) {
    const spanNumber = 12 / cells.length;
    return (_jsx(Grid, Object.assign({ sx: { justifyContent: 'center' } }, { children: cells.map((cell, index) => (_jsx(Grid.Col, Object.assign({ span: spanNumber, sx: { maxWidth: 'initial' } }, { children: _jsx(Card, { cell: cell }, index) }), index))) })));
}
function Card({ cell }) {
    var _a, _b, _c;
    const { colorScheme } = useMantineColorScheme();
    const navigate = useNavigate();
    const NavIcon = cell.navIcon
        ? cell.navIcon
        : undefined;
    const cardWithIconAndDescription = cell.navIcon;
    const cardWithImage = cell.imagePath;
    const onlyDescription = !cell.imagePath && !cell.navIcon && cell.description;
    const alt = (_a = cell.imagePath) === null || _a === void 0 ? void 0 : _a.split('/').pop();
    const frameworkName = getFrameworkName(alt);
    const handleOnClick = (e) => {
        var _a;
        if (cell.onClick) {
            (_a = cell.onClick) === null || _a === void 0 ? void 0 : _a.call(cell, e);
            return;
        }
        if (cell.navigateTo) {
            navigate(cell.navigateTo);
        }
    };
    return (_jsxs(StyledCard, Object.assign({ dark: colorScheme === 'dark', onClick: handleOnClick, disabled: cell.disabled, "data-test-id": cell.testId }, { children: [_jsx(When, Object.assign({ truthy: onlyDescription }, { children: _jsx(Text, Object.assign({ mt: 10, size: 'lg' }, { children: (_b = cell.description) !== null && _b !== void 0 ? _b : '' })) })), _jsxs(When, Object.assign({ truthy: cardWithIconAndDescription }, { children: [NavIcon ? _jsx(NavIcon, { style: { height: '50px', width: '50px' } }) : null, _jsx(Text, Object.assign({ mt: 10, size: 'lg' }, { children: (_c = cell.description) !== null && _c !== void 0 ? _c : '' }))] })), _jsx(When, Object.assign({ truthy: cardWithImage }, { children: _jsxs(Stack, Object.assign({ align: "center" }, { children: [_jsx("img", { src: cell.imagePath, alt: alt }), _jsx("span", Object.assign({ style: { fontSize: '20px', textTransform: 'capitalize' } }, { children: frameworkName }))] })) }))] })));
}
function getFrameworkName(alt) {
    const framework = alt === null || alt === void 0 ? void 0 : alt.replace('.png', '');
    return framework === 'js' ? 'JS' : framework;
}
const StyledCard = styled.button `
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ dark }) => (dark ? colors.B17 : colors.B98)};
  border-radius: 7px;
  height: 180px;
  min-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: background-color 0.25s ease, box-shadow 0.25s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    ${({ dark }) => dark
    ? `
            background-color: ${colors.B20};
            box-shadow: ${shadows.dark};
          `
    : `
            background-color: ${colors.BGLight};
            box-shadow: ${shadows.light};
          `};
  }

  opacity: 0;
  transform: translateY(20px);
  animation: showUp 0.3s ease-out forwards;

  @keyframes showUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
//# sourceMappingURL=Cards.js.map