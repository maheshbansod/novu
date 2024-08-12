import { UserEntity } from '@novu/dal';
export declare class EEUserService {
    private userRepository;
    createUser(userId: string): Promise<UserEntity>;
    getUser(id: string): Promise<UserEntity>;
}
//# sourceMappingURL=ee.user.service.d.ts.map