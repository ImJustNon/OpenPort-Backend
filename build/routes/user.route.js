"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_register_controller_1 = require("../controllers/user_register.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/v1/user/register", user_register_controller_1.userRegisterController);
router.post("/v1/user/auth");
router.post("/v1/user/password/reset");
//# sourceMappingURL=user.route.js.map