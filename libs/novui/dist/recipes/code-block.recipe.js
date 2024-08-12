import { defineSlotRecipe } from '@pandacss/dev';
import { BUTTON_RECIPE } from './button.recipe';
// full enumeration of the component library's slots
const SLOTS = ['root', 'pre', 'code', 'copy'];
export const CODE_BLOCK_RECIPE = defineSlotRecipe({
    className: 'code-block',
    jsx: ['CodeBlock'],
    slots: SLOTS,
    base: {
        root: {
            bg: 'codeBlock.surface !important',
        },
        code: {
            color: 'codeBlock.text !important',
        },
        pre: {},
        copy: Object.assign({}, BUTTON_RECIPE.variants.transparent),
    },
});
//# sourceMappingURL=code-block.recipe.js.map