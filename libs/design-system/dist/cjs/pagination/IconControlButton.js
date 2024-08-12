"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconControlButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const ControlButton_1 = require("./ControlButton");
const config_1 = require("../config");
const core_1 = require("@mantine/core");
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontColor = ({ theme }) => {
    // TODO: speak with Design -- this is bad, we should not be using a "BG" color for font
    return theme.colorScheme === 'dark' ? config_1.colors.white : config_1.colors.BGDark;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getDisabledFontColor = ({ theme }) => {
    return theme.colorScheme === 'dark' ? config_1.colors.B40 : config_1.colors.B80;
};
const _IconControlButton = (0, styled_1.default)(ControlButton_1.ControlButton)(({ theme }) => `
  color: ${getFontColor({ theme })};
  /* SVG / icon overrides */
  path {
    fill: ${getFontColor({ theme })};
  }
  
  &:disabled {
    color: ${getDisabledFontColor({ theme })};
    /* SVG / icon overrides */
    path {
      fill: ${getDisabledFontColor({ theme })};
    }
  }
  `);
/**
 * Specialized ControlButton for "rich" nodes such as Icons or custom JSX elements.
 */
const IconControlButton = (props) => ((0, jsx_runtime_1.jsx)(_IconControlButton, Object.assign({ theme: (0, core_1.useMantineTheme)() }, props)));
exports.IconControlButton = IconControlButton;
//# sourceMappingURL=IconControlButton.js.map