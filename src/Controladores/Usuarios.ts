import { Request,Response } from "express";
import { conecion } from "../datebase";
import sql, { MAX } from "mssql";
import jwt from "jsonwebtoken";


export async function auth(req:Request,res:Response)
{
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION', sql.Int,0);
    sp.input('Email',sql.NVarChar(60),req.body.email);
    sp.input('Pass',sql.NVarChar(MAX),req.body.pass);
    sp.execute('[dbo].[Sp_Usuario]').then(result=>{
        if(result.recordsets[0].length != 1){
            return res.status(401).json('Usuario no registrado.')
        }else{                       
            if(result.recordsets[0][0]['CAN_LOGIN'] == 'true'){
            const token:string = jwt.sign({id:result.recordsets[0][0]["IdUsuario"]}, process.env.TOKEN||'72unoyW9',{expiresIn:216000})
                var json=[{
                    "token":token
                },
                result.recordset
            ]
                return res.header('auth-token', token ).json(json)
            }else{
                return res.status(404).json("Error de Autentificacion")
            }
        }
    })

}

export async function CrearUsuario(req:Request, res:Response){
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION',sql.Int,1);
    sp.input('Email',sql.NVarChar(60),req.body.email);
    sp.input('Pass',sql.NVarChar(MAX),req.body.pass);
    sp.input('N_Identificacion',sql.NVarChar(20),req.body.documento);
    sp.input('Id_Tipo_Documento',sql.Int,req.body.TipoDoc);
    sp.input('Nombre',sql.NVarChar(60),req.body.Nombres);
    sp.input('Apellidos',sql.NVarChar(60),req.body.Apellidos);
    sp.input('Telefono',sql.NVarChar(15),req.body.telefono);
    sp.input('Celular',sql.NVarChar(15),req.body.Celular);
    sp.input('IdBarrio',sql.Int,req.body.barrio);
    sp.input('Direccion',sql.NVarChar(80),req.body.direccion);
    sp.input('FechaNacimiento',sql.NVarChar(50),req.body.fechanacimiento);
    sp.input('IdGenero',sql.Int,req.body.idgenero);
    sp.execute('[dbo].[Sp_Usuario]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}

export async function ActualizarUsuario(req:Request, res:Response){
    console.log(req.body);
    
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION',sql.Int,3);
    sp.input('Email',sql.NVarChar(60),req.body.Email);
    sp.input('N_Identificacion',sql.NVarChar(20),req.body.N_Identificacion);
    sp.input('Id_Tipo_Documento',sql.Int,req.body.Id_Tipo_Documento);
    sp.input('Nombre',sql.NVarChar(60),req.body.Nombre);
    sp.input('Apellidos',sql.NVarChar(60),req.body.Apellidos);
    sp.input('Telefono',sql.NVarChar(15),req.body.Telefono);
    sp.input('Celular',sql.NVarChar(15),req.body.Celular);
    sp.input('IdBarrio',sql.Int,req.body.IdBarrio);
    sp.input('Direccion',sql.NVarChar(80),req.body.Direccion);
    sp.input('FechaNacimiento',sql.NVarChar(50),req.body.FechaNacimiento);
    sp.input('IdGenero',sql.Int,req.body.IdGenero);
    sp.execute('[dbo].[Sp_Usuario]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}
export async function ActualizarUsuarioPass(req:Request, res:Response){
    console.log("con pass");
    
    const con = await conecion();
    const sp = con.request();
    sp.input('ACTION',sql.Int,2);
    sp.input('Email',sql.NVarChar(60),req.body.Email);
    sp.input('Pass',sql.NVarChar(MAX),req.body.Pass);
    sp.input('N_Identificacion',sql.NVarChar(20),req.body.N_Identificacion);
    sp.input('Id_Tipo_Documento',sql.Int,req.body.Id_Tipo_Documento);
    sp.input('Nombre',sql.NVarChar(60),req.body.Nombre);
    sp.input('Apellidos',sql.NVarChar(60),req.body.Apellidos);
    sp.input('Telefono',sql.NVarChar(15),req.body.Telefono);
    sp.input('Celular',sql.NVarChar(15),req.body.Celular);
    sp.input('IdBarrio',sql.Int,req.body.IdBarrio);
    sp.input('Direccion',sql.NVarChar(80),req.body.Direccion);
    sp.input('FechaNacimiento',sql.NVarChar(50),req.body.FechaNacimiento);
    sp.input('IdGenero',sql.Int,req.body.IdGenero);
    sp.execute('[dbo].[Sp_Usuario]').then(data=>{
        con.close();
        return res.json(data.recordset)
    })
}

