import { FormProps } from '@rjsf/core';
import { JsxStyleProps } from '../../styled-system/types';
import { CoreProps } from '../types';
export type JsonSchemaFormProps<TFormData = any> = JsxStyleProps & CoreProps & Pick<FormProps<TFormData>, 'onChange' | 'onSubmit' | 'onBlur' | 'schema' | 'formData' | 'tagName'>;
/**
 * Specialized form editor for data passed as JSON.
 */
export declare function JsonSchemaForm<TFormData = any>(props: JsonSchemaFormProps<TFormData>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=JsonSchemaForm.d.ts.map