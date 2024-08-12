"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseHeaderKeysEnum = exports.HttpRequestHeaderKeysEnum = void 0;
const utils_types_1 = require("./utils.types");
var HttpRequestHeaderKeysEnum;
(function (HttpRequestHeaderKeysEnum) {
    HttpRequestHeaderKeysEnum["AUTHORIZATION"] = "Authorization";
    HttpRequestHeaderKeysEnum["USER_AGENT"] = "User-Agent";
    HttpRequestHeaderKeysEnum["CONTENT_TYPE"] = "Content-Type";
    HttpRequestHeaderKeysEnum["SENTRY_TRACE"] = "Sentry-Trace";
    HttpRequestHeaderKeysEnum["NOVU_ENVIRONMENT_ID"] = "Novu-Environment-Id";
    HttpRequestHeaderKeysEnum["NOVU_API_VERSION"] = "Novu-API-Version";
})(HttpRequestHeaderKeysEnum = exports.HttpRequestHeaderKeysEnum || (exports.HttpRequestHeaderKeysEnum = {}));
(0, utils_types_1.testHttpHeaderEnumValidity)(HttpRequestHeaderKeysEnum);
var HttpResponseHeaderKeysEnum;
(function (HttpResponseHeaderKeysEnum) {
    HttpResponseHeaderKeysEnum["CONTENT_TYPE"] = "Content-Type";
    HttpResponseHeaderKeysEnum["RATELIMIT_REMAINING"] = "RateLimit-Remaining";
    HttpResponseHeaderKeysEnum["RATELIMIT_LIMIT"] = "RateLimit-Limit";
    HttpResponseHeaderKeysEnum["RATELIMIT_RESET"] = "RateLimit-Reset";
    HttpResponseHeaderKeysEnum["RATELIMIT_POLICY"] = "RateLimit-Policy";
    HttpResponseHeaderKeysEnum["RETRY_AFTER"] = "Retry-After";
    HttpResponseHeaderKeysEnum["IDEMPOTENCY_KEY"] = "Idempotency-Key";
    HttpResponseHeaderKeysEnum["IDEMPOTENCY_REPLAY"] = "Idempotency-Replay";
    HttpResponseHeaderKeysEnum["LINK"] = "Link";
})(HttpResponseHeaderKeysEnum = exports.HttpResponseHeaderKeysEnum || (exports.HttpResponseHeaderKeysEnum = {}));
(0, utils_types_1.testHttpHeaderEnumValidity)(HttpResponseHeaderKeysEnum);
