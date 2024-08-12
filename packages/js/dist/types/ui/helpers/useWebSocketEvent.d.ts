import type { Events } from '../../event-emitter';
export declare const useWebSocketEvent: <E extends "notifications.notification_received" | "notifications.unseen_count_changed" | "notifications.unread_count_changed">({ event: webSocketEvent, eventHandler: onMessage, }: {
    event: E;
    eventHandler: (args: Events[E]) => void;
}) => void;
//# sourceMappingURL=useWebSocketEvent.d.ts.map