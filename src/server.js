const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

module.exports = app;
