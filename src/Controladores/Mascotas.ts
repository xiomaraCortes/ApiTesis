import { Request,Response } from "express";
import { conecion } from "../datebase";
import sql, { MAX } from "mssql";
import jwt from "jsonwebtoken";

export async function BuscarMascotas(req:Request, res:Response){
    console.log(req.body);
    
    const con = await conecion();
    const sp = con.request();
    const token:any = req.body.token;
    const payload:any = jwt.verify(token, process.env.TOKEN||'MfpWOPa4');
    sp.input('ACTION',sql.Int,0);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);
    sp.input('IdUsuario',sql.Int,payload.id);
    
    sp.execute('[dbo].[Sp_Mascotas]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}

export async function NuevaMascota(req:Request, res:Response){
    const con = await conecion();
    const sp = con.request();
    const token:any = req.body.token;
    const payload:any = jwt.verify(token, process.env.TOKEN||'MfpWOPa4');
    sp.input('ACTION',sql.Int,1);
    sp.input('IdUsuario',sql.Int,payload.id);
    sp.input('Nombre',sql.NVarChar(MAX),req.body.nombre);
    sp.input('documento',sql.NVarChar(MAX),req.body.documento);
    sp.input('IdRaza',sql.NVarChar(MAX),req.body.raza);
    sp.input('IdColor',sql.NVarChar(MAX),req.body.color);
    sp.input('IdGenMascota',sql.NVarChar(MAX),req.body.genero);
    sp.input('Altura',sql.NVarChar(MAX),req.body.estatura);
    sp.input('Peso',sql.NVarChar(MAX),req.body.peso);
    sp.input('fechanacimiento',sql.NVarChar(MAX),req.body.fechanaciomiento);
    sp.execute('[dbo].[Sp_Mascotas]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}
export async function ActualizarMascota(req:Request, res:Response){
    const con = await conecion();
    const sp = con.request();
    const token:any = req.body.token;
    console.log(req.body);
    
    sp.input('ACTION',sql.Int,2);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);
    sp.input('Nombre',sql.NVarChar(MAX),req.body.nombre);
    sp.input('IdRaza',sql.NVarChar(MAX),req.body.raza);
    sp.input('IdColor',sql.NVarChar(MAX),req.body.color);
    sp.input('IdGenMascota',sql.NVarChar(MAX),req.body.genero);
    sp.input('Altura',sql.NVarChar(MAX),req.body.estatura);
    sp.input('Peso',sql.NVarChar(MAX),req.body.peso);
    sp.input('fechanacimiento',sql.NVarChar(MAX),req.body.fechanaciomiento);
    sp.execute('[dbo].[Sp_Mascotas]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}
export async function BuscarMascota(req:Request, res:Response){
    console.log(req.body);
    
    const con = await conecion();
    const sp = con.request();
    const token:any = req.body.token;
    sp.input('ACTION',sql.Int,3);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);    
    sp.execute('[dbo].[Sp_Mascotas]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}

export async function EliminarMascota(req:Request, res:Response){
    console.log(req.body);
    
    const con = await conecion();
    const sp = con.request();
    const token:any = req.body.token;
    sp.input('ACTION',sql.Int,4);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);    
    sp.execute('[dbo].[Sp_Mascotas]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}

