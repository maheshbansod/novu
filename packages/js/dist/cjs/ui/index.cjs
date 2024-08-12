'use strict';

var chunk2C4L4ZUQ_cjs = require('../chunk-2C4L4ZUQ.cjs');
var web = require('solid-js/web');
var solidJs = require('solid-js');
var store = require('solid-js/store');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var classVarianceAuthority = require('class-variance-authority');
var dom = require('@floating-ui/dom');
var solidFloatingUi = require('solid-floating-ui');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var clsx__default = /*#__PURE__*/_interopDefault(clsx);

// src/ui/config/defaultVariables.ts
var defaultVariables = {
  colorPrimary: "#0081F1",
  colorPrimaryForeground: "white",
  colorSecondary: "#F3F3F3",
  colorSecondaryForeground: "#1A1523",
  colorCounter: "#E5484D",
  colorCounterForeground: "white",
  colorBackground: "#FCFCFC",
  colorForeground: "#1A1523",
  colorNeutral: "black",
  fontSize: "inherit",
  borderRadius: "0.375rem"
};

// src/ui/config/defaultLocalization.ts
var defaultLocalization = {
  locale: "en-US",
  "inbox.status.options.unread": "Unread only",
  "inbox.status.options.unreadRead": "Unread & read",
  "inbox.status.options.archived": "Archived",
  "inbox.status.unread": "Unread",
  "inbox.status.unreadRead": "Inbox",
  "inbox.status.archived": "Archived",
  "notifications.emptyNotice": "No notifications",
  "notifications.actions.readAll": "Mark all as read",
  "notifications.actions.archiveAll": "Archive all",
  "notifications.actions.archiveRead": "Archive read",
  "notifications.newNotifications": ({ notificationCount }) => `${notificationCount > 99 ? "99+" : notificationCount} new ${notificationCount === 1 ? "notification" : "notifications"}`,
  "notification.actions.read.toolTip": "Mark as read",
  "notification.actions.unread.toolTip": "Mark as unread",
  "notification.actions.archive.toolTip": "Archive",
  "notification.actions.unarchive.toolTip": "Unarchive",
  "preferences.title": "Notification Preferences",
  "preferences.global": "Global Preferences"
};

// src/ui/config/appearanceKeys.ts
var appearanceKeys = [
  //Primitives
  "button",
  "popoverContent",
  "popoverTrigger",
  "dropdownContent",
  "dropdownTrigger",
  "dropdownItem",
  "dropdownItemLabel",
  "dropdownItemLabelContainer",
  "dropdownItemLeftIcon",
  "dropdownItemRightIcon",
  "tooltipContent",
  "tooltipTrigger",
  "back__button",
  "skeletonText",
  "skeletonAvatar",
  "tabsRoot",
  "tabsList",
  "tabsContent",
  "tabsTrigger",
  "dots",
  //General
  "root",
  "bellIcon",
  "bellContainer",
  "bellDot",
  "preferences__button",
  "preferencesContainer",
  "inboxHeader",
  "loading",
  //Inbox
  "inbox__popoverTrigger",
  "inbox__popoverContent",
  //Notifications
  "notificationList",
  "notificationListEmptyNoticeContainer",
  "notificationListEmptyNotice",
  "notificationListEmptyNoticeIcon",
  "notificationListNewNotificationsNoticeContainer",
  "notificationListNewNotificationsNotice__button",
  "notification",
  "notificationDot",
  "notificationSubject",
  "notificationBody",
  "notificationBodyContainer",
  "notificationImage",
  "notificationDate",
  "notificationDefaultActions",
  "notificationCustomActions",
  "notificationPrimaryAction__button",
  "notificationSecondaryAction__button",
  "notificationRead__button",
  "notificationUnread__button",
  "notificationArchive__button",
  "notificationUnarchive__button",
  // Notifications tabs
  "notificationsTabs__tabsRoot",
  "notificationsTabs__tabsList",
  "notificationsTabs__tabsContent",
  "notificationsTabs__tabsTrigger",
  "notificationsTabsTriggerLabel",
  "notificationsTabsTriggerCount",
  //Inbox status
  "inboxStatus__title",
  "inboxStatus__dropdownTrigger",
  "inboxStatus__dropdownContent",
  "inboxStatus__dropdownItem",
  "inboxStatus__dropdownItemLabel",
  "inboxStatus__dropdownItemLabelContainer",
  "inboxStatus__dropdownItemLeftIcon",
  "inboxStatus__dropdownItemRightIcon",
  // More actions
  "moreActionsContainer",
  "moreActions__dropdownTrigger",
  "moreActions__dropdownContent",
  "moreActions__dropdownItem",
  "moreActions__dropdownItemLabel",
  "moreActions__dropdownItemLeftIcon",
  // More tabs
  "moreTabs__button",
  "moreTabs__dots",
  "moreTabs__dropdownTrigger",
  "moreTabs__dropdownContent",
  "moreTabs__dropdownItem",
  "moreTabs__dropdownItemLabel",
  "moreTabs__dropdownItemRightIcon",
  //workflow
  "workflowContainer",
  "workflowLabel",
  "workflowLabelContainer",
  // channel
  "channelContainer",
  "channelsContainer",
  "channelLabel",
  "channelLabelContainer",
  "channelDescription",
  "channelSwitchContainer",
  "channelSwitch",
  "channelSwitchThumb",
  //Preferences Header
  "preferencesHeader",
  "preferencesHeader__back__button",
  "preferencesHeader__title",
  //Preferences Loading
  "preferencesLoadingContainer"
];
function createInfiniteScroll(fetcher) {
  const [data, setData] = solidJs.createSignal([]);
  const [initialLoading, setInitialLoading] = solidJs.createSignal(true);
  const [offset3, setOffset] = solidJs.createSignal(0);
  const [end, setEnd] = solidJs.createSignal(false);
  const [contents, { mutate, refetch }] = solidJs.createResource(offset3, fetcher);
  let setEl = () => {
  };
  if (!web.isServer) {
    const io = new IntersectionObserver((e) => {
      if (e.length > 0 && e[0].isIntersecting && !end() && !contents.loading) {
        setOffset(setOffset(data().length));
      }
    });
    solidJs.onCleanup(() => io.disconnect());
    setEl = (el) => {
      io.observe(el);
      solidJs.onCleanup(() => io.unobserve(el));
    };
  }
  solidJs.createComputed(() => {
    const content = contents.latest;
    if (!content) return;
    setInitialLoading(false);
    solidJs.batch(() => {
      if (!content.hasMore) setEnd(true);
      setData(content.data);
    });
  });
  const reset = () => chunk2C4L4ZUQ_cjs.__async(this, null, function* () {
    setData([]);
    setInitialLoading(true);
    setEnd(false);
    if (offset3() !== 0) {
      setOffset(0);
    } else {
      yield refetch();
    }
  });
  return [
    data,
    {
      initialLoading,
      setEl,
      offset: offset3,
      end,
      mutate,
      reset
    }
  ];
}

// src/ui/helpers/formatToRelativeTime.ts
var DEFAULT_LOCALE = "en-US";
var SECONDS = {
  inMinute: 60,
  inHour: 3600,
  inDay: 86400,
  inWeek: 604800,
  inMonth: 2592e3
};
function formatToRelativeTime({
  fromDate,
  locale = DEFAULT_LOCALE,
  toDate = /* @__PURE__ */ new Date()
}) {
  const elapsed = toDate.getTime() - fromDate.getTime();
  const formatter = new Intl.RelativeTimeFormat(locale, { style: "narrow" });
  const diffInSeconds = Math.floor(elapsed / 1e3);
  if (diffInSeconds < SECONDS.inMinute) {
    return "Just now";
  } else if (diffInSeconds < SECONDS.inHour) {
    return formatter.format(Math.floor(-diffInSeconds / SECONDS.inMinute), "minute");
  } else if (diffInSeconds < SECONDS.inDay) {
    return formatter.format(Math.floor(-diffInSeconds / SECONDS.inHour), "hour");
  } else if (diffInSeconds < SECONDS.inMonth) {
    return formatter.format(Math.floor(-diffInSeconds / SECONDS.inDay), "day");
  } else {
    return new Intl.DateTimeFormat(locale, { month: "short", day: "numeric" }).format(toDate);
  }
}
var twMerge = tailwindMerge.extendTailwindMerge({
  prefix: "nt-"
});
function cn(...inputs) {
  return twMerge(clsx__default.default(inputs));
}
function generateRandomString(length) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function generateUniqueRandomString(set, length) {
  let randomString;
  do {
    randomString = generateRandomString(length);
  } while (set.has(randomString));
  return randomString;
}
function cssObjectToString(styles) {
  return Object.entries(styles).map(([key, value]) => {
    const kebabKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
    return `${kebabKey}: ${value};`;
  }).join(" ");
}
function createClassAndRuleFromCssString(classNameSet, styles) {
  const className = `novu-css-${generateUniqueRandomString(classNameSet, 8)}`;
  const rule = `.${className} { ${styles} }`;
  classNameSet.add(className);
  return { className, rule };
}
var shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
function generateDefaultColor(props) {
  const cssVariableDefaultRule = `.${props.id} { --nv-${props.key}: oklch(from ${props.color} l c h); }`;
  return cssVariableDefaultRule;
}
function generatesSolidShadesFromColor(props) {
  const rules = [];
  for (let i = 0; i < shades.length; i++) {
    const shade = shades[i];
    const cssVariableSolidRule = `.${props.id} { --nv-${props.key}-${shade}: oklch(from ${props.color} calc(l - ${(shade - 500) / 1e3}) c h); }`;
    rules.push(cssVariableSolidRule);
  }
  return rules;
}
function generatesAlphaShadesFromColor(props) {
  const rules = [];
  for (let i = 0; i < shades.length; i++) {
    const shade = shades[i];
    const cssVariableAlphaRule = `.${props.id} { --nv-${props.key}-${shade}: oklch(from ${props.color} l c h / ${shade / 1e3}); }`;
    rules.push(cssVariableAlphaRule);
  }
  return rules;
}
var parseVariables = (variables, id) => {
  return [
    generateDefaultColor({ color: variables.colorBackground, key: "color-background", id }),
    generateDefaultColor({ color: variables.colorForeground, key: "color-foreground", id }),
    generateDefaultColor({ color: variables.colorPrimary, key: "color-primary", id }),
    generateDefaultColor({ color: variables.colorPrimaryForeground, key: "color-primary-foreground", id }),
    generateDefaultColor({ color: variables.colorSecondary, key: "color-secondary", id }),
    generateDefaultColor({ color: variables.colorSecondaryForeground, key: "color-secondary-foreground", id }),
    generateDefaultColor({ color: variables.colorCounter, key: "color-counter", id }),
    generateDefaultColor({ color: variables.colorCounterForeground, key: "color-counter-foreground", id }),
    ...generatesAlphaShadesFromColor({ color: variables.colorBackground, key: "color-background-alpha", id }),
    ...generatesAlphaShadesFromColor({ color: variables.colorForeground, key: "color-foreground-alpha", id }),
    ...generatesSolidShadesFromColor({ color: variables.colorPrimary, key: "color-primary", id }),
    ...generatesAlphaShadesFromColor({ color: variables.colorPrimary, key: "color-primary-alpha", id }),
    ...generatesAlphaShadesFromColor({
      color: variables.colorPrimaryForeground,
      key: "color-primary-foreground-alpha",
      id
    }),
    ...generatesSolidShadesFromColor({ color: variables.colorSecondary, key: "color-secondary", id }),
    ...generatesAlphaShadesFromColor({ color: variables.colorSecondary, key: "color-secondary-alpha", id }),
    ...generatesAlphaShadesFromColor({
      color: variables.colorSecondaryForeground,
      key: "color-secondary-foreground-alpha",
      id
    }),
    ...generatesAlphaShadesFromColor({ color: variables.colorNeutral, key: "color-neutral-alpha", id })
  ];
};
var parseElements = (elements) => {
  const elementsStyleData = [];
  const generatedClassNames = /* @__PURE__ */ new Set();
  for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
      const value = elements[key];
      if (typeof value === "object") {
        const cssString = cssObjectToString(value);
        const { className, rule } = createClassAndRuleFromCssString(generatedClassNames, cssString);
        elementsStyleData.push({ key, rule, className });
      }
    }
  }
  return elementsStyleData;
};

// src/ui/helpers/useStyle.ts
var useStyle = () => {
  const appearance = useAppearance();
  const [isServer2, setIsServer] = solidJs.createSignal(true);
  solidJs.onMount(() => {
    setIsServer(false);
  });
  const styleFuncMemo = solidJs.createMemo(() => (appearanceKey, className) => {
    var _a, _b;
    const appearanceKeyParts = appearanceKey.split("__");
    let finalAppearanceKeys = [];
    for (let i = 0; i < appearanceKeyParts.length; i++) {
      const accumulated = appearanceKeyParts.slice(i).join("__");
      if (appearanceKeys.includes(accumulated)) {
        finalAppearanceKeys.push(accumulated);
      }
    }
    const classes = (className == null ? void 0 : className.split(/\s+/).map((className2) => className2.replace(/^nv-/, ""))) || [];
    const appearanceKeysInClasses = classes.filter(
      (className2) => appearanceKeys.includes(className2)
    );
    finalAppearanceKeys = Array.from(
      /* @__PURE__ */ new Set([...finalAppearanceKeys, ...appearanceKeysInClasses])
    );
    finalAppearanceKeys.sort((a, b) => {
      const countA = (a.match(/__/g) || []).length;
      const countB = (b.match(/__/g) || []).length;
      return countB - countA;
    });
    const finalClassName = classes.filter((className2) => !finalAppearanceKeys.includes(className2)).join(" ");
    const appearanceClassnames = [];
    for (let i = 0; i < finalAppearanceKeys.length; i++) {
      if (typeof ((_a = appearance.elements) == null ? void 0 : _a[finalAppearanceKeys[i]]) === "string") {
        appearanceClassnames.push((_b = appearance.elements) == null ? void 0 : _b[finalAppearanceKeys[i]]);
      }
    }
    const cssInJsClasses = !!finalAppearanceKeys.length && !isServer2() ? finalAppearanceKeys.map((appKey) => appearance.appearanceKeyToCssInJsClass[appKey]) : [];
    return cn(
      ...finalAppearanceKeys.map((key) => `nv-${key}`),
      "\u{1F514}",
      finalClassName,
      // default styles
      appearanceClassnames,
      ...cssInJsClasses
    );
  });
  return styleFuncMemo();
};
function useUncontrolledState(props) {
  const [uncontrolledValue, setUncontrolledValue] = solidJs.createSignal(!!props.fallbackValue);
  if (props.value !== void 0) {
    const accessor = () => !!props.value;
    return [accessor, setUncontrolledValue];
  }
  return [uncontrolledValue, setUncontrolledValue];
}

