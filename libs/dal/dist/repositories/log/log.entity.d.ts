import { LogCodeEnum, LogStatusEnum } from '@novu/shared';
import type { OrganizationId } from '../organization';
import type { EnvironmentId } from '../environment';
import type { ChangePropsValueType } from '../../types/helpers';
export declare class LogEntity {
    _id: string;
    transactionId: string;
    text: string;
    code: LogCodeEnum;
    raw: any;
    status: LogStatusEnum;
    createdAt: string;
    _messageId: string;
    _notificationId: string;
    _subscriberId: string;
    _organizationId: OrganizationId;
    _environmentId: EnvironmentId;
}
export type LogDBModel = ChangePropsValueType<Omit<LogEntity, 'createdAt'>, '_messageId' | '_subscriberId' | '_notificationId' | '_organizationId' | '_environmentId'> & {
    createdAt: Date;
};
//# sourceMappingURL=log.entity.d.ts.map