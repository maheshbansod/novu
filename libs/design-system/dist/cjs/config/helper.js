"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGradient = void 0;
/**
 * It takes a color and returns a gradient
 * @param color - The color you want to use for the gradient.
 */
const getGradient = (color) => `linear-gradient(0deg, ${color} 0%, ${color} 100%)`;
exports.getGradient = getGradient;
//# sourceMappingURL=helper.js.map