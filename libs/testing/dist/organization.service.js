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
exports.OrganizationService = void 0;
const shared_1 = require("@novu/shared");
const faker_1 = require("@faker-js/faker");
const dal_1 = require("@novu/dal");
class OrganizationService {
    constructor() {
        this.organizationRepository = new dal_1.CommunityOrganizationRepository();
        this.memberRepository = new dal_1.CommunityMemberRepository();
    }
    createOrganization(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (options) {
                return yield this.organizationRepository.create(Object.assign({ logo: faker_1.faker.image.avatar(), name: faker_1.faker.company.companyName() }, options));
            }
            return yield this.organizationRepository.create({
                logo: faker_1.faker.image.avatar(),
                name: faker_1.faker.company.companyName(),
            });
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
exports.OrganizationService = OrganizationService;
//# sourceMappingURL=organization.service.js.map