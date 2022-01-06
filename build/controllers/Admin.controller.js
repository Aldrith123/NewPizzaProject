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
exports.AdminController = void 0;
const Admin_repositories_1 = require("../repositories/Admin.repositories");
const error_1 = __importDefault(require("../utills/error"));
const tsoa_1 = require("tsoa");
let AdminController = class AdminController {
    constructor() { }
    getadmin(getreq) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield new Admin_repositories_1.MainAdmin().getAdmin(getreq.id);
            if (admin === null)
                throw new error_1.default(404, 'Admin not found');
            return admin;
        });
    }
    saveadmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            const new_admin = yield new Admin_repositories_1.MainAdmin().saveAdmin((admin));
            return (new_admin);
        });
    }
    updateAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            const update_admin = yield new Admin_repositories_1.MainAdmin().updateAdmin((admin));
            if (update_admin === null)
                throw new error_1.default(400, 'Admin not updated');
            return update_admin;
        });
    }
    deletadmin(delreq) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Admin_repositories_1.MainAdmin().deletAdmin(delreq.id);
        });
    }
    getadminList() {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield new Admin_repositories_1.MainAdmin().getAdminslist();
            return (admin);
        });
    }
};
__decorate([
    tsoa_1.Post("/getAdmin"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getadmin", null);
__decorate([
    tsoa_1.Post('/saveadmin'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "saveadmin", null);
__decorate([
    tsoa_1.Security('Jwt', ['admin']),
    tsoa_1.Put('/updateadmin'),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "updateAdmin", null);
__decorate([
    tsoa_1.Delete('/deleteadmin'),
    tsoa_1.SuccessResponse("200", "Admin deleted"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "deletadmin", null);
__decorate([
    tsoa_1.Post('/getadminlist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getadminList", null);
AdminController = __decorate([
    tsoa_1.Route('secure'),
    tsoa_1.Route('admin'),
    tsoa_1.Tags('admin'),
    __metadata("design:paramtypes", [])
], AdminController);
exports.AdminController = AdminController;
