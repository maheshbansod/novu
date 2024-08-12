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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
exports.BaseRepository = void 0;
const class_transformer_1 = require("class-transformer");
const date_fns_1 = require("date-fns");
const shared_1 = require("@novu/shared");
const mongoose_1 = require("mongoose");
const shared_2 = require("../shared");
class BaseRepository {
    constructor(MongooseModel, entity) {
        this.MongooseModel = MongooseModel;
        this.entity = entity;
        this._model = MongooseModel;
    }
    static createObjectId() {
        return new mongoose_1.Types.ObjectId().toString();
    }
    static isInternalId(id) {
        const isValidMongoId = mongoose_1.Types.ObjectId.isValid(id);
        if (!isValidMongoId) {
            return false;
        }
        return id === new mongoose_1.Types.ObjectId(id).toString();
    }
    convertObjectIdToString(value) {
        return value.toString();
    }
    convertStringToObjectId(value) {
        return new mongoose_1.Types.ObjectId(value);
    }
    count(query, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.MongooseModel.countDocuments(query, {
                limit,
            });
        });
    }
    aggregate(query, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongooseModel.aggregate(query).read(options.readPreference || 'primary');
        });
    }
    findOne(query, select, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.MongooseModel.findOne(query, select, options.query).read(options.readPreference || 'primary');
            if (!data)
                return null;
            return this.mapEntity(data.toObject());
        });
    }
    delete(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongooseModel.deleteMany(query);
        });
    }
    find(query, select = '', options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.MongooseModel.find(query, select, {
                sort: options.sort || null,
            })
                .skip(options.skip)
                .limit(options.limit)
                .lean()
                .exec();
            return this.mapEntities(data);
        });
    }
    findBatch(query, select = '', options = {}, batchSize = 500) {
        return __asyncGenerator(this, arguments, function* findBatch_1() {
            var _a, e_1, _b, _c;
            try {
                for (var _d = true, _e = __asyncValues(this._model
                    .find(query, select, {
                    sort: options.sort || null,
                })
                    .batchSize(batchSize)
                    .cursor()), _f; _f = yield __await(_e.next()), _a = _f.done, !_a;) {
                    _c = _f.value;
                    _d = false;
                    try {
                        const doc = _c;
                        yield yield __await(this.mapEntity(doc));
                    }
                    finally {
                        _d = true;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_d && !_a && (_b = _e.return)) yield __await(_b.call(_e));
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    }
    createCursorBasedOrStatement({ isSortDesc, paginateField, after, queryOrStatements, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const afterItem = yield this.MongooseModel.findOne({ _id: after });
            if (!afterItem) {
                throw new shared_2.DalException('Invalid after id');
            }
            let cursorOrStatements = [];
            let enhancedCursorOrStatements = [];
            if (paginateField && afterItem[paginateField]) {
                const paginatedFieldValue = afterItem[paginateField];
                cursorOrStatements = [
                    { [paginateField]: isSortDesc ? { $lt: paginatedFieldValue } : { $gt: paginatedFieldValue } },
                    { [paginateField]: { $eq: paginatedFieldValue }, _id: isSortDesc ? { $lt: after } : { $gt: after } },
                ];
                const firstStatement = (queryOrStatements !== null && queryOrStatements !== void 0 ? queryOrStatements : []).map((item) => (Object.assign(Object.assign({}, item), cursorOrStatements[0])));
                const secondStatement = (queryOrStatements !== null && queryOrStatements !== void 0 ? queryOrStatements : []).map((item) => (Object.assign(Object.assign({}, item), cursorOrStatements[1])));
                enhancedCursorOrStatements = [...firstStatement, ...secondStatement];
            }
            else {
                cursorOrStatements = [{ _id: isSortDesc ? { $lt: after } : { $gt: after } }];
                const firstStatement = (queryOrStatements !== null && queryOrStatements !== void 0 ? queryOrStatements : []).map((item) => (Object.assign(Object.assign({}, item), cursorOrStatements[0])));
                enhancedCursorOrStatements = [...firstStatement];
            }
            return enhancedCursorOrStatements.length > 0 ? enhancedCursorOrStatements : cursorOrStatements;
        });
    }
    cursorPagination({ query, limit, offset, after, sort, paginateField, enhanceQuery, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const isAfterDefined = typeof after !== 'undefined';
            const sortKeys = Object.keys(sort !== null && sort !== void 0 ? sort : {});
            const isSortDesc = sortKeys.length > 0 && sort[sortKeys[0]] === -1;
            let findQueryBuilder = this.MongooseModel.find(Object.assign({}, query));
            if (isAfterDefined) {
                const orStatements = yield this.createCursorBasedOrStatement({
                    isSortDesc,
                    paginateField,
                    after,
                    queryOrStatements: query === null || query === void 0 ? void 0 : query.$or,
                });
                findQueryBuilder = this.MongooseModel.find(Object.assign(Object.assign({}, query), { $or: orStatements }));
            }
            findQueryBuilder.sort(sort).limit(limit + 1);
            if (!isAfterDefined) {
                findQueryBuilder.skip(offset);
            }
            if (enhanceQuery) {
                findQueryBuilder = enhanceQuery(findQueryBuilder);
            }
            const messages = yield findQueryBuilder.exec();
            const hasMore = messages.length > limit;
            if (hasMore) {
                messages.pop();
            }
            return {
                data: this.mapEntities(messages),
                hasMore,
            };
        });
    }
    calcExpireDate(modelName, data) {
        let startDate = new Date();
        if (data.expireAt) {
            startDate = new Date(data.expireAt);
        }
        switch (modelName) {
            case 'Message':
                if (data.channel === 'in_app') {
                    return (0, date_fns_1.addDays)(startDate, Number(process.env.MESSAGE_IN_APP_RETENTION_DAYS || shared_1.DEFAULT_MESSAGE_IN_APP_RETENTION_DAYS));
                }
                else {
                    return (0, date_fns_1.addDays)(startDate, Number(process.env.MESSAGE_GENERIC_RETENTION_DAYS || shared_1.DEFAULT_MESSAGE_GENERIC_RETENTION_DAYS));
                }
            case 'Notification':
                return (0, date_fns_1.addDays)(startDate, Number(process.env.NOTIFICATION_RETENTION_DAYS || shared_1.DEFAULT_NOTIFICATION_RETENTION_DAYS));
            default:
                return null;
        }
    }
    create(data, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const expireAt = this.calcExpireDate(this.MongooseModel.modelName, data);
            if (expireAt) {
                data = Object.assign(Object.assign({}, data), { expireAt });
            }
            const newEntity = new this.MongooseModel(data);
            const saveOptions = (options === null || options === void 0 ? void 0 : options.writeConcern) ? { w: options === null || options === void 0 ? void 0 : options.writeConcern } : {};
            const saved = yield newEntity.save(saveOptions);
            return this.mapEntity(saved);
        });
    }
    insertMany(data, ordered = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield this.MongooseModel.insertMany(data, { ordered });
            }
            catch (e) {
                throw new shared_2.DalException(e.message);
            }
            const insertedIds = result.map((inserted) => inserted._id);
            return {
                acknowledged: true,
                insertedCount: result.length,
                insertedIds,
            };
        });
    }
    update(query, updateBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const saved = yield this.MongooseModel.updateMany(query, updateBody, {
                multi: true,
            });
            return {
                matched: saved.matchedCount,
                modified: saved.modifiedCount,
            };
        });
    }
    updateOne(query, updateBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const saved = yield this.MongooseModel.updateOne(query, updateBody);
            return {
                matched: saved.matchedCount,
                modified: saved.modifiedCount,
            };
        });
    }
    upsertMany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const promises = data.map((entry) => this.MongooseModel.findOneAndUpdate(entry, entry, { upsert: true }));
            return yield Promise.all(promises);
        });
    }
    upsert(query, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongooseModel.findOneAndUpdate(query, data, {
                upsert: true,
                new: true,
                includeResultMetadata: true,
            });
        });
    }
    bulkWrite(bulkOperations, ordered = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.MongooseModel.bulkWrite(bulkOperations, { ordered });
        });
    }
    mapEntity(data) {
        return (0, class_transformer_1.plainToInstance)(this.entity, JSON.parse(JSON.stringify(data)));
    }
    mapEntities(data) {
        return (0, class_transformer_1.plainToInstance)(this.entity, JSON.parse(JSON.stringify(data)));
    }
}
exports.BaseRepository = BaseRepository;
