import { UserEntity } from '@novu/dal';
export declare class UserService {
    private environmentService;
    private organizationService;
    private userRepository;
    createTestUser(): Promise<UserEntity>;
    createUser(userEntity?: Partial<UserEntity>): Promise<UserEntity>;
    getUser(id: string): Promise<UserEntity>;
    randomEmail(): string;
    randomPassword(): string;
    testPassword(): string;
}
//# sourceMappingURL=user.service.d.ts.map