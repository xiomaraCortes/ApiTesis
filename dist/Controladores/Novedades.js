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
Object.defineProperty(exports, "__esModule", { value: true });
const datebase_1 = require("../datebase");
const mssql_1 = __importStar(require("mssql"));
function NuevaNovedad(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 1);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.input('IdNovedad', mssql_1.default.Int, req.body.IdNovedad);
        sp.input('Observacion', mssql_1.default.NVarChar(mssql_1.MAX), req.body.Observacion);
        sp.input('Descripcion', mssql_1.default.NVarChar(mssql_1.MAX), req.body.Descripcion);
        sp.execute('[dbo].[Sp_HistorialNovedad]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.NuevaNovedad = NuevaNovedad;
function ListarNovedad(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const sp = con.request();
        sp.input('ACTION', mssql_1.default.Int, 0);
        sp.input('IdMascota', mssql_1.default.Int, req.body.IdMascota);
        sp.execute('[dbo].[Sp_HistorialNovedad]').then(data => {
            con.close();
            return res.json(data.recordset);
        });
    });
}
exports.ListarNovedad = ListarNovedad;
//# sourceMappingURL=Novedades.js.map