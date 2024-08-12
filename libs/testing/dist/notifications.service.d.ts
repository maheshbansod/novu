export declare class NotificationsService {
    private token;
    private environmentId;
    constructor(token: string, environmentId: string);
    triggerEvent(name: string, subscriberId: string, payload?: {}): Promise<void>;
}
//# sourceMappingURL=notifications.service.d.ts.map