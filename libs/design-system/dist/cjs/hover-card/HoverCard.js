"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoverCard = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@mantine/core");
/**
 * HoverCard component
 */
function HoverCard(props) {
    return (0, jsx_runtime_1.jsx)(core_1.HoverCard, Object.assign({ transition: "fade", radius: "md" }, props));
}
exports.HoverCard = HoverCard;
HoverCard.Target = core_1.HoverCard.Target;
HoverCard.Dropdown = core_1.HoverCard.Dropdown;
//# sourceMappingURL=HoverCard.js.map