"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
let UserRepository = class UserRepository {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findByEmail(email);
        });
    }
    findById(id, select) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findById(id, select);
        });
    }
    findUserByToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.findUserByToken(token);
        });
    }
    updatePasswordResetToken(userId, token, resetTokenCount) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userRepository.updatePasswordResetToken(userId, token, resetTokenCount);
        });
    }
    create(data, options) {
        return this.userRepository.create(data, options);
    }
    update(query, body) {
        return this.userRepository.update(query, body);
    }
    delete(query) {
        return this.userRepository.delete(query);
    }
    count(query, limit) {
        return this.userRepository.count(query, limit);
    }
    aggregate(query, options) {
        return this.userRepository.aggregate(query, options);
    }
    findOne(query, select, options) {
        return this.userRepository.findOne(query, select, options);
    }
    find(query, select, options) {
        return this.userRepository.find(query, select, options);
    }
    findBatch(query, select, options, batchSize) {
        return this.userRepository.findBatch(query, select, options, batchSize);
    }
    insertMany(data, ordered) {
        return this.userRepository.insertMany(data, ordered);
    }
    updateOne(query, body) {
        return this.userRepository.updateOne(query, body);
    }
    upsertMany(data) {
        return this.userRepository.upsertMany(data);
    }
    upsert(query, data) {
        return this.userRepository.upsert(query, data);
    }
    bulkWrite(bulkOperations, ordered) {
        return this.userRepository.bulkWrite(bulkOperations, ordered);
    }
};
UserRepository = __decorate([
    __param(0, (0, common_1.Inject)('USER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserRepository);
exports.UserRepository = UserRepository;
