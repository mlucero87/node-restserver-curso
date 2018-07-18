const express = require('express'); //peticiones http
const app = express();

app.use(require('./usuario.js'));
app.use(require('./login.js'));

module.exports = app;