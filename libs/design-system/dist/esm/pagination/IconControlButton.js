import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { ControlButton } from './ControlButton';
import { colors } from '../config';
import { useMantineTheme } from '@mantine/core';
// TODO: Fix `theme` type once design system is ready and then use theme values
const getFontColor = ({ theme }) => {
    // TODO: speak with Design -- this is bad, we should not be using a "BG" color for font
    return theme.colorScheme === 'dark' ? colors.white : colors.BGDark;
};
// TODO: Fix `theme` type once design system is ready and then use theme values
const getDisabledFontColor = ({ theme }) => {
    return theme.colorScheme === 'dark' ? colors.B40 : colors.B80;
};
const _IconControlButton = styled(ControlButton)(({ theme }) => `
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
export const IconControlButton = (props) => (_jsx(_IconControlButton, Object.assign({ theme: useMantineTheme() }, props)));
//# sourceMappingURL=IconControlButton.js.map