"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRepository = void 0;
const common_1 = require("@nestjs/common");
let MemberRepository = class MemberRepository {
    constructor(memberRepository) {
        this.memberRepository = memberRepository;
    }
    removeMemberById(organizationId, memberId) {
        return this.memberRepository.removeMemberById(organizationId, memberId);
    }
    updateMemberRoles(organizationId, memberId, roles) {
        return this.memberRepository.updateMemberRoles(organizationId, memberId, roles);
    }
    getOrganizationMembers(organizationId) {
        return this.memberRepository.getOrganizationMembers(organizationId);
    }
    getOrganizationAdminAccount(organizationId) {
        return this.memberRepository.getOrganizationAdminAccount(organizationId);
    }
    getOrganizationAdmins(organizationId) {
        return this.memberRepository.getOrganizationAdmins(organizationId);
    }
    findUserActiveMembers(userId) {
        return this.memberRepository.findUserActiveMembers(userId);
    }
    convertInvitedUserToMember(organizationId, token, data) {
        return this.memberRepository.convertInvitedUserToMember(organizationId, token, data);
    }
    findByInviteToken(token) {
        return this.memberRepository.findByInviteToken(token);
    }
    findInviteeByEmail(organizationId, email) {
        return this.memberRepository.findInviteeByEmail(organizationId, email);
    }
    addMember(organizationId, member) {
        return this.memberRepository.addMember(organizationId, member);
    }
    isMemberOfOrganization(organizationId, userId) {
        return this.memberRepository.isMemberOfOrganization(organizationId, userId);
    }
    findMemberByUserId(organizationId, userId) {
        return this.memberRepository.findMemberByUserId(organizationId, userId);
    }
    findMemberById(organizationId, memberId) {
        return this.memberRepository.findMemberById(organizationId, memberId);
    }
    create(data, options) {
        return this.memberRepository.create(data, options);
    }
    update(query, body) {
        return this.memberRepository.update(query, body);
    }
    delete(query) {
        return this.memberRepository.delete(query);
    }
    count(query, limit) {
        return this.memberRepository.count(query, limit);
    }
    aggregate(query, options) {
        return this.memberRepository.aggregate(query, options);
    }
    findOne(query, select, options) {
        return this.memberRepository.findOne(query, select, options);
    }
    find(query, select, options) {
        return this.memberRepository.find(query, select, options);
    }
    findBatch(query, select, options, batchSize) {
        return __asyncGenerator(this, arguments, function* findBatch_1() {
            return yield __await(this.memberRepository.findBatch(query, select, options, batchSize));
        });
    }
    insertMany(data, ordered) {
        return this.memberRepository.insertMany(data, ordered);
    }
    updateOne(query, body) {
        return this.memberRepository.updateOne(query, body);
    }
    upsertMany(data) {
        return this.memberRepository.upsertMany(data);
    }
    bulkWrite(bulkOperations, ordered) {
        return this.memberRepository.bulkWrite(bulkOperations, ordered);
    }
};
MemberRepository = __decorate([
    __param(0, (0, common_1.Inject)('MEMBER_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], MemberRepository);
exports.MemberRepository = MemberRepository;
