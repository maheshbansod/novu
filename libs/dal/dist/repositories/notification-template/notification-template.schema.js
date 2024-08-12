"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationTemplate = void 0;
const shared_1 = require("@novu/shared");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const mongooseDelete = require('mongoose-delete');
const schema_default_options_1 = require("../schema-default.options");
const variantSchemePart = {
    active: {
        type: mongoose_2.Schema.Types.Boolean,
        default: true,
    },
    replyCallback: {
        active: mongoose_2.Schema.Types.Boolean,
        url: mongoose_2.Schema.Types.String,
    },
    shouldStopOnFail: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    uuid: mongoose_2.Schema.Types.String,
    stepId: mongoose_2.Schema.Types.String,
    name: mongoose_2.Schema.Types.String,
    type: {
        type: mongoose_2.Schema.Types.String,
        default: shared_1.WorkflowTypeEnum.REGULAR,
    },
    filters: [
        {
            isNegated: mongoose_2.Schema.Types.Boolean,
            type: {
                type: mongoose_2.Schema.Types.String,
            },
            value: mongoose_2.Schema.Types.String,
            children: [
                {
                    field: mongoose_2.Schema.Types.String,
                    value: mongoose_2.Schema.Types.Mixed,
                    operator: mongoose_2.Schema.Types.String,
                    on: mongoose_2.Schema.Types.String,
                    webhookUrl: mongoose_2.Schema.Types.String,
                    timeOperator: mongoose_2.Schema.Types.String,
                    step: mongoose_2.Schema.Types.String,
                    stepType: mongoose_2.Schema.Types.String,
                },
            ],
        },
    ],
    _templateId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'MessageTemplate',
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
    },
    metadata: {
        amount: {
            type: mongoose_2.Schema.Types.Number,
        },
        unit: {
            type: mongoose_2.Schema.Types.String,
        },
        digestKey: {
            type: mongoose_2.Schema.Types.String,
        },
        delayPath: {
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
};
const notificationTemplateSchema = new mongoose_2.Schema({
    name: mongoose_2.Schema.Types.String,
    description: mongoose_2.Schema.Types.String,
    active: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    type: {
        type: mongoose_2.Schema.Types.String,
        default: shared_1.WorkflowTypeEnum.REGULAR,
    },
    draft: {
        type: mongoose_2.Schema.Types.Boolean,
        default: true,
    },
    critical: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    isBlueprint: {
        type: mongoose_2.Schema.Types.Boolean,
        default: false,
    },
    blueprintId: {
        type: mongoose_2.Schema.Types.String,
    },
    _notificationGroupId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationGroup',
    },
    tags: [mongoose_2.Schema.Types.String],
    triggers: [
        {
            type: {
                type: mongoose_2.Schema.Types.String,
            },
            identifier: mongoose_2.Schema.Types.String,
            variables: [
                {
                    name: mongoose_2.Schema.Types.String,
                    type: {
                        type: mongoose_2.Schema.Types.String,
                    },
                },
            ],
            reservedVariables: [
                {
                    type: {
                        type: mongoose_2.Schema.Types.String,
                    },
                    variables: [
                        {
                            name: mongoose_2.Schema.Types.String,
                            type: {
                                type: mongoose_2.Schema.Types.String,
                            },
                        },
                    ],
                },
            ],
            subscriberVariables: [
                {
                    name: mongoose_2.Schema.Types.String,
                },
            ],
        },
    ],
    steps: [
        Object.assign(Object.assign({}, variantSchemePart), { variants: [variantSchemePart] }),
    ],
    preferenceSettings: {
        email: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        sms: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        in_app: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        chat: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
        push: {
            type: mongoose_2.Schema.Types.Boolean,
            default: true,
        },
    },
    _environmentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Environment',
    },
    _organizationId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Organization',
    },
    _creatorId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'User',
    },
    _parentId: {
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'NotificationTemplate',
    },
    data: mongoose_2.Schema.Types.Mixed,
    rawData: mongoose_2.Schema.Types.Mixed,
    payloadSchema: mongoose_2.Schema.Types.Mixed,
}, Object.assign(Object.assign({}, schema_default_options_1.schemaOptions), { minimize: false }));
notificationTemplateSchema.virtual('steps.template', {
    ref: 'MessageTemplate',
    localField: 'steps._templateId',
    foreignField: '_id',
    justOne: true,
});
notificationTemplateSchema.virtual('steps.variants.template', {
    ref: 'MessageTemplate',
    localField: 'steps.variants._templateId',
    foreignField: '_id',
    justOne: true,
});
notificationTemplateSchema.path('steps').schema.set('toJSON', { virtuals: true });
notificationTemplateSchema.path('steps').schema.set('toObject', { virtuals: true });
notificationTemplateSchema.path('steps.variants').schema.set('toJSON', { virtuals: true });
notificationTemplateSchema.path('steps.variants').schema.set('toObject', { virtuals: true });
notificationTemplateSchema.virtual('notificationGroup', {
    ref: 'NotificationGroup',
    localField: '_notificationGroupId',
    foreignField: '_id',
    justOne: true,
});
notificationTemplateSchema.index({
    _organizationId: 1,
    'triggers.identifier': 1,
});
notificationTemplateSchema.index({
    _environmentId: 1,
    name: 1,
});
notificationTemplateSchema.index({
    _environmentId: 1,
    'triggers.identifier': 1,
    name: 1,
});
notificationTemplateSchema.plugin(mongooseDelete, { deletedAt: true, deletedBy: true, overrideMethods: 'all' });
exports.NotificationTemplate = mongoose_1.default.models.NotificationTemplate ||
    mongoose_1.default.model('NotificationTemplate', notificationTemplateSchema);
