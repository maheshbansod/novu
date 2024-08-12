import { NotificationTemplateEntity } from '@novu/dal';
import { CreateTemplatePayload } from './create-notification-template.interface';
export declare class NotificationTemplateService {
    private userId;
    private organizationId;
    private environmentId;
    constructor(userId: string, organizationId: string, environmentId: string);
    private notificationTemplateRepository;
    private notificationGroupRepository;
    private messageTemplateRepository;
    private feedRepository;
    private layoutRepository;
    createTemplate(override?: Partial<CreateTemplatePayload>): Promise<NotificationTemplateEntity>;
    getBlueprintTemplates(organizationId: string, environmentId: string): Promise<NotificationTemplateEntity[]>;
}
//# sourceMappingURL=notification-template.service.d.ts.map