/** Return value within inclusive bounds of min and max */
export const clamp = (value, min, max) => {
    const verifiedMin = Math.min(min, max);
    const verifiedMax = Math.max(min, max);
    return Math.max(Math.min(value, verifiedMax), verifiedMin);
};
//# sourceMappingURL=clamp.js.map