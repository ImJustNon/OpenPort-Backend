"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const port_details_controller_1 = require("../controllers/port_details.controller");
const port_popular_controller_1 = require("../controllers/port_popular.controller");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/v1/portfolio/popular", port_popular_controller_1.portfolioPopularController);
router.get("/v1/portfolio/details/:id", port_details_controller_1.portfolioDetailsController);
exports.default = router;
//# sourceMappingURL=portfolio.route.js.map