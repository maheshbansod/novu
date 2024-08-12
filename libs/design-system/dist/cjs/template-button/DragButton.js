"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const react_1 = require("react");
const when_1 = require("../when");
const config_1 = require("../config");
const Drag_1 = require("../icons/general/Drag");
const TemplateButton_styles_1 = require("./TemplateButton.styles");
function DragButton({ description, Icon }) {
    const { classes, theme } = (0, TemplateButton_styles_1.useTemplateButtonStyles)();
    const [hover, setHover] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(Button, Object.assign({ type: 'button', sx: {
                background: theme.colorScheme === 'dark' ? config_1.colors.B17 : config_1.colors.white,
                border: `1px dashed ${theme.colorScheme === 'dark' ? config_1.colors.B30 : config_1.colors.B80}`,
                height: description.length > 0 ? '75px' : '50px',
                position: 'relative',
                '&:hover': {
                    cursor: 'grab',
                },
            }, onMouseEnter: () => {
                setHover(true);
            }, onMouseLeave: () => {
                setHover(false);
            } }, { children: [(0, jsx_runtime_1.jsx)(when_1.When, Object.assign({ truthy: hover }, { children: (0, jsx_runtime_1.jsx)(Drag_1.Drag, { style: {
                            position: 'absolute',
                            left: -17,
                            top: 15,
                        }, color: config_1.colors.B80 }) })), (0, jsx_runtime_1.jsx)(ButtonWrapper, { children: (0, jsx_runtime_1.jsx)(IconWrapper, Object.assign({ className: classes.linkIcon }, { children: (0, jsx_runtime_1.jsx)(Icon, {}) })) })] })) }));
}
exports.DragButton = DragButton;
const IconWrapper = styled_1.default.div `
  @media screen and (max-width: 1400px) {
    svg {
      width: 24px;
      height: 24px;
    }
  }
  margin-left: 0px;
`;
const ButtonWrapper = styled_1.default.div `
  display: flex;
  justify-content: center;
`;
const Button = (0, styled_1.default)(core_1.UnstyledButton) `
  position: relative;
  margin-bottom: 0;
  width: 64px;
  @media screen and (max-width: 1400px) {
    padding: 5px;
  }
  text-align: center;
  border-radius: 7px;
  cursor: grab;
`;
//# sourceMappingURL=DragButton.js.map