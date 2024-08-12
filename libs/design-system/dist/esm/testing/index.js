import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { ThemeProvider } from '../ThemeProvider';
import { MemoryRouter } from 'react-router-dom';
export function TestWrapper({ children }) {
    return (_jsx(MemoryRouter, { children: _jsx(Wrapper, { children: _jsx(Frame, { children: _jsx(ThemeProvider, { children: children }) }) }) }));
}
const Frame = styled.div `
  min-width: 500px;
  display: inline-block;
`;
const Wrapper = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//# sourceMappingURL=index.js.map