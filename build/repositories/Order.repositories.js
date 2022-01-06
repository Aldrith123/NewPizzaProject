"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainOrder = void 0;
const Order_model_1 = require("../model/Order.model");
class MainOrder {
    constructor() { }
    getOrder(_id) {
        return Order_model_1.ORDERSchema.findById(_id);
    }
    saveOrder(order) {
        return new Order_model_1.ORDERSchema(order).save();
    }
    updateOrder(order) {
        return Order_model_1.ORDERSchema.findByIdAndUpdate(order._id, order, {
            new: true
        });
    }
    deleteOrder(_id) {
        return Order_model_1.ORDERSchema.findByIdAndDelete(_id);
    }
    getOrderlist() {
        return Order_model_1.ORDERSchema.find();
    }
}
exports.MainOrder = MainOrder;
