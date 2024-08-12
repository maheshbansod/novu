import { EventHandler, Events, EventNames } from './types';
type SingletonOptions = {
    recreate: true;
};
export declare class NovuEventEmitter {
    #private;
    static getInstance(options?: SingletonOptions): NovuEventEmitter;
    private constructor();
    on<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
    off<Key extends EventNames>(eventName: Key, listener: EventHandler<Events[Key]>): void;
    emit<Key extends EventNames>(type: Key, event?: Events[Key]): void;
}
export {};
//# sourceMappingURL=novu-event-emitter.d.ts.map