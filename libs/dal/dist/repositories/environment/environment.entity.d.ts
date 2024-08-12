import { Types } from 'mongoose';
import { EncryptedSecret, IApiRateLimitMaximum } from '@novu/shared';
import type { OrganizationId } from '../organization';
import type { ChangePropsValueType } from '../../types/helpers';
export interface IApiKey {
    key: EncryptedSecret | string;
    hash?: string;
    _userId: string;
}
export interface IWidgetSettings {
    notificationCenterEncryption: boolean;
}
export interface IDnsSettings {
    mxRecordConfigured: boolean;
    inboundParseDomain: string;
}
export declare class EnvironmentEntity {
    _id: string;
    name: string;
    _organizationId: OrganizationId;
    identifier: string;
    apiKeys: IApiKey[];
    apiRateLimits?: IApiRateLimitMaximum;
    widget: IWidgetSettings;
    dns?: IDnsSettings;
    _parentId: string;
    echo: {
        url: string;
    };
    bridge: {
        url: string;
    };
}
export type EnvironmentDBModel = ChangePropsValueType<Omit<EnvironmentEntity, 'apiKeys'>, '_organizationId' | '_parentId'> & {
    apiKeys: IApiKey & {
        _userId: Types.ObjectId;
    }[];
};
//# sourceMappingURL=environment.entity.d.ts.map