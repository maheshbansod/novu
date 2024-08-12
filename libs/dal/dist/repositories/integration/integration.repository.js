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
exports.IntegrationRepository = void 0;
const shared_1 = require("@novu/shared");
const integration_entity_1 = require("./integration.entity");
const integration_schema_1 = require("./integration.schema");
const base_repository_1 = require("../base-repository");
const shared_2 = require("../../shared");
class IntegrationRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(integration_schema_1.Integration, integration_entity_1.IntegrationEntity);
        this.integration = integration_schema_1.Integration;
    }
    find(query, select = '', options = {}) {
        const _super = Object.create(null, {
            find: { get: () => super.find }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.find.call(this, query, select, options);
        });
    }
    findByEnvironmentId(environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId: environmentId,
            });
        });
    }
    findHighestPriorityIntegration({ _organizationId, _environmentId, channel, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({
                _organizationId,
                _environmentId,
                channel,
                active: true,
            }, undefined, { query: { sort: { priority: -1 } } });
        });
    }
    countActiveExcludingNovu({ _organizationId, _environmentId, channel, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.count({
                _organizationId,
                _environmentId,
                channel,
                active: true,
                providerId: {
                    $nin: shared_1.NOVU_PROVIDERS,
                },
            });
        });
    }
    create(data) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return yield _super.create.call(this, data);
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const integration = yield this.findOne({ _id: query._id, _organizationId: query._organizationId });
            if (!integration)
                throw new shared_2.DalException(`Could not find integration with id ${query._id}`);
            return yield this.integration.delete({ _id: integration._id, _organizationId: integration._organizationId });
        });
    }
    deleteMany(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const { _environmentId, _organizationId } = query || {};
            if (!_environmentId || !_organizationId) {
                throw new shared_2.DalException('Deletion operation blocked for missing any of these properties: [_environmentId, _organizationId]. We are avoiding a potential unexpected multiple deletion');
            }
            const { acknowledged, modifiedCount, matchedCount } = yield this.integration.delete(query);
            if (matchedCount === 0 || modifiedCount === 0) {
                throw new shared_2.DalException(`Deletion of many integrations in environment ${_environmentId} and organization ${_organizationId}  was not performed properly`);
            }
            return {
                modifiedCount,
                matchedCount,
            };
        });
    }
    findDeleted(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield this.integration.findDeleted(query);
            return this.mapEntity(res);
        });
    }
    recalculatePriorityForAllActive({ _id, _organizationId, _environmentId, channel, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const otherActiveIntegrations = yield this.find(Object.assign({ _organizationId,
                _environmentId,
                channel, active: true }, (_id && {
                _id: {
                    $nin: [_id],
                },
            })), '_id', { sort: { priority: -1 } });
            let ids = otherActiveIntegrations.map((integration) => integration._id);
            if (_id) {
                ids = [_id, ...otherActiveIntegrations.map((integration) => integration._id)];
            }
            const promises = ids.map((id, index) => this.update({
                _id: id,
                _organizationId,
                _environmentId,
            }, {
                $set: {
                    priority: ids.length - index,
                },
            }));
            yield Promise.all(promises);
        });
    }
}
exports.IntegrationRepository = IntegrationRepository;
