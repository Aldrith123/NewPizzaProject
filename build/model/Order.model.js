"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORDERSchema = void 0;
const mongoose_1 = require("mongoose");
const IORDERSchema = new mongoose_1.Schema({
    noOfOrder: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'PrductSchema',
        required: true
    },
    noOfPizzas: {
        type: Number,
        required: true
    },
    statusOfOrder: {
        type: String,
        default: "inPipeline",
        required: true
    },
    bill: {
        type: Number,
        required: true
    },
    //   totalPrice:{
    //     type:Number,
    //     required:true
    // },
});
exports.ORDERSchema = mongoose_1.model('IORDERSchema', IORDERSchema);
