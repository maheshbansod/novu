export declare class TestServer {
    private app;
    getHttpServer(): any;
    getService(service: any): any;
    create(app: any): Promise<void>;
    teardown(): Promise<void>;
}
export declare const testServer: TestServer;
export declare class WsTestServer {
    private app;
    getHttpServer(): any;
    getService(service: any): any;
    create(app: any): Promise<void>;
    teardown(): Promise<void>;
}
export declare const wsTestServer: WsTestServer;
//# sourceMappingURL=test-server.service.d.ts.map