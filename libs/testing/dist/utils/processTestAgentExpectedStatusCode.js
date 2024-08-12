"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processTestAgentExpectedStatusCode = void 0;
function processTestAgentExpectedStatusCode(statusCode) {
    var _a, _b;
    const stackTrace = (_b = (_a = new Error().stack) === null || _a === void 0 ? void 0 : _a.split('\n')) !== null && _b !== void 0 ? _b : [];
    stackTrace.splice(1, 1);
    return (err, res) => {
        var _a;
        if (((res === null || res === void 0 ? void 0 : res.status) || err.status) !== statusCode) {
            const e = new Error(`Expected ${statusCode}, got ${(res === null || res === void 0 ? void 0 : res.status) || err.status} resp: ${(res === null || res === void 0 ? void 0 : res.headers) ? JSON.stringify(res.headers) : JSON.stringify(err, null, 2)}`);
            e.stack = (_a = e.stack) === null || _a === void 0 ? void 0 : _a.split('\n').splice(0, 1).concat(stackTrace).join('\n');
            throw e;
        }
    };
}
exports.processTestAgentExpectedStatusCode = processTestAgentExpectedStatusCode;
//# sourceMappingURL=processTestAgentExpectedStatusCode.js.map