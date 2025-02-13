"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NONE_AUTH_SCHEME = exports.PassportStrategyEnum = exports.ApiAuthSchemeEnum = void 0;
var ApiAuthSchemeEnum;
(function (ApiAuthSchemeEnum) {
    ApiAuthSchemeEnum["BEARER"] = "Bearer";
    ApiAuthSchemeEnum["API_KEY"] = "ApiKey";
})(ApiAuthSchemeEnum = exports.ApiAuthSchemeEnum || (exports.ApiAuthSchemeEnum = {}));
var PassportStrategyEnum;
(function (PassportStrategyEnum) {
    PassportStrategyEnum["JWT"] = "jwt";
    PassportStrategyEnum["JWT_CLERK"] = "jwt-clerk";
    PassportStrategyEnum["HEADER_API_KEY"] = "headerapikey";
})(PassportStrategyEnum = exports.PassportStrategyEnum || (exports.PassportStrategyEnum = {}));
exports.NONE_AUTH_SCHEME = 'None';
