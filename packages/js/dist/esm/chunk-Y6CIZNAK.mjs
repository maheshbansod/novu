import mitt from 'mitt';
import { HttpClient } from '@novu/client';
import io from 'socket.io-client';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/types.ts
var NotificationStatus = /* @__PURE__ */ ((NotificationStatus2) => {
  NotificationStatus2["READ"] = "read";
  NotificationStatus2["SEEN"] = "seen";
  NotificationStatus2["UNREAD"] = "unread";
  NotificationStatus2["UNSEEN"] = "unseen";
  return NotificationStatus2;
})(NotificationStatus || {});
var NotificationButton = /* @__PURE__ */ ((NotificationButton2) => {
  NotificationButton2["PRIMARY"] = "primary";
  NotificationButton2["SECONDARY"] = "secondary";
  return NotificationButton2;
})(NotificationButton || {});
var NotificationActionStatus = /* @__PURE__ */ ((NotificationActionStatus2) => {
  NotificationActionStatus2["PENDING"] = "pending";
  NotificationActionStatus2["DONE"] = "done";
  return NotificationActionStatus2;
})(NotificationActionStatus || {});
var CtaType = /* @__PURE__ */ ((CtaType2) => {
  CtaType2["REDIRECT"] = "redirect";
  return CtaType2;
})(CtaType || {});
var PreferenceLevel = /* @__PURE__ */ ((PreferenceLevel2) => {
  PreferenceLevel2["GLOBAL"] = "global";
  PreferenceLevel2["TEMPLATE"] = "template";
  return PreferenceLevel2;
})(PreferenceLevel || {});
var ChannelType = /* @__PURE__ */ ((ChannelType2) => {
  ChannelType2["IN_APP"] = "in_app";
  ChannelType2["EMAIL"] = "email";
  ChannelType2["SMS"] = "sms";
  ChannelType2["CHAT"] = "chat";
  ChannelType2["PUSH"] = "push";
  return ChannelType2;
})(ChannelType || {});
var PreferenceOverrideSource = /* @__PURE__ */ ((PreferenceOverrideSource2) => {
  PreferenceOverrideSource2["SUBSCRIBER"] = "subscriber";
  PreferenceOverrideSource2["TEMPLATE"] = "template";
  PreferenceOverrideSource2["WORKFLOW_OVERRIDE"] = "workflowOverride";
  return PreferenceOverrideSource2;
})(PreferenceOverrideSource || {});
var WebSocketEvent = /* @__PURE__ */ ((WebSocketEvent2) => {
  WebSocketEvent2["RECEIVED"] = "notification_received";
  WebSocketEvent2["UNREAD"] = "unread_count_changed";
  WebSocketEvent2["UNSEEN"] = "unseen_count_changed";
  return WebSocketEvent2;
})(WebSocketEvent || {});
var ActionTypeEnum = /* @__PURE__ */ ((ActionTypeEnum2) => {
  ActionTypeEnum2["PRIMARY"] = "primary";
  ActionTypeEnum2["SECONDARY"] = "secondary";
  return ActionTypeEnum2;
})(ActionTypeEnum || {});
var PreferenceOverrideSourceEnum = /* @__PURE__ */ ((PreferenceOverrideSourceEnum2) => {
  PreferenceOverrideSourceEnum2["SUBSCRIBER"] = "subscriber";
  PreferenceOverrideSourceEnum2["TEMPLATE"] = "template";
  PreferenceOverrideSourceEnum2["WORKFLOW_OVERRIDE"] = "workflowOverride";
  return PreferenceOverrideSourceEnum2;
})(PreferenceOverrideSourceEnum || {});
var _instance, _mittEmitter;
var _NovuEventEmitter = class _NovuEventEmitter {
  constructor() {
    __privateAdd(this, _mittEmitter);
    __privateSet(this, _mittEmitter, mitt());
  }
  static getInstance(options) {
    if (options == null ? void 0 : options.recreate) {
      __privateSet(_NovuEventEmitter, _instance, new _NovuEventEmitter());
    }
    return __privateGet(_NovuEventEmitter, _instance);
  }
  on(eventName, listener) {
    __privateGet(this, _mittEmitter).on(eventName, listener);
  }
  off(eventName, listener) {
    __privateGet(this, _mittEmitter).off(eventName, listener);
  }
  emit(type, event) {
    __privateGet(this, _mittEmitter).emit(type, event);
  }
};
_instance = new WeakMap();
_mittEmitter = new WeakMap();
__privateAdd(_NovuEventEmitter, _instance);
var NovuEventEmitter = _NovuEventEmitter;

