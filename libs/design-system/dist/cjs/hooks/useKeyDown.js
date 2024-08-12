"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyDown = void 0;
const react_1 = require("react");
const useDataRef_1 = require("./useDataRef");
const useKeyDown = (key, callback) => {
    const callbackRef = (0, useDataRef_1.useDataRef)(callback);
    (0, react_1.useEffect)(() => {
        const handleKeyDown = (e) => {
            if (e.key === key) {
                callbackRef.current();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [callbackRef, key]);
};
exports.useKeyDown = useKeyDown;
//# sourceMappingURL=useKeyDown.js.map