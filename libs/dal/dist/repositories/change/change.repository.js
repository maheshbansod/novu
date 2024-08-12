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
exports.ChangeRepository = void 0;
const base_repository_1 = require("../base-repository");
const change_entity_1 = require("./change.entity");
const change_schema_1 = require("./change.schema");
class ChangeRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(change_schema_1.Change, change_entity_1.ChangeEntity);
    }
    getEntityChanges(organizationId, entityType, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _organizationId: organizationId,
                _entityId: entityId,
                type: entityType,
            }, '', {
                sort: { createdAt: 1 },
            });
        });
    }
    getChangeId(environmentId, entityType, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = yield this.findOne({
                _environmentId: environmentId,
                _entityId: entityId,
                type: entityType,
                enabled: false,
            });
            if (change === null || change === void 0 ? void 0 : change._id) {
                return change._id;
            }
            return base_repository_1.BaseRepository.createObjectId();
        });
    }
    getList(organizationId, environmentId, enabled, skip = 0, limit = 10) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalItemsCount = yield this.count({
                _environmentId: environmentId,
                _organizationId: organizationId,
                enabled,
                _parentId: { $exists: false, $eq: null },
            });
            const userSelect = ['_id', 'firstName', 'lastName', 'profilePicture'];
            const items = yield this.MongooseModel.find({
                _environmentId: environmentId,
                _organizationId: organizationId,
                enabled,
                _parentId: { $exists: false, $eq: null },
            })
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .populate('user', userSelect);
            return { totalCount: totalItemsCount, data: this.mapEntities(items) };
        });
    }
    getParentId(environmentId, entityType, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            const change = yield this.findOne({
                _environmentId: environmentId,
                _entityId: entityId,
                type: entityType,
                enabled: false,
                _parentId: { $exists: true },
            }, '_parentId');
            if (change === null || change === void 0 ? void 0 : change._parentId) {
                return change._parentId;
            }
            return null;
        });
    }
}
exports.ChangeRepository = ChangeRepository;
