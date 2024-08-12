"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const core_1 = require("@mantine/core");
const styled_1 = __importDefault(require("@emotion/styled"));
const react_hook_form_1 = require("react-hook-form");
const Text_1 = require("../typography/text/Text");
const Switch_1 = require("../switch/Switch");
const TemplateButton_styles_1 = require("./TemplateButton.styles");
const config_1 = require("../config");
const IconWrapper_1 = require("./IconWrapper");
const core_2 = require("@mantine/core");
const Button = (0, core_2.createPolymorphicComponent)(react_1.default.forwardRef((props, ref) => {
    return (0, jsx_runtime_1.jsx)(WrapperButton, Object.assign({ ref: ref }, props));
}));
const WrapperButton = (0, styled_1.default)(core_2.UnstyledButton) `
  position: relative;

  @media screen and (max-width: 1400px) {
    padding: 0 5px;
  }
`;
const usePopoverStyles = (0, core_1.createStyles)(() => ({
    dropdown: {
        position: 'absolute',
        padding: '12px 15px 14px',
        backgroundColor: config_1.colors.error,
        color: config_1.colors.white,
        border: 'none',
        marginTop: '1px',
        maxWidth: 300,
    },
    arrow: {
        backgroundColor: config_1.colors.error,
        height: '7px',
        border: 'none',
        margin: '0px',
    },
}));
function TemplateButton({ description, active, changeTab, tabKey, action = false, switchButton, checked = false, readonly = false, label, Icon, testId, errors = false, }) {
    const { cx, classes, theme } = (0, TemplateButton_styles_1.useTemplateButtonStyles)();
    const disabled = action && !checked;
    const disabledColor = disabled ? { color: theme.colorScheme === 'dark' ? config_1.colors.B40 : config_1.colors.B70 } : {};
    const disabledProp = disabled ? { disabled } : {};
    const [popoverOpened, setPopoverOpened] = (0, react_1.useState)(false);
    const { trigger } = (0, react_hook_form_1.useFormContext)();
    const { classes: popoverClasses } = usePopoverStyles();
    return ((0, jsx_runtime_1.jsxs)(Button, Object.assign({ onMouseEnter: () => setPopoverOpened(true), onMouseLeave: () => setPopoverOpened(false), onClick: () => __awaiter(this, void 0, void 0, function* () {
            if (active) {
                return;
            }
            changeTab(tabKey);
        }), "data-test-id": testId, className: cx(classes.button, { [classes.active]: active }) }, { children: [(0, jsx_runtime_1.jsxs)(ButtonWrapper, { children: [(0, jsx_runtime_1.jsxs)(LeftContainerWrapper, { children: [(0, jsx_runtime_1.jsx)(IconWrapper_1.IconWrapper, Object.assign({ className: classes.linkIcon }, { children: (0, jsx_runtime_1.jsx)(Icon, Object.assign({}, disabledProp)) })), (0, jsx_runtime_1.jsxs)(StyledContentWrapper, { children: [(0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({}, disabledColor, { weight: "bold" }, { children: label })), (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ mt: 3, color: config_1.colors.B60 }, disabledColor, { children: description }))] })] }), (0, jsx_runtime_1.jsx)(ActionWrapper, { children: action && !readonly && ((0, jsx_runtime_1.jsx)(Switch_1.Switch, { checked: checked, onChange: (e) => switchButton && switchButton(e.target.checked) })) })] }), errors && ((0, jsx_runtime_1.jsxs)(core_1.Popover, Object.assign({ classNames: popoverClasses, withArrow: true, opened: popoverOpened, transition: "rotate-left", transitionDuration: 250, offset: theme.spacing.xs, position: "right" }, { children: [(0, jsx_runtime_1.jsx)(core_1.Popover.Target, { children: (0, jsx_runtime_1.jsx)(ErrorCircle, { "data-test-id": "error-circle", dark: theme.colorScheme === 'dark' }) }), (0, jsx_runtime_1.jsx)(core_1.Popover.Dropdown, { children: (0, jsx_runtime_1.jsx)(Text_1.Text, Object.assign({ color: config_1.colors.white, rows: 1 }, { children: errors || 'Something is missing here' })) })] })))] })));
}
exports.TemplateButton = TemplateButton;
const ErrorCircle = styled_1.default.div `
  width: 11px;
  height: 11px;
  display: inline-block;
  position: absolute;
  right: -6px;
  top: calc(50% - 4px);
  background: ${config_1.colors.error};
  border-radius: 50%;
  border: 3px solid ${({ dark }) => (dark ? config_1.colors.B15 : 'white')};
`;
const ActionWrapper = styled_1.default.div `
  display: flex;
  align-items: center;
`;
const LeftContainerWrapper = styled_1.default.div `
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled_1.default.div `
  display: flex;
  justify-content: space-between;
`;
const StyledContentWrapper = styled_1.default.div `
  padding-right: 10px;
`;
//# sourceMappingURL=TemplateButton.js.map