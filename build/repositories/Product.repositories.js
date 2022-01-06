"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProduct = void 0;
const Product_model_1 = require("../model/Product.model");
class MainProduct {
    constructor() { }
    getProduct(_id) {
        return Product_model_1.PRODUCTSchema.findById(_id);
    }
    saveProduct(product) {
        return new Product_model_1.PRODUCTSchema(product).save();
    }
    updateProduct(product) {
        return Product_model_1.PRODUCTSchema.findByIdAndUpdate(product._id, product, {
            new: true
        });
    }
    deleteProduct(_id) {
        return Product_model_1.PRODUCTSchema.findByIdAndDelete(_id);
    }
    getProductlist() {
        return Product_model_1.PRODUCTSchema.find();
    }
}
exports.MainProduct = MainProduct;
