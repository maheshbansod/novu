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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { SegmentedControl as MantineSegmentedControl, LoadingOverlay, } from '@mantine/core';
import useStyles from './SegmentedControl.styles';
import { colors } from '../config';
import styled from '@emotion/styled';
/**
 * SegmentedControl component
 *
 */
export const SegmentedControl = React.forwardRef((_a, ref) => {
    var { onChange, loading = false } = _a, props = __rest(_a, ["onChange", "loading"]);
    const { classes, theme } = useStyles({
        size: props.size || 'md',
    });
    const defaultDesign = {
        radius: 'xl',
        size: 'md',
        transitionDuration: 500,
        transitionTimingFunction: 'linear',
        classNames: classes,
    };
    return (_jsxs(ControlWrapper, Object.assign({ style: { position: 'relative', marginBottom: 0 } }, { children: [_jsx(LoadingOverlay, { visible: loading, overlayColor: theme.colorScheme === 'dark' ? colors.B30 : colors.B98, loaderProps: {
                    color: colors.error,
                }, "data-test-id": props['data-test-id'] + '-loading-overlay' }), _jsx(MantineSegmentedControl, Object.assign({ ref: ref, onChange: onChange }, defaultDesign, props))] })));
});
const ControlWrapper = styled.div `
  position: relative;
  margin-bottom: 30px;

  .mantine-SegmentedControl-control {
    border-color: transparent;
  }
`;
//# sourceMappingURL=SegmentedControl.js.map