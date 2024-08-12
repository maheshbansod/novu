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
exports.DalService = void 0;
const mongoose_1 = require("mongoose");
class DalService {
    connect(url, config = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const baseConfig = {
                maxPoolSize: +process.env.MONGO_MAX_POOL_SIZE || 500,
                minPoolSize: +process.env.MONGO_MIN_POOL_SIZE || 10,
                autoIndex: process.env.AUTO_CREATE_INDEXES === 'true',
                maxIdleTimeMS: 1000 * 60 * 10,
            };
            const instance = yield mongoose_1.default.connect(url, Object.assign(Object.assign({}, baseConfig), config));
            this.connection = instance.connection;
            return this.connection;
        });
    }
    isConnected() {
        return this.connection && this.connection.readyState === 1;
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield mongoose_1.default.disconnect();
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
            if (process.env.NODE_ENV !== 'test')
                throw new Error('Allowed only in test mode');
            yield mongoose_1.default.connection.dropDatabase();
        });
    }
}
exports.DalService = DalService;
