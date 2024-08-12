"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorSchemeHtmlElement = void 0;
/** Get the innermost <html> element that serves as the basis for our theme */
const getColorSchemeHtmlElement = () => {
    /**
     * Avoid issues with multiple `html` elements (like in Storybook) by getting all html elements
     * and taking the innermost one
     */
    const htmlElements = document.querySelectorAll('html');
    if (!(htmlElements === null || htmlElements === void 0 ? void 0 : htmlElements.length)) {
        return null;
    }
    return htmlElements.item(htmlElements.length - 1);
};
exports.getColorSchemeHtmlElement = getColorSchemeHtmlElement;
//# sourceMappingURL=getColorSchemeHtmlElement.js.map