// src/ui/context/AppearanceContext.tsx
var AppearanceContext = solidJs.createContext(void 0);
var AppearanceProvider = (props) => {
  const [store$1, setStore] = store.createStore({
    appearanceKeyToCssInJsClass: {}
  });
  const [styleElement, setStyleElement] = solidJs.createSignal(null);
  const [elementRules, setElementRules] = solidJs.createSignal([]);
  const [variableRules, setVariableRules] = solidJs.createSignal([]);
  const themes = solidJs.createMemo(() => {
    var _a, _b, _c;
    return Array.isArray((_a = props.appearance) == null ? void 0 : _a.baseTheme) ? ((_b = props.appearance) == null ? void 0 : _b.baseTheme) || [] : [((_c = props.appearance) == null ? void 0 : _c.baseTheme) || {}];
  });
  solidJs.onMount(() => {
    const el = document.getElementById(props.id);
    if (el) {
      setStyleElement(el);
      return;
    }
    const styleEl = document.createElement("style");
    styleEl.id = props.id;
    document.head.appendChild(styleEl);
    setStyleElement(styleEl);
    solidJs.onCleanup(() => {
      const element = document.getElementById(props.id);
      if (element) {
        element.remove();
      }
    });
  });
  solidJs.createEffect(() => {
    var _a;
    const styleEl = styleElement();
    if (!styleEl) {
      return;
    }
    const baseVariables = chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, defaultVariables), themes().reduce((acc, obj) => chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, acc), obj.variables || {}), {}));
    setVariableRules(parseVariables(chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, baseVariables), ((_a = props.appearance) == null ? void 0 : _a.variables) || {}), props.id));
  });
  solidJs.createEffect(() => {
    var _a;
    const styleEl = styleElement();
    if (!styleEl) {
      return;
    }
    const baseElements = themes().reduce((acc, obj) => chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, acc), obj.elements || {}), {});
    const elementsStyleData = parseElements(chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, baseElements), ((_a = props.appearance) == null ? void 0 : _a.elements) || {}));
    setStore("appearanceKeyToCssInJsClass", (obj) => chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, obj), elementsStyleData.reduce((acc, item) => {
      acc[item.key] = item.className;
      return acc;
    }, {})));
    setElementRules(elementsStyleData.map((el) => el.rule));
  });
  solidJs.createEffect(() => {
    const styleEl = styleElement();
    if (!styleEl) {
      return;
    }
    styleEl.innerHTML = [...variableRules(), ...elementRules()].join(" ");
  });
  return web.createComponent(AppearanceContext.Provider, {
    get value() {
      var _a;
      return {
        elements: ((_a = props.appearance) == null ? void 0 : _a.elements) || {},
        appearanceKeyToCssInJsClass: store$1.appearanceKeyToCssInJsClass,
        id: props.id
      };
    },
    get children() {
      return props.children;
    }
  });
};
function useAppearance() {
  const context = solidJs.useContext(AppearanceContext);
  if (!context) {
    throw new Error("useAppearance must be used within an AppearanceProvider");
  }
  return context;
}
var useNovuEvent = ({
  event,
  eventHandler
}) => {
  const novu = useNovu();
  solidJs.onMount(() => {
    novu.on(event, eventHandler);
    solidJs.onCleanup(() => {
      novu.off(event, eventHandler);
    });
  });
};

// src/ui/helpers/browser.ts
function requestLock(id, cb) {
  let isFulfilled = false;
  let promiseResolve;
  const promise = new Promise((resolve) => {
    promiseResolve = resolve;
  });
  navigator.locks.request(id, () => {
    if (!isFulfilled) {
      cb(id);
    }
    return promise;
  });
  return () => {
    isFulfilled = true;
    promiseResolve();
  };
}
var useBrowserTabsChannel = ({
  channelName,
  onMessage
}) => {
  const [tabsChannel] = solidJs.createSignal(new BroadcastChannel(channelName));
  const postMessage = (data) => {
    const channel = tabsChannel();
    channel.postMessage(data);
  };
  solidJs.onMount(() => {
    const listener = (event) => {
      onMessage(event.data);
    };
    const channel = tabsChannel();
    channel.addEventListener("message", listener);
    solidJs.onCleanup(() => {
      channel.removeEventListener("message", listener);
    });
  });
  return { postMessage };
};

// src/ui/helpers/useWebSocketEvent.ts
var useWebSocketEvent = ({
  event: webSocketEvent,
  eventHandler: onMessage
}) => {
  const novu = useNovu();
  const { postMessage } = useBrowserTabsChannel({ channelName: `nv.${webSocketEvent}`, onMessage });
  const updateReadCount = (data) => {
    onMessage(data);
    postMessage(data);
  };
  solidJs.onMount(() => {
    const resolveLock = requestLock(`nv.${webSocketEvent}`, () => {
      novu.on(webSocketEvent, updateReadCount);
    });
    solidJs.onCleanup(() => {
      novu.off(webSocketEvent, updateReadCount);
      resolveLock();
    });
  });
};

// src/ui/types.ts
var NotificationStatus = /* @__PURE__ */ ((NotificationStatus2) => {
  NotificationStatus2["UNREAD_READ"] = "unreadRead";
  NotificationStatus2["UNREAD"] = "unread";
  NotificationStatus2["ARCHIVED"] = "archived";
  return NotificationStatus2;
})(NotificationStatus || {});

// src/ui/context/InboxContext.tsx
var InboxContext = solidJs.createContext(void 0);
var STATUS_TO_FILTER = {
  ["unreadRead" /* UNREAD_READ */]: {
    archived: false
  },
  ["unread" /* UNREAD */]: {
    read: false
  },
  ["archived" /* ARCHIVED */]: {
    archived: true
  }
};
var InboxProvider = (props) => {
  var _a;
  const [tabs, setTabs] = solidJs.createSignal(props.tabs);
  const [activeTab, setActiveTab] = solidJs.createSignal((_a = props.tabs[0] && props.tabs[0].label) != null ? _a : "");
  const [status, setStatus] = solidJs.createSignal("unreadRead" /* UNREAD_READ */);
  const [filter, setFilter] = solidJs.createSignal(chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, STATUS_TO_FILTER["unreadRead" /* UNREAD_READ */]), {
    tags: props.tabs.length > 0 ? props.tabs[0].value : []
  }));
  const setNewStatus = (newStatus) => {
    setStatus(newStatus);
    setFilter((old) => chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, STATUS_TO_FILTER[newStatus]), {
      tags: old.tags
    }));
  };
  const setNewActiveTab = (newActiveTab) => {
    var _a2;
    const tags = (_a2 = tabs().find((tab) => tab.label === newActiveTab)) == null ? void 0 : _a2.value;
    if (!tags) {
      return;
    }
    setActiveTab(newActiveTab);
    setFilter((old) => chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, old), {
      tags
    }));
  };
  solidJs.createEffect(() => {
    var _a2;
    setTabs(props.tabs);
    const firstTab = props.tabs[0];
    setActiveTab((_a2 = firstTab == null ? void 0 : firstTab.label) != null ? _a2 : "");
    setFilter((old) => {
      var _a3;
      return chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, old), {
        tags: (_a3 = firstTab == null ? void 0 : firstTab.value) != null ? _a3 : []
      });
    });
  });
  return web.createComponent(InboxContext.Provider, {
    value: {
      status,
      setStatus: setNewStatus,
      filter,
      tabs,
      activeTab,
      setActiveTab: setNewActiveTab
    },
    get children() {
      return props.children;
    }
  });
};
var useInboxContext = () => {
  const context = solidJs.useContext(InboxContext);
  if (!context) {
    throw new Error("useInboxContext must be used within a InboxProvider");
  }
  return context;
};
var NovuContext = solidJs.createContext(void 0);
function NovuProvider(props) {
  const novu = solidJs.createMemo(() => new chunk2C4L4ZUQ_cjs.Novu(props.options));
  return web.createComponent(NovuContext.Provider, {
    get value() {
      return novu();
    },
    get children() {
      return props.children;
    }
  });
}
function useNovu() {
  const context = solidJs.useContext(NovuContext);
  if (!context) {
    throw new Error("useNovu must be used within a NovuProvider");
  }
  return context;
}

// src/ui/context/CountContext.tsx
var CountContext = solidJs.createContext(void 0);
var CountProvider = (props) => {
  const novu = useNovu();
  const {
    tabs
  } = useInboxContext();
  const [totalUnreadCount, setTotalUnreadCount] = solidJs.createSignal(0);
  const [unreadCounts, setUnreadCounts] = solidJs.createSignal(/* @__PURE__ */ new Map());
  const [newNotificationCounts, setNewNotificationCounts] = solidJs.createSignal(/* @__PURE__ */ new Map());
  const updateUnreadCounts = () => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
    const filters = tabs().map((tab) => ({
      tags: tab.value,
      read: false,
      archived: false
    }));
    const {
      data
    } = yield novu.notifications.count({
      filters
    });
    if (!data) {
      return;
    }
    const newMap = /* @__PURE__ */ new Map();
    const counts = data.counts;
    for (let i = 0; i < counts.length; i++) {
      const tagsKey = createKey(counts[i].filter.tags);
      newMap.set(tagsKey, data == null ? void 0 : data.counts[i].count);
    }
    setUnreadCounts(newMap);
  });
  solidJs.onMount(updateUnreadCounts);
  useWebSocketEvent({
    event: "notifications.unread_count_changed",
    eventHandler: (data) => {
      setTotalUnreadCount(data.result);
      updateUnreadCounts();
    }
  });
  useNovuEvent({
    event: "session.initialize.resolved",
    eventHandler: ({
      data
    }) => {
      if (!data) {
        return;
      }
      setTotalUnreadCount(data.totalUnreadCount);
    }
  });
  useWebSocketEvent({
    event: "notifications.notification_received",
    eventHandler: (data) => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
      var _a;
      const notification = data.result;
      const allTabs = tabs();
      if (allTabs.length > 0) {
        for (let i = 0; i < allTabs.length; i++) {
          const tab = allTabs[i];
          const tags = tab.value;
          const allNotifications = tags.length === 0;
          const includeTags = (_a = notification.tags) == null ? void 0 : _a.every((tag) => tags.includes(tag));
          if (!allNotifications && !includeTags) {
            continue;
          }
          setNewNotificationCounts((oldMap) => {
            const tagsKey = createKey(tags);
            const newMap = new Map(oldMap);
            newMap.set(tagsKey, (oldMap.get(tagsKey) || 0) + 1);
            return newMap;
          });
        }
      } else {
        setNewNotificationCounts((oldMap) => {
          const tagsKey = createKey([]);
          const newMap = new Map(oldMap);
          newMap.set(tagsKey, (oldMap.get(tagsKey) || 0) + 1);
          return newMap;
        });
      }
    })
  });
  useWebSocketEvent({
    event: "notifications.notification_received",
    eventHandler: updateUnreadCounts
  });
  const resetNewNotificationCounts = (key) => {
    setNewNotificationCounts((oldMap) => {
      const newMap = new Map(oldMap);
      newMap.set(key, 0);
      return newMap;
    });
  };
  return web.createComponent(CountContext.Provider, {
    value: {
      totalUnreadCount,
      unreadCounts,
      newNotificationCounts,
      resetNewNotificationCounts
    },
    get children() {
      return props.children;
    }
  });
};
var createKey = (tags) => {
  return JSON.stringify({
    tags: tags != null ? tags : []
  });
};
var useTotalUnreadCount = () => {
  const context = solidJs.useContext(CountContext);
  if (!context) {
    throw new Error("useTotalUnreadCount must be used within a CountProvider");
  }
  return {
    totalUnreadCount: context.totalUnreadCount
  };
};
var useNewMessagesCount = (props) => {
  const context = solidJs.useContext(CountContext);
  if (!context) {
    throw new Error("useNewMessagesCount must be used within a CountProvider");
  }
  const key = solidJs.createMemo(() => createKey(props.filter.tags));
  const count = solidJs.createMemo(() => context.newNotificationCounts().get(key()) || 0);
  const reset = () => context.resetNewNotificationCounts(key());
  return {
    count,
    reset
  };
};
var useUnreadCount = (props) => {
  const context = solidJs.useContext(CountContext);
  if (!context) {
    throw new Error("useUnreadCount must be used within a CountProvider");
  }
  const count = solidJs.createMemo(() => context.unreadCounts().get(createKey(props.filter.tags)) || 0);
  return count;
};
var useUnreadCounts = (props) => {
  const context = solidJs.useContext(CountContext);
  if (!context) {
    throw new Error("useUnreadCounts must be used within a CountProvider");
  }
  const counts = solidJs.createMemo(() => props.filters.map((filter) => {
    return context.unreadCounts().get(createKey(filter.tags)) || 0;
  }));
  return counts;
};
function createFocusTrap({ element, enabled }) {
  solidJs.createEffect(() => {
    const trapElement = element();
    if (!trapElement || !enabled()) return;
    const focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]";
    const getFocusableElements = () => {
      return Array.from(trapElement.querySelectorAll(focusableElementsString)).filter(
        (el) => el.tabIndex >= 0 && !el.hasAttribute("disabled")
      );
    };
    const handleKeyDown = (event) => {
      if (event.key !== "Tab") return;
      const focusableElements2 = getFocusableElements();
      const firstFocusableElement = focusableElements2[0];
      const lastFocusableElement = focusableElements2[focusableElements2.length - 1];
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          lastFocusableElement.focus();
          event.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableElement) {
          firstFocusableElement.focus();
          event.preventDefault();
        }
      }
    };
    trapElement.addEventListener("keydown", handleKeyDown);
    const focusableElements = getFocusableElements();
    if (focusableElements.length > 0) {
      focusableElements[0].focus();
    }
    solidJs.onCleanup(() => {
      trapElement.removeEventListener("keydown", handleKeyDown);
    });
  });
}
var useFocusTrap_default = createFocusTrap;

