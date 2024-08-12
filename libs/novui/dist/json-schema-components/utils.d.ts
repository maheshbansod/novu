import { JsonSchemaFormSectionVariant } from '../../styled-system/recipes';
export declare const JSON_SCHEMA_FORM_ID_DELIMITER = "~~~";
/** determine the tree depth of a JsonSchemaForm section with the given sectionId */
export declare function calculateSectionDepth({ sectionId }: {
    sectionId: string;
}): number;
export declare function getVariantFromDepth(depth: number): JsonSchemaFormSectionVariant['depth'];
//# sourceMappingURL=utils.d.ts.map