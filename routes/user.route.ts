import { userRegisterController } from "controllers/user_register.controller";
import express, { Router } from "express";
const router: Router = express.Router();

router.post("/v1/user/register", userRegisterController);
router.post("/v1/user/auth", );
router.post("/v1/user/password/reset")