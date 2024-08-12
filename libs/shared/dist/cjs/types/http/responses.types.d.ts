import * as nestSwagger from '@nestjs/swagger';
type NestJsExport = keyof typeof nestSwagger;
export type ApiResponseDecoratorName = NestJsExport & `Api${string}Response`;
export {};
//# sourceMappingURL=responses.types.d.ts.map