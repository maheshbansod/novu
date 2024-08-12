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
exports.EEOrganizationService = void 0;
const shared_1 = require("@novu/shared");
const dal_1 = require("@novu/dal");
const ee_repository_factory_1 = require("./ee.repository.factory");
class EEOrganizationService {
    constructor() {
        this.organizationRepository = (0, ee_repository_factory_1.getEERepository)('OrganizationRepository');
        this.communityOrganizationRepository = new dal_1.CommunityOrganizationRepository();
        this.memberRepository = (0, ee_repository_factory_1.getEERepository)('MemberRepository');
    }
    createOrganization(orgId) {
        return __awaiter(this, void 0, void 0, function* () {
            const org = yield this.communityOrganizationRepository.findOne({ externalId: orgId });
            if (org) {
                yield this.communityOrganizationRepository.delete({ _id: org._id });
            }
            const syncExternalOrg = {
                externalId: orgId,
            };
            return this.organizationRepository.create(syncExternalOrg);
        });
    }
    addMember(organizationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.memberRepository.addMember(organizationId, {
                _userId: userId,
                roles: [shared_1.MemberRoleEnum.ADMIN],
                memberStatus: shared_1.MemberStatusEnum.ACTIVE,
            });
        });
    }
    getOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.organizationRepository.findById(organizationId);
        });
    }
    updateServiceLevel(organizationId, serviceLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.organizationRepository.updateServiceLevel(organizationId, serviceLevel);
        });
    }
}
exports.EEOrganizationService = EEOrganizationService;
//# sourceMappingURL=ee.organization.service.js.map