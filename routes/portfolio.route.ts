import { portfolioDetailsController } from "../controllers/port_details.controller";
import { portfolioDownloadController } from "../controllers/port_download.controller";
import { portfolioPopularController } from "../controllers/port_popular.controller";
import express, { Router } from "express";
const router: Router = express.Router();

router.get("/v1/portfolio/popular", portfolioPopularController);
router.get("/v1/portfolio/details/:id", portfolioDetailsController);
router.get("/v1/portfolio/download/:id", portfolioDownloadController);

export default router;