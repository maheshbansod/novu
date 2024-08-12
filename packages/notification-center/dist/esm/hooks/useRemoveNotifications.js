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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNovuContext } from './useNovuContext';
import { useFetchNotificationsQueryKey } from './useFetchNotificationsQueryKey';
export const useRemoveNotifications = (_a = {}) => {
    var { onSuccess } = _a, options = __rest(_a, ["onSuccess"]);
    const queryClient = useQueryClient();
    const { apiService } = useNovuContext();
    const fetchNotificationsQueryKey = useFetchNotificationsQueryKey();
    const _b = useMutation(({ messageIds }) => apiService.removeMessages(messageIds), Object.assign(Object.assign({}, options), { onSuccess: (data, variables, context) => {
            queryClient.refetchQueries(fetchNotificationsQueryKey, { exact: false });
            onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(data, variables, context);
        } })), { mutate } = _b, result = __rest(_b, ["mutate"]);
    return Object.assign(Object.assign({}, result), { removeNotifications: mutate });
};
//# sourceMappingURL=useRemoveNotifications.js.map