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
import { LoadingOverlay as ExternalLoadingOverlay } from '@mantine/core';
import React from 'react';
import { css, cx } from '../../../styled-system/css';
import { loadingOverlay } from '../../../styled-system/recipes';
import { splitCssProps } from '../../../styled-system/jsx';
import { token } from '../../../styled-system/tokens';
const DEFAULT_SIZE = '64';
const DEFAULT_Z_INDEX = 'overlay';
const DEFAULT_ELEMENT = 'div';
/**
 * Loader with overlay.
 *
 * TODO: Add support for container-scoped loader. For now, only full-page works.
 * To work around this, use position: relative in the parent component
 */
export const LoadingOverlay = React.forwardRef((_a, ref) => {
    var { variant, isVisible = true, size = DEFAULT_SIZE, zIndex = DEFAULT_Z_INDEX } = _a, props = __rest(_a, ["variant", "isVisible", "size", "zIndex"]);
    const [variantProps, loadingOverlayProps] = loadingOverlay.splitVariantProps(Object.assign(Object.assign({}, props), { variant,
        isVisible,
        size,
        zIndex }));
    const [cssProps, localProps] = splitCssProps(loadingOverlayProps);
    const { className, as, type } = localProps, otherProps = __rest(localProps, ["className", "as", "type"]);
    const classNames = loadingOverlay(variantProps);
    if (!isVisible) {
        return null;
    }
    return (_jsx(ExternalLoadingOverlay, Object.assign({ ref: ref, component: as !== null && as !== void 0 ? as : DEFAULT_ELEMENT, classNames: classNames, className: cx(css(cssProps), className), loading: true, visible: isVisible, loaderProps: { type, size }, zIndex: token(`zIndex.${zIndex}`) }, otherProps)));
});
//# sourceMappingURL=LoadingOverlay.js.map