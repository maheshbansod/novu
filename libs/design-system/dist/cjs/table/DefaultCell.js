"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultCell = void 0;
const withCellLoading_1 = require("./withCellLoading");
const DefaultCellComponent = ({ value }) => {
    return value !== null && value !== void 0 ? value : '';
};
exports.DefaultCell = (0, withCellLoading_1.withCellLoading)(DefaultCellComponent);
//# sourceMappingURL=DefaultCell.js.map