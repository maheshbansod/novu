/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ClassConstructor } from 'class-transformer';
import { Model, Types, ProjectionType, FilterQuery, UpdateQuery, QueryOptions, QueryWithHelpers } from 'mongoose';
export declare class BaseRepository<T_DBModel, T_MappedEntity, T_Enforcement> {
    protected MongooseModel: Model<T_DBModel>;
    protected entity: ClassConstructor<T_MappedEntity>;
    _model: Model<T_DBModel>;
    constructor(MongooseModel: Model<T_DBModel>, entity: ClassConstructor<T_MappedEntity>);
    static createObjectId(): string;
    static isInternalId(id: string): boolean;
    protected convertObjectIdToString(value: Types.ObjectId): string;
    protected convertStringToObjectId(value: string): Types.ObjectId;
    count(query: FilterQuery<T_DBModel> & T_Enforcement, limit?: number): Promise<number>;
    aggregate(query: any[], options?: {
        readPreference?: 'secondaryPreferred' | 'primary';
    }): Promise<any>;
    findOne(query: FilterQuery<T_DBModel> & T_Enforcement, select?: ProjectionType<T_MappedEntity>, options?: {
        readPreference?: 'secondaryPreferred' | 'primary';
        query?: QueryOptions<T_DBModel>;
    }): Promise<T_MappedEntity | null>;
    delete(query: FilterQuery<T_DBModel> & T_Enforcement): Promise<{
        acknowledged: boolean;
        deletedCount: number;
    }>;
    find(query: FilterQuery<T_DBModel> & T_Enforcement, select?: ProjectionType<T_MappedEntity>, options?: {
        limit?: number;
        sort?: any;
        skip?: number;
    }): Promise<T_MappedEntity[]>;
    findBatch(query: FilterQuery<T_DBModel> & T_Enforcement, select?: string, options?: {
        limit?: number;
        sort?: any;
        skip?: number;
    }, batchSize?: number): AsyncGenerator<import("mongoose").IfAny<T_DBModel, any, import("mongoose").Document<unknown, {}, T_DBModel> & import("mongoose").Require_id<T_DBModel>> extends infer T ? T extends import("mongoose").IfAny<T_DBModel, any, import("mongoose").Document<unknown, {}, T_DBModel> & import("mongoose").Require_id<T_DBModel>> ? T extends null ? null : T_MappedEntity : never : never, void, unknown>;
    private createCursorBasedOrStatement;
    cursorPagination({ query, limit, offset, after, sort, paginateField, enhanceQuery, }: {
        query?: FilterQuery<T_DBModel> & T_Enforcement;
        limit: number;
        offset: number;
        after?: string;
        sort?: any;
        paginateField?: string;
        enhanceQuery?: (query: QueryWithHelpers<Array<T_DBModel>, T_DBModel>) => any;
    }): Promise<{
        data: T_MappedEntity[];
        hasMore: boolean;
    }>;
    private calcExpireDate;
    create(data: FilterQuery<T_DBModel> & T_Enforcement, options?: IOptions): Promise<T_MappedEntity>;
    insertMany(data: FilterQuery<T_DBModel> & T_Enforcement[], ordered?: boolean): Promise<{
        acknowledged: boolean;
        insertedCount: number;
        insertedIds: Types.ObjectId[];
    }>;
    update(query: FilterQuery<T_DBModel> & T_Enforcement, updateBody: UpdateQuery<T_DBModel>): Promise<{
        matched: number;
        modified: number;
    }>;
    updateOne(query: FilterQuery<T_DBModel> & T_Enforcement, updateBody: UpdateQuery<T_DBModel>): Promise<{
        matched: number;
        modified: number;
    }>;
    upsertMany(data: (FilterQuery<T_DBModel> & T_Enforcement)[]): Promise<(Awaited<import("mongoose").IfAny<T_DBModel, any, import("mongoose").Document<unknown, {}, T_DBModel> & import("mongoose").Require_id<T_DBModel>>> | null)[]>;
    upsert(query: FilterQuery<T_DBModel> & T_Enforcement, data: FilterQuery<T_DBModel> & T_Enforcement): Promise<import("mongoose").ModifyResult<import("mongoose").IfAny<T_DBModel, any, import("mongoose").Document<unknown, {}, T_DBModel> & import("mongoose").Require_id<T_DBModel>>>>;
    bulkWrite(bulkOperations: any, ordered?: boolean): Promise<any>;
    protected mapEntity<TData>(data: TData): TData extends null ? null : T_MappedEntity;
    protected mapEntities(data: any): T_MappedEntity[];
}
interface IOptions {
    writeConcern?: number | 'majority';
}
export {};
//# sourceMappingURL=base-repository.d.ts.map