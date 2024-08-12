"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapThemeStatusToColorScheme = void 0;
const useLocalThemePreference_1 = require("../hooks/useLocalThemePreference");
const COLOR_SCHEME_PREFERENCE_TO_COLOR_SCHEME_MAP = {
    [useLocalThemePreference_1.ColorSchemePreferenceEnum.LIGHT]: 'light',
    [useLocalThemePreference_1.ColorSchemePreferenceEnum.DARK]: 'dark',
    [useLocalThemePreference_1.ColorSchemePreferenceEnum.SYSTEM]: null,
};
/**
 * Determine which theme status correlates with which ColorScheme.
 */
const mapThemeStatusToColorScheme = (themeStatus, preferredColorScheme) => {
    var _a;
    return (_a = COLOR_SCHEME_PREFERENCE_TO_COLOR_SCHEME_MAP[themeStatus]) !== null && _a !== void 0 ? _a : preferredColorScheme;
};
exports.mapThemeStatusToColorScheme = mapThemeStatusToColorScheme;
//# sourceMappingURL=mapThemeStatusToColorScheme.js.map