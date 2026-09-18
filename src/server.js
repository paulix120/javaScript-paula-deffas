//importar mi app 
const app = require('./app');

//verificar el puerto de las variables de entorno 
const PUERTO = process.env.PUERTO || 3333


//imprimo por consola el link  
app.listen(PUERTO, () => {
  console.log(`MI SERVICIO http://localhost:${PUERTO}`);
})