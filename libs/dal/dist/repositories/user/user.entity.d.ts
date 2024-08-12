import { AuthProviderEnum, IUserEntity, JobTitleEnum } from '@novu/shared';
import { UserId } from './types';
export interface IUserToken {
    providerId: string;
    provider: AuthProviderEnum;
    accessToken: string;
    refreshToken: string;
    valid: boolean;
    username?: string;
}
export interface IUserResetTokenCount {
    reqInMinute: number;
    reqInDay: number;
}
export declare class UserEntity implements IUserEntity {
    _id: UserId;
    resetToken?: string;
    resetTokenDate?: string;
    resetTokenCount?: IUserResetTokenCount;
    firstName: string;
    lastName?: string | null;
    email: string;
    profilePicture?: string | null;
    tokens: IUserToken[];
    password?: string;
    createdAt: string;
    showOnBoarding?: boolean;
    showOnBoardingTour?: number;
    failedLogin?: {
        times: number;
        lastFailedAttempt: string;
    };
    servicesHashes?: {
        intercom?: string;
    };
    jobTitle?: JobTitleEnum;
    hasPassword: boolean;
    externalId?: string;
}
export type UserDBModel = UserEntity;
//# sourceMappingURL=user.entity.d.ts.map