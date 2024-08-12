import { NovuEventEmitter } from './event-emitter';
import type { EventHandler, EventNames, Events } from './event-emitter';
import { Notifications } from './notifications';
import { Preferences } from './preferences';
import type { NovuOptions } from './types';
export declare class Novu implements Pick<NovuEventEmitter, 'on' | 'off'> {
    #private;
    readonly notifications: Notifications;
    readonly preferences: Preferences;
    constructor(options: NovuOptions);
    on<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
    off<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
}
//# sourceMappingURL=novu.d.ts.map