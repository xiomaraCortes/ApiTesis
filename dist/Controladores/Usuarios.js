"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const datebase_1 = require("../datebase");
const mssql_1 = __importStar(require("mssql"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function auth(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 0);
        sp.input('Email', mssql_1.default.NVarChar(60), req.body.email);
        sp.input('Pass', mssql_1.default.NVarChar(mssql_1.MAX), req.body.pass);
        sp.execute('[dbo].[Sp_Usuario]').then(result => {
            if (result.recordsets[0].length != 1) {
                return res.status(401).json('Usuario no registrado.');
            }
            else {
                if (result.recordsets[0][0]['CAN_LOGIN'] == 'true') {
                    const token = jsonwebtoken_1.default.sign({ id: result.recordsets[0][0]["IdUsuario"] }, process.env.TOKEN || '72unoyW9', { expiresIn: 216000 });
                    var json = [{
                            "token": token
                        },
                        result.recordset
                    ];
                    return res.header('auth-token', token).json(json);
                }
                else {
                    return res.status(404).json("Error de Autentificacion");
                }
            }
        });
    });
}
exports.auth = auth;
function CrearUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 1);
        sp.input('Email', mssql_1.default.NVarChar(60), req.body.email);
        sp.input('Pass', mssql_1.default.NVarChar(mssql_1.MAX), req.body.pass);
        sp.input('N_Identificacion', mssql_1.default.NVarChar(20), req.body.documento);
        sp.input('Id_Tipo_Documento', mssql_1.default.Int, req.body.TipoDoc);
        sp.input('Nombre', mssql_1.default.NVarChar(60), req.body.Nombres);
        sp.input('Apellidos', mssql_1.default.NVarChar(60), req.body.Apellidos);
        sp.input('Telefono', mssql_1.default.NVarChar(15), req.body.telefono);
        sp.input('Celular', mssql_1.default.NVarChar(15), req.body.Celular);
        sp.input('IdBarrio', mssql_1.default.Int, req.body.barrio);
        sp.input('Direccion', mssql_1.default.NVarChar(80), req.body.direccion);
        sp.input('FechaNacimiento', mssql_1.default.NVarChar(50), req.body.fechanacimiento);
        sp.input('IdGenero', mssql_1.default.Int, req.body.idgenero);
        sp.execute('[dbo].[Sp_Usuario]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.CrearUsuario = CrearUsuario;
function ActualizarUsuario(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 3);
        sp.input('Email', mssql_1.default.NVarChar(60), req.body.Email);
        sp.input('N_Identificacion', mssql_1.default.NVarChar(20), req.body.N_Identificacion);
        sp.input('Id_Tipo_Documento', mssql_1.default.Int, req.body.Id_Tipo_Documento);
        sp.input('Nombre', mssql_1.default.NVarChar(60), req.body.Nombre);
        sp.input('Apellidos', mssql_1.default.NVarChar(60), req.body.Apellidos);
        sp.input('Telefono', mssql_1.default.NVarChar(15), req.body.Telefono);
        sp.input('Celular', mssql_1.default.NVarChar(15), req.body.Celular);
        sp.input('IdBarrio', mssql_1.default.Int, req.body.IdBarrio);
        sp.input('Direccion', mssql_1.default.NVarChar(80), req.body.Direccion);
        sp.input('FechaNacimiento', mssql_1.default.NVarChar(50), req.body.FechaNacimiento);
        sp.input('IdGenero', mssql_1.default.Int, req.body.IdGenero);
        sp.execute('[dbo].[Sp_Usuario]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.ActualizarUsuario = ActualizarUsuario;
function ActualizarUsuarioPass(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("con pass");
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 2);
        sp.input('Email', mssql_1.default.NVarChar(60), req.body.Email);
        sp.input('Pass', mssql_1.default.NVarChar(mssql_1.MAX), req.body.Pass);
        sp.input('N_Identificacion', mssql_1.default.NVarChar(20), req.body.N_Identificacion);
        sp.input('Id_Tipo_Documento', mssql_1.default.Int, req.body.Id_Tipo_Documento);
        sp.input('Nombre', mssql_1.default.NVarChar(60), req.body.Nombre);
        sp.input('Apellidos', mssql_1.default.NVarChar(60), req.body.Apellidos);
        sp.input('Telefono', mssql_1.default.NVarChar(15), req.body.Telefono);
        sp.input('Celular', mssql_1.default.NVarChar(15), req.body.Celular);
        sp.input('IdBarrio', mssql_1.default.Int, req.body.IdBarrio);
        sp.input('Direccion', mssql_1.default.NVarChar(80), req.body.Direccion);
        sp.input('FechaNacimiento', mssql_1.default.NVarChar(50), req.body.FechaNacimiento);
        sp.input('IdGenero', mssql_1.default.Int, req.body.IdGenero);
        sp.execute('[dbo].[Sp_Usuario]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.ActualizarUsuarioPass = ActualizarUsuarioPass;
//# sourceMappingURL=Usuarios.js.map