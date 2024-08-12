import React from 'react';
interface JsonData {
    [key: string]: {
        instances: number;
        props: {
            [key: string]: number | string[];
        };
        srcPkg: string;
    };
}
interface ComponentAuditTableProps {
    data: JsonData;
    className?: string;
}
export declare const ComponentAuditTable: React.FC<ComponentAuditTableProps>;
export {};
//# sourceMappingURL=ComponentAuditTable.d.ts.map