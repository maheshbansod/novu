"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const dal_1 = require("@novu/dal");
const shared_1 = require("@novu/shared");
const testing_queue_service_1 = require("./testing-queue.service");
const LOG_CONTEXT = 'TestingJobsService';
class JobsService {
    constructor(isClusterMode) {
        this.isClusterMode = isClusterMode;
        this.jobRepository = new dal_1.JobRepository();
        this.workflowQueue = new testing_queue_service_1.TestingQueueService(shared_1.JobTopicNameEnum.WORKFLOW).queue;
        this.standardQueue = new testing_queue_service_1.TestingQueueService(shared_1.JobTopicNameEnum.STANDARD).queue;
        this.subscriberProcessQueue = new testing_queue_service_1.TestingQueueService(shared_1.JobTopicNameEnum.PROCESS_SUBSCRIBER).queue;
        this.executionLogQueue = new testing_queue_service_1.TestingQueueService(shared_1.JobTopicNameEnum.EXECUTION_LOG).queue;
    }
    queueGet(jobTopicName, getter) {
        return __awaiter(this, void 0, void 0, function* () {
            let queue;
            switch (jobTopicName) {
                case shared_1.JobTopicNameEnum.WORKFLOW:
                    queue = this.workflowQueue;
                    break;
                case shared_1.JobTopicNameEnum.STANDARD:
                    queue = this.standardQueue;
                    break;
                case shared_1.JobTopicNameEnum.PROCESS_SUBSCRIBER:
                    queue = this.subscriberProcessQueue;
                    break;
                default:
                    throw new Error(`Invalid job topic name: ${jobTopicName}`);
            }
            switch (getter) {
                case 'getDelayed':
                    return queue.getDelayed();
                default:
                    throw new Error(`Invalid getter: ${getter}`);
            }
        });
    }
    awaitParsingEvents() {
        return __awaiter(this, void 0, void 0, function* () {
            let totalCount = 0;
            do {
                totalCount = (yield this.getQueueMetric()).totalCount;
            } while (totalCount > 0);
        });
    }
    awaitRunningJobs({ templateId, organizationId, delay, unfinishedJobs = 0, }) {
        return __awaiter(this, void 0, void 0, function* () {
            let runningJobs = 0;
            let totalCount = 0;
            const workflowMatch = templateId
                ? { _templateId: Array.isArray(templateId) ? { $in: templateId } : templateId }
                : {};
            const typeMatch = delay
                ? {
                    type: {
                        $nin: [delay ? shared_1.StepTypeEnum.DELAY : shared_1.StepTypeEnum.DIGEST],
                    },
                }
                : {};
            do {
                totalCount = (yield this.getQueueMetric()).totalCount;
                runningJobs = yield this.jobRepository.count(Object.assign(Object.assign(Object.assign({ _organizationId: organizationId }, typeMatch), workflowMatch), { status: {
                        $in: [dal_1.JobStatusEnum.PENDING, dal_1.JobStatusEnum.QUEUED, dal_1.JobStatusEnum.RUNNING],
                    } }));
            } while (totalCount > 0 || runningJobs > unfinishedJobs);
            return {
                getDelayedTimestamp: () => __awaiter(this, void 0, void 0, function* () {
                    const delayedJobs = yield this.standardQueue.getDelayed();
                    if (delayedJobs.length === 1) {
                        return delayedJobs[0].delay;
                    }
                    else {
                        if (delayedJobs.length > 1) {
                            throw new Error('There are more than one delayed jobs');
                        }
                        else if (delayedJobs.length === 0) {
                            throw new Error('There are no delayed jobs');
                        }
                    }
                }),
                runDelayedImmediately: () => __awaiter(this, void 0, void 0, function* () {
                    const delayedJobs = yield this.standardQueue.getDelayed();
                    if (delayedJobs.length === 1) {
                        yield delayedJobs[0].changeDelay(1);
                    }
                    else {
                        if (delayedJobs.length > 1) {
                            throw new Error('There are more than one delayed jobs');
                        }
                        else if (delayedJobs.length === 0) {
                            throw new Error('There are no delayed jobs');
                        }
                    }
                }),
            };
        });
    }
    getQueueMetric() {
        return __awaiter(this, void 0, void 0, function* () {
            const [parsedEvents, waitingCount, waitingStandardJobsCount, activeStandardJobsCount, subscriberProcessQueueWaitingCount, subscriberProcessQueueActiveCount, executionLogQueueWaitingCount, executionLogQueueActiveCount,] = yield Promise.all([
                this.workflowQueue.getActiveCount(),
                this.workflowQueue.getWaitingCount(),
                this.standardQueue.getWaitingCount(),
                this.standardQueue.getActiveCount(),
                this.subscriberProcessQueue.getWaitingCount(),
                this.subscriberProcessQueue.getActiveCount(),
                this.executionLogQueue.getWaitingCount(),
                this.executionLogQueue.getActiveCount(),
            ]);
            const totalCount = parsedEvents +
                waitingCount +
                waitingStandardJobsCount +
                activeStandardJobsCount +
                subscriberProcessQueueWaitingCount +
                subscriberProcessQueueActiveCount +
                executionLogQueueWaitingCount +
                executionLogQueueActiveCount;
            return {
                totalCount,
                parsedEvents,
                waitingCount,
                waitingStandardJobsCount,
                activeStandardJobsCount,
                subscriberProcessQueueWaitingCount,
                subscriberProcessQueueActiveCount,
                executionLogQueueWaitingCount,
                executionLogQueueActiveCount,
            };
        });
    }
}
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map