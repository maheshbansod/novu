"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentColorScheme = exports.getBrowserColorScheme = void 0;
const getColorSchemeHtmlElement_1 = require("./getColorSchemeHtmlElement");
const DEFAULT_COLOR_SCHEME = 'light';
/**
 * Gets the user's preferred color scheme according to their browser settings.
 * @returns ColorScheme
 */
const getBrowserColorScheme = () => {
    var _a, _b;
    return ((_b = (_a = window === null || window === void 0 ? void 0 : window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, `(prefers-color-scheme: dark)`)) === null || _b === void 0 ? void 0 : _b.matches) ? 'dark' : DEFAULT_COLOR_SCHEME;
};
exports.getBrowserColorScheme = getBrowserColorScheme;
/**
 * Get the current color scheme of the application based on the application html.
 * @returns ColorScheme
 */
const getCurrentColorScheme = () => {
    const htmlElem = (0, getColorSchemeHtmlElement_1.getColorSchemeHtmlElement)();
    // fallback to browser preferences if there isn't an html element
    if (!(htmlElem === null || htmlElem === void 0 ? void 0 : htmlElem.classList)) {
        return (0, exports.getBrowserColorScheme)();
    }
    return htmlElem.classList.contains('dark')
        ? 'dark'
        : htmlElem.classList.contains('light')
            ? 'light'
            : DEFAULT_COLOR_SCHEME;
};
exports.getCurrentColorScheme = getCurrentColorScheme;
//# sourceMappingURL=getColorScheme.js.map