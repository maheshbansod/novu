"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const schema_default_options_1 = require("../schema-default.options");
const job_entity_1 = require("./job.entity");
const shared_1 = require("../../shared");
const jobSchema = new mongoose_2.Schema({
    identifier: {
        type: mongoose_2.Schema.Types.String,
    },
    status: {
        type: mongoose_2.Schema.Types.String,
        default: job_entity_1.JobStatusEnum.PENDING,
    },
    payload: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    overrides: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    tenant: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    step: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    _templateId: {
        type: mongoose_2.Schema.Types.String,
        ref: 'NotificationTemplate',
    },
    transactionId: {
        type: mongoose_2.Schema.Types.String,
    },
    delay: {
        type: mongoose_2.Schema.Types.Number,
    },
    _notificationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Notification',
    },
    _mergedDigestId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Job',
    },
    subscriberId: {
        type: mongoose_2.Schema.Types.String,
    },
    _subscriberId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    _userId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Job',
    },
    error: {
        type: mongoose_2.Schema.Types.Mixed,
    },
    digest: {
        events: [mongoose_2.Schema.Types.Mixed],
        amount: {
            type: mongoose_2.Schema.Types.Number,
        },
        unit: {
            type: mongoose_2.Schema.Types.String,
        },
        digestKey: {
            type: mongoose_2.Schema.Types.String,
        },
        type: {
            type: mongoose_2.Schema.Types.String,
        },
        backoffUnit: {
            type: mongoose_2.Schema.Types.String,
        },
        backoffAmount: {
            type: mongoose_2.Schema.Types.Number,
        },
        updateMode: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        backoff: {
            type: mongoose_2.Schema.Types.Boolean,
        },
        timed: {
            cronExpression: {
                type: mongoose_2.Schema.Types.String,
            },
            atTime: {
                type: mongoose_2.Schema.Types.String,
            },
            weekDays: [mongoose_2.Schema.Types.String],
            monthDays: [mongoose_2.Schema.Types.Number],
            ordinal: {
                type: mongoose_2.Schema.Types.String,
            },
            ordinalValue: {
                type: mongoose_2.Schema.Types.String,
            },
            monthlyType: {
                type: mongoose_2.Schema.Types.String,
            },
        },
    },
    type: {
        type: mongoose_2.Schema.Types.String,
    },
    providerId: {
        type: mongoose_2.Schema.Types.String,
    },
    _actorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Subscriber',
    },
    actorId: {
        type: mongoose_2.Schema.Types.String,
    },
    expireAt: mongoose_2.Schema.Types.Date,
    stepOutput: mongoose_2.Schema.Types.Mixed,
}, schema_default_options_1.schemaOptions);
jobSchema.index({ expireAt: 1 }, (0, shared_1.getTTLOptions)());
jobSchema.virtual('executionDetails', {
    ref: 'ExecutionDetails',
    localField: '_id',
    foreignField: '_jobId',
});
jobSchema.virtual('template', {
    ref: 'NotificationTemplate',
    localField: '_templateId',
    foreignField: '_id',
    justOne: true,
});
jobSchema.virtual('notification', {
    ref: 'Notification',
    localField: '_notificationId',
    foreignField: '_id',
    justOne: true,
});
jobSchema.virtual('subscriber', {
    ref: 'Subscriber',
    localField: '_subscriberId',
    foreignField: '_id',
    justOne: true,
});
jobSchema.virtual('environment', {
    ref: 'Environment',
    localField: '_environmentId',
    foreignField: '_id',
    justOne: true,
});
jobSchema.index({
    transactionId: 1,
});
jobSchema.index({
    _parentId: 1,
});
jobSchema.index({
    _subscriberId: 1,
    _templateId: 1,
    type: 1,
    status: 1,
    updatedAt: 1,
});
jobSchema.index({
    _subscriberId: 1,
    _templateId: 1,
    type: 1,
    status: 1,
    createdAt: 1,
});
jobSchema.index({
    _notificationId: 1,
});
jobSchema.index({
    _environmentId: 1,
});
jobSchema.index({
    _mergedDigestId: 1,
}, {
    sparse: true,
});
exports.Job = mongoose_1.default.models.Job || mongoose_1.default.model('Job', jobSchema);
