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
exports.portfolioDownloadController = portfolioDownloadController;
const portfolio_config_1 = require("../config/portfolio.config");
const axios_1 = __importDefault(require("axios"));
function portfolioDownloadController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (isNaN(Number(id)))
            return res.status(400).json({
                status: "FAIL",
                message: "id must be number"
            });
        try {
            const isPdfAvailable = portfolio_config_1.portfoioConfig.find((p) => p.id === id);
            if (!isPdfAvailable || !isPdfAvailable.download || !isPdfAvailable.download.pdf)
                return res.status(404).json({
                    status: "FAIL",
                    message: "PDF is unavailable"
                });
            const response = yield axios_1.default.get(isPdfAvailable.download.pdf, {
                responseType: 'stream',
            });
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `inline; filename="portfolio-${id}.pdf"`);
            response.data.pipe(res);
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Failed to fetch PDF');
        }
    });
}
//# sourceMappingURL=port_download.controller.js.map