import { ChannelPreference, PreferenceLevel, Result, Workflow } from '../types';
type PreferenceLike = Pick<Preference, 'level' | 'enabled' | 'channels' | 'workflow'>;
export declare class Preference {
    #private;
    readonly level: PreferenceLevel;
    readonly enabled: boolean;
    readonly channels: ChannelPreference;
    readonly workflow?: Workflow;
    constructor(preference: PreferenceLike);
    update({ channelPreferences }: {
        channelPreferences: ChannelPreference;
    }): Result<Preference>;
}
export {};
//# sourceMappingURL=preference.d.ts.map