import { useEffect } from 'react';
import { useDataRef } from './useDataRef';
export const useKeyDown = (key, callback) => {
    const callbackRef = useDataRef(callback);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === key) {
                callbackRef.current();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [callbackRef, key]);
};
//# sourceMappingURL=useKeyDown.js.map