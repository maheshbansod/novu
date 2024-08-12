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
exports.CommunityMemberRepository = void 0;
const shared_1 = require("@novu/shared");
const member_entity_1 = require("./member.entity");
const base_repository_1 = require("../base-repository");
const member_schema_1 = require("./member.schema");
class CommunityMemberRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(member_schema_1.Member, member_entity_1.MemberEntity);
    }
    removeMemberById(organizationId, memberId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MongooseModel.deleteOne({
                _id: memberId,
                _organizationId: organizationId,
            });
        });
    }
    updateMemberRoles(organizationId, memberId, roles) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.update({
                _id: memberId,
                _organizationId: organizationId,
            }, {
                roles,
            });
        });
    }
    getOrganizationMembers(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _organizationId: organizationId,
            };
            const members = yield this.MongooseModel.find(requestQuery).populate('_userId', 'firstName lastName email _id profilePicture createdAt');
            if (!members)
                return [];
            const membersEntity = this.mapEntities(members);
            return [
                ...membersEntity.map((member) => {
                    return Object.assign(Object.assign({}, member), { _userId: member._userId ? member._userId._id : null, user: member._userId });
                }),
            ];
        });
    }
    getOrganizationAdminAccount(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _organizationId: organizationId,
                roles: shared_1.MemberRoleEnum.ADMIN,
            };
            const member = yield this.MongooseModel.findOne(requestQuery);
            return this.mapEntity(member);
        });
    }
    getOrganizationAdmins(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _organizationId: organizationId,
            };
            const members = yield this.MongooseModel.find(requestQuery).populate('_userId', 'firstName lastName email _id');
            if (!members)
                return [];
            const membersEntity = this.mapEntities(members);
            return [
                ...membersEntity
                    .filter((i) => i.roles.includes(shared_1.MemberRoleEnum.ADMIN))
                    .map((member) => {
                    return Object.assign(Object.assign({}, member), { _userId: member._userId ? member._userId._id : null, user: member._userId });
                }),
            ];
        });
    }
    findUserActiveMembers(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                _userId: userId,
                memberStatus: shared_1.MemberStatusEnum.ACTIVE,
            };
            return yield this.find(requestQuery);
        });
    }
    convertInvitedUserToMember(organizationId, token, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.update({
                _organizationId: organizationId,
                'invite.token': token,
            }, {
                memberStatus: data.memberStatus,
                _userId: data._userId,
                'invite.answerDate': data.answerDate,
            });
        });
    }
    findByInviteToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestQuery = {
                'invite.token': token,
            };
            return yield this.findOne(requestQuery);
        });
    }
    findInviteeByEmail(organizationId, email) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundMember = yield this.findOne({
                _organizationId: organizationId,
                'invite.email': email,
            });
            if (!foundMember)
                return null;
            return foundMember;
        });
    }
    addMember(organizationId, member) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.create({
                _userId: member._userId,
                roles: member.roles,
                invite: member.invite,
                memberStatus: member.memberStatus,
                _organizationId: organizationId,
            });
        });
    }
    isMemberOfOrganization(organizationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return !!(yield this.findOne({
                _organizationId: organizationId,
                _userId: userId,
            }, '_id', {
                readPreference: 'secondaryPreferred',
            }));
        });
    }
    findMemberByUserId(organizationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield this.findOne({
                _organizationId: organizationId,
                _userId: userId,
            });
            if (!member)
                return null;
            return this.mapEntity(member);
        });
    }
    findMemberById(organizationId, memberId) {
        return __awaiter(this, void 0, void 0, function* () {
            const member = yield this.findOne({
                _organizationId: organizationId,
                _id: memberId,
            });
            if (!member)
                return null;
            return this.mapEntity(member);
        });
    }
}
exports.CommunityMemberRepository = CommunityMemberRepository;
