//// CONFIGURACION DEL PUERTO

process.env.PORT = process.env.PORT || 3000;

//// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';

//// Vencimiento del token
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//// SEED de autenticacion
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';



//// Base de datos
let urlDB;

if (process.env.NODE_ENV === 'desarrollo') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:cafe1234@ds137581.mlab.com:37581/cafe'
    console.log(urlDB);
}

process.env.URLDB = urlDB;