// src/ui/context/FocusManagerContext.tsx
var FocusManagerContext = solidJs.createContext(void 0);
var FocusManagerProvider = (props) => {
  const [focusTraps, setFocusTraps] = solidJs.createSignal([]);
  const setActive = (element) => {
    setFocusTraps((traps) => [...traps, element]);
  };
  const removeActive = (element) => {
    setFocusTraps((traps) => traps.filter((item) => item !== element));
  };
  const active = solidJs.createMemo(() => focusTraps().length ? focusTraps()[focusTraps().length - 1] : null);
  useFocusTrap_default({
    element: () => active(),
    enabled: () => true
  });
  return web.createComponent(FocusManagerContext.Provider, {
    value: {
      focusTraps,
      active,
      setActive,
      removeActive
    },
    get children() {
      return props.children;
    }
  });
};
function useFocusManager() {
  const context = solidJs.useContext(FocusManagerContext);
  if (!context) {
    throw new Error("useFocusManager must be used within an FocusManagerProvider");
  }
  return context;
}
var LocalizationContext = solidJs.createContext(void 0);
var LocalizationProvider = (props) => {
  const localization = solidJs.createMemo(() => chunk2C4L4ZUQ_cjs.__spreadValues(chunk2C4L4ZUQ_cjs.__spreadValues({}, defaultLocalization), props.localization || {}));
  const t = (key, ...args) => {
    const value = localization()[key];
    if (typeof value === "function") {
      return value(args[0]);
    }
    return value;
  };
  const locale = solidJs.createMemo(() => localization().locale);
  return web.createComponent(LocalizationContext.Provider, {
    value: {
      t,
      locale
    },
    get children() {
      return props.children;
    }
  });
};
function useLocalization() {
  const context = solidJs.useContext(LocalizationContext);
  if (!context) {
    throw new Error("useLocalization must be used within an LocalizationProvider");
  }
  return context;
}
var _tmpl$ = /* @__PURE__ */ web.template(`<div>`);
var ExternalElementMounter = (_a) => {
  var _b = _a, {
    mount
  } = _b, rest = chunk2C4L4ZUQ_cjs.__objRest(_b, [
    "mount"
  ]);
  let ref;
  solidJs.onMount(() => {
    const unmount = mount(ref);
    solidJs.onCleanup(() => {
      unmount();
    });
  });
  return (() => {
    var _el$ = _tmpl$();
    web.use((el) => {
      ref = el;
    }, _el$);
    web.spread(_el$, rest, false, false);
    return _el$;
  })();
};
var _tmpl$2 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M17.117 4.358l-1.159-1.4A1.21 1.21 0 0015 2.5H5c-.392 0-.733.175-.967.458l-1.15 1.4A1.632 1.632 0 002.5 5.417v10.416c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V5.417c0-.4-.142-.775-.383-1.059zM5.2 4.167h9.6l.675.808H4.533l.667-.808zM4.167 15.833V6.667h11.666v9.166H4.167zm7.041-7.5H8.792v2.5H6.667L10 14.167l3.333-3.334h-2.125v-2.5z">`);
var Archive = () => {
  return _tmpl$2();
};
var _tmpl$3 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M17.117 4.358l-1.159-1.4A1.21 1.21 0 0015 2.5H5c-.392 0-.733.175-.967.458l-1.15 1.4A1.632 1.632 0 002.5 5.417v10.416c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V5.417c0-.4-.142-.775-.383-1.059zM10 14.583L5.417 10h2.916V8.333h3.334V10h2.916L10 14.583zM4.267 4.167l.675-.834h10l.783.834H4.267z">`);
var ArchiveRead = () => {
  return _tmpl$3();
};
var _tmpl$4 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M5.833 8.333L10 12.5l4.166-4.167H5.833z">`);
var ArrowDropDown = () => {
  return _tmpl$4();
};
var _tmpl$5 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M10 16.667l1.175-1.175-4.65-4.659h10.142V9.167H6.525l4.659-4.65L10 3.333 3.334 10 10 16.667z">`);
var ArrowLeft = () => {
  return _tmpl$5();
};
var _tmpl$6 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M10 18.333c.916 0 1.666-.75 1.666-1.666H8.333c0 .916.75 1.666 1.667 1.666zm5-5V9.167c0-2.559-1.359-4.7-3.75-5.267v-.567c0-.691-.559-1.25-1.25-1.25-.692 0-1.25.559-1.25 1.25V3.9C6.366 4.467 5 6.6 5 9.167v4.166L3.333 15v.833h13.333V15L15 13.333zm-1.667.834H6.666v-5c0-2.067 1.259-3.75 3.334-3.75s3.333 1.683 3.333 3.75v5z">`);
function BellIcon() {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$6();
    web.effect(() => web.setAttribute(_el$, "class", style("bellIcon")));
    return _el$;
  })();
}
var _tmpl$7 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M12.5 3.333v5.834H4.31l-.975.975V3.333H12.5zm.834-1.666H2.5a.836.836 0 00-.833.833v11.667L5 10.833h8.334a.836.836 0 00.833-.833V2.5a.836.836 0 00-.833-.833zM17.5 5h-1.666v7.5H5v1.667c0 .458.375.833.834.833H15l3.334 3.333v-12.5A.836.836 0 0017.5 5z">`);
var Chat = () => {
  return _tmpl$7();
};
var _tmpl$8 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M7.5 13.475L4.025 10l-1.183 1.175L7.5 15.833l10-10-1.175-1.175L7.5 13.475z">`);
var Check = (props) => {
  return (() => {
    var _el$ = _tmpl$8();
    web.spread(_el$, props, true, true);
    return _el$;
  })();
};
var _tmpl$9 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M5 8.333c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S5.916 8.333 5 8.333zm10 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S15.916 8.333 15 8.333zm-5 0c-.917 0-1.667.75-1.667 1.667s.75 1.667 1.667 1.667c.916 0 1.666-.75 1.666-1.667S10.916 8.333 10 8.333z">`);
var DotsMenu = (props) => {
  const [local, rest] = solidJs.splitProps(props, ["class", "appearanceKey"]);
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$9();
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        var _a;
        return style((_a = local.appearanceKey) != null ? _a : "dots", local.class);
      }
    }, rest), true, true);
    return _el$;
  })();
};
var _tmpl$10 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M16.667 3.333H3.334c-.917 0-1.659.75-1.659 1.667l-.008 10c0 .917.75 1.667 1.667 1.667h13.333c.917 0 1.667-.75 1.667-1.667V5c0-.917-.75-1.667-1.667-1.667zm0 11.667H3.334V6.667L10 10.833l6.667-4.166V15zM10 9.167L3.334 5h13.333L10 9.167z">`);
var Email = () => {
  return _tmpl$10();
};
var _tmpl$11 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 20 20"fill=none><path fill=currentColor d="M9.99967 18.3334C10.9163 18.3334 11.6663 17.5834 11.6663 16.6667H8.33301C8.33301 17.5834 9.08301 18.3334 9.99967 18.3334ZM14.9997 13.3334V9.16671C14.9997 6.60837 13.6413 4.46671 11.2497 3.90004V3.33337C11.2497 2.64171 10.6913 2.08337 9.99967 2.08337C9.30801 2.08337 8.74967 2.64171 8.74967 3.33337V3.90004C6.36634 4.46671 4.99967 6.60004 4.99967 9.16671V13.3334L3.33301 15V15.8334H16.6663V15L14.9997 13.3334ZM13.333 14.1667H6.66634V9.16671C6.66634 7.10004 7.92467 5.41671 9.99967 5.41671C12.0747 5.41671 13.333 7.10004 13.333 9.16671V14.1667Z">`);
var InApp = () => {
  return _tmpl$11();
};
var _tmpl$12 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M15.833 2.5H4.158c-.925 0-1.65.742-1.65 1.667L2.5 15.833A1.66 1.66 0 004.158 17.5h11.675c.917 0 1.667-.75 1.667-1.667V4.167A1.667 1.667 0 0015.833 2.5zm0 10H12.5c0 1.383-1.125 2.5-2.5 2.5a2.502 2.502 0 01-2.5-2.5H4.158V4.167h11.675V12.5z">`);
var Inbox = () => {
  return _tmpl$12();
};
var _tmpl$13 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=13 height=12 fill=none viewBox="0 0 13 12"><path fill=currentColor d="M9.787.98A5.972 5.972 0 006.5 0c-.668 0-1.31.11-1.911.31L9.187 4.94c.221.222.6.065.6-.248V.98z"></path><path fill=currentColor d="M2.879 1.216A5.99 5.99 0 00.5 6c0 1.134.315 2.195.862 3.1V7.309c0-1.966 2.379-2.946 3.764-1.552l4.995 5.027A5.99 5.99 0 0012.5 6a5.972 5.972 0 00-.862-3.1v1.791c0 1.966-2.379 2.946-3.764 1.552L2.879 1.216z"></path><path fill=currentColor d="M8.411 11.69L3.813 7.06a.351.351 0 00-.6.248v3.711c.944.62 2.073.98 3.287.98.668 0 1.31-.11 1.911-.31z">`);
var Novu2 = () => {
  return _tmpl$13();
};
var _tmpl$14 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M15.833.833H7.5c-.917 0-1.667.75-1.667 1.667V5H7.5V3.333h8.333v13.334H7.5V15H5.833v2.5c0 .917.75 1.667 1.667 1.667h8.333c.917 0 1.667-.75 1.667-1.667v-15c0-.917-.75-1.667-1.667-1.667zM5.842 11.225L3.717 9.1l-1.059 1.058 3.175 3.175 5.992-5.991-1.058-1.059-4.925 4.942z">`);
var Push = () => {
  return _tmpl$14();
};
var _tmpl$15 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M15.833 2.5H4.167C3.25 2.5 2.5 3.25 2.5 4.167v11.666c0 .917.75 1.667 1.667 1.667h11.666c.917 0 1.667-.75 1.667-1.667V4.167c0-.917-.75-1.667-1.667-1.667zm0 13.333H4.167V4.167h11.666v11.666zM14.992 7.5l-1.175-1.183-5.492 5.491-2.15-2.141-1.183 1.175 3.333 3.325L14.992 7.5z">`);
var ReadAll = () => {
  return _tmpl$15();
};
var _tmpl$16 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M15.95 10.783c.033-.25.05-.508.05-.783a4.81 4.81 0 00-.059-.783L17.633 7.9a.408.408 0 00.1-.508l-1.6-2.767a.407.407 0 00-.492-.183l-1.991.8a5.885 5.885 0 00-1.35-.784L12 2.342A.403.403 0 0011.6 2H8.4c-.2 0-.359.142-.392.342l-.3 2.116c-.492.2-.942.475-1.35.784l-1.992-.8a.398.398 0 00-.491.183L2.283 7.392c-.1.175-.067.391.1.508l1.692 1.317A4.89 4.89 0 004 10c0 .258.016.533.058.783L2.366 12.1a.408.408 0 00-.1.508l1.6 2.767c.1.183.309.242.492.183l1.992-.8c.416.317.858.584 1.35.784l.3 2.116c.041.2.2.342.4.342h3.2c.2 0 .366-.142.391-.342l.3-2.116c.492-.2.942-.467 1.35-.784l1.992.8c.183.067.392 0 .492-.183l1.6-2.767c.1-.183.058-.391-.1-.508l-1.675-1.317zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z">`);
var Settings = () => {
  return _tmpl$16();
};
var _tmpl$17 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M16.667 1.667H3.334c-.917 0-1.667.75-1.667 1.666v15L5 15h11.667c.917 0 1.667-.75 1.667-1.667v-10c0-.916-.75-1.666-1.667-1.666zm0 11.666H4.309l-.975.975V3.333h13.333v10zM5.834 7.5H7.5v1.667H5.834V7.5zm6.666 0h1.667v1.667H12.5V7.5zm-3.333 0h1.667v1.667H9.167V7.5z">`);
var Sms = () => {
  return _tmpl$17();
};
var _tmpl$18 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 20 20"fill=none><path fill=currentColor d="M17.1167 4.35833L15.9583 2.95833C15.7333 2.675 15.3917 2.5 15 2.5H5C4.60833 2.5 4.26667 2.675 4.03333 2.95833L2.88333 4.35833C2.64167 4.64167 2.5 5.01667 2.5 5.41667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V5.41667C17.5 5.01667 17.3583 4.64167 17.1167 4.35833ZM5.2 4.16667H14.8L15.4917 5H4.51667L5.2 4.16667ZM4.16667 15.8333V6.66667H15.8333V15.8333H4.16667ZM6.66667 11.6667H8.79167V14.1667H11.2083V11.6667H13.3333L10 8.33333L6.66667 11.6667Z">`);
var Unarchive = () => {
  return _tmpl$18();
};
var _tmpl$19 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 fill=none viewBox="0 0 20 20"><path fill=currentColor d="M18.334 5.817v7.516c0 .917-.75 1.667-1.667 1.667H5l-3.333 3.333v-15c0-.916.75-1.666 1.667-1.666h8.416c-.05.266-.083.55-.083.833 0 .283.033.567.083.833H3.334v10h13.333v-6.75a4.127 4.127 0 001.667-.766zm-5-3.317c0 1.383 1.116 2.5 2.5 2.5 1.383 0 2.5-1.117 2.5-2.5S17.217 0 15.834 0a2.497 2.497 0 00-2.5 2.5z">`);
var Unread = () => {
  return _tmpl$19();
};

// src/ui/components/elements/Bell/DefaultBellContainer.tsx
var _tmpl$20 = /* @__PURE__ */ web.template(`<span>`);
var BellContainer = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$20();
    web.insert(_el$, web.createComponent(BellIcon, {}), null);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.unreadCount > 0;
      },
      get children() {
        var _el$2 = _tmpl$20();
        web.effect(() => web.className(_el$2, style("bellDot", "nt-absolute nt-top-2 nt-right-2 nt-block nt-size-2 nt-transform nt-translate-x-1/2 -nt-translate-y-1/2 nt-bg-primary nt-rounded-full nt-border nt-border-background")));
        return _el$2;
      }
    }), null);
    web.effect(() => web.className(_el$, style("bellContainer", `nt-h-6 nt-w-6 nt-flex nt-justify-center nt-items-center nt-rounded-md nt-relative nt-text-foreground-alpha-600 nt-cursor-pointer`)));
    return _el$;
  })();
};

// src/ui/components/elements/Bell/Bell.tsx
var Bell = (props) => {
  const {
    totalUnreadCount
  } = useTotalUnreadCount();
  return web.createComponent(solidJs.Show, {
    get when() {
      return props.mountBell;
    },
    get fallback() {
      return web.createComponent(BellContainer, {
        get unreadCount() {
          return totalUnreadCount();
        }
      });
    },
    get children() {
      return web.createComponent(ExternalElementMounter, {
        mount: (el) => props.mountBell(el, {
          unreadCount: totalUnreadCount()
        })
      });
    }
  });
};
var _tmpl$21 = /* @__PURE__ */ web.template(`<div class="nt-flex nt-justify-center nt-items-center nt-gap-1 nt-mt-auto nt-pt-9 nt-pb-3 nt-text-foreground-alpha-200"><span class=nt-text-xs>Powered by Novu`);
var Footer = () => {
  return (() => {
    var _el$ = _tmpl$21(), _el$2 = _el$.firstChild;
    web.insert(_el$, web.createComponent(Novu2, {}), _el$2);
    return _el$;
  })();
};
var _tmpl$22 = /* @__PURE__ */ web.template(`<button>`);
var buttonVariants = classVarianceAuthority.cva("nt-inline-flex nt-gap-4 nt-items-center nt-justify-center nt-whitespace-nowrap nt-rounded-lg nt-text-sm nt-font-medium nt-ring-offset-background nt-transition-colors focus-visible:nt-outline-none focus-visible:nt-ring-2 focus-visible:nt-ring-primary nt-focus-visible:nt-ring-offset-2 disabled:nt-pointer-events-none disabled:nt-opacity-50", {
  variants: {
    variant: {
      default: "nt-bg-primary nt-text-primary-foreground hover:nt-bg-primary-alpha-900",
      secondary: "nt-bg-secondary nt-text-secondary-foreground hover:nt-bg-secondary-alpha-800",
      icon: "nt-text-secondary-foreground-alpha-500 hover:nt-bg-neutral-100",
      ghost: "hover:nt-bg-neutral-100",
      unstyled: ""
    },
    size: {
      none: "",
      icon: "nt-p-1",
      default: "nt-h-8 nt-px-3",
      sm: "nt-h-7 nt-rounded-md nt-px-3",
      lg: "nt-h-10 nt-px-8"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var Button = (props) => {
  const [local, rest] = solidJs.splitProps(props, ["class", "appearanceKey"]);
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$22();
    web.spread(_el$, web.mergeProps({
      get ["data-variant"]() {
        return props.variant;
      },
      get ["data-size"]() {
        return props.size;
      },
      get ["class"]() {
        return style(local.appearanceKey || "button", cn(buttonVariants({
          variant: props.variant,
          size: props.size
        }), local.class));
      }
    }, rest), false, false);
    return _el$;
  })();
};
var _tmpl$23 = /* @__PURE__ */ web.template(`<button>`);
var PopoverClose = (props) => {
  const {
    onClose
  } = usePopover();
  const [local, rest] = solidJs.splitProps(props, ["onClick", "asChild"]);
  const handleClick = (e) => {
    if (typeof local.onClick === "function") {
      local.onClick(e);
    }
    onClose();
  };
  if (local.asChild) {
    return web.createComponent(web.Dynamic, web.mergeProps({
      get component() {
        return local.asChild;
      },
      onClick: handleClick
    }, rest));
  }
  return (() => {
    var _el$ = _tmpl$23();
    _el$.$$click = handleClick;
    web.spread(_el$, rest, false, false);
    return _el$;
  })();
};
web.delegateEvents(["click"]);
var PopoverContext = solidJs.createContext(void 0);
function PopoverRoot(props) {
  const [reference, setReference] = solidJs.createSignal(null);
  const [floating, setFloating] = solidJs.createSignal(null);
  const position = solidFloatingUi.useFloating(reference, floating, {
    placement: props.placement || "bottom-start",
    whileElementsMounted: dom.autoUpdate,
    middleware: [dom.offset(10), dom.flip({
      fallbackPlacements: props.fallbackPlacements || ["top-start"]
    }), dom.shift()]
  });
  const [isOpen, setIsOpen] = useUncontrolledState({
    value: props.open,
    fallbackValue: false
  });
  const onClose = () => {
    setIsOpen(false);
  };
  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return web.createComponent(PopoverContext.Provider, {
    value: {
      onToggle,
      onClose,
      reference,
      setReference,
      floating,
      setFloating,
      open: isOpen,
      floatingStyles: () => {
        var _a, _b;
        return {
          position: position.strategy,
          top: `${(_a = position.y) != null ? _a : 0}px`,
          left: `${(_b = position.x) != null ? _b : 0}px`
        };
      }
    },
    get children() {
      return props.children;
    }
  });
}
function usePopover() {
  const context = solidJs.useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within Popover.Root component");
  }
  return context;
}

// src/ui/components/primitives/Popover/PopoverContent.tsx
var _tmpl$24 = /* @__PURE__ */ web.template(`<div>`);
var popoverContentVariants = () => cn("nt-w-[400px] nt-h-[600px] nt-rounded-xl nt-bg-background ", "nt-shadow-[0_5px_15px_0_rgba(122,133,153,0.25)] nt-z-10 nt-cursor-default nt-flex nt-flex-col nt-overflow-hidden");
var PopoverContentBody = (props) => {
  const {
    open,
    setFloating,
    floating,
    floatingStyles
  } = usePopover();
  const {
    setActive,
    removeActive
  } = useFocusManager();
  const [local, rest] = solidJs.splitProps(props, ["class", "appearanceKey", "style"]);
  const style = useStyle();
  solidJs.onMount(() => {
    const floatingEl = floating();
    setActive(floatingEl);
    solidJs.onCleanup(() => {
      removeActive(floatingEl);
    });
  });
  return (() => {
    var _el$ = _tmpl$24();
    web.use(setFloating, _el$);
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "popoverContent", popoverContentVariants());
      },
      get style() {
        return floatingStyles();
      },
      get ["data-open"]() {
        return open();
      }
    }, rest), false, false);
    return _el$;
  })();
};
var PopoverContent = (props) => {
  const {
    open,
    onClose,
    reference,
    floating
  } = usePopover();
  const {
    active
  } = useFocusManager();
  const handleClickOutside = (e) => {
    var _a, _b;
    if ((_a = reference()) == null ? void 0 : _a.contains(e.target)) {
      return;
    }
    if (active() !== floating() || ((_b = floating()) == null ? void 0 : _b.contains(e.target))) {
      return;
    }
    onClose();
  };
  const handleEscapeKey = (e) => {
    if (active() !== floating()) {
      return;
    }
    if (e.key === "Escape") {
      onClose();
    }
  };
  solidJs.onMount(() => {
    document.body.addEventListener("click", handleClickOutside);
    document.body.addEventListener("keydown", handleEscapeKey);
  });
  solidJs.onCleanup(() => {
    document.body.removeEventListener("click", handleClickOutside);
    document.body.removeEventListener("keydown", handleEscapeKey);
  });
  return web.createComponent(solidJs.Show, {
    get when() {
      return open();
    },
    get children() {
      return web.createComponent(web.Portal, {
        get children() {
          return web.createComponent(Root, {
            get children() {
              return web.createComponent(PopoverContentBody, props);
            }
          });
        }
      });
    }
  });
};
var _tmpl$25 = /* @__PURE__ */ web.template(`<button>`);
var PopoverTrigger = (props) => {
  const {
    setReference,
    onToggle
  } = usePopover();
  const style = useStyle();
  const [local, rest] = solidJs.splitProps(props, ["appearanceKey", "asChild", "onClick"]);
  const handleClick = (e) => {
    if (typeof local.onClick === "function") {
      local.onClick(e);
    }
    onToggle();
  };
  if (local.asChild) {
    return web.createComponent(web.Dynamic, web.mergeProps({
      get component() {
        return local.asChild;
      },
      ref: setReference,
      onClick: handleClick
    }, rest));
  }
  return (() => {
    var _el$ = _tmpl$25();
    _el$.$$click = handleClick;
    web.use(setReference, _el$);
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return style(local.appearanceKey || "dropdownTrigger");
      }
    }, rest), false, true);
    web.insert(_el$, () => props.children);
    return _el$;
  })();
};
web.delegateEvents(["click"]);

// src/ui/components/primitives/Popover/index.ts
var Popover = {
  Root: PopoverRoot,
  /**
   * Popover.Trigger renders a `button` and has no default styling.
   */
  Trigger: PopoverTrigger,
  /**
   * Popover.Content renders a `div` and has popover specific styling.
   */
  Content: PopoverContent,
  /**
   * Popover.Close renders a `button` and has no styling.
   * Closes the popover when clicked.
   * `onClick` function is propagated.
   */
  Close: PopoverClose
};
var dropdownContentVariants = () => "nt-w-max nt-rounded-lg nt-overflow-hidden nt-flex nt-flex-col nt-min-w-52 nt-shadow-[0_5px_20px_0_rgba(0,0,0,0.20)] nt-z-10 nt-bg-background";
var DropdownContent = (props) => {
  const style = useStyle();
  const [local, rest] = solidJs.splitProps(props, ["appearanceKey"]);
  return web.createComponent(Popover.Content, web.mergeProps({
    get ["class"]() {
      return style(local.appearanceKey || "dropdownContent", dropdownContentVariants());
    }
  }, rest));
};
var dropdownItemVariants = () => "focus:nt-outline-none nt-items-center hover:nt-bg-neutral-alpha-50 focus-visible:nt-bg-neutral-alpha-50 nt-py-1 nt-px-3";
var DropdownItem = (props) => {
  const style = useStyle();
  const [local, rest] = solidJs.splitProps(props, ["appearanceKey", "onClick", "class"]);
  const {
    onClose
  } = usePopover();
  return web.createComponent(Popover.Close, web.mergeProps({
    get ["class"]() {
      return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "dropdownItem", dropdownItemVariants());
    },
    onClick: (e) => {
      if (typeof local.onClick === "function") {
        local.onClick(e);
      }
      onClose();
    }
  }, rest));
};
var DropdownRoot = (props) => {
  return web.createComponent(Popover.Root, web.mergeProps({
    placement: "bottom",
    fallbackPlacements: ["top"]
  }, props));
};
var dropdownTriggerButtonVariants = () => `nt-relative nt-transition nt-outline-none focus-visible:nt-outline-nonefocus-visible:nt-ring-2 focus-visible:nt-ring-primary focus-visible:nt-ring-offset-2`;
var DropdownTrigger = (props) => {
  const style = useStyle();
  const [local, rest] = solidJs.splitProps(props, ["appearanceKey"]);
  return web.createComponent(Popover.Trigger, web.mergeProps({
    get ["class"]() {
      return style(local.appearanceKey || "dropdownTrigger", dropdownTriggerButtonVariants());
    }
  }, rest));
};

// src/ui/components/primitives/Dropdown/index.ts
var Dropdown = {
  Root: DropdownRoot,
  /**
   * Dropdown.Trigger renders a `button` and has no default styling.
   */
  Trigger: DropdownTrigger,
  /**
   * Dropdown.Content renders a `Popover.Content` by default.
   */
  Content: DropdownContent,
  /**
   * Dropdown.Close renders a `Popover.Close` by default.
   */
  Close: Popover.Close,
  /**
   * Dropdown.Item renders a `Popover.Close` with dropdown specific styling.
   * Closes the popover when clicked.
   * `onClick` function is propagated.
   */
  Item: DropdownItem
};
var _tmpl$26 = /* @__PURE__ */ web.template(`<div role=tablist>`);
var _tmpl$27 = /* @__PURE__ */ web.template(`<div class="nt-border-t nt-border-secondary nt-mt-[-0.25rem] nt-relative nt-z-[-1]">`);
var tabsListVariants = () => "nt-flex nt-gap-6 nt-px-6 nt-py-1 nt-overflow-hidden";
var TabsList = (props) => {
  const [local, rest] = solidJs.splitProps(props, ["class", "appearanceKey", "ref", "children"]);
  const style = useStyle();
  return [(() => {
    var _el$ = _tmpl$26();
    var _ref$ = local.ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : local.ref = _el$;
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "tabsList", tabsListVariants());
      }
    }, rest), false, true);
    web.insert(_el$, () => local.children);
    return _el$;
  })(), _tmpl$27()];
};
var useKeyboardNavigation = ({
  activeTab,
  setActiveTab,
  tabsContainer
}) => {
  const [keyboardNavigation, setKeyboardNavigation] = solidJs.createSignal(false);
  solidJs.createEffect(() => {
    const handleTabKey = (event) => {
      var _a;
      if (event.key !== "Tab") {
        return;
      }
      const tabs = (_a = tabsContainer()) == null ? void 0 : _a.querySelectorAll('[role="tab"]');
      if (!tabs || !document.activeElement) {
        return;
      }
      setKeyboardNavigation(Array.from(tabs).includes(document.activeElement));
    };
    document.addEventListener("keyup", handleTabKey);
    return solidJs.onCleanup(() => document.removeEventListener("keyup", handleTabKey));
  });
  solidJs.createEffect(() => {
    const handleArrowKeys = (event) => {
      var _a, _b;
      if (!keyboardNavigation() || event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
        return;
      }
      const tabElements = Array.from((_b = (_a = tabsContainer()) == null ? void 0 : _a.querySelectorAll('[role="tab"]')) != null ? _b : []);
      const tabIds = tabElements.map((tab) => tab.id);
      const currentIndex = tabIds.indexOf(activeTab());
      const length = tabIds.length;
      let activeIndex = currentIndex;
      let newTab = activeTab();
      if (event.key === "ArrowLeft") {
        activeIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
        newTab = tabIds[activeIndex];
      } else if (event.key === "ArrowRight") {
        activeIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
        newTab = tabIds[activeIndex];
      }
      tabElements[activeIndex].focus();
      setActiveTab(newTab);
    };
    document.addEventListener("keydown", handleArrowKeys);
    return solidJs.onCleanup(() => document.removeEventListener("keydown", handleArrowKeys));
  });
};

// src/ui/components/primitives/Tabs/TabsRoot.tsx
var _tmpl$28 = /* @__PURE__ */ web.template(`<div>`);
var TabsContext = solidJs.createContext(void 0);
var useTabsContext = () => {
  const context = solidJs.useContext(TabsContext);
  if (!context) {
    throw new Error("useTabsContext must be used within an TabsContext.Provider");
  }
  return context;
};
var tabsRootVariants = () => "nt-flex nt-flex-col";
var TabsRoot = (props) => {
  var _a;
  const [local, rest] = solidJs.splitProps(props, ["defaultValue", "value", "class", "appearanceKey", "onChange", "children"]);
  const [tabsContainer, setTabsContainer] = solidJs.createSignal();
  const [visibleTabs, setVisibleTabs] = solidJs.createSignal([]);
  const [activeTab, setActiveTab] = solidJs.createSignal((_a = local.defaultValue) != null ? _a : "");
  const style = useStyle();
  useKeyboardNavigation({
    tabsContainer,
    activeTab,
    setActiveTab
  });
  solidJs.createEffect(() => {
    if (local.value) {
      setActiveTab(local.value);
    }
  });
  solidJs.createEffect(() => {
    var _a2;
    (_a2 = local.onChange) == null ? void 0 : _a2.call(local, activeTab());
  });
  return web.createComponent(TabsContext.Provider, {
    value: {
      activeTab,
      setActiveTab,
      visibleTabs,
      setVisibleTabs
    },
    get children() {
      var _el$ = _tmpl$28();
      web.use(setTabsContainer, _el$);
      web.spread(_el$, web.mergeProps({
        get ["class"]() {
          return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "tabsRoot", tabsRootVariants());
        }
      }, rest), false, true);
      web.insert(_el$, () => local.children);
      return _el$;
    }
  });
};

// src/ui/components/primitives/Tabs/TabsContent.tsx
var _tmpl$29 = /* @__PURE__ */ web.template(`<div role=tabpanel>`);
var TabsContent = (props) => {
  const [local, rest] = solidJs.splitProps(props, ["value", "class", "appearanceKey", "children"]);
  const style = useStyle();
  const {
    activeTab
  } = useTabsContext();
  return web.createComponent(solidJs.Show, {
    get when() {
      return activeTab() === local.value;
    },
    get children() {
      var _el$ = _tmpl$29();
      web.spread(_el$, web.mergeProps({
        get ["class"]() {
          return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "tabsContent", activeTab() === local.value ? "nt-block" : "nt-hidden");
        },
        get id() {
          return `tabpanel-${local.value}`;
        },
        get ["aria-labelledby"]() {
          return local.value;
        },
        get ["data-state"]() {
          return activeTab() === local.value ? "active" : "inactive";
        }
      }, rest), false, true);
      web.insert(_el$, () => local.children);
      return _el$;
    }
  });
};
var tabsTriggerVariants = () => `nt-relative nt-transition nt-outline-none nt-text-foreground-alpha-600 focus-visible:nt-outline-none focus-visible:nt-ring-2 focus-visible:nt-ring-primary focus-visible:nt-ring-offset-2 nt-pb-[0.625rem] after:nt-absolute after:nt-content-[''] after:nt-bottom-0 after:nt-left-0 after:nt-w-full after:nt-h-[2px] after:nt-border-b-2 data-[state=active]:after:nt-border-primary after:nt-border-b-transparent`;
var TabsTrigger = (props) => {
  const [local, rest] = solidJs.splitProps(props, ["value", "class", "appearanceKey", "ref", "onClick", "children"]);
  const style = useStyle();
  const {
    activeTab,
    setActiveTab
  } = useTabsContext();
  const clickHandler = () => setActiveTab(local.value);
  return web.createComponent(Button, web.mergeProps({
    variant: "unstyled",
    size: "none",
    ref(r$) {
      var _ref$ = local.ref;
      typeof _ref$ === "function" ? _ref$(r$) : local.ref = r$;
    },
    get id() {
      return local.value;
    },
    get appearanceKey() {
      var _a;
      return (_a = local.appearanceKey) != null ? _a : "tabsTrigger";
    },
    get ["class"]() {
      return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "tabsTrigger", tabsTriggerVariants());
    },
    get onClick() {
      var _a;
      return (_a = local.onClick) != null ? _a : clickHandler;
    },
    role: "tab",
    tabIndex: 0,
    get ["aria-selected"]() {
      return activeTab() === local.value;
    },
    get ["aria-controls"]() {
      return `tabpanel-${local.value}`;
    },
    get ["data-state"]() {
      return activeTab() === local.value ? "active" : "inactive";
    }
  }, rest, {
    get children() {
      return local.children;
    }
  }));
};

// src/ui/components/primitives/Tabs/index.ts
var Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent
};

// src/ui/components/elements/InboxStatus/constants.ts
var notificationStatusOptionsLocalizationKeys = {
  unreadRead: "inbox.status.options.unreadRead",
  unread: "inbox.status.options.unread",
  archived: "inbox.status.options.archived"
};
var inboxStatusLocalizationKeys = {
  unreadRead: "inbox.status.unreadRead",
  unread: "inbox.status.unread",
  archived: "inbox.status.archived"
};
var _tmpl$30 = /* @__PURE__ */ web.template(`<span><span></span><span>`);
var _tmpl$210 = /* @__PURE__ */ web.template(`<span>`);
var cases = [{
  status: "unreadRead" /* UNREAD_READ */,
  icon: Inbox
}, {
  status: "unread" /* UNREAD */,
  icon: Unread
}, {
  status: "archived" /* ARCHIVED */,
  icon: Archive
}];
var StatusOptions = (props) => {
  const {
    t
  } = useLocalization();
  return web.createComponent(solidJs.For, {
    each: cases,
    children: (c) => web.createComponent(StatusItem, {
      get label() {
        return t(notificationStatusOptionsLocalizationKeys[c.status]);
      },
      onClick: () => {
        props.setStatus(c.status);
      },
      get isSelected() {
        return props.status === c.status;
      },
      get icon() {
        return c.icon;
      }
    })
  });
};
var StatusItem = (props) => {
  const style = useStyle();
  return web.createComponent(Dropdown.Item, {
    get ["class"]() {
      return style("inboxStatus__dropdownItem", cn(dropdownItemVariants(), "nt-flex nt-gap-8"));
    },
    get onClick() {
      return props.onClick;
    },
    get children() {
      return [(() => {
        var _el$ = _tmpl$30(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
        web.insert(_el$2, () => props.icon());
        web.insert(_el$3, () => props.label);
        web.effect((_p$) => {
          var _v$ = style("inboxStatus__dropdownItemLabelContainer", "nt-flex nt-gap-2 nt-items-center"), _v$2 = style("inboxStatus__dropdownItemLeftIcon"), _v$3 = style("inboxStatus__dropdownItemLabel");
          _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
          _v$2 !== _p$.t && web.className(_el$2, _p$.t = _v$2);
          _v$3 !== _p$.a && web.className(_el$3, _p$.a = _v$3);
          return _p$;
        }, {
          e: void 0,
          t: void 0,
          a: void 0
        });
        return _el$;
      })(), web.createComponent(solidJs.Show, {
        get when() {
          return props.isSelected;
        },
        get children() {
          var _el$4 = _tmpl$210();
          web.insert(_el$4, web.createComponent(Check, {}));
          web.effect(() => web.className(_el$4, style("inboxStatus__dropdownItemRightIcon", "nt-justify-self-end")));
          return _el$4;
        }
      })];
    }
  });
};

// src/ui/components/elements/InboxStatus/InboxStatusDropdown.tsx
var _tmpl$31 = /* @__PURE__ */ web.template(`<span>`);
var StatusDropdown = () => {
  const style = useStyle();
  const {
    status,
    setStatus
  } = useInboxContext();
  const {
    t
  } = useLocalization();
  return web.createComponent(Dropdown.Root, {
    get children() {
      return [web.createComponent(Dropdown.Trigger, {
        get ["class"]() {
          return style("inboxStatus__dropdownTrigger", buttonVariants({
            variant: "unstyled",
            size: "none"
          }));
        },
        asChild: (triggerProps) => web.createComponent(Button, web.mergeProps({
          variant: "unstyled",
          size: "none"
        }, triggerProps, {
          get children() {
            return [(() => {
              var _el$ = _tmpl$31();
              web.insert(_el$, () => t(inboxStatusLocalizationKeys[status()]));
              web.effect(() => web.className(_el$, style("inboxStatus__title", "nt-text-xl nt-font-semibold")));
              return _el$;
            })(), (() => {
              var _el$2 = _tmpl$31();
              web.insert(_el$2, web.createComponent(ArrowDropDown, {}));
              web.effect(() => web.className(_el$2, style("inboxStatus__dropdownItemRightIcon", "nt-text-foreground-alpha-600")));
              return _el$2;
            })()];
          }
        }))
      }), web.createComponent(Dropdown.Content, {
        appearanceKey: "inboxStatus__dropdownContent",
        get children() {
          return web.createComponent(StatusOptions, {
            setStatus,
            get status() {
              return status();
            }
          });
        }
      })];
    }
  });
};
var useNotificationsInfiniteScroll = (props) => {
  const novu = useNovu();
  let filter = chunk2C4L4ZUQ_cjs.__spreadValues({}, props.options());
  const [data, { initialLoading, setEl, end, mutate, reset }] = createInfiniteScroll((offset3) => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
    var _a, _b;
    const { data: data2 } = yield novu.notifications.list(chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, props.options() || {}), { offset: offset3 }));
    return { data: (_a = data2 == null ? void 0 : data2.notifications) != null ? _a : [], hasMore: (_b = data2 == null ? void 0 : data2.hasMore) != null ? _b : false };
  }));
  solidJs.onMount(() => {
    const listener = ({ data: data2 }) => {
      if (!data2 || !chunk2C4L4ZUQ_cjs.isSameFilter(filter, data2.filter)) {
        return;
      }
      mutate({ data: data2.notifications, hasMore: data2.hasMore });
    };
    novu.on("notifications.list.updated", listener);
    solidJs.onCleanup(() => novu.off("notifications.list.updated", listener));
  });
  solidJs.createEffect(() => {
    const newFilter = chunk2C4L4ZUQ_cjs.__spreadValues({}, props.options());
    if (chunk2C4L4ZUQ_cjs.isSameFilter(filter, newFilter)) {
      return;
    }
    novu.notifications.clearCache();
    reset();
    filter = newFilter;
  });
  const refetch = ({ filter: filter2 }) => {
    novu.notifications.clearCache({ filter: filter2 });
    reset();
  };
  return { data, initialLoading, setEl, end, refetch };
};
var usePreferences = (options) => {
  const novu = useNovu();
  const [preferences, { mutate, refetch }] = solidJs.createResource(options || {}, () => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
    try {
      const response = yield novu.preferences.list();
      return response.data;
    } catch (error) {
      console.error("Error fetching preferences:", error);
      throw error;
    }
  }));
  return { preferences, mutate, refetch };
};

// src/ui/api/hooks/useReadAll.ts
var useReadAll = (props) => {
  const novu = useNovu();
  const readAll = (..._0) => chunk2C4L4ZUQ_cjs.__async(void 0, [..._0], function* ({ tags } = {}) {
    var _a, _b;
    try {
      yield novu.notifications.readAll({ tags });
      (_a = props == null ? void 0 : props.onSuccess) == null ? void 0 : _a.call(props);
    } catch (error) {
      (_b = props == null ? void 0 : props.onError) == null ? void 0 : _b.call(props, error);
    }
  });
  return { readAll };
};

// src/ui/api/hooks/useArchiveAll.ts
var useArchiveAll = (props) => {
  const novu = useNovu();
  const archiveAll = (..._0) => chunk2C4L4ZUQ_cjs.__async(void 0, [..._0], function* ({ tags } = {}) {
    var _a, _b;
    try {
      yield novu.notifications.archiveAll({ tags });
      (_a = props == null ? void 0 : props.onSuccess) == null ? void 0 : _a.call(props);
    } catch (error) {
      (_b = props == null ? void 0 : props.onError) == null ? void 0 : _b.call(props, error);
    }
  });
  return { archiveAll };
};

// src/ui/api/hooks/useArchiveAllRead.ts
var useArchiveAllRead = (props) => {
  const novu = useNovu();
  const archiveAllRead = (..._0) => chunk2C4L4ZUQ_cjs.__async(void 0, [..._0], function* ({ tags } = {}) {
    var _a, _b;
    try {
      yield novu.notifications.archiveAllRead({ tags });
      (_a = props == null ? void 0 : props.onSuccess) == null ? void 0 : _a.call(props);
    } catch (error) {
      (_b = props == null ? void 0 : props.onError) == null ? void 0 : _b.call(props, error);
    }
  });
  return { archiveAllRead };
};

// src/ui/components/elements/Header/MoreActionsOptions.tsx
var _tmpl$32 = /* @__PURE__ */ web.template(`<span>`);
var MoreActionsOptions = () => {
  const {
    t
  } = useLocalization();
  const {
    filter
  } = useInboxContext();
  const {
    readAll
  } = useReadAll();
  const {
    archiveAll
  } = useArchiveAll();
  const {
    archiveAllRead
  } = useArchiveAllRead();
  return [web.createComponent(ActionsItem, {
    get label() {
      return t("notifications.actions.readAll");
    },
    onClick: () => readAll({
      tags: filter().tags
    }),
    icon: ReadAll
  }), web.createComponent(ActionsItem, {
    get label() {
      return t("notifications.actions.archiveAll");
    },
    onClick: () => archiveAll({
      tags: filter().tags
    }),
    icon: Archive
  }), web.createComponent(ActionsItem, {
    get label() {
      return t("notifications.actions.archiveRead");
    },
    onClick: () => archiveAllRead({
      tags: filter().tags
    }),
    icon: ArchiveRead
  })];
};
var ActionsItem = (props) => {
  const style = useStyle();
  return web.createComponent(Dropdown.Item, {
    get ["class"]() {
      return style("moreActions__dropdownItem", cn(dropdownItemVariants(), "nt-flex nt-gap-2"));
    },
    get onClick() {
      return props.onClick;
    },
    get children() {
      return [(() => {
        var _el$ = _tmpl$32();
        web.insert(_el$, () => props.icon());
        web.effect(() => web.className(_el$, style("moreActions__dropdownItemLeftIcon", "nt-text-foreground-alpha-500")));
        return _el$;
      })(), (() => {
        var _el$2 = _tmpl$32();
        web.insert(_el$2, () => props.label);
        web.effect(() => web.className(_el$2, style("moreActions__dropdownItemLabel")));
        return _el$2;
      })()];
    }
  });
};

// src/ui/components/elements/Header/MoreActionsDropdown.tsx
var MoreActionsDropdown = () => {
  const style = useStyle();
  const {
    status
  } = useInboxContext();
  return web.createComponent(solidJs.Show, {
    get when() {
      return status() !== "archived" /* ARCHIVED */;
    },
    get children() {
      return web.createComponent(Dropdown.Root, {
        get children() {
          return [web.createComponent(Dropdown.Trigger, {
            get ["class"]() {
              return style("moreActions__dropdownTrigger");
            },
            asChild: (triggerProps) => web.createComponent(Button, web.mergeProps({
              variant: "icon",
              size: "icon"
            }, triggerProps, {
              get children() {
                return web.createComponent(DotsMenu, {});
              }
            }))
          }), web.createComponent(Dropdown.Content, {
            appearanceKey: "moreActions__dropdownContent",
            get children() {
              return web.createComponent(MoreActionsOptions, {});
            }
          })];
        }
      });
    }
  });
};

// src/ui/components/elements/Header/ActionsContainer.tsx
var _tmpl$33 = /* @__PURE__ */ web.template(`<div>`);
var ActionsContainer = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$33();
    web.insert(_el$, web.createComponent(MoreActionsDropdown, {}), null);
    web.insert(_el$, web.createComponent(Button, {
      appearanceKey: "preferences__button",
      variant: "icon",
      size: "icon",
      get onClick() {
        return props.showPreferences;
      },
      get children() {
        return web.createComponent(Settings, {});
      }
    }), null);
    web.effect(() => web.className(_el$, style("moreActionsContainer", "nt-flex nt-gap-2")));
    return _el$;
  })();
};

// src/ui/components/elements/Header/Header.tsx
var _tmpl$34 = /* @__PURE__ */ web.template(`<div>`);
var Header = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$34();
    web.insert(_el$, web.createComponent(StatusDropdown, {}), null);
    web.insert(_el$, web.createComponent(ActionsContainer, {
      showPreferences: () => props.updateScreen("preferences")
    }), null);
    web.effect(() => web.className(_el$, style("inboxHeader", cn("nt-flex nt-justify-between nt-items-center nt-w-full nt-py-5 nt-px-6"))));
    return _el$;
  })();
};
var _tmpl$35 = /* @__PURE__ */ web.template(`<div><button></button><div>`);
var PreferencesHeader = (props) => {
  const style = useStyle();
  const {
    t
  } = useLocalization();
  return (() => {
    var _el$ = _tmpl$35(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    web.addEventListener(_el$2, "click", props.backAction, true);
    web.insert(_el$2, web.createComponent(ArrowLeft, {}));
    web.insert(_el$3, () => t("preferences.title"));
    web.effect((_p$) => {
      var _v$ = style("preferencesHeader", "nt-flex nt-items-center nt-py-5 nt-px-6 nt-gap-2"), _v$2 = style("preferencesHeader__back__button", "nt-h-6 nt-w-6 nt-flex nt-justify-center nt-items-center nt-rounded-md nt-relative hover:nt-bg-foreground-alpha-50 focus:nt-bg-foreground-alpha-50 nt-text-foreground-alpha-600"), _v$3 = style("preferencesHeader__title", "nt-text-xl nt-font-semibold");
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && web.className(_el$3, _p$.a = _v$3);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0
    });
    return _el$;
  })();
};
web.delegateEvents(["click"]);
var _tmpl$36 = /* @__PURE__ */ web.template(`<div>`);
var Root = (props) => {
  const [_, rest] = solidJs.splitProps(props, ["class"]);
  const {
    id
  } = useAppearance();
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$36();
    web.setAttribute(_el$, "id", `novu-root-${id}`);
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return style("root"), cn("novu", id, "nt-text-foreground");
      }
    }, rest), false, false);
    return _el$;
  })();
};
var _tmpl$37 = /* @__PURE__ */ web.template(`<label><input type=checkbox class="nt-peer nt-sr-only"><div>`);
var Switch = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$37(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    _el$2.addEventListener("change", (e) => {
      props.onChange(e.target.checked);
    });
    web.effect((_p$) => {
      var _v$ = style("channelSwitch", `nt-relative
    nt-inline-flex nt-cursor-pointer nt-items-center`), _v$2 = style("channelSwitchThumb", `nt-peer nt-h-6 nt-w-11 nt-rounded-full nt-border nt-bg-slate-200
          after:nt-absolute after:nt-left-[2px] after:nt-top-0.5 after:nt-h-5
          after:nt-w-5 after:nt-rounded-full after:nt-border
          after:nt-border-gray-300
          after:nt-bg-white after:nt-transition-all after:nt-content-['']
          peer-checked:nt-bg-primary peer-checked:after:nt-translate-x-full
          peer-checked:after:nt-border-white peer-focus:nt-ring-green-300`);
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.className(_el$3, _p$.t = _v$2);
      return _p$;
    }, {
      e: void 0,
      t: void 0
    });
    web.effect(() => _el$2.checked = props.checked);
    return _el$;
  })();
};

// src/ui/components/elements/Preferences/ChannelRow.tsx
var _tmpl$38 = /* @__PURE__ */ web.template(`<div><div><div></div><span></span></div><div>`);
var ChannelRow = (props) => {
  const novu = useNovu();
  const style = useStyle();
  const updatePreference = (enabled) => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
    try {
      yield novu.preferences.update({
        workflowId: props.workflowId,
        channelPreferences: {
          [props.channel]: enabled
        }
      });
      props.onChange({
        channel: props.channel,
        enabled,
        workflowId: props.workflowId
      });
    } catch (error) {
      console.error(error);
    }
  });
  const onChange = (checked) => {
    updatePreference(checked);
  };
  return (() => {
    var _el$ = _tmpl$38(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling, _el$5 = _el$2.nextSibling;
    web.insert(_el$3, () => getIcon(props.channel));
    web.insert(_el$4, () => getLabel(props.channel));
    web.insert(_el$5, web.createComponent(Switch, {
      get checked() {
        return props.enabled;
      },
      onChange: (checked) => onChange(checked)
    }));
    web.effect((_p$) => {
      var _v$ = style("channelContainer", "nt-flex nt-justify-between nt-items-center nt-h-11"), _v$2 = style("channelLabelContainer", "nt-flex nt-items-center nt-gap-2"), _v$3 = style("channelLabel", "nt-text-base nt-font-semibold"), _v$4 = style("channelSwitchContainer", "nt-flex nt-items-center");
      _v$ !== _p$.e && web.className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && web.className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && web.className(_el$4, _p$.a = _v$3);
      _v$4 !== _p$.o && web.className(_el$5, _p$.o = _v$4);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0
    });
    return _el$;
  })();
};
var getIcon = (channel) => {
  switch (channel) {
    case "in_app" /* IN_APP */:
      return web.createComponent(InApp, {});
    case "email" /* EMAIL */:
      return web.createComponent(Email, {});
    case "push" /* PUSH */:
      return web.createComponent(Push, {});
    case "sms" /* SMS */:
      return web.createComponent(Sms, {});
    case "chat" /* CHAT */:
      return web.createComponent(Chat, {});
    default:
      return null;
  }
};
var getLabel = (channel) => {
  switch (channel) {
    case "in_app" /* IN_APP */:
      return "In-App";
    case "email" /* EMAIL */:
      return "Email";
    case "push" /* PUSH */:
      return "Push";
    case "sms" /* SMS */:
      return "SMS";
    case "chat" /* CHAT */:
      return "Chat";
    default:
      return "";
  }
};
var _tmpl$39 = /* @__PURE__ */ web.template(`<div>`);
var SkeletonText = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$39();
    web.effect(() => web.className(_el$, style(props.appearanceKey, cn("nt-w-full nt-h-3 nt-rounded nt-bg-foreground-alpha-100", props.class))));
    return _el$;
  })();
};
var SkeletonAvatar = (props) => {
  const style = useStyle();
  return (() => {
    var _el$2 = _tmpl$39();
    web.effect(() => web.className(_el$2, style(props.appearanceKey, cn("nt-size-8 nt-rounded-lg nt-bg-foreground-alpha-100", props.class))));
    return _el$2;
  })();
};

// src/ui/components/elements/Preferences/LoadingScreen.tsx
var _tmpl$40 = /* @__PURE__ */ web.template(`<div><div class="nt-flex nt-flex-col nt-self-stretch nt-gap-1 nt-flex-1"></div><div>`);
var LoadingScreen = () => {
  return web.createComponent(solidJs.For, {
    get each() {
      return Array.from({
        length: 8
      });
    },
    children: () => web.createComponent(LoadingSkeleton, {})
  });
};
var LoadingSkeleton = () => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$40(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling;
    web.insert(_el$2, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText",
      "class": "nt-w-1/3"
    }), null);
    web.insert(_el$2, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText",
      "class": "nt-w-1/3"
    }), null);
    web.insert(_el$3, web.createComponent(ArrowDropDown, {}));
    web.effect(() => web.className(_el$, style("preferencesLoadingContainer", "nt-p-4 nt-flex nt-gap-1 nt-items-center nt-self-stretch nt-animate-pulse")));
    return _el$;
  })();
};

// src/ui/components/elements/Preferences/Preferences.tsx
var _tmpl$41 = /* @__PURE__ */ web.template(`<div>`);
var _tmpl$211 = /* @__PURE__ */ web.template(`<div><div><div><div>`);
var Preferences = () => {
  const style = useStyle();
  const {
    t
  } = useLocalization();
  const {
    preferences,
    mutate
  } = usePreferences();
  const allPreferences = solidJs.createMemo(() => {
    var _a, _b;
    const globalPreference = (_a = preferences()) == null ? void 0 : _a.find((preference) => preference.level === "global" /* GLOBAL */);
    const workflowPreferences = (_b = preferences()) == null ? void 0 : _b.filter((preference) => preference.level === "template" /* TEMPLATE */);
    return {
      globalPreference,
      workflowPreferences
    };
  });
  const optimisticUpdate = ({
    channel,
    enabled,
    workflowId
  }) => {
    mutate((prev) => prev == null ? void 0 : prev.map((preference) => {
      var _a;
      if (((_a = preference.workflow) == null ? void 0 : _a.id) === workflowId || !workflowId && preference.level === "global" /* GLOBAL */) {
        preference.channels[channel] = enabled;
      }
      return preference;
    }));
  };
  return (() => {
    var _el$ = _tmpl$41();
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return preferences.loading;
      },
      get children() {
        return web.createComponent(LoadingScreen, {});
      }
    }), null);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return web.memo(() => !!!preferences.loading)() && preferences();
      },
      get children() {
        return [web.createComponent(PreferencesRow, {
          get label() {
            return t("preferences.global");
          },
          get channels() {
            var _a;
            return ((_a = allPreferences().globalPreference) == null ? void 0 : _a.channels) || {};
          },
          onChange: optimisticUpdate
        }), web.createComponent(solidJs.For, {
          get each() {
            return allPreferences().workflowPreferences;
          },
          children: (preference) => web.createComponent(PreferencesRow, {
            get label() {
              var _a;
              return (_a = preference.workflow) == null ? void 0 : _a.name;
            },
            get channels() {
              return preference.channels;
            },
            get workflowId() {
              var _a;
              return (_a = preference.workflow) == null ? void 0 : _a.id;
            },
            onChange: optimisticUpdate
          })
        })];
      }
    }), null);
    web.effect(() => web.className(_el$, style("preferencesContainer", "nt-p-2 nt-flex nt-flex-col nt-gap-1 nt-bg-background nt-overflow-y-auto")));
    return _el$;
  })();
};
var ChannelsLabel = (props) => {
  const style = useStyle();
  const definedKeys = () => Object.keys(props.channels || {}).filter((key) => props.channels[key] !== void 0).map((key) => getLabel(key)).join(", ");
  return (() => {
    var _el$2 = _tmpl$41();
    web.insert(_el$2, definedKeys);
    web.effect(() => web.className(_el$2, style("channelDescription", "nt-text-sm nt-text-foreground-alpha-600 nt-text-start")));
    return _el$2;
  })();
};
var PreferencesRow = (props) => {
  const [isOpen, setIsOpen] = solidJs.createSignal(false);
  const style = useStyle();
  const channels = solidJs.createMemo(() => Object.keys(props.channels || {}));
  return web.createComponent(solidJs.Show, {
    get when() {
      return channels().length > 0;
    },
    get children() {
      var _el$3 = _tmpl$211(), _el$4 = _el$3.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild;
      _el$4.$$click = () => setIsOpen((prev) => !prev);
      web.insert(_el$6, () => props.label);
      web.insert(_el$5, web.createComponent(ChannelsLabel, {
        get channels() {
          return props.channels;
        }
      }), null);
      web.insert(_el$4, web.createComponent(ArrowDropDown, {}), null);
      web.insert(_el$3, web.createComponent(solidJs.Show, {
        get when() {
          return isOpen();
        },
        get children() {
          var _el$7 = _tmpl$41();
          web.insert(_el$7, web.createComponent(solidJs.For, {
            get each() {
              return channels();
            },
            children: (channel) => web.createComponent(ChannelRow, {
              channel,
              get enabled() {
                return !!props.channels[channel];
              },
              get workflowId() {
                return props.workflowId;
              },
              get onChange() {
                return props.onChange;
              }
            })
          }));
          web.effect(() => web.className(_el$7, style("channelsContainer", "nt-flex nt-flex-col nt-gap-1 nt-self-stretch")));
          return _el$7;
        }
      }), null);
      web.effect((_p$) => {
        var _v$ = style("workflowContainer", "nt-p-4 nt-flex nt-flex-col nt-gap-1 nt-items-start nt-self-stretch"), _v$2 = style("workflowLabelContainer", "nt-flex nt-justify-between nt-flex-nowrap nt-self-stretch nt-cursor-pointer nt-items-center"), _v$3 = style("workflowLabel", "nt-text-base nt-font-semibold nt-text-start");
        _v$ !== _p$.e && web.className(_el$3, _p$.e = _v$);
        _v$2 !== _p$.t && web.className(_el$4, _p$.t = _v$2);
        _v$3 !== _p$.a && web.className(_el$6, _p$.a = _v$3);
        return _p$;
      }, {
        e: void 0,
        t: void 0,
        a: void 0
      });
      return _el$3;
    }
  });
};
web.delegateEvents(["click"]);
var TooltipContext = solidJs.createContext(void 0);
function TooltipRoot(props) {
  const [reference, setReference] = solidJs.createSignal(null);
  const [floating, setFloating] = solidJs.createSignal(null);
  const position = solidFloatingUi.useFloating(reference, floating, {
    placement: props.placement || "top",
    whileElementsMounted: dom.autoUpdate,
    middleware: [dom.offset(10), dom.flip({
      fallbackPlacements: props.fallbackPlacements || ["bottom"]
    }), dom.shift()]
  });
  const [isOpen, setIsOpen] = useUncontrolledState({
    value: props.open,
    fallbackValue: false
  });
  return web.createComponent(TooltipContext.Provider, {
    value: {
      reference,
      setReference,
      floating,
      setFloating,
      open: isOpen,
      setOpen: setIsOpen,
      floatingStyles: () => {
        var _a, _b;
        return {
          position: position.strategy,
          top: `${(_a = position.y) != null ? _a : 0}px`,
          left: `${(_b = position.x) != null ? _b : 0}px`
        };
      }
    },
    get children() {
      return props.children;
    }
  });
}
function useTooltip() {
  const context = solidJs.useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within Tooltip.Root component");
  }
  return context;
}

// src/ui/components/primitives/Tooltip/TooltipContent.tsx
var _tmpl$42 = /* @__PURE__ */ web.template(`<div>`);
var tooltipContentVariants = () => "nt-bg-foreground nt-p-4 nt-shadow-[0px_5px_20px_0px_rgba(0,0,0,0.20)] nt-z-10 nt-rounded-lg nt-text-background nt-text-sm";
var TooltipContentBody = (props) => {
  const {
    open,
    setFloating,
    floating,
    floatingStyles
  } = useTooltip();
  const {
    setActive,
    removeActive
  } = useFocusManager();
  const [local, rest] = solidJs.splitProps(props, ["class", "appearanceKey", "style"]);
  const style = useStyle();
  solidJs.onMount(() => {
    const floatingEl = floating();
    setActive(floatingEl);
    solidJs.onCleanup(() => {
      removeActive(floatingEl);
    });
  });
  return (() => {
    var _el$ = _tmpl$42();
    web.use(setFloating, _el$);
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return web.memo(() => !!local.class)() ? local.class : style(local.appearanceKey || "tooltipContent", tooltipContentVariants());
      },
      get style() {
        return floatingStyles();
      },
      get ["data-open"]() {
        return open();
      }
    }, rest), false, false);
    return _el$;
  })();
};
var TooltipContent = (props) => {
  const {
    open
  } = useTooltip();
  return web.createComponent(solidJs.Show, {
    get when() {
      return open();
    },
    get children() {
      return web.createComponent(web.Portal, {
        get children() {
          return web.createComponent(Root, {
            get children() {
              return web.createComponent(TooltipContentBody, props);
            }
          });
        }
      });
    }
  });
};
var _tmpl$43 = /* @__PURE__ */ web.template(`<button>`);
var TooltipTrigger = (props) => {
  const {
    setReference,
    setOpen
  } = useTooltip();
  const style = useStyle();
  const [local, rest] = solidJs.splitProps(props, ["appearanceKey", "asChild", "onClick"]);
  if (local.asChild) {
    return web.createComponent(web.Dynamic, web.mergeProps({
      get component() {
        return local.asChild;
      },
      ref: setReference,
      onMouseEnter: () => {
        setOpen(true);
      },
      onMouseLeave: () => {
        setOpen(false);
      }
    }, rest));
  }
  return (() => {
    var _el$ = _tmpl$43();
    _el$.addEventListener("mouseleave", () => {
      setOpen(false);
    });
    _el$.addEventListener("mouseenter", () => {
      setOpen(true);
    });
    web.use(setReference, _el$);
    web.spread(_el$, web.mergeProps({
      get ["class"]() {
        return style(local.appearanceKey || "tooltipTrigger");
      }
    }, rest), false, true);
    web.insert(_el$, () => props.children);
    return _el$;
  })();
};

// src/ui/components/primitives/Tooltip/index.ts
var Tooltip = {
  Root: TooltipRoot,
  /**
   * Tooltip.Trigger renders a `button` and has no default styling.
   */
  Trigger: TooltipTrigger,
  /**
   * Tooltip.Content renders a `div` and has popover specific styling.
   */
  Content: TooltipContent
};

// src/ui/components/Notification/DefaultNotification.tsx
var _tmpl$44 = /* @__PURE__ */ web.template(`<span>`);
var _tmpl$212 = /* @__PURE__ */ web.template(`<img>`);
var _tmpl$310 = /* @__PURE__ */ web.template(`<p>`);
var _tmpl$45 = /* @__PURE__ */ web.template(`<a><div><div class="nt-relative nt-shrink-0 nt-float-right"><p></p><div></div></div><p></p><div>`);
var DefaultNotification = (props) => {
  const style = useStyle();
  const {
    t,
    locale
  } = useLocalization();
  const {
    status
  } = useInboxContext();
  const handleNotificationClick = (e) => {
    var _a, _b, _c;
    e.stopPropagation();
    e.preventDefault();
    if (!props.notification.isRead) {
      props.notification.read();
    }
    (_a = props.onNotificationClick) == null ? void 0 : _a.call(props, {
      notification: props.notification
    });
    if ((_b = props.notification.redirect) == null ? void 0 : _b.url) {
      window.open((_c = props.notification.redirect) == null ? void 0 : _c.url, "_blank", "noreferrer noopener");
    }
  };
  const handleActionButtonClick = (action, e) => {
    var _a, _b;
    e.stopPropagation();
    if (action === "primary" /* PRIMARY */) {
      props.notification.completePrimary();
      (_a = props.onPrimaryActionClick) == null ? void 0 : _a.call(props, {
        notification: props.notification
      });
    } else {
      props.notification.completeSecondary();
      (_b = props.onSecondaryActionClick) == null ? void 0 : _b.call(props, {
        notification: props.notification
      });
    }
  };
  return (() => {
    var _el$ = _tmpl$45(), _el$4 = _el$.firstChild, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$9 = _el$5.nextSibling, _el$10 = _el$9.nextSibling;
    _el$.$$click = handleNotificationClick;
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return !props.notification.isRead;
      },
      get children() {
        var _el$2 = _tmpl$44();
        web.effect(() => web.className(_el$2, style("notificationDot", "nt-absolute -nt-translate-x-[150%] nt-translate-y-1/2 nt-size-2.5 nt-bg-primary nt-rounded-full nt-border")));
        return _el$2;
      }
    }), _el$4);
    web.insert(_el$, web.createComponent(solidJs.Show, {
      get when() {
        return props.notification.avatar;
      },
      get children() {
        var _el$3 = _tmpl$212();
        web.effect((_p$) => {
          var _v$ = style("notificationImage", "nt-size-8 nt-rounded-lg"), _v$2 = props.notification.avatar;
          _v$ !== _p$.e && web.className(_el$3, _p$.e = _v$);
          _v$2 !== _p$.t && web.setAttribute(_el$3, "src", _p$.t = _v$2);
          return _p$;
        }, {
          e: void 0,
          t: void 0
        });
        return _el$3;
      }
    }), _el$4);
    web.insert(_el$6, () => formatToRelativeTime({
      fromDate: new Date(props.notification.createdAt),
      locale: locale()
    }));
    web.insert(_el$7, web.createComponent(solidJs.Show, {
      get when() {
        return status() !== "archived" /* ARCHIVED */;
      },
      get children() {
        return web.createComponent(solidJs.Show, {
          get when() {
            return props.notification.isRead;
          },
          get fallback() {
            return web.createComponent(Tooltip.Root, {
              get children() {
                return [web.createComponent(Tooltip.Trigger, {
                  asChild: (childProps) => web.createComponent(Button, web.mergeProps({
                    appearanceKey: "notificationRead__button",
                    size: "icon",
                    variant: "icon"
                  }, childProps, {
                    onClick: (e) => {
                      e.stopPropagation();
                      props.notification.read();
                    },
                    "class": "hover:nt-bg-neutral-200",
                    get children() {
                      return web.createComponent(ReadAll, {});
                    }
                  }))
                }), web.createComponent(Tooltip.Content, {
                  get children() {
                    return t("notification.actions.read.toolTip");
                  }
                })];
              }
            });
          },
          get children() {
            return web.createComponent(Tooltip.Root, {
              get children() {
                return [web.createComponent(Tooltip.Trigger, {
                  asChild: (childProps) => web.createComponent(Button, web.mergeProps({
                    appearanceKey: "notificationUnread__button",
                    size: "icon",
                    variant: "icon"
                  }, childProps, {
                    onClick: (e) => {
                      e.stopPropagation();
                      props.notification.unread();
                    },
                    "class": "hover:nt-bg-neutral-200",
                    get children() {
                      return web.createComponent(Unread, {});
                    }
                  }))
                }), web.createComponent(Tooltip.Content, {
                  get children() {
                    return t("notification.actions.unread.toolTip");
                  }
                })];
              }
            });
          }
        });
      }
    }), null);
    web.insert(_el$7, web.createComponent(solidJs.Show, {
      get when() {
        return props.notification.isArchived;
      },
      get fallback() {
        return web.createComponent(Tooltip.Root, {
          get children() {
            return [web.createComponent(Tooltip.Trigger, {
              asChild: (childProps) => web.createComponent(Button, web.mergeProps({
                appearanceKey: "notificationArchive__button",
                size: "icon",
                variant: "icon"
              }, childProps, {
                onClick: (e) => {
                  e.stopPropagation();
                  props.notification.archive();
                },
                "class": "hover:nt-bg-neutral-200",
                get children() {
                  return web.createComponent(Archive, {});
                }
              }))
            }), web.createComponent(Tooltip.Content, {
              get children() {
                return t("notification.actions.archive.toolTip");
              }
            })];
          }
        });
      },
      get children() {
        return web.createComponent(Tooltip.Root, {
          get children() {
            return [web.createComponent(Tooltip.Trigger, {
              asChild: (childProps) => web.createComponent(Button, web.mergeProps({
                appearanceKey: "notificationUnarchive__button",
                size: "icon",
                variant: "icon"
              }, childProps, {
                onClick: (e) => {
                  e.stopPropagation();
                  props.notification.unarchive();
                },
                "class": "hover:nt-bg-neutral-200",
                get children() {
                  return web.createComponent(Unarchive, {});
                }
              }))
            }), web.createComponent(Tooltip.Content, {
              get children() {
                return t("notification.actions.unarchive.toolTip");
              }
            })];
          }
        });
      }
    }), null);
    web.insert(_el$4, web.createComponent(solidJs.Show, {
      get when() {
        return props.notification.subject;
      },
      get children() {
        var _el$8 = _tmpl$310();
        web.insert(_el$8, () => props.notification.subject);
        web.effect(() => web.className(_el$8, style("notificationSubject", "nt-font-semibold")));
        return _el$8;
      }
    }), _el$9);
    web.insert(_el$9, () => props.notification.body);
    web.insert(_el$10, web.createComponent(solidJs.Show, {
      get when() {
        return props.notification.primaryAction;
      },
      keyed: true,
      children: (primaryAction) => web.createComponent(Button, {
        appearanceKey: "notificationPrimaryAction__button",
        variant: "default",
        onClick: (e) => handleActionButtonClick("primary" /* PRIMARY */, e),
        get children() {
          return primaryAction.label;
        }
      })
    }), null);
    web.insert(_el$10, web.createComponent(solidJs.Show, {
      get when() {
        return props.notification.secondaryAction;
      },
      keyed: true,
      children: (secondaryAction) => web.createComponent(Button, {
        appearanceKey: "notificationSecondaryAction__button",
        variant: "secondary",
        onClick: (e) => handleActionButtonClick("secondary" /* SECONDARY */, e),
        get children() {
          return secondaryAction.label;
        }
      })
    }), null);
    web.effect((_p$) => {
      var _a;
      var _v$3 = style("notification", clsx__default.default("nt-w-full nt-text-sm hover:nt-bg-neutral-100 nt-group nt-relative nt-flex nt-px-6 nt-py-4 nt-gap-2", {
        "nt-cursor-pointer": !props.notification.isRead || !!((_a = props.notification.redirect) == null ? void 0 : _a.url)
      })), _v$4 = style("notificationBody", "nt-overflow-hidden nt-w-full"), _v$5 = style("notificationDate", `nt-transition nt-duration-100 nt-ease-out nt-text-foreground-alpha-400 nt-shrink-0 
              nt-float-right nt-text-right group-hover:nt-opacity-0`), _v$6 = style("notificationDefaultActions", `nt-transition nt-duration-100 nt-ease-out nt-gap-2 nt-flex nt-shrink-0 
              nt-opacity-0 group-hover:nt-opacity-100 nt-justify-center nt-items-center 
              nt-absolute nt-top-0 nt-right-0  nt-bg-neutral-100 nt-p-0.5 nt-rounded nt-z-50`), _v$7 = style("notificationBody"), _v$8 = style("notificationCustomActions", "nt-flex nt-gap-4 nt-mt-4");
      _v$3 !== _p$.e && web.className(_el$, _p$.e = _v$3);
      _v$4 !== _p$.t && web.className(_el$4, _p$.t = _v$4);
      _v$5 !== _p$.a && web.className(_el$6, _p$.a = _v$5);
      _v$6 !== _p$.o && web.className(_el$7, _p$.o = _v$6);
      _v$7 !== _p$.i && web.className(_el$9, _p$.i = _v$7);
      _v$8 !== _p$.n && web.className(_el$10, _p$.n = _v$8);
      return _p$;
    }, {
      e: void 0,
      t: void 0,
      a: void 0,
      o: void 0,
      i: void 0,
      n: void 0
    });
    return _el$;
  })();
};
web.delegateEvents(["click"]);

// src/ui/components/Notification/Notification.tsx
var Notification = (props) => {
  return web.createComponent(solidJs.Show, {
    get when() {
      return props.mountNotification;
    },
    get fallback() {
      return web.createComponent(DefaultNotification, {
        get notification() {
          return props.notification;
        },
        get onNotificationClick() {
          return props.onNotificationClick;
        },
        get onPrimaryActionClick() {
          return props.onPrimaryActionClick;
        },
        get onSecondaryActionClick() {
          return props.onSecondaryActionClick;
        }
      });
    },
    get children() {
      return web.createComponent(ExternalElementMounter, {
        mount: (el) => props.mountNotification(el, {
          notification: props.notification
        })
      });
    }
  });
};
var _tmpl$46 = /* @__PURE__ */ web.template(`<svg xmlns=http://www.w3.org/2000/svg width=48 height=48 viewBox="0 0 48 48"fill=none><path fill=currentColor d="M35.2 21.62L32.38 18.8L39.5 11.7L42.32 14.52C42.1 14.58 35.2 21.62 35.2 21.62ZM26 6H22V16H26V6ZM12.8 21.62L15.62 18.8L8.52 11.68L5.68 14.52C5.9 14.58 12.8 21.62 12.8 21.62ZM40 28H33.16C31.62 31.52 28.08 34 24 34C19.92 34 16.38 31.52 14.84 28H8V38H40V28ZM40 24C42.2 24 44 25.8 44 28V38C44 40.2 42.2 42 40 42H8C5.8 42 4 40.2 4 38V28C4 25.8 5.8 24 8 24H18C18 27.32 20.68 30 24 30C27.32 30 30 27.32 30 24H40Z">`);
function EmptyIcon() {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$46();
    web.effect(() => web.setAttribute(_el$, "class", style("notificationListEmptyNoticeIcon")));
    return _el$;
  })();
}
var _tmpl$47 = /* @__PURE__ */ web.template(`<div>`);
var NewMessagesCta = (props) => {
  const style = useStyle();
  const {
    t
  } = useLocalization();
  const [shouldRender, setRender] = solidJs.createSignal(!!props.count);
  const onAnimationEnd = () => props.count < 1 && setRender(false);
  solidJs.createEffect(() => props.count > 0 && setRender(true));
  return web.createComponent(solidJs.Show, {
    get when() {
      return shouldRender();
    },
    get children() {
      var _el$ = _tmpl$47();
      web.insert(_el$, web.createComponent(Button, {
        appearanceKey: "notificationListNewNotificationsNotice__button",
        get ["class"]() {
          return `nt-sticky nt-self-center nt-rounded-full nt-mt-1 hover:nt-bg-primary-600 ${props.count < 1 ? "nt-animate-fade-up nt-opacity-0" : "nt-animate-fade-down"}`;
        },
        get onClick() {
          return props.onClick;
        },
        onAnimationEnd,
        get children() {
          return t("notifications.newNotifications", {
            notificationCount: props.count
          });
        }
      }));
      web.effect(() => web.className(_el$, style("notificationListNewNotificationsNoticeContainer", "nt-relative nt-h-0 nt-w-full nt-flex nt-justify-center nt-top-4 nt-z-10")));
      return _el$;
    }
  });
};
var _tmpl$48 = /* @__PURE__ */ web.template(`<div class="nt-flex nt-gap-2 nt-p-4 nt-w-full"><div class="nt-flex nt-flex-col nt-self-stretch nt-gap-3 nt-flex-1"><div class="nt-flex nt-gap-1"></div><div class="nt-flex nt-gap-1">`);
var NotificationSkeleton = () => {
  return (() => {
    var _el$ = _tmpl$48(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
    web.insert(_el$, web.createComponent(SkeletonAvatar, {
      appearanceKey: "skeletonAvatar"
    }), _el$2);
    web.insert(_el$2, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText",
      "class": "nt-w-1/4"
    }), _el$3);
    web.insert(_el$3, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText"
    }), null);
    web.insert(_el$3, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText"
    }), null);
    web.insert(_el$4, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText",
      "class": "nt-w-2/3"
    }), null);
    web.insert(_el$4, web.createComponent(SkeletonText, {
      appearanceKey: "skeletonText",
      "class": "nt-w-1/3"
    }), null);
    return _el$;
  })();
};
var NotificationListSkeleton = (props) => {
  return web.createComponent(NotificationListContainer, {
    get children() {
      return web.createComponent(solidJs.For, {
        get each() {
          return Array.from({
            length: props.count
          });
        },
        children: () => web.createComponent(NotificationSkeleton, {})
      });
    }
  });
};

