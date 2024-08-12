import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Center } from '@mantine/core';
import { ArrowLeft } from '../icons';
import { colors } from '../config';
import { Text } from '../typography/text/Text';
export function ArrowButton({ label, onClick, display = true, testId, }) {
    return (_jsxs(Center, Object.assign({ onClick: onClick, role: "button", inline: true, style: { cursor: 'pointer', visibility: display ? 'visible' : 'hidden' }, "data-test-id": testId }, { children: [_jsx(ArrowLeft, { color: colors.B60 }), _jsx(Text, Object.assign({ ml: 5, color: colors.B60 }, { children: label }))] })));
}
//# sourceMappingURL=ArrowButton.js.map