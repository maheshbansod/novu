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
exports.wsTestServer = exports.WsTestServer = exports.testServer = exports.TestServer = void 0;
class TestServer {
    getHttpServer() {
        return this.app.getHttpServer();
    }
    getService(service) {
        return this.app.get(service);
    }
    create(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.app = app;
        });
    }
    teardown() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.app) {
                    yield this.app.close();
                }
            }
            catch (error) {
                console.error('Error when closing TestServer', error.message);
            }
        });
    }
}
exports.TestServer = TestServer;
exports.testServer = new TestServer();
class WsTestServer {
    getHttpServer() {
        return this.app.getHttpServer();
    }
    getService(service) {
        return this.app.get(service);
    }
    create(app) {
        return __awaiter(this, void 0, void 0, function* () {
            this.app = app;
        });
    }
    teardown() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (this.app) {
                    yield this.app.close();
                }
            }
            catch (error) {
                console.error('Error when closing WsServer', error.message);
            }
        });
    }
}
exports.WsTestServer = WsTestServer;
exports.wsTestServer = new WsTestServer();
//# sourceMappingURL=test-server.service.js.map