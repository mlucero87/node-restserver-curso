require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/index'));

mongoose.connect(process.env.URLDB, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE' + '\n' + process.env.URLDB);
});

app.listen(3000, () => {
    console.log("Escuchando el puerto 3000");
});