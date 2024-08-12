"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
exports.Label = styled_1.default.div `
  height: 20px;
  font-family: 'Lato', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;

  ${({ gradientColor }) => {
    return (gradientColor !== 'none' &&
        `
    background: ${gradientColor === 'red'
            ? 'linear-gradient(90deg, #DD2476 0%, #FF512F 100%)'
            : 'linear-gradient(0deg, #14deeb 0%, #446edc 100%)'};
        
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
      `);
}};
`;
//# sourceMappingURL=index.js.map