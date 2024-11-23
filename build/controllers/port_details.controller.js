"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portfolioDetailsController = portfolioDetailsController;
const portfolio_config_1 = require("../config/portfolio.config");
function portfolioDetailsController(req, res) {
    const { id } = req.params;
    if (Number.isNaN(id)) {
        res.status(400).json({
            status: "FAIL",
            message: "not a number",
        });
    }
    const findPortfolio = portfolio_config_1.portfoioConfig.filter((port) => port.id === id);
    if (findPortfolio.length === 0) {
        res.status(404).json({
            status: "FAIL",
            message: "Portfolio with this id not found"
        });
        return;
    }
    res.status(200).json({
        status: "OK",
        message: "Portfolio found",
        data: findPortfolio[0]
    });
}
//# sourceMappingURL=port_details.controller.js.map