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
exports.EnvironmentService = void 0;
const faker_1 = require("@faker-js/faker");
const dal_1 = require("@novu/dal");
const crypto_1 = require("crypto");
const uuid_1 = require("uuid");
var EnvironmentsEnum;
(function (EnvironmentsEnum) {
    EnvironmentsEnum["DEVELOPMENT"] = "Development";
    EnvironmentsEnum["PRODUCTION"] = "Production";
})(EnvironmentsEnum || (EnvironmentsEnum = {}));
class EnvironmentService {
    constructor() {
        this.environmentRepository = new dal_1.EnvironmentRepository();
    }
    createEnvironment(organizationId, userId, name, parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const key = (0, uuid_1.v4)();
            const hashedApiKey = (0, crypto_1.createHash)('sha256').update(key).digest('hex');
            return yield this.environmentRepository.create(Object.assign(Object.assign({ identifier: (0, uuid_1.v4)(), name: name !== null && name !== void 0 ? name : faker_1.faker.name.jobTitle(), _organizationId: organizationId }, (parentId && { _parentId: parentId })), { apiKeys: [
                    {
                        key: key,
                        _userId: userId,
                        hash: hashedApiKey,
                    },
                ] }));
        });
    }
    createDevelopmentEnvironment(organizationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createEnvironment(organizationId, userId, EnvironmentsEnum.DEVELOPMENT);
        });
    }
    createProductionEnvironment(organizationId, userId, parentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createEnvironment(organizationId, userId, EnvironmentsEnum.PRODUCTION, parentId);
        });
    }
    enableEnvironmentHmac(environment) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.environmentRepository.update({
                _organizationId: environment._organizationId,
                _id: environment._id,
            }, { $set: { 'widget.notificationCenterEncryption': true } });
        });
    }
    getEnvironment(environmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = yield this.environmentRepository.findOne({
                _id: environmentId,
            });
            if (!environment) {
                return;
            }
            return environment;
        });
    }
    getEnvironmentByNameAndOrganization(organizationId, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const environment = yield this.environmentRepository.findOne({
                name,
                _organizationId: organizationId,
            });
            if (!environment) {
                return;
            }
            return environment;
        });
    }
    getEnvironments(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.environmentRepository.findOrganizationEnvironments(organizationId);
        });
    }
    getDevelopmentEnvironment(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getEnvironmentByNameAndOrganization(organizationId, EnvironmentsEnum.DEVELOPMENT);
        });
    }
    getProductionEnvironment(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getEnvironmentByNameAndOrganization(organizationId, EnvironmentsEnum.PRODUCTION);
        });
    }
    updateApiRateLimits(environmentId, apiRateLimits) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.environmentRepository.updateApiRateLimits(environmentId, apiRateLimits);
        });
    }
}
exports.EnvironmentService = EnvironmentService;
//# sourceMappingURL=environment.service.js.map