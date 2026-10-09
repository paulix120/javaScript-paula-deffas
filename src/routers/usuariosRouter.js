//ruta de usuarios 
const {Router}= require ("express")
const enrutador = Router()
const mostrarRutaUsuario = require ("../controllers/rutaUsuariosController")
const mostrarRutaUsuarios = require("../controllers/rutaUsuariosController")

//FUNCION (req,res) dbeer ir en el controlador 
enrutador.get("/listado",mostrarRutaUsuarios)

//Funcion(req,res) dbeer ir en el controlador

module.exports = enrutador 