// src/ui/components/Notification/NotificationList.tsx
var _tmpl$49 = /* @__PURE__ */ web.template(`<div>`);
var _tmpl$213 = /* @__PURE__ */ web.template(`<div><p>`);
var NotificationListContainer = (props) => {
  const style = useStyle();
  return (() => {
    var _el$ = _tmpl$49();
    var _ref$ = props.ref;
    typeof _ref$ === "function" ? web.use(_ref$, _el$) : props.ref = _el$;
    web.insert(_el$, () => props.children);
    web.effect(() => web.className(_el$, style("notificationList", "nt-flex nt-flex-col nt-w-full nt-h-full nt-overflow-auto")));
    return _el$;
  })();
};
var EmptyNotificationList = () => {
  const style = useStyle();
  const {
    t
  } = useLocalization();
  return web.createComponent(NotificationListContainer, {
    get children() {
      var _el$2 = _tmpl$213(), _el$3 = _el$2.firstChild;
      web.insert(_el$2, web.createComponent(EmptyIcon, {}), _el$3);
      web.insert(_el$3, () => t("notifications.emptyNotice"));
      web.effect((_p$) => {
        var _v$ = style("notificationListEmptyNoticeContainer", "nt-absolute nt-inset-0 nt-flex nt-flex-col nt-items-center nt-m-auto nt-h-fit nt-w-full nt-text-foreground-alpha-100"), _v$2 = style("notificationListEmptyNotice");
        _v$ !== _p$.e && web.className(_el$2, _p$.e = _v$);
        _v$2 !== _p$.t && web.className(_el$3, _p$.t = _v$2);
        return _p$;
      }, {
        e: void 0,
        t: void 0
      });
      return _el$2;
    }
  });
};
var NotificationList = (props) => {
  var _a, _b;
  const options = solidJs.createMemo(() => chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, props.filter), {
    limit: props.limit
  }));
  const {
    data,
    setEl,
    end,
    refetch,
    initialLoading
  } = useNotificationsInfiniteScroll({
    options
  });
  const {
    count,
    reset: resetNewMessagesCount
  } = useNewMessagesCount({
    filter: {
      tags: (_b = (_a = props.filter) == null ? void 0 : _a.tags) != null ? _b : []
    }
  });
  const handleOnNewMessagesClick = (e) => chunk2C4L4ZUQ_cjs.__async(void 0, null, function* () {
    e.stopPropagation();
    resetNewMessagesCount();
    refetch({
      filter: props.filter
    });
  });
  return [web.createComponent(NewMessagesCta, {
    get count() {
      return count();
    },
    onClick: handleOnNewMessagesClick
  }), web.createComponent(solidJs.Show, {
    get when() {
      return !initialLoading();
    },
    get fallback() {
      return web.createComponent(NotificationListSkeleton, {
        count: 8
      });
    },
    get children() {
      return web.createComponent(solidJs.Show, {
        get when() {
          return data().length > 0;
        },
        get fallback() {
          return web.createComponent(EmptyNotificationList, {});
        },
        get children() {
          return web.createComponent(NotificationListContainer, {
            get children() {
              return [web.createComponent(solidJs.For, {
                get each() {
                  return data();
                },
                children: (notification) => web.createComponent(Notification, {
                  notification,
                  get mountNotification() {
                    return props.mountNotification;
                  },
                  get onNotificationClick() {
                    return props.onNotificationClick;
                  },
                  get onPrimaryActionClick() {
                    return props.onPrimaryActionClick;
                  },
                  get onSecondaryActionClick() {
                    return props.onSecondaryActionClick;
                  }
                })
              }), web.createComponent(solidJs.Show, {
                get when() {
                  return !end();
                },
                get children() {
                  var _el$4 = _tmpl$49();
                  web.use(setEl, _el$4);
                  web.insert(_el$4, web.createComponent(solidJs.For, {
                    get each() {
                      return Array.from({
                        length: 3
                      });
                    },
                    children: () => web.createComponent(NotificationSkeleton, {})
                  }));
                  return _el$4;
                }
              })];
            }
          });
        }
      });
    }
  })];
};
var _tmpl$50 = /* @__PURE__ */ web.template(`<span>`);
var getDisplayCount = (count) => count >= 100 ? "99+" : count;
var InboxTabUnreadNotificationsCount = (props) => {
  const style = useStyle();
  const displayCount = solidJs.createMemo(() => getDisplayCount(props.count));
  return (() => {
    var _el$ = _tmpl$50();
    web.insert(_el$, displayCount);
    web.effect(() => web.className(_el$, style("notificationsTabsTriggerCount", "nt-rounded-full nt-bg-counter nt-px-[6px] nt-text-counter-foreground nt-text-sm")));
    return _el$;
  })();
};
var InboxTab = (props) => {
  const {
    status
  } = useInboxContext();
  const style = useStyle();
  const unreadCount = useUnreadCount({
    filter: {
      tags: props.value
    }
  });
  return web.createComponent(Tabs.Trigger, {
    get value() {
      return props.label;
    },
    get ["class"]() {
      return style("notificationsTabs__tabsTrigger", cn(tabsTriggerVariants(), "nt-flex nt-gap-2", props.class));
    },
    get children() {
      return [(() => {
        var _el$2 = _tmpl$50();
        web.insert(_el$2, () => props.label);
        web.effect(() => web.className(_el$2, style("notificationsTabsTriggerLabel", "nt-text-sm nt-font-medium")));
        return _el$2;
      })(), web.createComponent(solidJs.Show, {
        get when() {
          return web.memo(() => status() !== "archived" /* ARCHIVED */)() && unreadCount();
        },
        get children() {
          return web.createComponent(InboxTabUnreadNotificationsCount, {
            get count() {
              return unreadCount();
            }
          });
        }
      })];
    }
  });
};
var InboxDropdownTab = (props) => {
  const {
    status
  } = useInboxContext();
  const style = useStyle();
  const unreadCount = useUnreadCount({
    filter: {
      tags: props.value
    }
  });
  return web.createComponent(Dropdown.Item, {
    get ["class"]() {
      return style("moreTabs__dropdownItem", cn(dropdownItemVariants(), "nt-flex nt-justify-between nt-gap-2"));
    },
    get children() {
      return [(() => {
        var _el$3 = _tmpl$50();
        web.insert(_el$3, () => props.label);
        web.effect(() => web.className(_el$3, style("moreTabs__dropdownItemLabel", "nt-mr-auto")));
        return _el$3;
      })(), web.memo(() => props.rightIcon), web.createComponent(solidJs.Show, {
        get when() {
          return web.memo(() => status() !== "archived" /* ARCHIVED */)() && unreadCount();
        },
        get children() {
          return web.createComponent(InboxTabUnreadNotificationsCount, {
            get count() {
              return unreadCount();
            }
          });
        }
      })];
    }
  });
};
var useTabsDropdown = ({ tabs }) => {
  const [tabsList, setTabsList] = solidJs.createSignal();
  const [visibleTabs, setVisibleTabs] = solidJs.createSignal([]);
  const [dropdownTabs, setDropdownTabs] = solidJs.createSignal([]);
  solidJs.onMount(() => {
    const tabsListEl = tabsList();
    if (!tabsListEl) return;
    const tabsElements = [...tabsListEl.querySelectorAll('[role="tab"]')];
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleTabIds = entries.filter((entry) => entry.isIntersecting && entry.intersectionRatio === 1).map((entry) => entry.target.id);
        if (tabsElements.length === visibleTabIds.length) {
          setVisibleTabs(tabs.filter((tab) => visibleTabIds.includes(tab.label)));
          observer.disconnect();
          return;
        }
        visibleTabIds = visibleTabIds.slice(0, -1);
        setVisibleTabs(tabs.filter((tab) => visibleTabIds.includes(tab.label)));
        setDropdownTabs(tabs.filter((tab) => !visibleTabIds.includes(tab.label)));
        observer.disconnect();
      },
      { root: tabsListEl }
    );
    for (const tabElement of tabsElements) {
      observer.observe(tabElement);
    }
  });
  return { dropdownTabs, setTabsList, visibleTabs };
};

