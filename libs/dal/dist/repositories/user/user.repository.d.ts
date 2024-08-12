import { IUserRepository } from './user-repository.interface';
import { UserEntity, IUserResetTokenCount } from './user.entity';
import { Types } from 'mongoose';
export declare class UserRepository implements IUserRepository {
    private userRepository;
    constructor(userRepository: IUserRepository);
    findByEmail(email: string): Promise<UserEntity | null>;
    findById(id: string, select?: string): Promise<UserEntity | null>;
    findUserByToken(token: string): Promise<UserEntity | null>;
    updatePasswordResetToken(userId: string, token: string, resetTokenCount: IUserResetTokenCount): Promise<{
        matched: number;
        modified: number;
    }>;
    create(data: any, options?: any): Promise<UserEntity>;
    update(query: any, body: any): Promise<{
        matched: number;
        modified: number;
    }>;
    delete(query: any): Promise<{
        acknowledged: boolean;
        deletedCount: number;
    }>;
    count(query: any, limit?: number | undefined): Promise<number>;
    aggregate(query: any[], options?: {
        readPreference?: 'secondaryPreferred' | 'primary' | undefined;
    } | undefined): Promise<any>;
    findOne(query: any, select?: any, options?: any): Promise<UserEntity | null>;
    find(query: any, select?: any, options?: any): Promise<UserEntity[]>;
    findBatch(query: any, select?: string | undefined, options?: any, batchSize?: number | undefined): AsyncGenerator<any, any, unknown>;
    insertMany(data: any, ordered: boolean): Promise<{
        acknowledged: boolean;
        insertedCount: number;
        insertedIds: Types.ObjectId[];
    }>;
    updateOne(query: any, body: any): Promise<{
        matched: number;
        modified: number;
    }>;
    upsertMany(data: any): Promise<any>;
    upsert(query: any, data: any): Promise<any>;
    bulkWrite(bulkOperations: any, ordered: boolean): Promise<any>;
}
//# sourceMappingURL=user.repository.d.ts.map