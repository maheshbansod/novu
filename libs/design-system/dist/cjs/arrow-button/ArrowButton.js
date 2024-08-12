"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
const icons_1 = require("../icons");
const config_1 = require("../config");
const Text_1 = require("../typography/text/Text");
function ArrowButton({ label, onClick, display = true, testId, }) {
    return ((0, jsx_runtime_1.jsxs)(core_1.Center, Object.assign({ onClick: onClick, role: "button", inline: true, style: { cursor: 'pointer', visibility: display ? 'visible' : 'hidden' }, "data-test-id": testId }, { children: [(0, jsx_runtime_1.jsx)(icons_1.ArrowLeft, { color: config_1.colors.B60 }), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ ml: 5, color: config_1.colors.B60 }, { children: label }))] })));
}
exports.ArrowButton = ArrowButton;
//# sourceMappingURL=ArrowButton.js.map