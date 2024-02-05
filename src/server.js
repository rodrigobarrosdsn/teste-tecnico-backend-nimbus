const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); // Adicione este middleware se necessário

const app = express();

// Adicione middlewares, se necessário
app.use(bodyParser.json());

// Adicione rotas, se necessário
// const exampleRoute = require('./exampleRoute');
// app.use('/example', exampleRoute);

// Exporte a instância do servidor
module.exports = app;
