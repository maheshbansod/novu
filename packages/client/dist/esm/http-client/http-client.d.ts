import { ApiOptions } from '..';
import type { CustomDataType } from '@novu/shared';
export declare class HttpClient {
    private backendUrl;
    private apiVersion;
    private headers;
    constructor({ apiVersion, backendUrl, userAgent, }?: ApiOptions);
    setAuthorizationToken(token: string): void;
    disposeAuthorizationToken(): void;
    updateHeaders(headers: Record<string, string>): void;
    getFullResponse(url: string, params?: CustomDataType): Promise<any>;
    get(url: string, params?: CustomDataType): Promise<any>;
    post(url: string, body?: {}): Promise<any>;
    patch(url: string, body?: {}): Promise<any>;
    delete(url: string, body?: {}): Promise<any>;
    private getQueryString;
    private doFetch;
    private checkResponseStatus;
}
//# sourceMappingURL=http-client.d.ts.map