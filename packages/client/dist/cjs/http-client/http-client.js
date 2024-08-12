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
exports.HttpClient = void 0;
const DEFAULT_API_VERSION = 'v1';
const DEFAULT_BACKEND_URL = 'https://api.novu.co';
const PACKAGE_NAME = '@novu/client';
const PACKAGE_VERSION = '2.0.0-canary.0';
const DEFAULT_USER_AGENT = `${PACKAGE_NAME}-${PACKAGE_VERSION}`;
class HttpClient {
    constructor({ apiVersion = DEFAULT_API_VERSION, backendUrl = DEFAULT_BACKEND_URL, userAgent = DEFAULT_USER_AGENT, } = {}) {
        this.apiVersion = apiVersion;
        this.backendUrl = `${backendUrl}/${this.apiVersion}`;
        this.headers = {
            'Content-Type': 'application/json',
            'User-Agent': userAgent,
        };
    }
    setAuthorizationToken(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    disposeAuthorizationToken() {
        delete this.headers.Authorization;
    }
    updateHeaders(headers) {
        this.headers = Object.assign(Object.assign({}, this.headers), headers);
    }
    getFullResponse(url, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.doFetch(url + this.getQueryString(params));
            return yield response.json();
        });
    }
    get(url, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.doFetch(url + this.getQueryString(params));
            const data = yield response.json();
            return data.data;
        });
    }
    post(url, body = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.doFetch(url, {
                method: 'POST',
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data.data;
        });
    }
    patch(url, body = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.doFetch(url, {
                method: 'PATCH',
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data.data;
        });
    }
    delete(url, body = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.doFetch(url, {
                method: 'DELETE',
                body: JSON.stringify(body),
            });
            const data = yield response.json();
            return data.data;
        });
    }
    getQueryString(params) {
        if (!params)
            return '';
        const queryString = new URLSearchParams(params);
        return '?' + queryString.toString();
    }
    doFetch(url, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.backendUrl + url, Object.assign(Object.assign({}, options), { headers: this.headers }));
                yield this.checkResponseStatus(response);
                return response;
            }
            catch (error) {
                throw error;
            }
        });
    }
    checkResponseStatus(response) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!response.ok) {
                const errorData = yield response.json();
                throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
            }
        });
    }
}
exports.HttpClient = HttpClient;
