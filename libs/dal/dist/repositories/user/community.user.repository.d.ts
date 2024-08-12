import { BaseRepository } from '../base-repository';
import { IUserRepository } from './user-repository.interface';
import { IUserResetTokenCount, UserEntity, UserDBModel } from './user.entity';
export declare class CommunityUserRepository extends BaseRepository<UserDBModel, UserEntity, object> implements IUserRepository {
    constructor();
    findByEmail(email: string): Promise<UserEntity | null>;
    findById(id: string, select?: string): Promise<UserEntity | null>;
    private hashResetToken;
    findUserByToken(token: string): Promise<UserEntity | null>;
    updatePasswordResetToken(userId: string, token: string, resetTokenCount: IUserResetTokenCount): Promise<{
        matched: number;
        modified: number;
    }>;
}
//# sourceMappingURL=community.user.repository.d.ts.map