// src/utils/errors.ts
var NovuError = class extends Error {
  constructor(message, originalError) {
    super(message);
    this.originalError = originalError;
  }
};
var NOVU_API_VERSION = "2024-06-26";
var INBOX_ROUTE = "/inbox";
var INBOX_NOTIFICATIONS_ROUTE = `${INBOX_ROUTE}/notifications`;
var _httpClient;
var InboxService = class {
  constructor(options = {}) {
    this.isSessionInitialized = false;
    __privateAdd(this, _httpClient);
    __privateSet(this, _httpClient, new HttpClient(options));
    __privateGet(this, _httpClient).updateHeaders({
      "Novu-API-Version": NOVU_API_VERSION
    });
  }
  initializeSession(_0) {
    return __async(this, arguments, function* ({
      applicationIdentifier,
      subscriberId,
      subscriberHash
    }) {
      const response = yield __privateGet(this, _httpClient).post(`${INBOX_ROUTE}/session`, {
        applicationIdentifier,
        subscriberId,
        subscriberHash
      });
      __privateGet(this, _httpClient).setAuthorizationToken(response.token);
      this.isSessionInitialized = true;
      return response;
    });
  }
  fetchNotifications({
    after,
    archived,
    limit = 10,
    offset,
    read: read2,
    tags
  }) {
    const queryParams = new URLSearchParams(`limit=${limit}`);
    if (after) {
      queryParams.append("after", after);
    }
    if (offset) {
      queryParams.append("offset", `${offset}`);
    }
    if (tags) {
      tags.forEach((tag) => queryParams.append("tags[]", tag));
    }
    if (read2 !== void 0) {
      queryParams.append("read", `${read2}`);
    }
    if (archived !== void 0) {
      queryParams.append("archived", `${archived}`);
    }
    return __privateGet(this, _httpClient).getFullResponse(`${INBOX_NOTIFICATIONS_ROUTE}?${queryParams.toString()}`);
  }
  count({ filters }) {
    return __privateGet(this, _httpClient).getFullResponse(`${INBOX_NOTIFICATIONS_ROUTE}/count?filters=${JSON.stringify(filters)}`);
  }
  read(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/read`);
  }
  unread(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/unread`);
  }
  archive(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/archive`);
  }
  unarchive(notificationId) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/unarchive`);
  }
  readAll({ tags }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/read`, { tags });
  }
  archiveAll({ tags }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/archive`, { tags });
  }
  archiveAllRead({ tags }) {
    return __privateGet(this, _httpClient).post(`${INBOX_NOTIFICATIONS_ROUTE}/read-archive`, { tags });
  }
  completeAction({
    actionType,
    notificationId
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/complete`, {
      actionType
    });
  }
  revertAction({
    actionType,
    notificationId
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_NOTIFICATIONS_ROUTE}/${notificationId}/revert`, {
      actionType
    });
  }
  fetchPreferences() {
    return __privateGet(this, _httpClient).get(`${INBOX_ROUTE}/preferences`);
  }
  updateGlobalPreferences(channelPreferences) {
    return __privateGet(this, _httpClient).patch(`${INBOX_ROUTE}/preferences`, channelPreferences);
  }
  updateWorkflowPreferences({
    workflowId,
    channelPreferences
  }) {
    return __privateGet(this, _httpClient).patch(`${INBOX_ROUTE}/preferences/${workflowId}`, channelPreferences);
  }
};
_httpClient = new WeakMap();

// src/utils/inbox-service-singleton.ts
var _instance2;
var _InboxServiceSingleton = class _InboxServiceSingleton {
  static getInstance(options) {
    const isNeedsToRecreate = !!options;
    if (isNeedsToRecreate) {
      __privateSet(_InboxServiceSingleton, _instance2, new InboxService(options));
    }
    return __privateGet(_InboxServiceSingleton, _instance2);
  }
};
_instance2 = new WeakMap();
__privateAdd(_InboxServiceSingleton, _instance2);
var InboxServiceSingleton = _InboxServiceSingleton;

// src/base-module.ts
var _callsQueue, _sessionError;
var BaseModule = class {
  constructor() {
    __privateAdd(this, _callsQueue, []);
    __privateAdd(this, _sessionError);
    this._emitter = NovuEventEmitter.getInstance();
    this._inboxService = InboxServiceSingleton.getInstance();
    this._emitter.on("session.initialize.resolved", ({ error, data }) => {
      if (data) {
        this.onSessionSuccess(data);
        __privateGet(this, _callsQueue).forEach((_0) => __async(this, [_0], function* ({ fn, resolve }) {
          resolve(yield fn());
        }));
        __privateSet(this, _callsQueue, []);
      } else if (error) {
        this.onSessionError(error);
        __privateSet(this, _sessionError, error);
        __privateGet(this, _callsQueue).forEach(({ resolve }) => {
          resolve({ error: new NovuError("Failed to initialize session, please contact the support", error) });
        });
        __privateSet(this, _callsQueue, []);
      }
    });
  }
  onSessionSuccess(_) {
  }
  onSessionError(_) {
  }
  callWithSession(fn) {
    return __async(this, null, function* () {
      if (this._inboxService.isSessionInitialized) {
        return fn();
      }
      if (__privateGet(this, _sessionError)) {
        return Promise.resolve({
          error: new NovuError("Failed to initialize session, please contact the support", __privateGet(this, _sessionError))
        });
      }
      return new Promise((resolve, reject) => __async(this, null, function* () {
        __privateGet(this, _callsQueue).push({ fn, resolve, reject });
      }));
    });
  }
};
_callsQueue = new WeakMap();
_sessionError = new WeakMap();

