import { portfoioConfig } from "../config/portfolio.config";
import { Request, Response } from "express";
import { PortfolioConfig } from "../types/index.type";

export function portfolioDetailsController(req: Request, res: Response): void {
    const { id } = req.params;

    if(Number.isNaN(id)){
        res.status(400).json({
            status: "FAIL",
            message: "not a number",
        }); 
    }

    const findPortfolio: PortfolioConfig[] = portfoioConfig.filter((port: PortfolioConfig) => port.id === id);

    if(findPortfolio.length === 0){
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