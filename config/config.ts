import dotenv from "dotenv";
dotenv.config();


export const config: {
    port: number;
    baseUrl: string;
    allowedOrigins: string[];
    jwtSecret: string;
} = {
    port: parseInt(process.env.PORT ?? "8080"),
    baseUrl: process.env.BASEURL ?? "",
    allowedOrigins: ((process.env.ALLOWED_ORIGINS || "").split(",")),
    jwtSecret: process.env.JWT_SECRET || "no"
} 