// src/notifications/notification.ts
var _emitter, _inboxService;
var Notification = class {
  constructor(notification) {
    __privateAdd(this, _emitter);
    __privateAdd(this, _inboxService);
    __privateSet(this, _emitter, NovuEventEmitter.getInstance());
    __privateSet(this, _inboxService, InboxServiceSingleton.getInstance());
    this.id = notification.id;
    this.subject = notification.subject;
    this.body = notification.body;
    this.to = notification.to;
    this.isRead = notification.isRead;
    this.isArchived = notification.isArchived;
    this.createdAt = notification.createdAt;
    this.readAt = notification.readAt;
    this.archivedAt = notification.archivedAt;
    this.avatar = notification.avatar;
    this.primaryAction = notification.primaryAction;
    this.secondaryAction = notification.secondaryAction;
    this.channelType = notification.channelType;
    this.tags = notification.tags;
    this.redirect = notification.redirect;
  }
  read() {
    return read({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  unread() {
    return unread({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  archive() {
    return archive({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  unarchive() {
    return unarchive({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      }
    });
  }
  completePrimary() {
    if (!this.primaryAction) {
      throw new Error("Primary action is not available");
    }
    return completeAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "primary" /* PRIMARY */
    });
  }
  completeSecondary() {
    if (!this.primaryAction) {
      throw new Error("Secondary action is not available");
    }
    return completeAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "secondary" /* SECONDARY */
    });
  }
  revertPrimary() {
    if (!this.primaryAction) {
      throw new Error("Primary action is not available");
    }
    return revertAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "primary" /* PRIMARY */
    });
  }
  revertSecondary() {
    if (!this.primaryAction) {
      throw new Error("Secondary action is not available");
    }
    return revertAction({
      emitter: __privateGet(this, _emitter),
      apiService: __privateGet(this, _inboxService),
      args: {
        notification: this
      },
      actionType: "secondary" /* SECONDARY */
    });
  }
  on(eventName, listener) {
    __privateGet(this, _emitter).on(eventName, listener);
  }
  off(eventName, listener) {
    __privateGet(this, _emitter).off(eventName, listener);
  }
};
_emitter = new WeakMap();
_inboxService = new WeakMap();

// src/notifications/helpers.ts
var read = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(args, {
    isRead: true,
    readAt: (/* @__PURE__ */ new Date()).toISOString(),
    isArchived: false,
    archivedAt: void 0
  });
  try {
    emitter.emit("notification.read.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.read(notificationId);
    const updatedNotification = new Notification(response);
    emitter.emit("notification.read.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.read.resolved", { args, error });
    return { error: new NovuError("Failed to read notification", error) };
  }
});
var unread = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(args, {
    isRead: false,
    readAt: null,
    isArchived: false,
    archivedAt: void 0
  });
  try {
    emitter.emit("notification.unread.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.unread(notificationId);
    const updatedNotification = new Notification(response);
    emitter.emit("notification.unread.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.unread.resolved", { args, error });
    return { error: new NovuError("Failed to unread notification", error) };
  }
});
var archive = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(args, {
    isArchived: true,
    archivedAt: (/* @__PURE__ */ new Date()).toISOString(),
    isRead: true,
    readAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  try {
    emitter.emit("notification.archive.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.archive(notificationId);
    const updatedNotification = new Notification(response);
    emitter.emit("notification.archive.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.archive.resolved", { args, error });
    return { error: new NovuError("Failed to archive notification", error) };
  }
});
var unarchive = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { notificationId, optimisticValue } = getNotificationDetails(args, {
    isArchived: false,
    archivedAt: null,
    isRead: true,
    readAt: (/* @__PURE__ */ new Date()).toISOString()
  });
  try {
    emitter.emit("notification.unarchive.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.unarchive(notificationId);
    const updatedNotification = new Notification(response);
    emitter.emit("notification.unarchive.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.unarchive.resolved", { args, error });
    return { error: new NovuError("Failed to unarchive notification", error) };
  }
});
var completeAction = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args,
  actionType
}) {
  var _a, _b;
  const optimisticAction = "notification" in args ? {
    isCompleted: true,
    label: (_b = (_a = args.notification.primaryAction) == null ? void 0 : _a.label) != null ? _b : ""
  } : {
    isCompleted: true,
    label: ""
  };
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    actionType === "primary" /* PRIMARY */ ? {
      primaryAction: optimisticAction
    } : { secondaryAction: optimisticAction }
  );
  try {
    emitter.emit("notification.complete_action.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.completeAction({ actionType, notificationId });
    const updatedNotification = new Notification(response);
    emitter.emit("notification.complete_action.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.complete_action.resolved", { args, error });
    return { error: new NovuError(`Failed to complete ${actionType} action on the notification`, error) };
  }
});
var revertAction = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args,
  actionType
}) {
  var _a, _b;
  const optimisticAction = "notification" in args ? {
    isCompleted: false,
    label: (_b = (_a = args.notification.primaryAction) == null ? void 0 : _a.label) != null ? _b : ""
  } : {
    isCompleted: false,
    label: ""
  };
  const { notificationId, optimisticValue } = getNotificationDetails(
    args,
    actionType === "primary" /* PRIMARY */ ? {
      primaryAction: optimisticAction
    } : { secondaryAction: optimisticAction }
  );
  try {
    emitter.emit("notification.revert_action.pending", {
      args,
      data: optimisticValue
    });
    const response = yield apiService.revertAction({ actionType, notificationId });
    const updatedNotification = new Notification(response);
    emitter.emit("notification.revert_action.resolved", { args, data: updatedNotification });
    return { data: updatedNotification };
  } catch (error) {
    emitter.emit("notification.revert_action.resolved", { args, error });
    return { error: new NovuError("Failed to fetch notifications", error) };
  }
});
var getNotificationDetails = (args, update) => {
  if ("notification" in args) {
    return {
      notificationId: args.notification.id,
      optimisticValue: new Notification(__spreadValues(__spreadValues({}, args.notification), update))
    };
  } else {
    return {
      notificationId: args.notificationId
    };
  }
};
var readAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(__spreadProps(__spreadValues({}, notification), {
        isRead: true,
        readAt: (/* @__PURE__ */ new Date()).toISOString(),
        isArchived: false,
        archivedAt: void 0
      }))
    );
    emitter.emit("notifications.read_all.pending", { args: { tags }, data: optimisticNotifications });
    yield inboxService.readAll({ tags });
    emitter.emit("notifications.read_all.resolved", { args: { tags }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.read_all.resolved", { args: { tags }, error });
    return { error: new NovuError("Failed to read all notifications", error) };
  }
});
var archiveAll = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(__spreadProps(__spreadValues({}, notification), {
        isRead: true,
        readAt: (/* @__PURE__ */ new Date()).toISOString(),
        isArchived: true,
        archivedAt: (/* @__PURE__ */ new Date()).toISOString()
      }))
    );
    emitter.emit("notifications.archive_all.pending", { args: { tags }, data: optimisticNotifications });
    yield inboxService.archiveAll({ tags });
    emitter.emit("notifications.archive_all.resolved", { args: { tags }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.archive_all.resolved", { args: { tags }, error });
    return { error: new NovuError("Failed to archive all notifications", error) };
  }
});
var archiveAllRead = (_0) => __async(void 0, [_0], function* ({
  emitter,
  inboxService,
  notificationsCache,
  tags
}) {
  try {
    const notifications = notificationsCache.getUniqueNotifications({ tags, read: true });
    const optimisticNotifications = notifications.map(
      (notification) => new Notification(__spreadProps(__spreadValues({}, notification), { isArchived: true, archivedAt: (/* @__PURE__ */ new Date()).toISOString() }))
    );
    emitter.emit("notifications.archive_all_read.pending", { args: { tags }, data: optimisticNotifications });
    yield inboxService.archiveAllRead({ tags });
    emitter.emit("notifications.archive_all_read.resolved", { args: { tags }, data: optimisticNotifications });
    return {};
  } catch (error) {
    emitter.emit("notifications.archive_all_read.resolved", { args: { tags }, error });
    return { error: new NovuError("Failed to archive all read notifications", error) };
  }
});

