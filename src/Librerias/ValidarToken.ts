import { Request,Response,NextFunction } from "express";
import { conecion } from "../datebase";
import sql from "mssql";
import jwt from "jsonwebtoken";


export const Tokenvalidar = (req:Request,res:Response,next:NextFunction)=>{   
    console.log(req.body);
        
    const token = req.body.token;
    if(!token) return res.status(401).json('Acceso Denegado');
    const payload = jwt.verify(token, process.env.TOKEN||'72unoyW9');
    next();
    
}