"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCTSchema = void 0;
const mongoose_1 = require("mongoose");
const IPRODUCTSchema = new mongoose_1.Schema({
    Name: { type: String },
    Description: { type: String },
    amount: { type: Number },
    price: { type: Number },
});
exports.PRODUCTSchema = mongoose_1.model('IPRODUCTSchema', IPRODUCTSchema);
