import { useState } from 'react';
export const useExpandToggle = (defaultValue = true) => {
    const [isExpanded, setExpanded] = useState(defaultValue);
    return [isExpanded, () => setExpanded((prevExpanded) => !prevExpanded)];
};
//# sourceMappingURL=useExpandToggle.js.map