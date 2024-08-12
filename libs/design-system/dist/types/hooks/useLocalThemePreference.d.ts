export declare enum ColorSchemePreferenceEnum {
    DARK = "dark",
    LIGHT = "light",
    SYSTEM = "system"
}
export declare const THEME_TITLE_LOOKUP: Record<ColorSchemePreferenceEnum, string>;
export declare function useLocalThemePreference(): {
    themeStatus: ColorSchemePreferenceEnum;
    setThemeStatus: (val: ColorSchemePreferenceEnum | ((prevState: ColorSchemePreferenceEnum) => ColorSchemePreferenceEnum)) => void;
};
//# sourceMappingURL=useLocalThemePreference.d.ts.map