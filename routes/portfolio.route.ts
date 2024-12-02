import { portfolioDetailsController } from "../controllers/port_details.controller";
import { portfolioPopularController } from "../controllers/port_popular.controller";
import express, { Router } from "express";
const router: Router = express.Router();

router.post("/v1/portfolio/popular", portfolioPopularController);
router.get("/v1/portfolio/details/:id", portfolioDetailsController);

export default router;