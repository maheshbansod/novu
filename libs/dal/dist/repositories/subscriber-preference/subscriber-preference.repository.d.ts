import { BaseRepository } from '../base-repository';
import type { EnforceEnvOrOrgIds } from '../../types/enforce';
import { SubscriberPreferenceEntity, SubscriberPreferenceDBModel } from './subscriber-preference.entity';
export declare class SubscriberPreferenceRepository extends BaseRepository<SubscriberPreferenceDBModel, SubscriberPreferenceEntity, EnforceEnvOrOrgIds> {
    constructor();
    findSubscriberPreferences(environmentId: string, subscriberId: string, templatesIds: string[]): Promise<SubscriberPreferenceEntity[]>;
}
//# sourceMappingURL=subscriber-preference.repository.d.ts.map