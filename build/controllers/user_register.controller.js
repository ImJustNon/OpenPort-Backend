"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRegisterController = userRegisterController;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function userRegisterController(req, res) {
    var _a;
    const { username, password, email } = (_a = req.body) !== null && _a !== void 0 ? _a : {};
    if (!username || !password) {
        res.status(400).json({
            status: "FAIL",
            message: "Missing information"
        });
        return;
    }
}
//# sourceMappingURL=user_register.controller.js.map