// src/cache/in-memory-cache.ts
var _cache;
var InMemoryCache = class {
  constructor() {
    __privateAdd(this, _cache);
    __privateSet(this, _cache, /* @__PURE__ */ new Map());
  }
  get(key) {
    return __privateGet(this, _cache).get(key);
  }
  getValues() {
    return Array.from(__privateGet(this, _cache).values());
  }
  entries() {
    return Array.from(__privateGet(this, _cache).entries());
  }
  keys() {
    return Array.from(__privateGet(this, _cache).keys());
  }
  set(key, value) {
    __privateGet(this, _cache).set(key, value);
  }
  remove(key) {
    __privateGet(this, _cache).delete(key);
  }
  clear() {
    __privateGet(this, _cache).clear();
  }
};
_cache = new WeakMap();

// src/utils/arrays.ts
var arrayValuesEqual = (arr1, arr2) => {
  if (arr1 === arr2) {
    return true;
  }
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
};
var areTagsEqual = (tags1, tags2) => {
  return arrayValuesEqual(tags1, tags2) || !tags1 && (tags2 == null ? void 0 : tags2.length) === 0 || (tags1 == null ? void 0 : tags1.length) === 0 && !tags2;
};
var isSameFilter = (filter1, filter2) => {
  return areTagsEqual(filter1.tags, filter2.tags) && filter1.read == filter2.read && filter1.archived == filter2.archived;
};

