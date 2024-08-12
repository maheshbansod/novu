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
exports.CommunityUserRepository = void 0;
const crypto_1 = require("crypto");
const base_repository_1 = require("../base-repository");
const user_entity_1 = require("./user.entity");
const user_schema_1 = require("./user.schema");
class CommunityUserRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(user_schema_1.User, user_entity_1.UserEntity);
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({
                email,
            });
        });
    }
    findById(id, select) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.MongooseModel.findById(id, select);
            if (!data)
                return null;
            return this.mapEntity(data.toObject());
        });
    }
    hashResetToken(token) {
        return (0, crypto_1.createHash)('sha256').update(token).digest('hex');
    }
    findUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.findOne({
                resetToken: this.hashResetToken(token),
            });
        });
    }
    updatePasswordResetToken(userId, token, resetTokenCount) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.update({
                _id: userId,
            }, {
                $set: {
                    resetToken: this.hashResetToken(token),
                    resetTokenDate: new Date(),
                    resetTokenCount,
                },
            });
        });
    }
}
exports.CommunityUserRepository = CommunityUserRepository;
