import { FetchPreferencesArgs } from '../../../preferences/types';
export declare const usePreferences: (options?: FetchPreferencesArgs) => {
    preferences: import("solid-js").Resource<import("../../../preferences/preference").Preference[] | undefined>;
    mutate: import("solid-js").Setter<import("../../../preferences/preference").Preference[] | undefined>;
    refetch: (info?: unknown) => import("../../../preferences/preference").Preference[] | Promise<import("../../../preferences/preference").Preference[] | undefined> | null | undefined;
};
//# sourceMappingURL=usePreferences.d.ts.map