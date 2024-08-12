import { jsx as _jsx } from "react/jsx-runtime";
import { HoverCard as MantineHoverCard } from '@mantine/core';
/**
 * HoverCard component
 */
export function HoverCard(props) {
    return _jsx(MantineHoverCard, Object.assign({ transition: "fade", radius: "md" }, props));
}
HoverCard.Target = MantineHoverCard.Target;
HoverCard.Dropdown = MantineHoverCard.Dropdown;
//# sourceMappingURL=HoverCard.js.map