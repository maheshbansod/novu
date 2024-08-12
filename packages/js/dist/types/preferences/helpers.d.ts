import { InboxService } from '../api';
import type { NovuEventEmitter } from '../event-emitter';
import type { Result } from '../types';
import { Preference } from './preference';
import type { UpdatePreferencesArgs } from './types';
export declare const updatePreference: ({ emitter, apiService, args, }: {
    emitter: NovuEventEmitter;
    apiService: InboxService;
    args: UpdatePreferencesArgs;
}) => Result<Preference>;
//# sourceMappingURL=helpers.d.ts.map