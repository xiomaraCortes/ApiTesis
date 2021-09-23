import { Request,Response } from "express";
import { conecion } from "../datebase";

export async function Barrios(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM Barrios")     
    return res.json(query.recordset)
}

export async function tipodoc(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM TipoDocumento")     
    return res.json(query.recordset)
}
export async function razas(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM raza")     
    return res.json(query.recordset)
}
export async function colores(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM color")     
    return res.json(query.recordset)
}
export async function TipoNovedades(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM Novedades")     
    return res.json(query.recordset)
}
export async function Veterinarias(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM Veterinarias")     
    return res.json(query.recordset)
}

export async function Blog(req:Request,res:Response){
    const con = await conecion();
    const query = await con.query("SELECT * FROM Blog")     
    return res.json(query.recordset)
}