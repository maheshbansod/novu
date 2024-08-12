import { ColorSchemePreferenceEnum } from '../hooks/useLocalThemePreference';
const COLOR_SCHEME_PREFERENCE_TO_COLOR_SCHEME_MAP = {
    [ColorSchemePreferenceEnum.LIGHT]: 'light',
    [ColorSchemePreferenceEnum.DARK]: 'dark',
    [ColorSchemePreferenceEnum.SYSTEM]: null,
};
/**
 * Determine which theme status correlates with which ColorScheme.
 */
export const mapThemeStatusToColorScheme = (themeStatus, preferredColorScheme) => {
    var _a;
    return (_a = COLOR_SCHEME_PREFERENCE_TO_COLOR_SCHEME_MAP[themeStatus]) !== null && _a !== void 0 ? _a : preferredColorScheme;
};
//# sourceMappingURL=mapThemeStatusToColorScheme.js.map