// src/cache/notifications-cache.ts
var excludeEmpty = ({ tags, read: read2, archived, limit, offset, after }) => Object.entries({ tags, read: read2, archived, limit, offset, after }).filter(([_, value]) => value !== null && value !== void 0 && !(Array.isArray(value) && value.length === 0)).reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
var getCacheKey = ({ tags, read: read2, archived, limit, offset, after }) => {
  return JSON.stringify(excludeEmpty({ tags, read: read2, archived, limit, offset, after }));
};
var getFilterKey = ({ tags, read: read2, archived }) => {
  return JSON.stringify(excludeEmpty({ tags, read: read2, archived }));
};
var getFilter = (key) => {
  return JSON.parse(key);
};
var updateEvents = [
  "notification.read.pending",
  "notification.read.resolved",
  "notification.unread.pending",
  "notification.unread.resolved",
  "notification.complete_action.pending",
  "notification.complete_action.resolved",
  "notification.revert_action.pending",
  "notification.revert_action.resolved",
  "notifications.read_all.pending",
  "notifications.read_all.resolved"
];
var removeEvents = [
  "notification.archive.pending",
  "notification.unarchive.pending",
  "notifications.archive_all.pending",
  "notifications.archive_all_read.pending"
];
var _emitter2, _cache2;
var NotificationsCache = class {
  constructor() {
    __privateAdd(this, _emitter2);
    /**
     * The key is the stringified notifications filter, the values are the paginated notifications.
     */
    __privateAdd(this, _cache2);
    this.updateNotification = (key, data) => {
      const notificationsResponse = __privateGet(this, _cache2).get(key);
      if (!notificationsResponse) {
        return false;
      }
      const index = notificationsResponse.notifications.findIndex((el) => el.id === data.id);
      if (index === -1) {
        return false;
      }
      const updatedNotifications = [...notificationsResponse.notifications];
      updatedNotifications[index] = data;
      __privateGet(this, _cache2).set(key, __spreadProps(__spreadValues({}, notificationsResponse), { notifications: updatedNotifications }));
      return true;
    };
    this.removeNotification = (key, data) => {
      const notificationsResponse = __privateGet(this, _cache2).get(key);
      if (!notificationsResponse) {
        return false;
      }
      const index = notificationsResponse.notifications.findIndex((el) => el.id === data.id);
      if (index === -1) {
        return false;
      }
      const newNotifications = [...notificationsResponse.notifications];
      newNotifications.splice(index, 1);
      __privateGet(this, _cache2).set(key, __spreadProps(__spreadValues({}, notificationsResponse), {
        notifications: newNotifications
      }));
      return true;
    };
    this.handleNotificationEvent = ({ remove } = { remove: false }) => ({ data }) => {
      if (!data) {
        return;
      }
      const notifications = Array.isArray(data) ? data : [data];
      const uniqueFilterKeys = /* @__PURE__ */ new Set();
      __privateGet(this, _cache2).keys().forEach((key) => {
        notifications.forEach((notification) => {
          let isNotificationFound = false;
          if (remove) {
            isNotificationFound = this.removeNotification(key, notification);
          } else {
            isNotificationFound = this.updateNotification(key, notification);
          }
          if (isNotificationFound) {
            uniqueFilterKeys.add(getFilterKey(getFilter(key)));
          }
        });
      });
      uniqueFilterKeys.forEach((key) => {
        const notificationsResponse = this.getAggregated(getFilter(key));
        __privateGet(this, _emitter2).emit("notifications.list.updated", {
          data: notificationsResponse
        });
      });
    };
    __privateSet(this, _emitter2, NovuEventEmitter.getInstance());
    updateEvents.forEach((event) => {
      __privateGet(this, _emitter2).on(event, this.handleNotificationEvent());
    });
    removeEvents.forEach((event) => {
      __privateGet(this, _emitter2).on(event, this.handleNotificationEvent({ remove: true }));
    });
    __privateSet(this, _cache2, new InMemoryCache());
  }
  has(args) {
    return __privateGet(this, _cache2).get(getCacheKey(args)) !== void 0;
  }
  getAggregated(filter) {
    const cacheKeys = __privateGet(this, _cache2).keys().filter((key) => {
      const parsedFilter = getFilter(key);
      return isSameFilter(parsedFilter, filter);
    });
    return cacheKeys.map((key) => __privateGet(this, _cache2).get(key)).reduce(
      (acc, el) => {
        if (!el) {
          return acc;
        }
        return {
          hasMore: el.hasMore,
          filter: el.filter,
          notifications: [...acc.notifications, ...el.notifications]
        };
      },
      { hasMore: false, filter: {}, notifications: [] }
    );
  }
  set(args, data) {
    __privateGet(this, _cache2).set(getCacheKey(args), data);
  }
  getAll(args) {
    if (this.has(args)) {
      return this.getAggregated({ tags: args.tags, read: args.read, archived: args.archived });
    }
    return;
  }
  /**
   * Get unique notifications based on specified filter fields.
   * The same tags can be applied to multiple filters which means that the same notification can be duplicated.
   */
  getUniqueNotifications({ tags, read: read2 }) {
    const keys = __privateGet(this, _cache2).keys();
    const uniqueNotifications = /* @__PURE__ */ new Map();
    keys.forEach((key) => {
      const filter = getFilter(key);
      if (areTagsEqual(tags, filter.tags)) {
        const value = __privateGet(this, _cache2).get(key);
        if (!value) {
          return;
        }
        value.notifications.filter((el) => typeof read2 === "undefined" || read2 === el.isRead).forEach((notification) => uniqueNotifications.set(notification.id, notification));
      }
    });
    return Array.from(uniqueNotifications.values());
  }
  clear(filter) {
    const keys = __privateGet(this, _cache2).keys();
    keys.forEach((key) => {
      if (isSameFilter(getFilter(key), filter)) {
        __privateGet(this, _cache2).remove(key);
      }
    });
  }
  clearAll() {
    __privateGet(this, _cache2).clear();
  }
};
_emitter2 = new WeakMap();
_cache2 = new WeakMap();

