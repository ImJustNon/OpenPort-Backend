import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma: PrismaClient = new PrismaClient();

export function userRegisterController(req: Request, res: Response): void {
    interface UserRegFormData {
        username: string;
        password: string;
        email?: string;
    }
    const {username, password, email}: UserRegFormData = req.body ?? {};

    if(!username || !password){
        res.status(400).json({
            status: "FAIL",
            message: "Missing information"
        });
        return;
    }

    
}
