import type { EnvironmentId } from '../environment';
import type { OrganizationId } from '../organization';
import type { ChangePropsValueType } from '../../types/helpers';
export declare class FeedEntity {
    _id: string;
    name: string;
    identifier: string;
    _environmentId: EnvironmentId;
    _organizationId: OrganizationId;
}
export type FeedDBModel = ChangePropsValueType<FeedEntity, '_environmentId' | '_organizationId'>;
//# sourceMappingURL=feed.entity.d.ts.map