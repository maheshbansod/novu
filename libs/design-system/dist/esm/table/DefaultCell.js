import { withCellLoading } from './withCellLoading';
const DefaultCellComponent = ({ value }) => {
    return value !== null && value !== void 0 ? value : '';
};
export const DefaultCell = withCellLoading(DefaultCellComponent);
//# sourceMappingURL=DefaultCell.js.map