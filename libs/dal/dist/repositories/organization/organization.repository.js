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
exports.OrganizationRepository = void 0;
const common_1 = require("@nestjs/common");
let OrganizationRepository = class OrganizationRepository {
    constructor(organizationRepository) {
        this.organizationRepository = organizationRepository;
    }
    findById(id, select) {
        return this.organizationRepository.findById(id, select);
    }
    findUserActiveOrganizations(userId) {
        return this.organizationRepository.findUserActiveOrganizations(userId);
    }
    updateBrandingDetails(organizationId, branding) {
        return this.organizationRepository.updateBrandingDetails(organizationId, branding);
    }
    renameOrganization(organizationId, payload) {
        return this.organizationRepository.renameOrganization(organizationId, payload);
    }
    updateServiceLevel(organizationId, apiServiceLevel) {
        return this.organizationRepository.updateServiceLevel(organizationId, apiServiceLevel);
    }
    updateDefaultLocale(organizationId, defaultLocale) {
        return this.organizationRepository.updateDefaultLocale(organizationId, defaultLocale);
    }
    findPartnerConfigurationDetails(organizationId, userId, configurationId) {
        return this.organizationRepository.findPartnerConfigurationDetails(organizationId, userId, configurationId);
    }
    updatePartnerConfiguration(organizationId, userId, configuration) {
        return this.organizationRepository.updatePartnerConfiguration(organizationId, userId, configuration);
    }
    bulkUpdatePartnerConfiguration(userId, data, configurationId) {
        return this.organizationRepository.bulkUpdatePartnerConfiguration(userId, data, configurationId);
    }
    create(data, options) {
        return this.organizationRepository.create(data, options);
    }
    update(query, body) {
        return this.organizationRepository.update(query, body);
    }
    delete(query) {
        return this.organizationRepository.delete(query);
    }
    count(query, limit) {
        return this.organizationRepository.count(query, limit);
    }
    aggregate(query, options) {
        return this.organizationRepository.aggregate(query, options);
    }
    findOne(query, select, options) {
        return this.organizationRepository.findOne(query, select, options);
    }
    find(query, select, options) {
        return this.organizationRepository.find(query, select, options);
    }
    findBatch(query, select, options, batchSize) {
        return __asyncGenerator(this, arguments, function* findBatch_1() {
            return yield __await(this.organizationRepository.findBatch(query, select, options, batchSize));
        });
    }
    insertMany(data, ordered) {
        return this.organizationRepository.insertMany(data, ordered);
    }
    updateOne(query, body) {
        return this.organizationRepository.updateOne(query, body);
    }
    upsertMany(data) {
        return this.organizationRepository.upsertMany(data);
    }
    upsert(query, data) {
        return this.organizationRepository.upsert(query, data);
    }
    bulkWrite(bulkOperations, ordered) {
        return this.organizationRepository.bulkWrite(bulkOperations, ordered);
    }
};
OrganizationRepository = __decorate([
    __param(0, (0, common_1.Inject)('ORGANIZATION_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], OrganizationRepository);
exports.OrganizationRepository = OrganizationRepository;
