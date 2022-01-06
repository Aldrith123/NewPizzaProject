"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainAdmin = void 0;
const Admin_model_1 = require("../model/Admin.model");
class MainAdmin {
    constructor() { }
    getAdmin(_id) {
        return Admin_model_1.ADMINSchema.findById(_id);
    }
    saveAdmin(ADMin) {
        return new Admin_model_1.ADMINSchema(ADMin).save();
    }
    updateAdmin(Admmin) {
        return Admin_model_1.ADMINSchema.findByIdAndUpdate(Admmin._id, Admmin, {
            new: true
        });
    }
    deletAdmin(_id) {
        return Admin_model_1.ADMINSchema.findByIdAndDelete(_id);
    }
    getAdminslist() {
        return Admin_model_1.ADMINSchema.find();
    }
}
exports.MainAdmin = MainAdmin;
