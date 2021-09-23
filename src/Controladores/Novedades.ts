import { Request,Response } from "express";
import { conecion } from "../datebase";
import sql, { MAX } from "mssql";
import jwt from "jsonwebtoken";


export async function NuevaNovedad(req:Request,res:Response)
{
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION', sql.Int,1);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);
    sp.input('IdNovedad',sql.Int,req.body.IdNovedad);
    sp.input('Observacion',sql.NVarChar(MAX),req.body.Observacion);
    sp.input('Descripcion',sql.NVarChar(MAX),req.body.Descripcion);
    sp.execute('[dbo].[Sp_HistorialNovedad]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}
export async function ListarNovedad(req:Request,res:Response)
{
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION', sql.Int,0);
    sp.input('IdMascota',sql.Int,req.body.IdMascota);
    sp.execute('[dbo].[Sp_HistorialNovedad]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })

}