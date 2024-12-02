import { Request, Response } from "express";
import { portfoioConfig } from "../config/portfolio.config";
import { PortfolioConfig } from "../types/index.type";


export function portfolioPopularController(req: Request, res: Response): void {
    const popularPort: PortfolioConfig[] = portfoioConfig.filter((port: PortfolioConfig) => port.categories.includes("popular"));
    res.status(200).json({
        status: "OK",
        message: "Popular Port",
        data: popularPort
    });
}