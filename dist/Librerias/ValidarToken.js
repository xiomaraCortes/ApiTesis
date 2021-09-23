"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.Tokenvalidar = (req, res, next) => {
    console.log(req.body);
    const token = req.body.token;
    if (!token)
        return res.status(401).json('Acceso Denegado');
    const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN || '72unoyW9');
    next();
};
//# sourceMappingURL=ValidarToken.js.map