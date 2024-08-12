"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlVariablesRepository = void 0;
const controlVariables_schema_1 = require("./controlVariables.schema");
const controlVariables_entity_1 = require("./controlVariables.entity");
const base_repository_1 = require("../base-repository");
class ControlVariablesRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(controlVariables_schema_1.ControlVariables, controlVariables_entity_1.ControlVariablesEntity);
        this.controlVariables = controlVariables_schema_1.ControlVariables;
    }
}
exports.ControlVariablesRepository = ControlVariablesRepository;
