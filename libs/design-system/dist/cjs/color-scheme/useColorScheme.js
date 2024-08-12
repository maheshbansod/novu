"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorScheme = void 0;
const react_1 = require("react");
const useLocalThemePreference_1 = require("../hooks/useLocalThemePreference");
const hooks_1 = require("@mantine/hooks");
const mapThemeStatusToColorScheme_1 = require("./mapThemeStatusToColorScheme");
const getColorSchemeHtmlElement_1 = require("./getColorSchemeHtmlElement");
/**
 * Handle behavior for changing ColorSchemes or ThemeStatuses.
 *
 * NOTE: This is not intended for getting the color scheme in application code:
 * - For styling with Panda, use _dark or _light to create CSS targeted at a specific color scheme.
 */
const useColorScheme = () => {
    const { themeStatus, setThemeStatus } = (0, useLocalThemePreference_1.useLocalThemePreference)();
    const preferredColorScheme = (0, hooks_1.useColorScheme)();
    const [colorScheme, _setColorScheme] = (0, react_1.useState)(preferredColorScheme);
    const setColorScheme = (0, react_1.useCallback)((newColorScheme) => {
        const htmlElem = (0, getColorSchemeHtmlElement_1.getColorSchemeHtmlElement)();
        if (!htmlElem) {
            return;
        }
        htmlElem.className = newColorScheme;
        _setColorScheme(newColorScheme);
    }, [_setColorScheme]);
    const toggleColorScheme = () => {
        switch (themeStatus) {
            case useLocalThemePreference_1.ColorSchemePreferenceEnum.SYSTEM:
                setThemeStatus(useLocalThemePreference_1.ColorSchemePreferenceEnum.LIGHT);
                break;
            case useLocalThemePreference_1.ColorSchemePreferenceEnum.LIGHT:
                setThemeStatus(useLocalThemePreference_1.ColorSchemePreferenceEnum.DARK);
                break;
            default:
                setThemeStatus(useLocalThemePreference_1.ColorSchemePreferenceEnum.SYSTEM);
                break;
        }
    };
    (0, react_1.useEffect)(() => {
        setColorScheme((0, mapThemeStatusToColorScheme_1.mapThemeStatusToColorScheme)(themeStatus, preferredColorScheme));
    }, [themeStatus, preferredColorScheme, setColorScheme]);
    return {
        colorScheme,
        toggleColorScheme,
        setColorScheme,
    };
};
exports.useColorScheme = useColorScheme;
//# sourceMappingURL=useColorScheme.js.map