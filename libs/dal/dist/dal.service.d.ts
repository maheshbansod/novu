import { Connection, ConnectOptions } from 'mongoose';
export declare class DalService {
    connection: Connection;
    connect(url: string, config?: ConnectOptions): Promise<Connection>;
    isConnected(): boolean;
    disconnect(): Promise<void>;
    destroy(): Promise<void>;
}
//# sourceMappingURL=dal.service.d.ts.map