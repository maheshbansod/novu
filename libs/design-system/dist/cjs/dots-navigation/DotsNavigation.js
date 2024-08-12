"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotsNavigation = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const config_1 = require("../config");
const DotsNavigationHolder = styled_1.default.ul `
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  cursor: default;
  user-select: none;
`;
const DotNavigationItem = styled_1.default.li `
  position: relative;
  display: block;
  float: left;
  margin: 0 8px;
  width: 8px;
  height: 8px;
  cursor: pointer;
`;
const DotCircleItem = styled_1.default.span `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
  background-color: transparent;
  box-shadow: ${({ theme }) => theme.colorScheme === 'dark' ? `inset 0 0 0 1px ${config_1.colors.white}` : `inset 0 0 0 1px ${config_1.colors.B60}`};
  transition: opacity 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-radius: 50%;
    background-color: ${({ theme }) => (theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B60)};
    transform: ${({ isCurrent }) => (isCurrent ? 'scale(1)' : 'scale(0)')};
    transform-origin: 50% 50%;
    transition: transform 0.3s ease;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }
`;
const DotsNavigation = ({ selectedIndex, size, className, testId, onClick, }) => {
    return ((0, jsx_runtime_1.jsx)(DotsNavigationHolder, Object.assign({ className: className, "data-test-id": testId }, { children: Array.from({ length: size }).map((_, index) => ((0, jsx_runtime_1.jsx)(DotNavigationItem, Object.assign({ onClick: (e) => {
                onClick === null || onClick === void 0 ? void 0 : onClick(index, e);
            } }, { children: (0, jsx_runtime_1.jsx)(DotCircleItem, { isCurrent: index === selectedIndex }) }), `dot-${index}`))) })));
};
exports.DotsNavigation = DotsNavigation;
//# sourceMappingURL=DotsNavigation.js.map