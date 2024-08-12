import { Queue } from 'bullmq';
import { JobTopicNameEnum } from '@novu/shared';
export declare class JobsService {
    private isClusterMode?;
    private jobRepository;
    standardQueue: Queue;
    workflowQueue: Queue;
    subscriberProcessQueue: Queue;
    executionLogQueue: Queue;
    constructor(isClusterMode?: boolean);
    queueGet(jobTopicName: JobTopicNameEnum, getter: 'getDelayed'): Promise<import("bullmq").Job<any, any, string>[]>;
    awaitParsingEvents(): Promise<void>;
    awaitRunningJobs({ templateId, organizationId, delay, unfinishedJobs, }: {
        templateId?: string | string[];
        organizationId: string;
        delay?: boolean;
        unfinishedJobs?: number;
    }): Promise<{
        getDelayedTimestamp: () => Promise<number>;
        runDelayedImmediately: () => Promise<void>;
    }>;
    private getQueueMetric;
}
//# sourceMappingURL=jobs.service.d.ts.map