// src/ui/components/InboxTabs/InboxTabs.tsx
var tabsDropdownTriggerVariants = () => `nt-relative after:nt-absolute after:nt-content-[''] after:nt-bottom-0 after:nt-left-0 after:nt-w-full after:nt-h-[2px] after:nt-border-b-2 nt-pb-[0.625rem]`;
var InboxTabs = (props) => {
  const style = useStyle();
  const {
    activeTab,
    status,
    setActiveTab,
    filter
  } = useInboxContext();
  const {
    dropdownTabs,
    setTabsList,
    visibleTabs
  } = useTabsDropdown({
    tabs: props.tabs
  });
  const dropdownTabsUnreadCounts = useUnreadCounts({
    filters: dropdownTabs().map((tab) => ({
      tags: tab.value
    }))
  });
  const options = solidJs.createMemo(() => dropdownTabs().map((tab) => chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, tab), {
    rightIcon: tab.label === activeTab() ? web.createComponent(Check, {
      get ["class"]() {
        return style("moreTabs__dropdownItemRightIcon");
      }
    }) : void 0
  })));
  const dropdownTabsUnreadSum = solidJs.createMemo(() => dropdownTabsUnreadCounts().reduce((accumulator, currentValue) => accumulator + currentValue, 0));
  const isTabsDropdownActive = solidJs.createMemo(() => dropdownTabs().map((tab) => tab.label).includes(activeTab()));
  return web.createComponent(Tabs.Root, {
    get ["class"]() {
      return style("notificationsTabs__tabsRoot", cn(tabsRootVariants(), "nt-flex-1 nt-overflow-hidden"));
    },
    get value() {
      return activeTab();
    },
    onChange: setActiveTab,
    get children() {
      return [web.createComponent(solidJs.Show, {
        get when() {
          return visibleTabs().length > 0;
        },
        get fallback() {
          return web.createComponent(Tabs.List, {
            ref: setTabsList,
            appearanceKey: "notificationsTabs__tabsList",
            get children() {
              return props.tabs.map((tab) => web.createComponent(InboxTab, web.mergeProps(tab, {
                "class": "nt-invisible"
              })));
            }
          });
        },
        get children() {
          return web.createComponent(Tabs.List, {
            appearanceKey: "notificationsTabs__tabsList",
            get children() {
              return [web.memo(() => visibleTabs().map((tab) => web.createComponent(InboxTab, tab))), web.createComponent(solidJs.Show, {
                get when() {
                  return dropdownTabs().length > 0;
                },
                get children() {
                  return web.createComponent(Dropdown.Root, {
                    fallbackPlacements: ["bottom", "top"],
                    placement: "bottom-start",
                    get children() {
                      return [web.createComponent(Dropdown.Trigger, {
                        appearanceKey: "moreTabs__dropdownTrigger",
                        asChild: (triggerProps) => web.createComponent(Button, web.mergeProps({
                          variant: "unstyled",
                          size: "none",
                          appearanceKey: "moreTabs__button"
                        }, triggerProps, {
                          get ["class"]() {
                            return cn(tabsDropdownTriggerVariants(), isTabsDropdownActive() ? "after:nt-border-b-primary" : "after:nt-border-b-transparent nt-text-foreground-alpha-600");
                          },
                          get children() {
                            return [web.createComponent(DotsMenu, {
                              appearanceKey: "moreTabs__dots"
                            }), web.createComponent(solidJs.Show, {
                              get when() {
                                return web.memo(() => status() !== "archived" /* ARCHIVED */)() && dropdownTabsUnreadSum();
                              },
                              get children() {
                                return web.createComponent(InboxTabUnreadNotificationsCount, {
                                  get count() {
                                    return dropdownTabsUnreadSum();
                                  }
                                });
                              }
                            })];
                          }
                        }))
                      }), web.createComponent(Dropdown.Content, {
                        appearanceKey: "moreTabs__dropdownContent",
                        get children() {
                          return web.createComponent(solidJs.For, {
                            get each() {
                              return options();
                            },
                            children: (option) => web.createComponent(InboxDropdownTab, web.mergeProps({
                              onClick: () => setActiveTab(option.label)
                            }, option))
                          });
                        }
                      })];
                    }
                  });
                }
              })];
            }
          });
        }
      }), web.memo(() => props.tabs.map((tab) => web.createComponent(Tabs.Content, {
        get value() {
          return tab.label;
        },
        get ["class"]() {
          return style("notificationsTabs__tabsContent", cn(activeTab() === tab.label ? "nt-block" : "nt-hidden", "nt-flex-1 nt-overflow-hidden"));
        },
        get children() {
          return web.createComponent(NotificationList, {
            get filter() {
              return chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, filter()), {
                tags: tab.value
              });
            }
          });
        }
      })))];
    }
  });
};

