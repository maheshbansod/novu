import { useContext } from 'react';
import { NotificationCenterContext } from '../store/notification-center.context';
export function useNotificationCenter() {
    const { onUrlChange, onNotificationClick, onActionClick, isLoading, header, footer, emptyState, listItem, actionsResultBlock, tabs, showUserPreferences, allowedNotificationActions, onTabClick, preferenceFilter, } = useContext(NotificationCenterContext);
    return {
        onUrlChange,
        onNotificationClick,
        onActionClick,
        isLoading,
        header,
        footer,
        emptyState,
        listItem,
        actionsResultBlock,
        tabs,
        showUserPreferences,
        allowedNotificationActions,
        onTabClick,
        preferenceFilter,
    };
}
//# sourceMappingURL=useNotificationCenter.js.map