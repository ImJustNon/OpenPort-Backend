import { portfoioConfig } from "../config/portfolio.config";
import { Request, Response } from "express";
import { PortfolioConfig } from "../types/index.type";
import axios from "axios";

export async function portfolioDownloadController(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    
    if(isNaN(Number(id))) return res.status(400).json({
        status: "FAIL",
        message: "id must be number"
    });

    try {
        const isPdfAvailable = portfoioConfig.find((p) => p.id === id);

        if(!isPdfAvailable) return res.status(404).json({
            status: "FAIL",
            message: "PDF is unavailable"
        });

        const response = await axios.get("https://gitlab.com/ImJustNon/openport-assets/-/raw/main/Non/KMUTT/CPE_QUOTA_V2/PDF/Portfolio.pdf", {
            responseType: 'stream',
        });

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename="portfolio-${id}.pdf"`);    
        
        response.data.pipe(res);
      } catch (error) {
        console.error(error);
        res.status(500).send('Failed to fetch PDF');
      }
    
}