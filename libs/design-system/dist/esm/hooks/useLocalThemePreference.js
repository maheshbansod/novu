import { useLocalStorage } from '@mantine/hooks';
const STORAGE_KEY = 'mantine-theme';
const DEFAULT_THEME_TITLE = 'Match System Appearance';
export var ColorSchemePreferenceEnum;
(function (ColorSchemePreferenceEnum) {
    ColorSchemePreferenceEnum["DARK"] = "dark";
    ColorSchemePreferenceEnum["LIGHT"] = "light";
    ColorSchemePreferenceEnum["SYSTEM"] = "system";
})(ColorSchemePreferenceEnum || (ColorSchemePreferenceEnum = {}));
export const THEME_TITLE_LOOKUP = {
    [ColorSchemePreferenceEnum.DARK]: 'Dark Theme',
    [ColorSchemePreferenceEnum.LIGHT]: 'Light Theme',
    [ColorSchemePreferenceEnum.SYSTEM]: DEFAULT_THEME_TITLE,
};
export function useLocalThemePreference() {
    const [themeStatus, setThemeStatus] = useLocalStorage({
        key: STORAGE_KEY,
        defaultValue: ColorSchemePreferenceEnum.DARK,
        getInitialValueInEffect: true,
    });
    return { themeStatus, setThemeStatus };
}
//# sourceMappingURL=useLocalThemePreference.js.map