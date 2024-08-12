"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestingQueueService = void 0;
const bullmq_1 = require("bullmq");
class TestingQueueService {
    constructor(name) {
        this.queue = new bullmq_1.Queue(name, {
            connection: {
                db: Number(process.env.REDIS_DB_INDEX || '1'),
                port: Number(process.env.REDIS_PORT || 6379),
                host: process.env.REDIS_HOST,
                password: process.env.REDIS_PASSWORD,
                connectTimeout: 50000,
                keepAlive: 30000,
                tls: process.env.REDIS_TLS,
            },
            defaultJobOptions: {
                removeOnComplete: true,
            },
        });
    }
}
exports.TestingQueueService = TestingQueueService;
//# sourceMappingURL=testing-queue.service.js.map