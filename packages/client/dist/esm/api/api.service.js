var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { HttpClient } from '../http-client';
export class ApiService {
    constructor(...args) {
        this.isAuthenticated = false;
        if (arguments.length === 2) {
            this.httpClient = new HttpClient({
                backendUrl: args[0],
                apiVersion: args[1],
            });
        }
        else if (arguments.length === 1) {
            if (typeof args[0] === 'object') {
                this.httpClient = new HttpClient(args[0]);
            }
            else if (typeof args[0] === 'string') {
                this.httpClient = new HttpClient({
                    backendUrl: args[0],
                });
            }
        }
        else {
            this.httpClient = new HttpClient();
        }
    }
    removeNullUndefined(obj) {
        return Object.fromEntries(Object.entries(obj).filter(([_, value]) => value != null));
    }
    setAuthorizationToken(token) {
        this.httpClient.setAuthorizationToken(token);
        this.isAuthenticated = true;
    }
    disposeAuthorizationToken() {
        this.httpClient.disposeAuthorizationToken();
        this.isAuthenticated = false;
    }
    updateAction(messageId, executedType, status, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/messages/${messageId}/actions/${executedType}`, {
                executedType,
                status,
                payload,
            });
        });
    }
    markMessageAs(messageId, mark) {
        return __awaiter(this, void 0, void 0, function* () {
            const markPayload = mark.seen === undefined && mark.read === undefined
                ? { seen: true }
                : mark;
            return yield this.httpClient.post(`/widgets/messages/markAs`, {
                messageId,
                mark: markPayload,
            });
        });
    }
    markMessagesAs({ messageId, markAs, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/messages/mark-as`, {
                messageId,
                markAs,
            });
        });
    }
    removeMessage(messageId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.delete(`/widgets/messages/${messageId}`, {});
        });
    }
    removeMessages(messageIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/messages/bulk/delete`, {
                messageIds: messageIds,
            });
        });
    }
    removeAllMessages(feedId) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = feedId
                ? `/widgets/messages?feedId=${feedId}`
                : `/widgets/messages`;
            return yield this.httpClient.delete(url);
        });
    }
    markAllMessagesAsRead(feedId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/messages/read`, {
                feedId,
            });
        });
    }
    markAllMessagesAsSeen(feedId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/messages/seen`, {
                feedId,
            });
        });
    }
    getNotificationsList(page, _a = {}) {
        var { payload } = _a, rest = __rest(_a, ["payload"]);
        return __awaiter(this, void 0, void 0, function* () {
            const payloadString = payload ? btoa(JSON.stringify(payload)) : undefined;
            return yield this.httpClient.getFullResponse(`/widgets/notifications/feed`, Object.assign(Object.assign({ page }, (payloadString && { payload: payloadString })), rest));
        });
    }
    initializeSession(appId, subscriberId, hmacHash = null) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post(`/widgets/session/initialize`, {
                applicationIdentifier: appId,
                subscriberId: subscriberId,
                hmacHash,
            });
        });
    }
    postUsageLog(name, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.post('/widgets/usage/log', {
                name: `[Widget] - ${name}`,
                payload,
            });
        });
    }
    getUnseenCount(query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.get('/widgets/notifications/unseen', this.removeNullUndefined(query));
        });
    }
    getUnreadCount(query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.get('/widgets/notifications/unread', this.removeNullUndefined(query));
        });
    }
    getTabCount(query = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.get('/widgets/notifications/count', query);
        });
    }
    getOrganization() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.get('/widgets/organization');
        });
    }
    getUserPreference() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.get('/widgets/preferences');
        });
    }
    getUserGlobalPreference() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.get('/widgets/preferences/global');
        });
    }
    getPreferences({ level, }) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.httpClient.get(`/widgets/preferences/${level}`);
        });
    }
    updateSubscriberPreference(templateId, channelType, enabled) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.patch(`/widgets/preferences/${templateId}`, {
                channel: { type: channelType, enabled },
            });
        });
    }
    updateSubscriberGlobalPreference(preferences, enabled) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.httpClient.patch(`/widgets/preferences`, {
                preferences: preferences.map((preference) => (Object.assign(Object.assign({}, preference), { type: preference.channelType }))),
                enabled,
            });
        });
    }
}
