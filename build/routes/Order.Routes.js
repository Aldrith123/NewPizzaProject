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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutesApi = exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Order_controller_1 = require("../controllers/Order.controller");
class OrderRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.post('/getOrder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const order = yield new Order_controller_1.OrderController().getOrder(getreq);
                res.send(order);
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.post('/saveOrder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = req.body;
                const newOrder = yield new Order_controller_1.OrderController().saveOrder(order);
                res.status(200).json({
                    message: newOrder
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.put('/updateorder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const order = req.body;
                const upadated_order = yield new Order_controller_1.OrderController().updateOrder(order);
                const response = {
                    upadated_order,
                };
                res.status(200).json({
                    message: response
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.delete('/deleteorder', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const Deleted_order = yield new Order_controller_1.OrderController().deleteOrder(delreq);
                res.status(200).json({
                    message: 'Order that you are trying to delete is removed'
                });
                ;
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.get('/getOrderList', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const order = yield new Order_controller_1.OrderController().getOrderList();
                console.log(getreq);
                const response = {
                    order,
                };
                res.status(200).json({
                    message: response
                });
                res.send(order);
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.OrderRoutes = OrderRoutes;
exports.OrderRoutesApi = new OrderRoutes().router;
