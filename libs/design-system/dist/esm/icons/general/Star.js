import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable */
import styled from '@emotion/styled';
import { colors } from '../../config';
const StarHolder = styled.div `
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: white;
  border: 1px solid ${colors.gradientMiddle};
`;
export const Star = (props) => {
    return (_jsx(StarHolder, { children: _jsxs("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 10 10", width: 12, height: 12 }, props, { children: [_jsx("path", { fill: "url(#a)", d: "m1.913 9.8.812-3.512L0 3.925l3.6-.312L5 .3l1.4 3.313 3.6.312-2.725 2.363.813 3.512L5 7.938 1.913 9.8Z" }), _jsx("defs", { children: _jsxs("linearGradient", Object.assign({ id: "a", x1: "0", x2: "10", y1: "5.05", y2: "5.05", gradientUnits: "userSpaceOnUse" }, { children: [_jsx("stop", { stopColor: "#DD2476" }), _jsx("stop", { offset: "1", stopColor: "#FF512F" })] })) })] })) }));
};
//# sourceMappingURL=Star.js.map