"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ADMINSchema = void 0;
const mongoose_1 = require("mongoose");
const IADMINSchema = new mongoose_1.Schema({
    FirstName: { type: String },
    LastName: { type: String },
    Desgination: { type: String },
    cell: { type: String },
    JoinDate: { type: String },
    adress: { type: String },
});
exports.ADMINSchema = mongoose_1.model('IADMINSchema', IADMINSchema);
