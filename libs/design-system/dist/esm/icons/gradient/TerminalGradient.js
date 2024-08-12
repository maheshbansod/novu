import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { colors } from '../../config';
export function TerminalGradient(props) {
    return (_jsxs("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", viewBox: "0 0 16 16" }, props, { children: [_jsx("mask", Object.assign({ id: "mask0_2012_45416", style: { maskType: 'alpha' }, width: "16", height: "16", x: "0", y: "0", maskUnits: "userSpaceOnUse" }, { children: _jsx("path", { fill: "#D9D9D9", d: "M0 0H16V16H0z" }) })), _jsx("g", Object.assign({ mask: "url(#mask0_2012_45416)" }, { children: _jsx("path", { fill: "url(#paint0_linear_2012_45416)", 
                    // eslint-disable-next-line max-len
                    d: "M2.8 12.8c-.33 0-.613-.118-.848-.353A1.157 1.157 0 011.6 11.6V4.395c0-.33.117-.612.352-.845A1.16 1.16 0 012.8 3.2h10.4c.33 0 .612.118.847.353s.353.517.353.848v7.204c0 .33-.118.612-.353.845a1.16 1.16 0 01-.847.35H2.8zm0-1.2h10.4v-6H2.8v6zm2.2-.8l-.85-.85L5.5 8.6 4.15 7.25 5 6.4l2.2 2.2L5 10.8zm3 0V9.6h4v1.2H8z" }) })), _jsx("defs", { children: _jsxs("linearGradient", Object.assign({ id: "paint0_linear_2012_45416", x1: "1.6", x2: "14.4", y1: "8", y2: "8", gradientUnits: "userSpaceOnUse" }, { children: [_jsx("stop", { stopColor: props.disabled ? colors.B40 : '#DD2476' }), _jsx("stop", { offset: "1", stopColor: props.disabled ? colors.B40 : '#FF512F' })] })) })] })));
}
//# sourceMappingURL=TerminalGradient.js.map