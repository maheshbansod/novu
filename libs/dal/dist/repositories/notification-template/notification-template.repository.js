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
exports.NotificationTemplateRepository = void 0;
const base_repository_1 = require("../base-repository");
const notification_template_schema_1 = require("./notification-template.schema");
const notification_template_entity_1 = require("./notification-template.entity");
const shared_1 = require("../../shared");
const environment_1 = require("../environment");
class NotificationTemplateRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(notification_template_schema_1.NotificationTemplate, notification_template_entity_1.NotificationTemplateEntity);
        this.environmentRepository = new environment_1.EnvironmentRepository();
        this.notificationTemplate = notification_template_schema_1.NotificationTemplate;
    }
    findByTriggerIdentifier(environmentId, identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: environmentId,
                'triggers.identifier': identifier,
            };
            const item = yield this.MongooseModel.findOne(requestQuery).populate('steps.template');
            return this.mapEntity(item);
        });
    }
    findById(id, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _id: id,
                _environmentId: environmentId,
            };
            const item = yield this.MongooseModel.findOne(requestQuery)
                .populate('steps.template')
                .populate('steps.variants.template');
            return this.mapEntity(item);
        });
    }
    findBlueprintById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.blueprintOrganizationId)
                throw new shared_1.DalException('Blueprint environment id was not found');
            const requestQuery = {
                isBlueprint: true,
                _organizationId: this.blueprintOrganizationId,
                _id: id,
            };
            const item = yield this.MongooseModel.findOne(requestQuery)
                .populate('steps.template')
                .populate('notificationGroup')
                .lean();
            return this.mapEntity(item);
        });
    }
    findBlueprintByTriggerIdentifier(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.blueprintOrganizationId)
                throw new shared_1.DalException('Blueprint environment id was not found');
            const requestQuery = {
                isBlueprint: true,
                _organizationId: this.blueprintOrganizationId,
                triggers: { $elemMatch: { identifier: identifier } },
            };
            const item = yield this.MongooseModel.findOne(requestQuery)
                .populate('steps.template')
                .populate('notificationGroup')
                .lean();
            return this.mapEntity(item);
        });
    }
    findBlueprintTemplates(organizationId, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const _organizationId = organizationId;
            if (!_organizationId)
                throw new shared_1.DalException('Blueprint environment id was not found');
            const templates = yield this.MongooseModel.find({
                isBlueprint: true,
                _environmentId: environmentId,
                _organizationId,
            })
                .populate('steps.template')
                .populate('notificationGroup')
                .lean();
            if (!templates) {
                return [];
            }
            return this.mapEntities(templates);
        });
    }
    findAllGroupedByCategory() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const organizationId = this.blueprintOrganizationId;
            if (!organizationId) {
                return [];
            }
            const productionEnvironmentId = (_b = (_a = (yield this.environmentRepository.findOrganizationEnvironments(organizationId))) === null || _a === void 0 ? void 0 : _a.find((env) => env.name === 'Production')) === null || _b === void 0 ? void 0 : _b._id;
            if (!productionEnvironmentId) {
                throw new shared_1.DalException(`Production environment id for BLUEPRINT_CREATOR ${process.env.BLUEPRINT_CREATOR} was not found`);
            }
            const requestQuery = {
                isBlueprint: true,
                _environmentId: productionEnvironmentId,
                _organizationId: organizationId,
            };
            const result = yield this.MongooseModel.find(requestQuery)
                .populate('steps.template')
                .populate('notificationGroup')
                .lean();
            const items = result === null || result === void 0 ? void 0 : result.map((item) => this.mapEntity(item));
            const groupedItems = items.reduce((acc, item) => {
                var _a;
                const notificationGroupId = item._notificationGroupId;
                const notificationGroupName = (_a = item.notificationGroup) === null || _a === void 0 ? void 0 : _a.name;
                if (!acc[notificationGroupId]) {
                    acc[notificationGroupId] = {
                        name: notificationGroupName,
                        blueprints: [],
                    };
                }
                acc[notificationGroupId].blueprints.push(item);
                return acc;
            }, {});
            return Object.values(groupedItems);
        });
    }
    getBlueprintList(skip = 0, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.blueprintOrganizationId) {
                return { totalCount: 0, data: [] };
            }
            const requestQuery = {
                isBlueprint: true,
                _organizationId: this.blueprintOrganizationId,
            };
            const totalItemsCount = yield this.count(requestQuery);
            const items = yield this.MongooseModel.find(requestQuery)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .populate({ path: 'notificationGroup' });
            return { totalCount: totalItemsCount, data: this.mapEntities(items) };
        });
    }
    getList(organizationId, environmentId, skip = 0, limit = 10, query) {
        return __awaiter(this, void 0, void 0, function* () {
            let searchQuery = {};
            if (query) {
                searchQuery = {
                    $or: [
                        { name: { $regex: regExpEscape(query), $options: 'i' } },
                        { 'triggers.identifier': { $regex: regExpEscape(query), $options: 'i' } },
                    ],
                };
            }
            const totalItemsCount = yield this.count(Object.assign({ _environmentId: environmentId }, searchQuery));
            const requestQuery = {
                _environmentId: environmentId,
                _organizationId: organizationId,
            };
            const items = yield this.MongooseModel.find(Object.assign(Object.assign({}, requestQuery), searchQuery))
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .populate({ path: 'notificationGroup' })
                .populate('steps.template', { type: 1 })
                .select('-steps.variants')
                .lean();
            return { totalCount: totalItemsCount, data: this.mapEntities(items) };
        });
    }
    getActiveList(organizationId, environmentId, active) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _environmentId: environmentId,
                _organizationId: organizationId,
                active: active,
            };
            const items = yield this.MongooseModel.find(requestQuery)
                .populate('steps.template', { type: 1 })
                .populate('notificationGroup')
                .read('secondaryPreferred');
            return this.mapEntities(items);
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.findOne({ _id: query._id, _environmentId: query._environmentId });
            if (!item)
                throw new shared_1.DalException(`Could not find workflow with id ${query._id}`);
            return yield this.notificationTemplate.delete({ _id: item._id, _environmentId: item._environmentId });
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.notificationTemplate.findDeleted(query);
            return this.mapEntity(res);
        });
    }
    get blueprintOrganizationId() {
        return NotificationTemplateRepository.getBlueprintOrganizationId();
    }
    static getBlueprintOrganizationId() {
        return process.env.BLUEPRINT_CREATOR;
    }
}
exports.NotificationTemplateRepository = NotificationTemplateRepository;
function regExpEscape(literalString) {
    return literalString.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, '\\$&');
}
