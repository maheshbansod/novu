"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvFileNameForNodeEnv = void 0;
const DEFAULT_ENV = 'local';
const envFileFromNodeEnv = {
    production: '.env.production',
    test: '.env.test',
    ci: '.env.ci',
    local: '.env',
    dev: '.env.development',
};
function getEnvFileNameForNodeEnv(nodeEnv) {
    const selectedEnvFile = envFileFromNodeEnv[nodeEnv || DEFAULT_ENV];
    return selectedEnvFile;
}
exports.getEnvFileNameForNodeEnv = getEnvFileNameForNodeEnv;
