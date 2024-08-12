"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const clamp_1 = require("./clamp");
(0, vitest_1.describe)('clamp', () => {
    (0, vitest_1.it)('should return the value itself if it is within the inclusive bounds', () => {
        const result = (0, clamp_1.clamp)(5, 0, 10);
        (0, vitest_1.expect)(result).to.equal(5);
    });
    (0, vitest_1.it)('should clamp the value to the minimum bound if it is less than the minimum bound', () => {
        const result = (0, clamp_1.clamp)(-5, 0, 10);
        (0, vitest_1.expect)(result).to.equal(0);
    });
    (0, vitest_1.it)('should clamp the value to the maximum bound if it is greater than the maximum bound', () => {
        const result = (0, clamp_1.clamp)(15, 0, 10);
        (0, vitest_1.expect)(result).to.equal(10);
    });
    (0, vitest_1.it)('should work correctly with negative values', () => {
        const result = (0, clamp_1.clamp)(-7, -10, 5);
        (0, vitest_1.expect)(result).to.equal(-7);
    });
    (0, vitest_1.it)('should work correctly with decimal values', () => {
        const result = (0, clamp_1.clamp)(3.5, 1, 5);
        (0, vitest_1.expect)(result).to.equal(3.5);
    });
    (0, vitest_1.it)('should handle min and max being the same value', () => {
        const result = (0, clamp_1.clamp)(5, 5, 5);
        (0, vitest_1.expect)(result).to.equal(5);
    });
    (0, vitest_1.it)('should handle min being greater than max by swapping them', () => {
        const result = (0, clamp_1.clamp)(8, 10, 5);
        (0, vitest_1.expect)(result).to.equal(8);
    });
    (0, vitest_1.it)('should handle NaN values by returning NaN', () => {
        const result = (0, clamp_1.clamp)(NaN, 0, 10);
        (0, vitest_1.expect)(result).to.be.NaN;
    });
    (0, vitest_1.it)('should handle Infinity and -Infinity values correctly', () => {
        const result1 = (0, clamp_1.clamp)(Infinity, 0, 10);
        (0, vitest_1.expect)(result1).to.equal(10);
        const result2 = (0, clamp_1.clamp)(-Infinity, 0, 10);
        (0, vitest_1.expect)(result2).to.equal(0);
    });
});
//# sourceMappingURL=clamp.spec.js.map