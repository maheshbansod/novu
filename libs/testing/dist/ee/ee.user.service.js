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
exports.EEUserService = void 0;
const ee_repository_factory_1 = require("./ee.repository.factory");
class EEUserService {
    constructor() {
        this.userRepository = (0, ee_repository_factory_1.getEERepository)('UserRepository');
    }
    createUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.create({}, { linkOnly: true, externalId: userId });
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
}
exports.EEUserService = EEUserService;
//# sourceMappingURL=ee.user.service.js.map