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
exports.EnvironmentRepository = void 0;
const base_repository_1 = require("../base-repository");
const environment_entity_1 = require("./environment.entity");
const environment_schema_1 = require("./environment.schema");
class EnvironmentRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(environment_schema_1.Environment, environment_entity_1.EnvironmentEntity);
    }
    findEnvironmentByIdentifier(identifier) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.MongooseModel.findOne({ identifier }).read('secondaryPreferred');
            if (!data)
                return null;
            return this.mapEntity(data.toObject());
        });
    }
    updateApiKeyUserId(organizationId, oldUserId, newUserId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update({
                _organizationId: organizationId,
                'apiKeys._userId': oldUserId,
            }, {
                $set: {
                    'apiKeys.$._userId': newUserId,
                },
            });
        });
    }
    findOrganizationEnvironments(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({
                _organizationId: organizationId,
            });
        });
    }
    findByIdAndOrganization(environmentId, organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({
                _id: environmentId,
                _organizationId: organizationId,
            });
        });
    }
    addApiKey(environmentId, key, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update({
                _id: environmentId,
            }, {
                $push: {
                    apiKeys: {
                        key,
                        _userId: userId,
                    },
                },
            });
        });
    }
    findByApiKey({ key, hash }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({ $or: [{ 'apiKeys.key': key }, { 'apiKeys.hash': hash }] });
        });
    }
    getApiKeys(environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = yield this.findOne({
                _id: environmentId,
            }, 'apiKeys');
            if (!environment)
                return [];
            return environment.apiKeys;
        });
    }
    updateApiKey(environmentId, key, userId, hash) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.update({
                _id: environmentId,
            }, {
                $set: {
                    apiKeys: [
                        {
                            key,
                            _userId: userId,
                            hash,
                        },
                    ],
                },
            });
            return yield this.getApiKeys(environmentId);
        });
    }
    updateApiRateLimits(environmentId, apiRateLimits) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update({
                _id: environmentId,
            }, [
                {
                    $set: {
                        apiRateLimits: {
                            $mergeObjects: ['$apiRateLimits', apiRateLimits],
                        },
                    },
                },
            ]);
        });
    }
}
exports.EnvironmentRepository = EnvironmentRepository;
