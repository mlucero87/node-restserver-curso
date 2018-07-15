//// CONFIGURACION DEL PUERTO

process.env.PORT = process.env.PORT || 3000;

//// Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'desarrollo';
console.log(process.env.NODE_ENV);
//// Base de datos

let urlDB;

if (process.env.NODE_ENV === 'desarrollo') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:cafe1234@ds137581.mlab.com:37581/cafe'
    console.log(urlDB);
}

process.env.URLDB = urlDB;