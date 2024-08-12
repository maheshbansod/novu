"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaOptions = void 0;
exports.schemaOptions = {
    timestamps: true,
    id: true,
    toJSON: {
        virtuals: true,
    },
    toObject: { virtuals: true },
};
