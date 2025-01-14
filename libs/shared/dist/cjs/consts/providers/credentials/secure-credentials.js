"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secureCredentials = void 0;
const provider_enum_1 = require("../provider.enum");
exports.secureCredentials = [
    provider_enum_1.CredentialsKeyEnum.ApiKey,
    provider_enum_1.CredentialsKeyEnum.ApiToken,
    provider_enum_1.CredentialsKeyEnum.SecretKey,
    provider_enum_1.CredentialsKeyEnum.Token,
    provider_enum_1.CredentialsKeyEnum.Password,
    provider_enum_1.CredentialsKeyEnum.ServiceAccount,
];
