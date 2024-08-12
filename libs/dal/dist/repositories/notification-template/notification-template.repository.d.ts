import { FilterQuery } from 'mongoose';
import { BaseRepository } from '../base-repository';
import { NotificationTemplateDBModel, NotificationTemplateEntity } from './notification-template.entity';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
type NotificationTemplateQuery = FilterQuery<NotificationTemplateDBModel> & EnforceEnvOrOrgIds;
export declare class NotificationTemplateRepository extends BaseRepository<NotificationTemplateDBModel, NotificationTemplateEntity, EnforceEnvOrOrgIds> {
    private notificationTemplate;
    private environmentRepository;
    constructor();
    findByTriggerIdentifier(environmentId: string, identifier: string): Promise<NotificationTemplateEntity | null>;
    findById(id: string, environmentId: string): Promise<NotificationTemplateEntity | null>;
    findBlueprintById(id: string): Promise<NotificationTemplateEntity | null>;
    findBlueprintByTriggerIdentifier(identifier: string): Promise<NotificationTemplateEntity | null>;
    findBlueprintTemplates(organizationId: string, environmentId: string): Promise<NotificationTemplateEntity[]>;
    findAllGroupedByCategory(): Promise<{
        name: string;
        blueprints: NotificationTemplateEntity[];
    }[]>;
    getBlueprintList(skip?: number, limit?: number): Promise<{
        totalCount: number;
        data: NotificationTemplateEntity[];
    }>;
    getList(organizationId: string, environmentId: string, skip?: number, limit?: number, query?: string): Promise<{
        totalCount: number;
        data: NotificationTemplateEntity[];
    }>;
    getActiveList(organizationId: string, environmentId: string, active?: boolean): Promise<NotificationTemplateEntity[]>;
    delete(query: NotificationTemplateQuery): Promise<any>;
    findDeleted(query: NotificationTemplateQuery): Promise<NotificationTemplateEntity>;
    private get blueprintOrganizationId();
    static getBlueprintOrganizationId(): string | undefined;
}
export {};
//# sourceMappingURL=notification-template.repository.d.ts.map