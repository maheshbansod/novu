"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardTile = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const config_1 = require("../config");
exports.CardTile = styled_1.default.button(() => {
    const theme = (0, core_1.useMantineTheme)();
    return `
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-width: 140px;
  width: 140px;
  height: 100px;
  border-radius: 8px;
  color: ${config_1.colors.B60};
  background: ${theme.colorScheme === 'dark' ? config_1.colors.B20 : config_1.colors.B98};
  box-shadow: ${config_1.shadows.dark};
  font-size: 14px;
  transition: all 0.25s ease;

  > svg {
    font-size: 20px;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled)&:hover {
    color: ${theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.B60};
    background: ${theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.BGLight};
  }

  &[data-can-be-hidden='true'] {
    &:nth-last-of-type(2) {
      display: none;
    }

    @media screen and (min-width: 1369px) {
      &:nth-last-of-type(2) {
        display: flex;
      }
    }
  }

  @media screen and (min-width: 1281px) {
    min-width: 160px;
    width: 160px;
    height: 120px;

    > svg {
      font-size: 24px;
    }
  }
`;
});
//# sourceMappingURL=CardTile.js.map