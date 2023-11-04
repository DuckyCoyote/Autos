const express = require('express');

const Autos = require('./autos.js');
const Servicio = require('./servicio.js');
const Inicio = require('./inicio.js');
const Login = require('./login.js');

function routerApi(app) {
	const router = express.Router();
	app.use(router);
	router.use('/', Inicio);
	router.use('/login', Login);
	router.use('/autos', Autos);
	router.use('/servicio', Servicio)
}

module.exports = routerApi;
