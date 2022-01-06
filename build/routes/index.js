"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainApi = exports.MainRouter = void 0;
const express_1 = __importDefault(require("express"));
//import { AdminRoutesApi } from "./Admin.Routes";
const Product_Routes_1 = require("./Product.Routes");
const Order_Routes_1 = require("./Order.Routes");
class MainRouter {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        //this.router.use('/admin',AdminRoutesApi);
        this.router.use('/product', Product_Routes_1.ProductRoutesApi);
        this.router.use('/order', Order_Routes_1.OrderRoutesApi);
    }
}
exports.MainRouter = MainRouter;
exports.MainApi = new MainRouter().router;
