"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_API_RATE_LIMIT_COST_CONFIG = exports.DEFAULT_API_RATE_LIMIT_ALGORITHM_CONFIG = exports.DEFAULT_API_RATE_LIMIT_SERVICE_MAXIMUM_CONFIG = void 0;
const types_1 = require("../../types");
const service_types_1 = require("../../types/rate-limiting/service.types");
exports.DEFAULT_API_RATE_LIMIT_SERVICE_MAXIMUM_CONFIG = {
    [types_1.ApiServiceLevelEnum.FREE]: {
        [service_types_1.ApiRateLimitCategoryEnum.TRIGGER]: 60,
        [service_types_1.ApiRateLimitCategoryEnum.CONFIGURATION]: 15,
        [service_types_1.ApiRateLimitCategoryEnum.GLOBAL]: 30,
    },
    [types_1.ApiServiceLevelEnum.BUSINESS]: {
        [service_types_1.ApiRateLimitCategoryEnum.TRIGGER]: 600,
        [service_types_1.ApiRateLimitCategoryEnum.CONFIGURATION]: 150,
        [service_types_1.ApiRateLimitCategoryEnum.GLOBAL]: 300,
    },
    [types_1.ApiServiceLevelEnum.ENTERPRISE]: {
        [service_types_1.ApiRateLimitCategoryEnum.TRIGGER]: 6000,
        [service_types_1.ApiRateLimitCategoryEnum.CONFIGURATION]: 1500,
        [service_types_1.ApiRateLimitCategoryEnum.GLOBAL]: 3000,
    },
    [types_1.ApiServiceLevelEnum.UNLIMITED]: {
        [service_types_1.ApiRateLimitCategoryEnum.TRIGGER]: 6000,
        [service_types_1.ApiRateLimitCategoryEnum.CONFIGURATION]: 1500,
        [service_types_1.ApiRateLimitCategoryEnum.GLOBAL]: 3000,
    },
};
exports.DEFAULT_API_RATE_LIMIT_ALGORITHM_CONFIG = {
    [types_1.ApiRateLimitAlgorithmEnum.BURST_ALLOWANCE]: 0.1,
    [types_1.ApiRateLimitAlgorithmEnum.WINDOW_DURATION]: 1,
};
exports.DEFAULT_API_RATE_LIMIT_COST_CONFIG = {
    [types_1.ApiRateLimitCostEnum.SINGLE]: 1,
    [types_1.ApiRateLimitCostEnum.BULK]: 100,
};
