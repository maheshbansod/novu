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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutRepository = void 0;
const layout_entity_1 = require("./layout.entity");
const layout_schema_1 = require("./layout.schema");
const types_1 = require("./types");
const base_repository_1 = require("../base-repository");
const shared_1 = require("../../shared");
class LayoutRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(layout_schema_1.Layout, layout_entity_1.LayoutEntity);
        this.layout = layout_schema_1.Layout;
    }
    createLayout(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { channel, content, contentType, identifier, description, isDefault, name, variables, _creatorId, _environmentId, _organizationId, } = entity;
            return yield this.create({
                _creatorId,
                _environmentId,
                _organizationId,
                content,
                contentType,
                identifier,
                isDefault,
                deleted: false,
                description,
                name,
                variables,
                channel,
            });
        });
    }
    deleteLayout(_id, _environmentId, _organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteQuery = {
                _id,
                _environmentId,
                _organizationId,
            };
            const result = yield this.layout.delete(deleteQuery);
            if (result.modifiedCount !== 1) {
                throw new shared_1.DalException(`Soft delete of layout ${_id} in environment ${_environmentId} was not performed properly`);
            }
        });
    }
    findDefault(_environmentId, _organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ _environmentId, _organizationId, isDefault: true });
        });
    }
    findDeleted(id, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedLayout = yield this.layout.findOneDeleted({
                _id: this.convertStringToObjectId(id),
                _environmentId: this.convertStringToObjectId(environmentId),
            });
            if (!(deletedLayout === null || deletedLayout === void 0 ? void 0 : deletedLayout._id)) {
                return null;
            }
            return this.mapEntity(deletedLayout);
        });
    }
    findDeletedByParentId(parentId, environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedLayout = yield this.layout.findOneDeleted({
                _parentId: this.convertStringToObjectId(parentId),
                _environmentId: this.convertStringToObjectId(environmentId),
            });
            if (!(deletedLayout === null || deletedLayout === void 0 ? void 0 : deletedLayout._id)) {
                return null;
            }
            return this.mapEntity(deletedLayout);
        });
    }
    filterLayouts(query, pagination) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const order = (_a = pagination.orderBy) !== null && _a !== void 0 ? _a : types_1.OrderDirectionEnum.DESC;
            const sort = pagination.sortBy ? { [pagination.sortBy]: order } : { createdAt: types_1.OrderDirectionEnum.DESC };
            const parsedQuery = Object.assign({}, query);
            parsedQuery._environmentId = this.convertStringToObjectId(parsedQuery._environmentId);
            parsedQuery._organizationId = this.convertStringToObjectId(parsedQuery._organizationId);
            const data = yield this.aggregate([
                {
                    $match: Object.assign({}, parsedQuery),
                },
                { $sort: sort },
                {
                    $skip: pagination.skip,
                },
                {
                    $limit: pagination.limit,
                },
            ]);
            return data;
        });
    }
    updateIsDefault(_id, _environmentId, _organizationId, isDefault) {
        return __awaiter(this, void 0, void 0, function* () {
            const updated = yield this.update({
                _id,
                _environmentId,
                _organizationId,
            }, {
                isDefault,
            });
            if (updated.matched === 0 || updated.modified === 0) {
                throw new shared_1.DalException(`Update of layout ${_id} in environment ${_environmentId} was not performed properly. Not able to set 'isDefault' to ${isDefault}`);
            }
        });
    }
    updateLayout(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _id, _environmentId, _organizationId, createdAt, updatedAt } = entity, updates = __rest(entity, ["_id", "_environmentId", "_organizationId", "createdAt", "updatedAt"]);
            const updated = yield this.update({
                _id,
                _environmentId,
                _organizationId,
            }, updates);
            if (updated.matched === 0 || updated.modified === 0) {
                throw new shared_1.DalException(`Update of layout ${_id} in environment ${_environmentId} was not performed properly`);
            }
            const updatedEntity = yield this.findOne({ _id, _environmentId, _organizationId });
            if (!updatedEntity) {
                throw new shared_1.DalException(`Update of layout ${_id} in environment ${_environmentId} was performed but entity could not been retrieved`);
            }
            return updatedEntity;
        });
    }
}
exports.LayoutRepository = LayoutRepository;
