import { ProjectionType } from 'mongoose';
import { IDigestRegularMetadata, DigestCreationResultEnum } from '@novu/shared';
import { BaseRepository } from '../base-repository';
import { JobEntity, JobDBModel, JobStatusEnum } from './job.entity';
import { NotificationTemplateEntity } from '../notification-template';
import { SubscriberEntity } from '../subscriber';
import { NotificationEntity } from '../notification';
import { EnvironmentEntity } from '../environment';
import type { EnforceEnvOrOrgIds, IUpdateResult } from '../../types';
type JobEntityPopulated = JobEntity & {
    template: NotificationTemplateEntity;
    notification: NotificationEntity;
    subscriber: SubscriberEntity;
    environment: EnvironmentEntity;
};
export interface IDelayOrDigestJobResult {
    digestResult: DigestCreationResultEnum;
    activeDigestId?: string;
    activeNotificationId?: string;
}
export declare class JobRepository extends BaseRepository<JobDBModel, JobEntity, EnforceEnvOrOrgIds> {
    constructor();
    storeJobs(jobs: Omit<JobEntity, '_id' | 'createdAt' | 'updatedAt'>[]): Promise<JobEntity[]>;
    updateStatus(environmentId: string, jobId: string, status: JobStatusEnum): Promise<IUpdateResult>;
    setError(organizationId: string, jobId: string, error: any): Promise<void>;
    findJobsToDigest(from: Date, templateId: string, environmentId: string, subscriberId: string, digestKey?: string, digestValue?: string | number): Promise<JobEntity[]>;
    findOnePopulate({ query, select, selectTemplate, selectNotification, selectSubscriber, selectEnvironment, }: {
        query: {
            _environmentId: string;
            transactionId: string;
        };
        select?: ProjectionType<JobEntity>;
        selectTemplate?: ProjectionType<NotificationTemplateEntity>;
        selectNotification?: ProjectionType<NotificationEntity>;
        selectSubscriber?: ProjectionType<SubscriberEntity>;
        selectEnvironment?: ProjectionType<EnvironmentEntity>;
    }): Promise<JobEntityPopulated>;
    shouldDelayDigestJobOrMerge(job: JobEntity, digestKey?: string, digestValue?: string | number, digestMeta?: IDigestRegularMetadata): Promise<IDelayOrDigestJobResult>;
    private getBackoffDate;
    private getTrigger;
    updateAllChildJobStatus(job: JobEntity, status: JobStatusEnum, activeDigestId: string): Promise<JobEntity[]>;
}
export {};
//# sourceMappingURL=job.repository.d.ts.map