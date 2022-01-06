"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.OrderController = void 0;
const Order_repositories_1 = require("../repositories/Order.repositories");
const error_1 = __importDefault(require("../utills/error"));
const tsoa_1 = require("tsoa");
let OrderController = 
//@Route("secure")
class OrderController {
    constructor() { }
    getOrder(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new Order_repositories_1.MainOrder().getOrder(getreq.id);
            if (order === null)
                throw new error_1.default(404, 'Sorry your order  is not found');
            return order;
        });
    }
    saveOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_order = yield new Order_repositories_1.MainOrder().saveOrder((order));
            return (new_order);
        });
    }
    updateOrder(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const update_order = yield new Order_repositories_1.MainOrder().updateOrder((order));
            if (update_order === null)
                throw new error_1.default(400, 'Sorry the order you want to edit is not updating.');
            return update_order;
        });
    }
    deleteOrder(delreq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Order_repositories_1.MainOrder().deleteOrder(delreq.id);
        });
    }
    getOrderList() {
        return __awaiter(this, void 0, void 0, function* () {
            const order = yield new Order_repositories_1.MainOrder().getOrderlist();
            return (order);
        });
    }
};
__decorate([
    tsoa_1.Post("/getOrder"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrder", null);
__decorate([
    tsoa_1.Post('/saveOrder'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "saveOrder", null);
__decorate([
    tsoa_1.Security("jwt", ["admin"]),
    tsoa_1.Put('/updateOrder'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "updateOrder", null);
__decorate([
    tsoa_1.Delete('/deleteorder'),
    tsoa_1.SuccessResponse("200", "Order deleted"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "deleteOrder", null);
__decorate([
    tsoa_1.Get('/getOrderList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OrderController.prototype, "getOrderList", null);
OrderController = __decorate([
    tsoa_1.Route('order'),
    tsoa_1.Tags('order')
    //@Route("secure")
    ,
    __metadata("design:paramtypes", [])
], OrderController);
exports.OrderController = OrderController;