// src/ui/components/Inbox.tsx
var Screen = /* @__PURE__ */ function(Screen2) {
  Screen2["Inbox"] = "inbox";
  Screen2["Preferences"] = "preferences";
  return Screen2;
}(Screen || {});
var InboxContent = (props) => {
  const [currentScreen, setCurrentScreen] = solidJs.createSignal(Screen.Inbox);
  const {
    tabs,
    filter
  } = useInboxContext();
  return [web.createComponent(solidJs.Switch, {
    get children() {
      return [web.createComponent(solidJs.Match, {
        get when() {
          return currentScreen() === Screen.Inbox;
        },
        get children() {
          return [web.createComponent(Header, {
            updateScreen: setCurrentScreen
          }), web.createComponent(solidJs.Show, {
            keyed: true,
            get when() {
              return web.memo(() => !!tabs())() && tabs().length > 0;
            },
            get fallback() {
              return web.createComponent(NotificationList, {
                get mountNotification() {
                  return props.mountNotification;
                },
                get onNotificationClick() {
                  return props.onNotificationClick;
                },
                get onPrimaryActionClick() {
                  return props.onPrimaryActionClick;
                },
                get onSecondaryActionClick() {
                  return props.onSecondaryActionClick;
                },
                get filter() {
                  return filter();
                }
              });
            },
            get children() {
              return web.createComponent(InboxTabs, {
                get tabs() {
                  return tabs();
                }
              });
            }
          })];
        }
      }), web.createComponent(solidJs.Match, {
        get when() {
          return currentScreen() === Screen.Preferences;
        },
        get children() {
          return [web.createComponent(PreferencesHeader, {
            backAction: () => setCurrentScreen(Screen.Inbox)
          }), web.createComponent(Preferences, {})];
        }
      })];
    }
  }), web.createComponent(Footer, {})];
};
var Inbox2 = (props) => {
  const style = useStyle();
  return web.createComponent(Popover.Root, {
    get open() {
      return props == null ? void 0 : props.open;
    },
    get children() {
      return [web.createComponent(Popover.Trigger, {
        asChild: (triggerProps) => web.createComponent(Button, web.mergeProps({
          get ["class"]() {
            return style("inbox__popoverTrigger");
          },
          variant: "ghost",
          size: "icon"
        }, triggerProps, {
          get children() {
            return web.createComponent(Bell, {
              get mountBell() {
                return props.mountBell;
              }
            });
          }
        }))
      }), web.createComponent(Popover.Content, {
        appearanceKey: "inbox__popoverContent",
        get children() {
          return web.createComponent(InboxContent, {
            get mountNotification() {
              return props.mountNotification;
            },
            get onNotificationClick() {
              return props.onNotificationClick;
            },
            get onPrimaryActionClick() {
              return props.onPrimaryActionClick;
            },
            get onSecondaryActionClick() {
              return props.onSecondaryActionClick;
            }
          });
        }
      })];
    }
  });
};

