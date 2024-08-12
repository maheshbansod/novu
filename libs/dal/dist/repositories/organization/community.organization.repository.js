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
exports.CommunityOrganizationRepository = void 0;
const organization_entity_1 = require("./organization.entity");
const base_repository_1 = require("../base-repository");
const organization_schema_1 = require("./organization.schema");
const member_1 = require("../member");
class CommunityOrganizationRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(organization_schema_1.Organization, organization_entity_1.OrganizationEntity);
        this.memberRepository = new member_1.CommunityMemberRepository();
    }
    findById(id, select) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.MongooseModel.findById(id, select).read('secondaryPreferred');
            if (!data)
                return null;
            return this.mapEntity(data.toObject());
        });
    }
    findUserActiveOrganizations(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationIds = yield this.getUsersMembersOrganizationIds(userId);
            return yield this.find({
                _id: { $in: organizationIds },
            });
        });
    }
    getUsersMembersOrganizationIds(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const members = yield this.memberRepository.findUserActiveMembers(userId);
            return members.map((member) => member._organizationId);
        });
    }
    updateBrandingDetails(organizationId, branding) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({
                _id: organizationId,
            }, {
                $set: {
                    branding,
                },
            });
        });
    }
    renameOrganization(organizationId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({
                _id: organizationId,
            }, {
                $set: {
                    name: payload.name,
                },
            });
        });
    }
    updateServiceLevel(organizationId, apiServiceLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({
                _id: organizationId,
            }, {
                $set: {
                    apiServiceLevel,
                },
            });
        });
    }
    updateDefaultLocale(organizationId, defaultLocale) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({
                _id: organizationId,
            }, {
                $set: {
                    defaultLocale,
                },
            });
        });
    }
    findPartnerConfigurationDetails(organizationId, userId, configurationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationIds = yield this.getUsersMembersOrganizationIds(userId);
            return yield this.find({
                _id: { $in: organizationIds },
                'partnerConfigurations.configurationId': configurationId,
            }, { 'partnerConfigurations.$': 1 });
        });
    }
    updatePartnerConfiguration(organizationId, userId, configuration) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationIds = yield this.getUsersMembersOrganizationIds(userId);
            return this.update({
                _id: { $in: organizationIds },
            }, {
                $push: {
                    partnerConfigurations: configuration,
                },
            });
        });
    }
    bulkUpdatePartnerConfiguration(userId, data, configurationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const organizationIds = yield this.getUsersMembersOrganizationIds(userId);
            const usedOrgIds = Object.keys(data);
            const unusedOrgIds = organizationIds.filter((org) => !usedOrgIds.includes(org));
            const bulkWriteOps = organizationIds.map((orgId) => {
                return {
                    updateOne: {
                        filter: { _id: orgId, 'partnerConfigurations.configurationId': configurationId },
                        update: {
                            'partnerConfigurations.$.projectIds': unusedOrgIds.includes(orgId) ? [] : data[orgId],
                        },
                    },
                };
            });
            return yield this.bulkWrite(bulkWriteOps);
        });
    }
}
exports.CommunityOrganizationRepository = CommunityOrganizationRepository;
