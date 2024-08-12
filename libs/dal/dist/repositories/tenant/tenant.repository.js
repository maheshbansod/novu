"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantRepository = void 0;
const base_repository_1 = require("../base-repository");
const tenant_entity_1 = require("./tenant.entity");
const tenant_schema_1 = require("./tenant.schema");
class TenantRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(tenant_schema_1.Tenant, tenant_entity_1.TenantEntity);
        this.tenant = tenant_schema_1.Tenant;
    }
}
exports.TenantRepository = TenantRepository;
