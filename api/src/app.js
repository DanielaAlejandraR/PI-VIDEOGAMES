//Este código en Node.js utiliza el framework Express para crear un servidor web que proporciona una API
//Este modulo tiene la responsabilidad de crear el servidor 

const express = require('express'); //Crear servidor
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');// Middleware
const routes = require('./routes/index.js');

require('./db.js');

const server = express();// server es mi aplicación es mi servidor 

server.name = 'API';

//server.use se le dice al servidor cuando recibas   request que pase por aca  //Middleware-Función 
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();//Cuando le digo next, continua tu camino 
});

server.use('/', routes); // configuramos router principal, continua camino a enrutador 

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
