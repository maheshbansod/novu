import { defineSlotRecipe } from '@pandacss/dev';
import { colorPaletteGradientHorizontal } from '../ingredients';
const SLOTS = ['root', 'overlay', 'loader'];
export const LOADING_OVERLAY_RECIPE = defineSlotRecipe({
    className: 'loadingOverlay',
    jsx: ['LoadingOverlay'],
    slots: SLOTS,
    base: {
        root: {
            // default color palette
            colorPalette: 'mode.cloud',
        },
        overlay: {
            background: 'loader.overlay',
            // TODO: use semantic token when available
            opacity: '40',
        },
        loader: {
            // Have to target children in external loaders
            '& span': Object.assign({}, colorPaletteGradientHorizontal),
            // Specifically needed for oval loader
            _after: {
                borderColor: 'colorPalette.middle',
                borderLeftColor: 'transparent',
            },
        },
    },
});
//# sourceMappingURL=loading-overlay.recipe.js.map