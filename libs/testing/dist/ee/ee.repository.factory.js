"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEERepository = void 0;
const dal_1 = require("@novu/dal");
const shared_1 = require("@novu/shared");
function getEERepository(className) {
    if ((0, shared_1.isClerkEnabled)()) {
        switch (className) {
            case 'OrganizationRepository':
                return getEEOrganizationRepository();
            case 'MemberRepository':
                return getEEMemberRepository();
            case 'UserRepository':
                return getEEUserRepository();
        }
    }
    switch (className) {
        case 'OrganizationRepository':
            return new dal_1.CommunityOrganizationRepository();
        case 'MemberRepository':
            return new dal_1.CommunityMemberRepository();
        case 'UserRepository':
            return new dal_1.CommunityUserRepository();
    }
}
exports.getEERepository = getEERepository;
function getEEUserRepository() {
    const enterpriseModule = require('@novu/ee-auth');
    const enterpriseUserRepository = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.EEUserRepository;
    const clerkClientMock = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.ClerkClientMock;
    return new enterpriseUserRepository(new dal_1.CommunityUserRepository(), new clerkClientMock());
}
function getEEOrganizationRepository() {
    const enterpriseModule = require('@novu/ee-auth');
    const enterpriseOrganizationRepository = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.EEOrganizationRepository;
    const clerkClientMock = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.ClerkClientMock;
    return new enterpriseOrganizationRepository(new dal_1.CommunityOrganizationRepository(), new clerkClientMock());
}
function getEEMemberRepository() {
    const enterpriseModule = require('@novu/ee-auth');
    const enterpriseMemberRepository = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.EEMemberRepository;
    const clerkClientMock = enterpriseModule === null || enterpriseModule === void 0 ? void 0 : enterpriseModule.ClerkClientMock;
    return new enterpriseMemberRepository(new dal_1.CommunityOrganizationRepository(), new clerkClientMock());
}
//# sourceMappingURL=ee.repository.factory.js.map