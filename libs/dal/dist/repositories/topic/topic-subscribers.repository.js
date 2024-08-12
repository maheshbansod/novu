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
exports.TopicSubscribersRepository = void 0;
const topic_subscribers_entity_1 = require("./topic-subscribers.entity");
const topic_subscribers_schema_1 = require("./topic-subscribers.schema");
const base_repository_1 = require("../base-repository");
class TopicSubscribersRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(topic_subscribers_schema_1.TopicSubscribers, topic_subscribers_entity_1.TopicSubscribersEntity);
    }
    addSubscribers(subscribers) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.upsertMany(subscribers);
        });
    }
    getTopicDistinctSubscribers({ query, batchSize = 500, }) {
        return __asyncGenerator(this, arguments, function* getTopicDistinctSubscribers_1() {
            var _a, e_1, _b, _c;
            const { _organizationId, _environmentId, topicIds, excludeSubscribers } = query;
            const mappedTopicIds = topicIds.map((id) => this.convertStringToObjectId(id));
            const aggregatePipeline = [
                {
                    $match: {
                        _organizationId: this.convertStringToObjectId(_organizationId),
                        _environmentId: this.convertStringToObjectId(_environmentId),
                        _topicId: { $in: mappedTopicIds },
                        externalSubscriberId: { $nin: excludeSubscribers },
                    },
                },
                {
                    $group: {
                        _id: '$externalSubscriberId',
                    },
                },
            ];
            try {
                for (var _d = true, _e = __asyncValues(this._model.aggregate(aggregatePipeline, { batchSize: batchSize }).cursor()), _f; _f = yield __await(_e.next()), _a = _f.done, !_a;) {
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
    findOneByTopicKeyAndExternalSubscriberId(_environmentId, _organizationId, topicKey, externalSubscriberId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({
                _environmentId,
                _organizationId,
                topicKey,
                externalSubscriberId,
            });
        });
    }
    findSubscribersByTopicId(_environmentId, _organizationId, _topicId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.find({
                _environmentId,
                _organizationId,
                _topicId,
            });
        });
    }
    removeSubscribers(_environmentId, _organizationId, topicKey, externalSubscriberIds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.delete({
                _environmentId,
                _organizationId,
                topicKey,
                externalSubscriberId: {
                    $in: externalSubscriberIds,
                },
            });
        });
    }
}
exports.TopicSubscribersRepository = TopicSubscribersRepository;
