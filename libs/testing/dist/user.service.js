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
exports.UserService = void 0;
const faker_1 = require("@faker-js/faker");
const dal_1 = require("@novu/dal");
const shared_1 = require("@novu/shared");
const bcrypt_1 = require("bcrypt");
const environment_service_1 = require("./environment.service");
const organization_service_1 = require("./organization.service");
const constants_1 = require("./constants");
class UserService {
    constructor() {
        this.environmentService = new environment_service_1.EnvironmentService();
        this.organizationService = new organization_service_1.OrganizationService();
        this.userRepository = new dal_1.CommunityUserRepository();
    }
    createTestUser() {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.createUser({
                email: this.randomEmail(),
                firstName: faker_1.faker.name.firstName(),
                lastName: faker_1.faker.name.lastName(),
                password: this.testPassword(),
            });
            const organization = yield this.organizationService.createOrganization();
            yield this.organizationService.addMember(organization._id, user._id);
            yield this.environmentService.createDevelopmentEnvironment(organization._id, user._id);
            return user;
        });
    }
    createUser(userEntity) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const password = (_a = userEntity === null || userEntity === void 0 ? void 0 : userEntity.password) !== null && _a !== void 0 ? _a : faker_1.faker.internet.password();
            const passwordHash = yield (0, bcrypt_1.hash)(password, 10);
            const user = yield this.userRepository.create({
                email: (0, shared_1.normalizeEmail)((_b = userEntity === null || userEntity === void 0 ? void 0 : userEntity.email) !== null && _b !== void 0 ? _b : faker_1.faker.internet.email()),
                firstName: (_c = userEntity === null || userEntity === void 0 ? void 0 : userEntity.firstName) !== null && _c !== void 0 ? _c : faker_1.faker.name.firstName(),
                lastName: (_d = userEntity === null || userEntity === void 0 ? void 0 : userEntity.lastName) !== null && _d !== void 0 ? _d : faker_1.faker.name.lastName(),
                password: passwordHash,
                profilePicture: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 60) + 1}.jpg`,
                tokens: [],
                showOnBoardingTour: (_e = userEntity === null || userEntity === void 0 ? void 0 : userEntity.showOnBoardingTour) !== null && _e !== void 0 ? _e : 2,
            });
            return user;
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findById(id);
            if (!user) {
                throw new Error(`Test user with ${id} not found`);
            }
            return user;
        });
    }
    randomEmail() {
        return faker_1.faker.internet.email();
    }
    randomPassword() {
        return faker_1.faker.internet.password();
    }
    testPassword() {
        return constants_1.TEST_USER_PASSWORD;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map