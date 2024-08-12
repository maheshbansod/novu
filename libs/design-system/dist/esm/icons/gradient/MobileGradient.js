import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable */
export function MobileGradient(props) {
    const { disabled, width, height } = props;
    const isDisabled = disabled != null ? disabled : false;
    return (_jsxs("svg", Object.assign({ width: width || '30px', height: height || '31px', viewBox: "0 0 30 31", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props, { children: [_jsx("path", { d: "M15 23H15.01M8.75 3H21.25C22.6307 3 23.75 4.11929 23.75 5.5V25.5C23.75 26.8807 22.6307 28 21.25 28H8.75C7.36929 28 6.25 26.8807 6.25 25.5V5.5C6.25 4.11929 7.36929 3 8.75 3Z", stroke: !isDisabled ? 'url(#paint0_linear_440_2955)' : 'currentColor', strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("defs", { children: _jsxs("linearGradient", Object.assign({ id: "paint0_linear_440_2955", x1: "15", y1: "28", x2: "15", y2: "3", gradientUnits: "userSpaceOnUse" }, { children: [_jsx("stop", { stopColor: "#FF512F" }), _jsx("stop", { offset: "1", stopColor: "#DD2476" })] })) })] })));
}
//# sourceMappingURL=MobileGradient.js.map