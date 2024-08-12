import { BaseModule } from '../base-module';
import { Preference } from './preference';
import type { UpdatePreferencesArgs } from './types';
import { Result } from '../types';
export declare class Preferences extends BaseModule {
    list(): Result<Preference[]>;
    update(args: UpdatePreferencesArgs): Result<Preference>;
}
//# sourceMappingURL=preferences.d.ts.map