import { Router } from "express";
import {  Barrios, tipodoc, razas,colores, TipoNovedades, Veterinarias, Blog} from "../Controladores/Otros";
import { CrearUsuario, auth, ActualizarUsuario, ActualizarUsuarioPass } from "../Controladores/Usuarios";
import { Tokenvalidar } from "../Librerias/ValidarToken";
import { NuevaMascota , BuscarMascotas, BuscarMascota, ActualizarMascota,EliminarMascota} from "../Controladores/Mascotas";
import { NuevaNovedad, ListarNovedad } from "../Controladores/Novedades";

const rutas: Router = Router();

rutas.post('/auth',auth)
rutas.get('/barrios',Barrios)
rutas.get('/tipodoc', tipodoc)
rutas.get('/razas', razas)
rutas.get('/colores', colores)
rutas.post('/CrearUsuario',CrearUsuario)
rutas.post('/NuevaMascota', Tokenvalidar, NuevaMascota)
rutas.post('/BuscarMascotas', Tokenvalidar, BuscarMascotas)
rutas.post('/BuscarMascota', Tokenvalidar, BuscarMascota)
rutas.post('/ActualizarMascota', Tokenvalidar, ActualizarMascota)
rutas.post('/ActualizarUsuario', Tokenvalidar, ActualizarUsuario)
rutas.post('/ActualizarUsuarioPass', Tokenvalidar, ActualizarUsuarioPass)
rutas.post('/TipoNovedades',Tokenvalidar, TipoNovedades)
rutas.post('/NuevaNovedad',Tokenvalidar, NuevaNovedad)
rutas.post('/ListarNovedad',Tokenvalidar, ListarNovedad)
rutas.post('/Veterinarias',Tokenvalidar, Veterinarias)
rutas.post('/EliminarMascota',Tokenvalidar, EliminarMascota)
rutas.post('/Blog',Tokenvalidar, Blog)

export default rutas;