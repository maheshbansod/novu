import { defineStyles } from '@pandacss/dev';
export const colorPaletteGradientHorizontal = defineStyles({
    bgGradient: `to-r !important`,
    gradientFrom: 'colorPalette.start !important',
    gradientTo: 'colorPalette.end !important',
});
export const colorPaletteGradientText = defineStyles(Object.assign(Object.assign({}, colorPaletteGradientHorizontal), { backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }));
export const colorPaletteGradientVertical = defineStyles({
    bgGradient: `to-b !important`,
    gradientFrom: 'colorPalette.start !important',
    gradientTo: 'colorPalette.end !important',
});
//# sourceMappingURL=colorPaletteGradient.ingredient.js.map