import { ColorScheme } from './ColorScheme';
/**
 * Handle behavior for changing ColorSchemes or ThemeStatuses.
 *
 * NOTE: This is not intended for getting the color scheme in application code:
 * - For styling with Panda, use _dark or _light to create CSS targeted at a specific color scheme.
 */
export declare const useColorScheme: () => {
    colorScheme: ColorScheme;
    toggleColorScheme: () => void;
    setColorScheme: (newColorScheme: ColorScheme) => void;
};
//# sourceMappingURL=useColorScheme.d.ts.map