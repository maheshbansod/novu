"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRepository = void 0;
const base_repository_1 = require("../base-repository");
const log_entity_1 = require("./log.entity");
const log_schema_1 = require("./log.schema");
class LogRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(log_schema_1.Log, log_entity_1.LogEntity);
    }
}
exports.LogRepository = LogRepository;