// src/notifications/notifications.ts
var _useCache, _notificationsCache;
var Notifications = class extends BaseModule {
  constructor({ useCache }) {
    super();
    __privateAdd(this, _useCache);
    __privateAdd(this, _notificationsCache);
    __privateSet(this, _notificationsCache, new NotificationsCache());
    __privateSet(this, _useCache, useCache);
  }
  list() {
    return __async(this, arguments, function* (_a = {}) {
      var _b = _a, { limit = 10 } = _b, restOptions = __objRest(_b, ["limit"]);
      return this.callWithSession(() => __async(this, null, function* () {
        const args = __spreadValues({ limit }, restOptions);
        try {
          let data = __privateGet(this, _useCache) ? __privateGet(this, _notificationsCache).getAll(args) : void 0;
          if (!data) {
            const response = yield this._inboxService.fetchNotifications(__spreadValues({
              limit
            }, restOptions));
            data = {
              hasMore: response.hasMore,
              filter: response.filter,
              notifications: response.data.map((el) => new Notification(el))
            };
            if (__privateGet(this, _useCache)) {
              __privateGet(this, _notificationsCache).set(args, data);
              data = __privateGet(this, _notificationsCache).getAll(args);
            }
          }
          this._emitter.emit("notifications.list.resolved", { args, data });
          return { data };
        } catch (error) {
          this._emitter.emit("notifications.list.resolved", { args, error });
          return { error: new NovuError("Failed to fetch notifications", error) };
        }
      }));
    });
  }
  count(args) {
    return __async(this, null, function* () {
      return this.callWithSession(() => __async(this, null, function* () {
        const filters = args && "filters" in args ? args.filters : [__spreadValues({}, args)];
        try {
          this._emitter.emit("notifications.count.pending", { args });
          const response = yield this._inboxService.count({
            filters
          });
          const data = args && "filters" in args ? { counts: response.data } : response.data[0];
          this._emitter.emit("notifications.count.resolved", {
            args,
            data
          });
          return { data };
        } catch (error) {
          this._emitter.emit("notifications.count.resolved", { args, error });
          return { error: new NovuError("Failed to count notifications", error) };
        }
      }));
    });
  }
  read(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return read({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  unread(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return unread({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  archive(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archive({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  unarchive(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return unarchive({
            emitter: this._emitter,
            apiService: this._inboxService,
            args
          });
        })
      );
    });
  }
  completePrimary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return completeAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "primary" /* PRIMARY */
          });
        })
      );
    });
  }
  completeSecondary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return completeAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "secondary" /* SECONDARY */
          });
        })
      );
    });
  }
  revertPrimary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return revertAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "primary" /* PRIMARY */
          });
        })
      );
    });
  }
  revertSecondary(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return revertAction({
            emitter: this._emitter,
            apiService: this._inboxService,
            args,
            actionType: "secondary" /* SECONDARY */
          });
        })
      );
    });
  }
  readAll() {
    return __async(this, arguments, function* ({ tags } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return readAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: __privateGet(this, _notificationsCache),
            tags
          });
        })
      );
    });
  }
  archiveAll() {
    return __async(this, arguments, function* ({ tags } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archiveAll({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: __privateGet(this, _notificationsCache),
            tags
          });
        })
      );
    });
  }
  archiveAllRead() {
    return __async(this, arguments, function* ({ tags } = {}) {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return archiveAllRead({
            emitter: this._emitter,
            inboxService: this._inboxService,
            notificationsCache: __privateGet(this, _notificationsCache),
            tags
          });
        })
      );
    });
  }
  clearCache({ filter } = {}) {
    if (filter) {
      return __privateGet(this, _notificationsCache).clear(filter != null ? filter : {});
    }
    return __privateGet(this, _notificationsCache).clearAll();
  }
};
_useCache = new WeakMap();
_notificationsCache = new WeakMap();

// src/session/session.ts
var _emitter3, _inboxService2, _options;
var Session = class {
  constructor(options) {
    __privateAdd(this, _emitter3);
    __privateAdd(this, _inboxService2);
    __privateAdd(this, _options);
    __privateSet(this, _emitter3, NovuEventEmitter.getInstance());
    __privateSet(this, _inboxService2, InboxServiceSingleton.getInstance());
    __privateSet(this, _options, options);
  }
  initialize() {
    return __async(this, null, function* () {
      try {
        const { applicationIdentifier, subscriberId, subscriberHash } = __privateGet(this, _options);
        __privateGet(this, _emitter3).emit("session.initialize.pending", { args: __privateGet(this, _options) });
        const response = yield __privateGet(this, _inboxService2).initializeSession({
          applicationIdentifier,
          subscriberId,
          subscriberHash
        });
        __privateGet(this, _emitter3).emit("session.initialize.resolved", { args: __privateGet(this, _options), data: response });
      } catch (error) {
        __privateGet(this, _emitter3).emit("session.initialize.resolved", { args: __privateGet(this, _options), error });
      }
    });
  }
};
_emitter3 = new WeakMap();
_inboxService2 = new WeakMap();
_options = new WeakMap();

