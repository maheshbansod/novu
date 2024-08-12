"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SegmentedControl = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const core_1 = require("@mantine/core");
const SegmentedControl_styles_1 = __importDefault(require("./SegmentedControl.styles"));
const config_1 = require("../config");
const styled_1 = __importDefault(require("@emotion/styled"));
/**
 * SegmentedControl component
 *
 */
exports.SegmentedControl = react_1.default.forwardRef((_a, ref) => {
    var { onChange, loading = false } = _a, props = __rest(_a, ["onChange", "loading"]);
    const { classes, theme } = (0, SegmentedControl_styles_1.default)({
        size: props.size || 'md',
    });
    const defaultDesign = {
        radius: 'xl',
        size: 'md',
        transitionDuration: 500,
        transitionTimingFunction: 'linear',
        classNames: classes,
    };
    return ((0, jsx_runtime_1.jsxs)(ControlWrapper, Object.assign({ style: { position: 'relative', marginBottom: 0 } }, { children: [(0, jsx_runtime_1.jsx)(core_1.LoadingOverlay, { visible: loading, overlayColor: theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B98, loaderProps: {
                    color: config_1.colors.error,
                }, "data-test-id": props['data-test-id'] + '-loading-overlay' }), (0, jsx_runtime_1.jsx)(core_1.SegmentedControl, Object.assign({ ref: ref, onChange: onChange }, defaultDesign, props))] })));
});
const ControlWrapper = styled_1.default.div `
  position: relative;
  margin-bottom: 30px;

  .mantine-SegmentedControl-control {
    border-color: transparent;
  }
`;
//# sourceMappingURL=SegmentedControl.js.map