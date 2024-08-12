"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
/** Return value within inclusive bounds of min and max */
const clamp = (value, min, max) => {
    const verifiedMin = Math.min(min, max);
    const verifiedMax = Math.max(min, max);
    return Math.max(Math.min(value, verifiedMax), verifiedMin);
};
exports.clamp = clamp;
//# sourceMappingURL=clamp.js.map