// src/preferences/preference.ts
var _emitter4, _apiService;
var Preference = class {
  constructor(preference) {
    __privateAdd(this, _emitter4);
    __privateAdd(this, _apiService);
    __privateSet(this, _emitter4, NovuEventEmitter.getInstance());
    __privateSet(this, _apiService, InboxServiceSingleton.getInstance());
    this.level = preference.level;
    this.enabled = preference.enabled;
    this.channels = preference.channels;
    this.workflow = preference.workflow;
  }
  update({ channelPreferences }) {
    var _a;
    return updatePreference({
      emitter: __privateGet(this, _emitter4),
      apiService: __privateGet(this, _apiService),
      args: {
        workflowId: (_a = this.workflow) == null ? void 0 : _a.id,
        channelPreferences,
        preference: {
          level: this.level,
          enabled: this.enabled,
          channels: this.channels,
          workflow: this.workflow
        }
      }
    });
  }
};
_emitter4 = new WeakMap();
_apiService = new WeakMap();

// src/preferences/helpers.ts
var updatePreference = (_0) => __async(void 0, [_0], function* ({
  emitter,
  apiService,
  args
}) {
  const { workflowId, channelPreferences } = args;
  try {
    emitter.emit("preferences.update.pending", {
      args,
      data: args.preference ? new Preference(__spreadProps(__spreadValues({}, args.preference), {
        channels: __spreadValues(__spreadValues({}, args.preference.channels), channelPreferences)
      })) : void 0
    });
    let response;
    if (workflowId) {
      response = yield apiService.updateWorkflowPreferences({ workflowId, channelPreferences });
    } else {
      response = yield apiService.updateGlobalPreferences(channelPreferences);
    }
    const preference = new Preference(response);
    emitter.emit("preferences.update.resolved", { args, data: preference });
    return { data: preference };
  } catch (error) {
    emitter.emit("preferences.update.resolved", { args, error });
    return { error: new NovuError("Failed to fetch notifications", error) };
  }
});

