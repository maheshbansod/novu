"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowOverrideRepository = void 0;
const base_repository_1 = require("../base-repository");
const workflow_override_entity_1 = require("./workflow-override.entity");
const workflow_override_schema_1 = require("./workflow-override.schema");
class WorkflowOverrideRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(workflow_override_schema_1.WorkflowOverride, workflow_override_entity_1.WorkflowOverrideEntity);
        this.workflowOverride = workflow_override_schema_1.WorkflowOverride;
    }
    getList(options, query) {
        return __awaiter(this, void 0, void 0, function* () {
            {
                const requestQuery = {
                    _environmentId: query.environmentId,
                };
                const response = yield this.MongooseModel.find(requestQuery)
                    .read('secondaryPreferred')
                    .skip(options.skip || 0)
                    .limit(options.limit || 10)
                    .sort('-createdAt');
                return {
                    data: this.mapEntities(response),
                };
            }
        });
    }
}
exports.WorkflowOverrideRepository = WorkflowOverrideRepository;
