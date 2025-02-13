import { ApiRateLimitAlgorithmEnum, ApiRateLimitCostEnum, ApiServiceLevelEnum, } from '../../types';
import { ApiRateLimitCategoryEnum } from '../../types/rate-limiting/service.types';
export const DEFAULT_API_RATE_LIMIT_SERVICE_MAXIMUM_CONFIG = {
    [ApiServiceLevelEnum.FREE]: {
        [ApiRateLimitCategoryEnum.TRIGGER]: 60,
        [ApiRateLimitCategoryEnum.CONFIGURATION]: 15,
        [ApiRateLimitCategoryEnum.GLOBAL]: 30,
    },
    [ApiServiceLevelEnum.BUSINESS]: {
        [ApiRateLimitCategoryEnum.TRIGGER]: 600,
        [ApiRateLimitCategoryEnum.CONFIGURATION]: 150,
        [ApiRateLimitCategoryEnum.GLOBAL]: 300,
    },
    [ApiServiceLevelEnum.ENTERPRISE]: {
        [ApiRateLimitCategoryEnum.TRIGGER]: 6000,
        [ApiRateLimitCategoryEnum.CONFIGURATION]: 1500,
        [ApiRateLimitCategoryEnum.GLOBAL]: 3000,
    },
    [ApiServiceLevelEnum.UNLIMITED]: {
        [ApiRateLimitCategoryEnum.TRIGGER]: 6000,
        [ApiRateLimitCategoryEnum.CONFIGURATION]: 1500,
        [ApiRateLimitCategoryEnum.GLOBAL]: 3000,
    },
};
export const DEFAULT_API_RATE_LIMIT_ALGORITHM_CONFIG = {
    [ApiRateLimitAlgorithmEnum.BURST_ALLOWANCE]: 0.1,
    [ApiRateLimitAlgorithmEnum.WINDOW_DURATION]: 1,
};
export const DEFAULT_API_RATE_LIMIT_COST_CONFIG = {
    [ApiRateLimitCostEnum.SINGLE]: 1,
    [ApiRateLimitCostEnum.BULK]: 100,
};
