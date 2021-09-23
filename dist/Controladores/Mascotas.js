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
function BuscarMascotas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const con = yield datebase_1.conecion();
        const sp = con.request();
        const token = req.body.token;
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN || 'MfpWOPa4');
        sp.input('ACTION', mssql_1.default.Int, 0);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.input('IdUsuario', mssql_1.default.Int, payload.id);
        sp.execute('[dbo].[Sp_Mascotas]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.BuscarMascotas = BuscarMascotas;
function NuevaMascota(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        const token = req.body.token;
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN || 'MfpWOPa4');
        sp.input('ACTION', mssql_1.default.Int, 1);
        sp.input('IdUsuario', mssql_1.default.Int, payload.id);
        sp.input('Nombre', mssql_1.default.NVarChar(mssql_1.MAX), req.body.nombre);
        sp.input('documento', mssql_1.default.NVarChar(mssql_1.MAX), req.body.documento);
        sp.input('IdRaza', mssql_1.default.NVarChar(mssql_1.MAX), req.body.raza);
        sp.input('IdColor', mssql_1.default.NVarChar(mssql_1.MAX), req.body.color);
        sp.input('IdGenMascota', mssql_1.default.NVarChar(mssql_1.MAX), req.body.genero);
        sp.input('Altura', mssql_1.default.NVarChar(mssql_1.MAX), req.body.estatura);
        sp.input('Peso', mssql_1.default.NVarChar(mssql_1.MAX), req.body.peso);
        sp.input('fechanacimiento', mssql_1.default.NVarChar(mssql_1.MAX), req.body.fechanaciomiento);
        sp.execute('[dbo].[Sp_Mascotas]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.NuevaMascota = NuevaMascota;
function ActualizarMascota(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        const token = req.body.token;
        console.log(req.body);
        sp.input('ACTION', mssql_1.default.Int, 2);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.input('Nombre', mssql_1.default.NVarChar(mssql_1.MAX), req.body.nombre);
        sp.input('IdRaza', mssql_1.default.NVarChar(mssql_1.MAX), req.body.raza);
        sp.input('IdColor', mssql_1.default.NVarChar(mssql_1.MAX), req.body.color);
        sp.input('IdGenMascota', mssql_1.default.NVarChar(mssql_1.MAX), req.body.genero);
        sp.input('Altura', mssql_1.default.NVarChar(mssql_1.MAX), req.body.estatura);
        sp.input('Peso', mssql_1.default.NVarChar(mssql_1.MAX), req.body.peso);
        sp.input('fechanacimiento', mssql_1.default.NVarChar(mssql_1.MAX), req.body.fechanaciomiento);
        sp.execute('[dbo].[Sp_Mascotas]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.ActualizarMascota = ActualizarMascota;
function BuscarMascota(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const con = yield datebase_1.conecion();
        const sp = con.request();
        const token = req.body.token;
        sp.input('ACTION', mssql_1.default.Int, 3);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.execute('[dbo].[Sp_Mascotas]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.BuscarMascota = BuscarMascota;
function EliminarMascota(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body);
        const con = yield datebase_1.conecion();
        const sp = con.request();
        const token = req.body.token;
        sp.input('ACTION', mssql_1.default.Int, 4);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.execute('[dbo].[Sp_Mascotas]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.EliminarMascota = EliminarMascota;
//# sourceMappingURL=Mascotas.js.map