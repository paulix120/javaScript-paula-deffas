require('dotenv').config()
const express = require('express');
//importar enrutador
const enrutador = require('./routers');

const app = express();
//usar middlewares, formatear el body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importar rutador de (de todas las rutas ) de routers
app.use("/api", enrutador)


//endpoints raiz. de bienvenida
app.get("/", (req, res) => {
  res.send('API, REST APRENDICES Estructurado en capas');
})

module.exports = app;   
