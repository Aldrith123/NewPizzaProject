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
exports.AdminRoutesApi = exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const Admin_controller_1 = require("../controllers/Admin.controller");
class AdminRoutes {
    constructor() {
        this.router = express_1.default.Router();
        this.routes();
    }
    routes() {
        this.router.post('/getAdmin', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const getreq = req.body;
                const admin = yield new Admin_controller_1.AdminController().getadmin(getreq);
                res.send(admin);
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.post('/saveadmin', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = req.body;
                const newAdmin = yield new Admin_controller_1.AdminController().saveadmin(admin);
                res.status(200).json({
                    message: newAdmin
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.put('/updateadmin', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = req.body;
                const upadated_admin = yield new Admin_controller_1.AdminController().updateAdmin(admin);
                const response = {
                    upadated_admin,
                };
                res.status(200).json({
                    message: response
                });
            }
            catch (error) {
                next(error);
            }
        }));
        this.router.delete('/deleteadmin', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const delreq = req.body;
                const Deleted_admin = yield new Admin_controller_1.AdminController().deletadmin(delreq);
                res.status(200).json({
                    message: 'admin deleted'
                });
            }
            catch (error) {
                next(error);
            }
        }));
    }
}
exports.AdminRoutes = AdminRoutes;
// export function expressAuthentication(
//     request: express.Request,
//     securityName: string,
//     scopes?: string[]
//   ): Promise<any> {
//     if (securityName === "api_key") {
//       let token;
//       if (request.query && request.query.access_token) {
//         token = request.query.access_token;
//       }
//       if (token === "abc123456") {
//         return Promise.resolve({
//           id: 1,
//           name: "Ironman",
//         });
//       } else {
//         return Promise.reject({});
//       }
//     }
//     if (securityName === 'Jwt') {
//       const token =
//         request.body.token ||
//         request.query.token ||
//         request.headers["x-access-token"];
//       return new Promise((resolve, reject) => {
//         if (!token) {
//           reject(new Error("No token provided"));
//         }
//         Jwt.verify(token, "[secret]", function (err: any, decoded: any) {
//           if (err) {
//             reject(err);
//           } else {
//             // Check if JWT contains all required scopes
//             for (let scope of scopes) {
//               if (!decoded.scopes.includes(scope)) {
//                 reject(new Error("JWT does not contain required scope."));
//               }
//             }
//             resolve(decoded);
//           }
//         });
//       });
//     }
//   }
exports.AdminRoutesApi = new AdminRoutes().router;
