//ruta  de solo prueba 
const {Router} = require("express");
const enrutador = Router() 
const { mostrarRuta } = require("../controllers/rutapruebaController");


//funcion (req y res deben ir en el controlador )
enrutador.get("/rutaPersonal", mostrarRuta)


module.exports = enrutador