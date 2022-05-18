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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
function conecion() {
    return __awaiter(this, void 0, void 0, function* () {
        var config = {
            server: 'localhost',
            database: 'LovePet',
            user: 'sa',
            password: '_falso00',
            // port:1433,
            drive: 'tedios',
            stream: false,
            pool: {
                max: 20,
                min: 0,
                idleTimeoutMillis: 3000
            }
        };
        const conn = yield new mssql_1.default.ConnectionPool(config).connect();
        return conn;
    });
}
exports.conecion = conecion;
//# sourceMappingURL=datebase.js.map