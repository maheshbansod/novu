"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationGroupRepository = void 0;
const base_repository_1 = require("../base-repository");
const notification_group_entity_1 = require("./notification-group.entity");
const notification_group_schema_1 = require("./notification-group.schema");
class NotificationGroupRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(notification_group_schema_1.NotificationGroup, notification_group_entity_1.NotificationGroupEntity);
    }
}
exports.NotificationGroupRepository = NotificationGroupRepository;
