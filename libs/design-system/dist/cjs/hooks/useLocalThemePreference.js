"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocalThemePreference = exports.THEME_TITLE_LOOKUP = exports.ColorSchemePreferenceEnum = void 0;
const hooks_1 = require("@mantine/hooks");
const STORAGE_KEY = 'mantine-theme';
const DEFAULT_THEME_TITLE = 'Match System Appearance';
var ColorSchemePreferenceEnum;
(function (ColorSchemePreferenceEnum) {
    ColorSchemePreferenceEnum["DARK"] = "dark";
    ColorSchemePreferenceEnum["LIGHT"] = "light";
    ColorSchemePreferenceEnum["SYSTEM"] = "system";
})(ColorSchemePreferenceEnum = exports.ColorSchemePreferenceEnum || (exports.ColorSchemePreferenceEnum = {}));
exports.THEME_TITLE_LOOKUP = {
    [ColorSchemePreferenceEnum.DARK]: 'Dark Theme',
    [ColorSchemePreferenceEnum.LIGHT]: 'Light Theme',
    [ColorSchemePreferenceEnum.SYSTEM]: DEFAULT_THEME_TITLE,
};
function useLocalThemePreference() {
    const [themeStatus, setThemeStatus] = (0, hooks_1.useLocalStorage)({
        key: STORAGE_KEY,
        defaultValue: ColorSchemePreferenceEnum.DARK,
        getInitialValueInEffect: true,
    });
    return { themeStatus, setThemeStatus };
}
exports.useLocalThemePreference = useLocalThemePreference;
//# sourceMappingURL=useLocalThemePreference.js.map