import { SubscriberEntity } from '@novu/dal';
export declare class SubscribersService {
    private _organizationId;
    private _environmentId;
    private subscriberRepository;
    private integrationRepository;
    constructor(_organizationId: string, _environmentId: string);
    createSubscriber(fields?: Partial<SubscriberEntity>): Promise<SubscriberEntity>;
}
//# sourceMappingURL=subscribers.service.d.ts.map