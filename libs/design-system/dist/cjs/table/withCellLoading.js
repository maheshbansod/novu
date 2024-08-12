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
exports.withCellLoading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const SkeletonStyled = (0, styled_1.default)(core_1.Skeleton) `
  width: 100%;
`;
const withCellLoading = (Component, { width = 100, height = 20, loadingTestId } = {}) => {
    const displayName = typeof Component === 'function' ? Component.displayName || Component.name : 'Component';
    const CellLoading = (_a) => {
        var { isLoading } = _a, rest = __rest(_a, ["isLoading"]);
        if (isLoading) {
            return (0, jsx_runtime_1.jsx)(SkeletonStyled, { width: width, height: height, "data-test-id": loadingTestId });
        }
        if (typeof Component === 'function') {
            return (0, jsx_runtime_1.jsx)(Component, Object.assign({ isLoading: isLoading }, rest));
        }
        return Component;
    };
    CellLoading.displayName = `withCellLoading(${displayName})`;
    return CellLoading;
};
exports.withCellLoading = withCellLoading;
//# sourceMappingURL=withCellLoading.js.map