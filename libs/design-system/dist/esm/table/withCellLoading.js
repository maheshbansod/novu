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
import { jsx as _jsx } from "react/jsx-runtime";
import styled from '@emotion/styled';
import { Skeleton } from '@mantine/core';
const SkeletonStyled = styled(Skeleton) `
  width: 100%;
`;
export const withCellLoading = (Component, { width = 100, height = 20, loadingTestId } = {}) => {
    const displayName = typeof Component === 'function' ? Component.displayName || Component.name : 'Component';
    const CellLoading = (_a) => {
        var { isLoading } = _a, rest = __rest(_a, ["isLoading"]);
        if (isLoading) {
            return _jsx(SkeletonStyled, { width: width, height: height, "data-test-id": loadingTestId });
        }
        if (typeof Component === 'function') {
            return _jsx(Component, Object.assign({ isLoading: isLoading }, rest));
        }
        return Component;
    };
    CellLoading.displayName = `withCellLoading(${displayName})`;
    return CellLoading;
};
//# sourceMappingURL=withCellLoading.js.map