// src/ui/components/Renderer.tsx
var novuComponents = {
  Inbox: Inbox2,
  Bell,
  Preferences,
  Notifications: NotificationList
};
var Renderer = (props) => {
  solidJs.onMount(() => {
    const id = "novu-default-css";
    const el = document.getElementById(id);
    if (el) {
      return;
    }
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = props.cssHref;
    document.head.insertBefore(link, document.head.firstChild);
    solidJs.onCleanup(() => {
      const element = document.getElementById(id);
      element == null ? void 0 : element.remove();
    });
  });
  return web.createComponent(NovuProvider, {
    get options() {
      return props.options;
    },
    get children() {
      return web.createComponent(LocalizationProvider, {
        get localization() {
          return props.localization;
        },
        get children() {
          return web.createComponent(AppearanceProvider, {
            get id() {
              return props.novuUI.id;
            },
            get appearance() {
              return props.appearance;
            },
            get children() {
              return web.createComponent(FocusManagerProvider, {
                get children() {
                  return web.createComponent(InboxProvider, {
                    get tabs() {
                      return props.tabs;
                    },
                    get children() {
                      return web.createComponent(CountProvider, {
                        get children() {
                          return web.createComponent(solidJs.For, {
                            get each() {
                              return [...props.nodes];
                            },
                            children: ([node, component]) => {
                              const Component = novuComponents[component.name];
                              return web.createComponent(web.Portal, {
                                mount: node,
                                get children() {
                                  return web.createComponent(Root, {
                                    get children() {
                                      return web.createComponent(Component, web.mergeProps(() => component.props));
                                    }
                                  });
                                }
                              });
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
var version = "2.0.0-alpha.2";
var cssHref = `https://cdn.jsdelivr.net/npm/@novu/js@${version}/dist/index.css`;
var _dispose, _rootElement, _mountedElements, _setMountedElements, _appearance, _setAppearance, _localization, _setLocalization, _options, _setOptions, _tabs, _setTabs, _NovuUI_instances, mountComponentRenderer_fn, updateComponentProps_fn;
var NovuUI = class {
  constructor(props) {
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _NovuUI_instances);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _dispose, null);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _rootElement);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _mountedElements);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _setMountedElements);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _appearance);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _setAppearance);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _localization);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _setLocalization);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _options);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _setOptions);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _tabs);
    chunk2C4L4ZUQ_cjs.__privateAdd(this, _setTabs);
    var _a;
    this.id = generateRandomString(16);
    const [appearance, setAppearance] = solidJs.createSignal(props.appearance);
    const [localization, setLocalization] = solidJs.createSignal(props.localization);
    const [options, setOptions] = solidJs.createSignal(props.options);
    const [mountedElements, setMountedElements] = solidJs.createSignal(/* @__PURE__ */ new Map());
    const [tabs, setTabs] = solidJs.createSignal((_a = props.tabs) != null ? _a : []);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _mountedElements, mountedElements);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _setMountedElements, setMountedElements);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _appearance, appearance);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _setAppearance, setAppearance);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _localization, localization);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _setLocalization, setLocalization);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _options, options);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _setOptions, setOptions);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _tabs, tabs);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _setTabs, setTabs);
    chunk2C4L4ZUQ_cjs.__privateMethod(this, _NovuUI_instances, mountComponentRenderer_fn).call(this);
  }
  mountComponent({
    name,
    element,
    props: componentProps
  }) {
    if (chunk2C4L4ZUQ_cjs.__privateGet(this, _mountedElements).call(this).has(element)) {
      return chunk2C4L4ZUQ_cjs.__privateMethod(this, _NovuUI_instances, updateComponentProps_fn).call(this, element, componentProps);
    }
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setMountedElements).call(this, (oldNodes) => {
      const newNodes = new Map(oldNodes);
      newNodes.set(element, {
        name,
        props: componentProps
      });
      return newNodes;
    });
  }
  unmountComponent(element) {
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setMountedElements).call(this, (oldMountedElements) => {
      const newMountedElements = new Map(oldMountedElements);
      newMountedElements.delete(element);
      return newMountedElements;
    });
  }
  updateAppearance(appearance) {
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setAppearance).call(this, appearance);
  }
  updateLocalization(localization) {
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setLocalization).call(this, localization);
  }
  updateOptions(options) {
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setOptions).call(this, options);
  }
  updateTabs(tabs) {
    chunk2C4L4ZUQ_cjs.__privateGet(this, _setTabs).call(this, tabs != null ? tabs : []);
  }
  unmount() {
    var _a, _b;
    (_a = chunk2C4L4ZUQ_cjs.__privateGet(this, _dispose)) == null ? void 0 : _a.call(this);
    chunk2C4L4ZUQ_cjs.__privateSet(this, _dispose, null);
    (_b = chunk2C4L4ZUQ_cjs.__privateGet(this, _rootElement)) == null ? void 0 : _b.remove();
  }
};
_dispose = new WeakMap();
_rootElement = new WeakMap();
_mountedElements = new WeakMap();
_setMountedElements = new WeakMap();
_appearance = new WeakMap();
_setAppearance = new WeakMap();
_localization = new WeakMap();
_setLocalization = new WeakMap();
_options = new WeakMap();
_setOptions = new WeakMap();
_tabs = new WeakMap();
_setTabs = new WeakMap();
_NovuUI_instances = new WeakSet();
mountComponentRenderer_fn = function() {
  if (chunk2C4L4ZUQ_cjs.__privateGet(this, _dispose) !== null) {
    return;
  }
  chunk2C4L4ZUQ_cjs.__privateSet(this, _rootElement, document.createElement("div"));
  chunk2C4L4ZUQ_cjs.__privateGet(this, _rootElement).setAttribute("id", `novu-ui-${this.id}`);
  document.body.appendChild(chunk2C4L4ZUQ_cjs.__privateGet(this, _rootElement));
  const dispose = web.render(() => {
    const _self$ = this;
    return web.createComponent(Renderer, {
      cssHref,
      novuUI: _self$,
      get nodes() {
        var _a;
        return chunk2C4L4ZUQ_cjs.__privateGet(_a = _self$, _mountedElements).call(_a);
      },
      get options() {
        var _a;
        return chunk2C4L4ZUQ_cjs.__privateGet(_a = _self$, _options).call(_a);
      },
      get appearance() {
        var _a;
        return chunk2C4L4ZUQ_cjs.__privateGet(_a = _self$, _appearance).call(_a);
      },
      get localization() {
        var _a;
        return chunk2C4L4ZUQ_cjs.__privateGet(_a = _self$, _localization).call(_a);
      },
      get tabs() {
        var _a;
        return chunk2C4L4ZUQ_cjs.__privateGet(_a = _self$, _tabs).call(_a);
      }
    });
  }, chunk2C4L4ZUQ_cjs.__privateGet(this, _rootElement));
  chunk2C4L4ZUQ_cjs.__privateSet(this, _dispose, dispose);
};
updateComponentProps_fn = function(element, props) {
  chunk2C4L4ZUQ_cjs.__privateGet(this, _setMountedElements).call(this, (oldMountedElements) => {
    const newMountedElements = new Map(oldMountedElements);
    const mountedElement = newMountedElements.get(element);
    if (mountedElement) {
      newMountedElements.set(element, chunk2C4L4ZUQ_cjs.__spreadProps(chunk2C4L4ZUQ_cjs.__spreadValues({}, mountedElement), {
        props
      }));
    }
    return newMountedElements;
  });
};

exports.NotificationStatus = NotificationStatus;
exports.NovuUI = NovuUI;
