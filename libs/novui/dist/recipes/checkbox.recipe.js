import { defineSlotRecipe } from '@pandacss/dev';
import { colorPaletteGradientHorizontal } from '../ingredients';
import { INPUT_RECIPE } from './input.recipe';
// full enumeration of the component library's slots
const SLOTS = [
    'root',
    'body',
    'input',
    'description',
    'error',
    'label',
    'icon',
    'inner',
    'labelWrapper',
];
export const CHECKBOX_RECIPE = defineSlotRecipe({
    className: 'checkbox',
    jsx: ['Checkbox'],
    slots: SLOTS,
    base: Object.assign(Object.assign({}, INPUT_RECIPE.base), { root: {
            _hoverNotDisabled: {
                opacity: 'hover',
                '& input, & label': {
                    cursor: 'pointer',
                },
            },
        }, icon: {
            color: 'button.icon.filled',
        }, input: {
            border: 'solid',
            borderColor: 'input.border',
            borderRadius: '50',
            background: 'transparent',
            _checked: Object.assign(Object.assign({}, colorPaletteGradientHorizontal), { color: 'typography.text.main', border: 'transparent' }),
            _disabled: {
                opacity: 'disabled',
            },
        }, label: Object.assign(Object.assign({}, INPUT_RECIPE.base.label), { paddingLeft: '50', _disabled: {
                opacity: 'disabled',
            } }) }),
});
//# sourceMappingURL=checkbox.recipe.js.map