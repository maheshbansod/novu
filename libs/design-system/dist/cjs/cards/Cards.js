"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cards = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("@mantine/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const when_1 = require("../when");
const config_1 = require("../config");
const Text_1 = require("../typography/text/Text");
function Cards({ cells }) {
    const spanNumber = 12 / cells.length;
    return ((0, jsx_runtime_1.jsx)(core_1.Grid, Object.assign({ sx: { justifyContent: 'center' } }, { children: cells.map((cell, index) => ((0, jsx_runtime_1.jsx)(core_1.Grid.Col, Object.assign({ span: spanNumber, sx: { maxWidth: 'initial' } }, { children: (0, jsx_runtime_1.jsx)(Card, { cell: cell }, index) }), index))) })));
}
exports.Cards = Cards;
function Card({ cell }) {
    var _a, _b, _c;
    const { colorScheme } = (0, core_1.useMantineColorScheme)();
    const navigate = (0, react_router_dom_1.useNavigate)();
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
    return ((0, jsx_runtime_1.jsxs)(StyledCard, Object.assign({ dark: colorScheme === 'dark', onClick: handleOnClick, disabled: cell.disabled, "data-test-id": cell.testId }, { children: [(0, jsx_runtime_1.jsx)(when_1.When, Object.assign({ truthy: onlyDescription }, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ mt: 10, size: 'lg' }, { children: (_b = cell.description) !== null && _b !== void 0 ? _b : '' })) })), (0, jsx_runtime_1.jsxs)(when_1.When, Object.assign({ truthy: cardWithIconAndDescription }, { children: [NavIcon ? (0, jsx_runtime_1.jsx)(NavIcon, { style: { height: '50px', width: '50px' } }) : null, (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ mt: 10, size: 'lg' }, { children: (_c = cell.description) !== null && _c !== void 0 ? _c : '' }))] })), (0, jsx_runtime_1.jsx)(when_1.When, Object.assign({ truthy: cardWithImage }, { children: (0, jsx_runtime_1.jsxs)(core_1.Stack, Object.assign({ align: "center" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: cell.imagePath, alt: alt }), (0, jsx_runtime_1.jsx)("span", Object.assign({ style: { fontSize: '20px', textTransform: 'capitalize' } }, { children: frameworkName }))] })) }))] })));
}
function getFrameworkName(alt) {
    const framework = alt === null || alt === void 0 ? void 0 : alt.replace('.png', '');
    return framework === 'js' ? 'JS' : framework;
}
const StyledCard = styled_1.default.button `
  outline: none;
  border: none;
  cursor: pointer;
  background-color: ${({ dark }) => (dark ? config_1.colors.B17 : config_1.colors.B98)};
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
            background-color: ${config_1.colors.B20};
            box-shadow: ${config_1.shadows.dark};
          `
    : `
            background-color: ${config_1.colors.BGLight};
            box-shadow: ${config_1.shadows.light};
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