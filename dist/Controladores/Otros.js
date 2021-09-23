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
Object.defineProperty(exports, "__esModule", { value: true });
const datebase_1 = require("../datebase");
function Barrios(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM Barrios");
        return res.json(query.recordset);
    });
}
exports.Barrios = Barrios;
function tipodoc(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM TipoDocumento");
        return res.json(query.recordset);
    });
}
exports.tipodoc = tipodoc;
function razas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM raza");
        return res.json(query.recordset);
    });
}
exports.razas = razas;
function colores(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM color");
        return res.json(query.recordset);
    });
}
exports.colores = colores;
function TipoNovedades(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM Novedades");
        return res.json(query.recordset);
    });
}
exports.TipoNovedades = TipoNovedades;
function Veterinarias(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM Veterinarias");
        return res.json(query.recordset);
    });
}
exports.Veterinarias = Veterinarias;
function Blog(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const con = yield datebase_1.conecion();
        const query = yield con.query("SELECT * FROM Blog");
        return res.json(query.recordset);
    });
}
exports.Blog = Blog;
//# sourceMappingURL=Otros.js.map