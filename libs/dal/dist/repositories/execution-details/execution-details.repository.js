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
exports.ExecutionDetailsRepository = void 0;
const execution_details_entity_1 = require("./execution-details.entity");
const execution_details_schema_1 = require("./execution-details.schema");
const base_repository_1 = require("../base-repository");
class ExecutionDetailsRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(execution_details_schema_1.ExecutionDetails, execution_details_entity_1.ExecutionDetailsEntity);
    }
    updateStatus(environmentId, executionDetailsId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.update({
                _environmentId: environmentId,
                _id: executionDetailsId,
            }, {
                $set: {
                    status,
                },
            });
        });
    }
    findAllNotificationExecutions(organizationId, environmentId, notificationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.find({
                _environmentId: environmentId,
                _notificationId: notificationId,
            });
        });
    }
}
exports.ExecutionDetailsRepository = ExecutionDetailsRepository;
