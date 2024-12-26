"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioPopularController = portfolioPopularController;
const portfolio_config_1 = require("../config/portfolio.config");
function portfolioPopularController(req, res) {
    const popularPort = portfolio_config_1.portfoioConfig.filter((port) => port.categories.includes("popular") && port.enable === true);
    res.status(200).json({
        status: "OK",
        message: "Popular Port",
        data: popularPort
    });
}
//# sourceMappingURL=port_popular.controller.js.map