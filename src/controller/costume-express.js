const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const consign = require('consign');
const handlebars = require('express-handlebars')
const conexao = require('../model/config/conexao');
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));
app.engine('handlebars', handlebars({
    layoutsDir: path.join('views'),
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars');

consign()
    .include('/views/routes.js')
    .into(app)



module.exports = { express, app, bodyParser, path }