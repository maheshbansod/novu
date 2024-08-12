import { getColorSchemeHtmlElement } from './getColorSchemeHtmlElement';
const DEFAULT_COLOR_SCHEME = 'light';
/**
 * Gets the user's preferred color scheme according to their browser settings.
 * @returns ColorScheme
 */
export const getBrowserColorScheme = () => {
    var _a, _b;
    return ((_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, `(prefers-color-scheme: dark)`)) === null || _b === void 0 ? void 0 : _b.matches) ? 'dark' : DEFAULT_COLOR_SCHEME;
};
/**
 * Get the current color scheme of the application based on the application html.
 * @returns ColorScheme
 */
export const getCurrentColorScheme = () => {
    const htmlElem = getColorSchemeHtmlElement();
    // fallback to browser preferences if there isn't an html element
    if (!(htmlElem === null || htmlElem === void 0 ? void 0 : htmlElem.classList)) {
        return getBrowserColorScheme();
    }
    return htmlElem.classList.contains('dark')
        ? 'dark'
        : htmlElem.classList.contains('light')
            ? 'light'
            : DEFAULT_COLOR_SCHEME;
};
//# sourceMappingURL=getColorScheme.js.map