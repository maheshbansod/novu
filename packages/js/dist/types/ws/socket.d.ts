import { BaseModule } from '../base-module';
import { SocketEventNames } from '../event-emitter';
import { Session } from '../types';
export declare class Socket extends BaseModule {
    #private;
    constructor({ socketUrl }: {
        socketUrl?: string;
    });
    protected onSessionSuccess({ token }: Session): void;
    isSocketEvent(eventName: string): eventName is SocketEventNames;
    initialize(): void;
}
//# sourceMappingURL=socket.d.ts.map