"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sidebarDrawerContentClassName = exports.useDrawerStyles = exports.FooterHolder = exports.BodyHolder = exports.Form = exports.scrollableClass = exports.HeaderHolder = void 0;
const css_1 = require("@emotion/css");
const styled_1 = __importDefault(require("@emotion/styled"));
const core_1 = require("@mantine/core");
const config_1 = require("../config");
const Sidebar_const_1 = require("./Sidebar.const");
exports.HeaderHolder = styled_1.default.div `
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  margin: 24px;
  margin-bottom: 0;
`;
const scrollable = `
  overflow-x: hidden;
  overflow-y: auto;
`;
exports.scrollableClass = (0, css_1.css)(scrollable);
exports.Form = styled_1.default.form `
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${(props) => props.isParentScrollable && scrollable};
`;
exports.BodyHolder = styled_1.default.div `
  display: flex;
  flex-direction: column;
  ${(props) => !props.isParentScrollable && scrollable};
  margin: 0 24px;
  gap: 24px;
  padding-right: 5px;
  margin-right: 19px;
  height: 100%;
`;
exports.FooterHolder = styled_1.default.div `
  display: flex;
  flex-wrap: nowrap;
  gap: 6px;
  margin: 24px;
  margin-top: 0;
  margin-top: auto;
`;
exports.useDrawerStyles = (0, core_1.createStyles)((theme, { isExpanded, navigationWidth = Sidebar_const_1.NAVIGATION_WIDTH }) => {
    return {
        root: {
            position: 'absolute',
        },
        drawer: {
            position: 'fixed',
            top: 40,
            right: 0,
            bottom: 0,
            backgroundColor: theme.colorScheme === 'dark' ? config_1.colors.B17 : config_1.colors.white,
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            boxShadow: config_1.shadows.dark,
            width: isExpanded ? `calc(100% - ${navigationWidth}px)` : Sidebar_const_1.COLLAPSED_WIDTH,
            transition: 'all 300ms ease !important',
            '@media screen and (max-width: 768px)': {
                width: isExpanded ? `100%` : Sidebar_const_1.COLLAPSED_WIDTH,
            },
        },
        body: {
            height: '100%',
        },
    };
});
exports.sidebarDrawerContentClassName = (0, css_1.css) `
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
//# sourceMappingURL=Sidebar.styles.js.map