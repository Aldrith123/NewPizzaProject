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
exports.ProductRoutesApi = exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Product_controller_1 = require("../controllers/Product.controller");
class ProductRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.post('/getProduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const admin = yield new Product_controller_1.ProductController().getProduct(getreq);
                res.send(admin);
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.post('/saveProduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req.body;
                const newProduct = yield new Product_controller_1.ProductController().saveProduct(product);
                res.status(200).json({
                    message: newProduct
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.put('/updateproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req.body;
                const upadated_product = yield new Product_controller_1.ProductController().updateProduct(product);
                const response = {
                    upadated_product,
                };
                res.status(200).json({
                    message: response
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.delete('/deleteproduct', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const Deleted_product = yield new Product_controller_1.ProductController().deleteProduct(delreq);
                res.status(200).json({
                    message: 'Product  deleted'
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.get('/getProductList', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const product = yield new Product_controller_1.ProductController().getProductList();
                console.log(getreq);
                const response = {
                    product,
                };
                res.status(200).json({
                    message: response
                });
                res.send(product);
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.ProductRoutes = ProductRoutes;
exports.ProductRoutesApi = new ProductRoutes().router;
