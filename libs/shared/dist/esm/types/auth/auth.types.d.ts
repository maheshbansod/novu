import { JwtPayload } from '@clerk/types';
export interface IJwtClaims {
    _id: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    profilePicture?: string;
    organizationId: string;
    roles: string[];
    exp: number;
    iss?: string;
    scheme: ApiAuthSchemeEnum.BEARER | ApiAuthSchemeEnum.API_KEY;
}
export type ClerkJwtPayload = JwtPayload & {
    _id: string;
    email: string;
    lastName: string;
    firstName: string;
    environmentId: string;
    profilePicture: string;
    externalId?: string;
    externalOrgId?: string;
};
export type UserSessionData = IJwtClaims & {
    environmentId: string;
};
export declare enum ApiAuthSchemeEnum {
    BEARER = "Bearer",
    API_KEY = "ApiKey"
}
export declare enum PassportStrategyEnum {
    JWT = "jwt",
    JWT_CLERK = "jwt-clerk",
    HEADER_API_KEY = "headerapikey"
}
export type SentryUser = {
    id: string;
    username: string;
    domain: string;
};
export type HandledUser = (IJwtClaims & SentryUser) | false;
export declare const NONE_AUTH_SCHEME = "None";
//# sourceMappingURL=auth.types.d.ts.map