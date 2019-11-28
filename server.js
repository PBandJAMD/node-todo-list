const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const logger = require('morgan');
const cors = require('cors');
const server = express();
const PORT = process.env.PORT || 9000;

// normal setup for express & mustache (if we want to go there)
server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname + '/views');
server.use(express.static(__dirname + '/public'));

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(logger('dev'));
server.use(cors());

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/todos/all', (req, res) => {
  res.render('all');
});

server.get('/todos/show/:id', (req, res) => {
  res.render('show');
});

server.get('/todos/new', (req, res) => {
  res.render('new');
});

// @ts-ignore
server.use('/api', require('./resources/todo/todo.routes'));
server.listen(PORT, () => console.log('Server is listening on port', PORT));