// src/preferences/preferences.ts
var Preferences = class extends BaseModule {
  list() {
    return __async(this, null, function* () {
      return this.callWithSession(() => __async(this, null, function* () {
        try {
          this._emitter.emit("preferences.list.pending");
          const response = yield this._inboxService.fetchPreferences();
          const modifiedResponse = response.map((el) => new Preference(el));
          this._emitter.emit("preferences.list.resolved", { args: void 0, data: modifiedResponse });
          return { data: modifiedResponse };
        } catch (error) {
          this._emitter.emit("preferences.list.resolved", { args: void 0, error });
          throw error;
        }
      }));
    });
  }
  update(args) {
    return __async(this, null, function* () {
      return this.callWithSession(
        () => __async(this, null, function* () {
          return updatePreference({ emitter: this._emitter, apiService: this._inboxService, args });
        })
      );
    });
  }
};
var PRODUCTION_SOCKET_URL = "https://ws.novu.co";
var NOTIFICATION_RECEIVED = "notifications.notification_received";
var UNSEEN_COUNT_CHANGED = "notifications.unseen_count_changed";
var UNREAD_COUNT_CHANGED = "notifications.unread_count_changed";
var mapToNotification = ({
  _id,
  content,
  read: read2,
  archived,
  createdAt,
  lastReadDate,
  archivedAt,
  channel,
  subscriber,
  subject,
  avatar,
  cta,
  tags
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  const to = {
    id: (_a = subscriber == null ? void 0 : subscriber._id) != null ? _a : "",
    firstName: subscriber == null ? void 0 : subscriber.firstName,
    lastName: subscriber == null ? void 0 : subscriber.lastName,
    avatar: subscriber == null ? void 0 : subscriber.avatar,
    subscriberId: (_b = subscriber == null ? void 0 : subscriber.subscriberId) != null ? _b : ""
  };
  const primaryCta = (_d = (_c = cta.action) == null ? void 0 : _c.buttons) == null ? void 0 : _d.find((button) => button.type === "primary" /* PRIMARY */);
  const secondaryCta = (_f = (_e = cta.action) == null ? void 0 : _e.buttons) == null ? void 0 : _f.find((button) => button.type === "secondary" /* SECONDARY */);
  const actionType = (_h = (_g = cta.action) == null ? void 0 : _g.result) == null ? void 0 : _h.type;
  const actionStatus = (_i = cta.action) == null ? void 0 : _i.status;
  return {
    id: _id,
    subject,
    body: content,
    to,
    isRead: read2,
    isArchived: archived,
    createdAt,
    readAt: lastReadDate,
    archivedAt,
    avatar,
    primaryAction: primaryCta && {
      label: primaryCta.content,
      isCompleted: actionType === "primary" /* PRIMARY */ && actionStatus === "done" /* DONE */
    },
    secondaryAction: secondaryCta && {
      label: secondaryCta.content,
      isCompleted: actionType === "secondary" /* SECONDARY */ && actionStatus === "done" /* DONE */
    },
    channelType: channel,
    tags,
    redirect: ((_j = cta.data) == null ? void 0 : _j.url) ? {
      url: cta.data.url
    } : void 0
  };
};
var _token, _emitter5, _socketIo, _socketUrl, _notificationReceived, _unseenCountChanged, _unreadCountChanged, _Socket_instances, initializeSocket_fn;
var Socket = class extends BaseModule {
  constructor({ socketUrl }) {
    super();
    __privateAdd(this, _Socket_instances);
    __privateAdd(this, _token);
    __privateAdd(this, _emitter5);
    __privateAdd(this, _socketIo);
    __privateAdd(this, _socketUrl);
    __privateAdd(this, _notificationReceived, ({ message }) => {
      __privateGet(this, _emitter5).emit(NOTIFICATION_RECEIVED, {
        result: new Notification(mapToNotification(message))
      });
    });
    __privateAdd(this, _unseenCountChanged, ({ unseenCount }) => {
      __privateGet(this, _emitter5).emit(UNSEEN_COUNT_CHANGED, {
        result: unseenCount
      });
    });
    __privateAdd(this, _unreadCountChanged, ({ unreadCount }) => {
      __privateGet(this, _emitter5).emit(UNREAD_COUNT_CHANGED, {
        result: unreadCount
      });
    });
    __privateSet(this, _emitter5, NovuEventEmitter.getInstance());
    __privateSet(this, _socketUrl, socketUrl != null ? socketUrl : PRODUCTION_SOCKET_URL);
  }
  onSessionSuccess({ token }) {
    __privateSet(this, _token, token);
  }
  isSocketEvent(eventName) {
    return eventName === NOTIFICATION_RECEIVED || eventName === UNSEEN_COUNT_CHANGED || eventName === UNREAD_COUNT_CHANGED;
  }
  initialize() {
    if (__privateGet(this, _token)) {
      __privateMethod(this, _Socket_instances, initializeSocket_fn).call(this).catch((error) => {
        console.error(error);
      });
      return;
    }
    this.callWithSession(() => __async(this, null, function* () {
      __privateMethod(this, _Socket_instances, initializeSocket_fn).call(this).catch((error) => {
        console.error(error);
      });
      return {};
    }));
  }
};
_token = new WeakMap();
_emitter5 = new WeakMap();
_socketIo = new WeakMap();
_socketUrl = new WeakMap();
_notificationReceived = new WeakMap();
_unseenCountChanged = new WeakMap();
_unreadCountChanged = new WeakMap();
_Socket_instances = new WeakSet();
initializeSocket_fn = function() {
  return __async(this, null, function* () {
    var _a, _b, _c;
    if (!!__privateGet(this, _socketIo)) {
      return;
    }
    const args = { socketUrl: __privateGet(this, _socketUrl) };
    __privateGet(this, _emitter5).emit("socket.connect.pending", { args });
    __privateSet(this, _socketIo, io(__privateGet(this, _socketUrl), {
      reconnectionDelayMax: 1e4,
      transports: ["websocket"],
      query: {
        token: `${__privateGet(this, _token)}`
      }
    }));
    __privateGet(this, _socketIo).on("connect", () => {
      __privateGet(this, _emitter5).emit("socket.connect.resolved", { args });
    });
    __privateGet(this, _socketIo).on("connect_error", (error) => {
      __privateGet(this, _emitter5).emit("socket.connect.resolved", { args, error });
    });
    (_a = __privateGet(this, _socketIo)) == null ? void 0 : _a.on("notification_received" /* RECEIVED */, __privateGet(this, _notificationReceived));
    (_b = __privateGet(this, _socketIo)) == null ? void 0 : _b.on("unseen_count_changed" /* UNSEEN */, __privateGet(this, _unseenCountChanged));
    (_c = __privateGet(this, _socketIo)) == null ? void 0 : _c.on("unread_count_changed" /* UNREAD */, __privateGet(this, _unreadCountChanged));
  });
};

// src/utils/config.ts
var PRODUCTION_BACKEND_URL = "https://api.novu.co";

// src/novu.ts
var _emitter6, _session, _socket;
var Novu = class {
  constructor(options) {
    __privateAdd(this, _emitter6);
    __privateAdd(this, _session);
    __privateAdd(this, _socket);
    var _a, _b;
    InboxServiceSingleton.getInstance({ backendUrl: (_a = options.backendUrl) != null ? _a : PRODUCTION_BACKEND_URL });
    __privateSet(this, _emitter6, NovuEventEmitter.getInstance({ recreate: true }));
    __privateSet(this, _session, new Session({
      applicationIdentifier: options.applicationIdentifier,
      subscriberId: options.subscriberId,
      subscriberHash: options.subscriberHash
    }));
    __privateGet(this, _session).initialize();
    this.notifications = new Notifications({ useCache: (_b = options.useCache) != null ? _b : true });
    this.preferences = new Preferences();
    __privateSet(this, _socket, new Socket({ socketUrl: options.socketUrl }));
  }
  on(eventName, listener) {
    if (__privateGet(this, _socket).isSocketEvent(eventName)) {
      __privateGet(this, _socket).initialize();
    }
    __privateGet(this, _emitter6).on(eventName, listener);
  }
  off(eventName, listener) {
    __privateGet(this, _emitter6).off(eventName, listener);
  }
};
_emitter6 = new WeakMap();
_session = new WeakMap();
_socket = new WeakMap();

export { ActionTypeEnum, ChannelType, CtaType, NotificationActionStatus, NotificationButton, NotificationStatus, Novu, PreferenceLevel, PreferenceOverrideSource, PreferenceOverrideSourceEnum, WebSocketEvent, __async, __objRest, __privateAdd, __privateGet, __privateMethod, __privateSet, __spreadProps, __spreadValues, isSameFilter };
