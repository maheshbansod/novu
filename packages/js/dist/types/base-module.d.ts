import type { ApiService } from '@novu/client';
import { InboxService } from './api';
import { NovuEventEmitter } from './event-emitter';
import { Result, Session } from './types';
export declare class BaseModule {
    #private;
    _apiService: ApiService;
    _inboxService: InboxService;
    _emitter: NovuEventEmitter;
    constructor();
    protected onSessionSuccess(_: Session): void;
    protected onSessionError(_: unknown): void;
    callWithSession<T>(fn: () => Result<T>): Result<T>;
}
//# sourceMappingURL=base-module.d.ts.map