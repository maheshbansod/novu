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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadlessService = exports.NOTIFICATION_CENTER_TOKEN_KEY = void 0;
const query_core_1 = require("@tanstack/query-core");
const socket_io_client_1 = __importDefault(require("socket.io-client"));
const client_1 = require("@novu/client");
const shared_1 = require("@novu/shared");
const query_service_1 = require("./query.service");
const utils_1 = require("../utils");
exports.NOTIFICATION_CENTER_TOKEN_KEY = 'nc_token';
const isBrowser = typeof window !== 'undefined';
const SESSION_NOT_INITIALIZED_ERROR = 'Session is not initialized, please use the initializeSession method first';
const getToken = () => {
    if (isBrowser) {
        return localStorage.getItem(exports.NOTIFICATION_CENTER_TOKEN_KEY);
    }
    return null;
};
class HeadlessService {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.options = options;
        this.queryClient = null;
        this.session = null;
        this.socket = null;
        this.sessionQueryOptions = {
            queryKey: utils_1.SESSION_QUERY_KEY,
            cacheTime: Infinity,
            staleTime: Infinity,
            queryFn: () => this.api.initializeSession(this.options.applicationIdentifier, this.options.subscriberId, this.options.subscriberHash),
        };
        this.organizationQueryOptions = {
            queryKey: utils_1.ORGANIZATION_QUERY_KEY,
            cacheTime: Infinity,
            staleTime: Infinity,
            queryFn: () => this.api.getOrganization(),
        };
        this.unseenCountQueryOptions = {
            queryKey: utils_1.UNSEEN_COUNT_QUERY_KEY,
            queryFn: () => this.api.getUnseenCount(),
        };
        this.unreadCountQueryOptions = {
            queryKey: utils_1.UNREAD_COUNT_QUERY_KEY,
            queryFn: () => this.api.getUnreadCount(),
        };
        this.userPreferencesQueryOptions = {
            queryKey: utils_1.USER_PREFERENCES_QUERY_KEY,
            queryFn: () => this.api.getUserPreference(),
        };
        this.userGlobalPreferencesQueryOptions = {
            queryKey: utils_1.USER_GLOBAL_PREFERENCES_QUERY_KEY,
            queryFn: () => this.api.getUserGlobalPreference(),
        };
        this.callFetchListener = (result, listener) => listener({
            data: result.data,
            error: result.error,
            status: result.status,
            isLoading: result.isLoading,
            isFetching: result.isFetching,
            isError: result.isError,
        });
        this.callFetchListenerWithPagination = (result, listener) => listener({
            data: result.data,
            error: result.error,
            status: result.status,
            isLoading: result.isLoading,
            isFetching: result.isFetching,
            isError: result.isError,
        });
        this.callUpdateListener = (result, listener) => listener({
            data: result.data,
            error: result.error,
            status: result.status,
            isLoading: result.isLoading,
            isError: result.isError,
        });
        const backendUrl = (_a = options.backendUrl) !== null && _a !== void 0 ? _a : 'https://api.novu.co';
        const token = getToken();
        this.api = new client_1.ApiService(backendUrl);
        this.applyToken(token);
        this.queryClient = new query_core_1.QueryClient({
            defaultOptions: {
                queries: Object.assign({ refetchOnWindowFocus: false, retry: (_c = (_b = options === null || options === void 0 ? void 0 : options.config) === null || _b === void 0 ? void 0 : _b.retry) !== null && _c !== void 0 ? _c : 3 }, (((_d = options === null || options === void 0 ? void 0 : options.config) === null || _d === void 0 ? void 0 : _d.retryDelay) && {
                    retryDelay: (_e = options === null || options === void 0 ? void 0 : options.config) === null || _e === void 0 ? void 0 : _e.retryDelay,
                })),
                mutations: Object.assign({ retry: (_g = (_f = options === null || options === void 0 ? void 0 : options.config) === null || _f === void 0 ? void 0 : _f.retry) !== null && _g !== void 0 ? _g : 3 }, (((_h = options === null || options === void 0 ? void 0 : options.config) === null || _h === void 0 ? void 0 : _h.retryDelay) && {
                    retryDelay: (_j = options === null || options === void 0 ? void 0 : options.config) === null || _j === void 0 ? void 0 : _j.retryDelay,
                })),
            },
        });
        this.queryService = new query_service_1.QueryService(this.queryClient);
    }
    assertSessionInitialized() {
        if (!this.session) {
            throw new Error(SESSION_NOT_INITIALIZED_ERROR);
        }
    }
    applyToken(newToken) {
        if (newToken) {
            isBrowser &&
                localStorage.setItem(exports.NOTIFICATION_CENTER_TOKEN_KEY, newToken);
            this.api.setAuthorizationToken(newToken);
        }
        else {
            isBrowser && localStorage.removeItem(exports.NOTIFICATION_CENTER_TOKEN_KEY);
            this.api.disposeAuthorizationToken();
        }
    }
    initializeSocket(token) {
        var _a;
        const socketUrl = (_a = this.options.socketUrl) !== null && _a !== void 0 ? _a : 'https://ws.novu.co';
        if (this.socket) {
            this.socket.disconnect();
        }
        if (token) {
            this.socket = (0, socket_io_client_1.default)(socketUrl, {
                reconnectionDelayMax: 10000,
                transports: ['websocket'],
                query: {
                    token: `${token}`,
                },
            });
            this.socket.on('connect_error', (error) => {
                console.error(error.message);
            });
        }
    }
    initializeSession({ listener, onSuccess, onError, }) {
        this.session = null;
        this.queryClient.clear();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: Object.assign(Object.assign({}, this.sessionQueryOptions), { onSuccess: (session) => {
                    this.session = session;
                    this.applyToken(session.token);
                    this.initializeSocket(session.token);
                    onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(session);
                }, onError }),
            listener: (result) => this.callFetchListener(result, listener),
        });
        return unsubscribe;
    }
    fetchOrganization({ listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { unsubscribe } = this.queryService.subscribeQuery({
                options: Object.assign(Object.assign({}, this.organizationQueryOptions), { onSuccess,
                    onError }),
                listener: (result) => this.callFetchListener(result, listener),
            });
            return unsubscribe;
        });
    }
    fetchUnseenCount({ listener, onSuccess, onError, }) {
        this.assertSessionInitialized();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: Object.assign(Object.assign({}, this.unseenCountQueryOptions), { onSuccess,
                onError }),
            listener: (result) => this.callFetchListener(result, listener),
        });
        return unsubscribe;
    }
    fetchUnreadCount({ listener, onSuccess, onError, }) {
        this.assertSessionInitialized();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: Object.assign(Object.assign({}, this.unreadCountQueryOptions), { onSuccess,
                onError }),
            listener: (result) => this.callFetchListener(result, listener),
        });
        return unsubscribe;
    }
    listenNotificationReceive({ listener, }) {
        this.assertSessionInitialized();
        if (this.socket) {
            this.socket.on(shared_1.WebSocketEventEnum.RECEIVED, (data) => {
                if (data === null || data === void 0 ? void 0 : data.message) {
                    listener(data.message);
                }
            });
        }
        return () => {
            if (this.socket) {
                this.socket.off(shared_1.WebSocketEventEnum.RECEIVED);
            }
        };
    }
    listenUnseenCountChange({ listener, }) {
        this.assertSessionInitialized();
        if (this.socket) {
            this.socket.on(shared_1.WebSocketEventEnum.UNSEEN, (data) => {
                if (Number.isInteger(data === null || data === void 0 ? void 0 : data.unseenCount)) {
                    this.queryClient.setQueryData(utils_1.UNSEEN_COUNT_QUERY_KEY, (oldData) => { var _a; return ({ count: (_a = data === null || data === void 0 ? void 0 : data.unseenCount) !== null && _a !== void 0 ? _a : oldData.count }); });
                    listener(data.unseenCount);
                }
            });
        }
        return () => {
            if (this.socket) {
                this.socket.off(shared_1.WebSocketEventEnum.UNSEEN);
            }
        };
    }
    listenUnreadCountChange({ listener, }) {
        this.assertSessionInitialized();
        if (this.socket) {
            this.socket.on(shared_1.WebSocketEventEnum.UNREAD, (data) => {
                if (Number.isInteger(data === null || data === void 0 ? void 0 : data.unreadCount)) {
                    this.queryClient.setQueryData(utils_1.UNREAD_COUNT_QUERY_KEY, (oldData) => { var _a; return ({ count: (_a = data === null || data === void 0 ? void 0 : data.unreadCount) !== null && _a !== void 0 ? _a : oldData.count }); });
                    listener(data.unreadCount);
                }
            });
        }
        return () => {
            if (this.socket) {
                this.socket.off(shared_1.WebSocketEventEnum.UNREAD);
            }
        };
    }
    fetchNotifications({ page = 0, storeId = 'default_store', query = {}, listener, onSuccess, onError, }) {
        this.assertSessionInitialized();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: {
                queryKey: [...utils_1.NOTIFICATIONS_QUERY_KEY, storeId, page, query],
                queryFn: () => this.api.getNotificationsList(page, query),
                onSuccess,
                onError,
            },
            listener: (result) => this.callFetchListenerWithPagination(result, listener),
        });
        return unsubscribe;
    }
    fetchUserPreferences({ listener, onSuccess, onError, }) {
        this.assertSessionInitialized();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: Object.assign(Object.assign({}, this.userPreferencesQueryOptions), { onSuccess,
                onError }),
            listener: (result) => this.callFetchListener(result, listener),
        });
        return unsubscribe;
    }
    fetchUserGlobalPreferences({ listener, onSuccess, onError, }) {
        this.assertSessionInitialized();
        const { unsubscribe } = this.queryService.subscribeQuery({
            options: Object.assign(Object.assign({}, this.userGlobalPreferencesQueryOptions), { onSuccess,
                onError }),
            listener: (result) => this.callFetchListener(result, listener),
        });
        return unsubscribe;
    }
    updateUserPreferences({ templateId, channelType, checked, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.updateSubscriberPreference(variables.templateId, variables.channelType, variables.checked),
                    onSuccess: (data) => {
                        this.queryClient.setQueryData(utils_1.USER_PREFERENCES_QUERY_KEY, (oldUserPreferences) => oldUserPreferences.map((setting) => {
                            if (setting.template._id === data.template._id) {
                                return data;
                            }
                            return setting;
                        }));
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ templateId, channelType, checked })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    updateUserGlobalPreferences({ preferences, enabled, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.updateSubscriberGlobalPreference(variables.preferences, variables.enabled),
                    onSuccess: (data) => {
                        this.queryClient.setQueryData(utils_1.USER_GLOBAL_PREFERENCES_QUERY_KEY, () => [data]);
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ preferences, enabled })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    markNotificationsAsRead({ messageId, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.markMessageAs(variables.messageId, {
                        seen: true,
                        read: true,
                    }),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    markNotificationsAsSeen({ messageId, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.markMessageAs(variables.messageId, {
                        seen: true,
                    }),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    markNotificationsAs({ messageId, mark, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.markMessageAs(variables.messageId, mark),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    removeNotification({ messageId, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.removeMessage(variables.messageId),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    removeNotifications({ messageIds, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.removeMessages(variables.messageIds),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageIds })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    updateAction({ messageId, actionButtonType, status, payload, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.updateAction(variables.messageId, variables.actionButtonType, variables.status, variables.payload),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ messageId, actionButtonType, status, payload })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    markAllMessagesAsRead({ listener, onSuccess, onError, feedId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.markAllMessagesAsRead(variables === null || variables === void 0 ? void 0 : variables.feedId),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ feedId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    markAllMessagesAsSeen({ listener, onSuccess, onError, feedId, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.markAllMessagesAsSeen(variables === null || variables === void 0 ? void 0 : variables.feedId),
                    onSuccess: (data) => {
                        this.queryClient.refetchQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ feedId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data);
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
    removeAllNotifications({ feedId, listener, onSuccess, onError, }) {
        return __awaiter(this, void 0, void 0, function* () {
            this.assertSessionInitialized();
            const { result, unsubscribe } = this.queryService.subscribeMutation({
                options: {
                    mutationFn: (variables) => this.api.removeAllMessages(variables === null || variables === void 0 ? void 0 : variables.feedId),
                    onSuccess: (data) => {
                        this.queryClient.removeQueries(utils_1.NOTIFICATIONS_QUERY_KEY, {
                            exact: false,
                        });
                    },
                },
                listener: (res) => this.callUpdateListener(res, listener),
            });
            result
                .mutate({ feedId })
                .then((data) => {
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess();
                return data;
            })
                .catch((error) => {
                onError === null || onError === void 0 ? void 0 : onError(error);
            })
                .finally(() => {
                unsubscribe();
            });
        });
    }
}
exports.HeadlessService = HeadlessService;
