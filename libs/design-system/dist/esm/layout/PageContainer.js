import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Container } from '../container/Container';
import { PageMeta } from './PageMeta';
export function PageContainer({ children, title, style, }) {
    const containerStyle = Object.assign({ borderRadius: 0 }, style);
    return (_jsxs(StyledContainer, Object.assign({ fluid: true, style: containerStyle, h: `100%` }, { children: [_jsx(PageMeta, { title: title }), children] })));
}
const StyledContainer = styled(Container) `
  overflow-y: auto !important;
  border-radius: 0;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
`;
//# sourceMappingURL=PageContainer.js.map